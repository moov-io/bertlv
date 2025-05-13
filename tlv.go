package bertlv

import (
	"encoding/hex"
	"errors"
	"fmt"
	"reflect"
	"slices"
	"strconv"
	"strings"
)

type TLV struct {
	Tag   string
	Value []byte
	TLVs  []TLV
}

func NewTag(tag string, value []byte) TLV {
	return TLV{Tag: tag, Value: value}
}

func NewComposite(tag string, tlvs ...TLV) TLV {
	return TLV{Tag: tag, TLVs: tlvs}
}

func Encode(tlvs []TLV) ([]byte, error) {
	var encoded []byte

	for i := range tlvs {
		tag, err := hex.DecodeString(tlvs[i].Tag)
		if err != nil {
			return nil, fmt.Errorf("encoding tag %s: %w", tlvs[i], err)
		}

		if err := validateTag(tag); err != nil {
			return nil, fmt.Errorf("validating tag %s: %w", tlvs[i].Tag, err)
		}

		// if it's a composite, encode the TLVs recursively

		var value []byte
		if len(tlvs[i].TLVs) > 0 {
			if !isConstructed(tag) {
				return nil, fmt.Errorf("tag %s is not constructed/composite", tlvs[i].Tag)
			}

			// encode the composite
			encodedComposite, err := Encode(tlvs[i].TLVs)
			if err != nil {
				return nil, fmt.Errorf("encoding composite %s: %w", tlvs[i], err)
			}

			value = encodedComposite
		} else {
			value = tlvs[i].Value
		}

		length := encodeLength(len(value))

		encoded = append(encoded, tag...)
		encoded = append(encoded, length...)
		encoded = append(encoded, value...)
	}

	return encoded, nil
}

func Decode(data []byte) ([]TLV, error) {
	var tlvs []TLV

	for len(data) > 0 {
		// read the tag
		tag, read, err := decodeTag(data)
		if err != nil {
			return nil, fmt.Errorf("reading tag: %w", err)
		}
		data = data[read:]

		// Before, between, or after TLV-coded data objects, '00' bytes
		// without any meaning may occur (for example, due to erased
		// or modified TLV-coded data objects). Ignore them.
		if tag[0] == 0x00 {
			continue
		}

		// read the length
		length, read, err := decodeLength(data)
		if err != nil {
			return nil, fmt.Errorf("reading length for tag %X: %w", tag, err)
		}
		data = data[read:]

		// ensure the value length is within bounds
		if len(data) < length {
			return nil, fmt.Errorf("insufficient data for expected length %d", length)
		}
		value := data[:length]
		data = data[length:]

		hexTag := strings.ToUpper(hex.EncodeToString(tag))

		// if it's a composite, decode the TLVs recursively
		if isConstructed(tag) {
			decoded, err := Decode(value)
			if err != nil {
				return nil, fmt.Errorf("decoding composite: %w", err)
			}
			tlvs = append(tlvs, TLV{Tag: hexTag, TLVs: decoded})
		} else {
			tlvs = append(tlvs, TLV{Tag: hexTag, Value: value})
		}
	}

	return tlvs, nil
}

// PrettyPrint prints the TLVs in a human-readable format.
func PrettyPrint(tlvs []TLV) {
	sb := strings.Builder{}
	prettyPrint(tlvs, &sb, 0)
	fmt.Print(sb.String()) //nolint:forbidigo
}

func prettyPrint(tlvs []TLV, sb *strings.Builder, level int) {
	for _, tlv := range tlvs {
		indent := strings.Repeat("  ", level)

		tagName, found := emvTags[tlv.Tag]

		sb.WriteString(fmt.Sprintf("%s%s", indent, tlv.Tag))

		if len(tlv.TLVs) > 0 {
			if found {
				sb.WriteString(fmt.Sprintf(" - %s\n", tagName))
			}

			prettyPrint(tlv.TLVs, sb, level+1)
		} else {
			if filter, ok := tagFilters[tlv.Tag]; ok {
				sb.WriteString(" " + filter(tlv.Value))
			} else {
				if len(tlv.Value) > 0 {
					sb.WriteString(fmt.Sprintf(" %X", tlv.Value))
				} else {
					sb.WriteString(" (empty)")
				}
			}

			if found {
				sb.WriteString(fmt.Sprintf(" - %s\n", tagName))
			} else {
				sb.WriteString("\n")
			}
		}
	}
}

// Short Form (Length < 128 bytes) - The first byte is the length of the value
// field, and the value field follows immediately.
// Long Form (Length >= 128 bytes) - The first byte is 0b1000_0000 plus the number of
// bytes used to encode the length of the value field
func encodeLength(length int) []byte {
	if length < 128 {
		// short form
		return []byte{byte(length)}
	}

	// long form
	var lengthBytes []byte
	for length > 0 {
		lastByte := byte(length & 0xFF)
		lengthBytes = append([]byte{lastByte}, lengthBytes...)
		length >>= 8 // discard the last byte
	}

	return append([]byte{byte(0b1000_0000 | len(lengthBytes))}, lengthBytes...)
}

func validateTag(tag []byte) error {
	if len(tag) == 0 {
		return errors.New("tag cannot be empty")
	}

	if !isMultiByte(tag) {
		if len(tag) > 1 {
			return errors.New("invalid tag format: single-byte tag should not have additional bytes")
		}

		return nil // Single-byte tag is valid
	}

	// Multi-byte tag
	if len(tag) < 2 {
		return errors.New("multi-byte tag is incomplete; additional bytes are required")
	}

	// MSB of the last tag should not be set
	if tag[len(tag)-1]&0b1000_0000 == 0b1000_0000 {
		return errors.New("invalid tag format: last byte must not have MSB set")
	}

	// each byte starting from the 2nd except the last should have MSB set
	for i := 1; i < len(tag)-1; i++ {
		if tag[i]&0b1000_0000 != 0b1000_0000 {
			return fmt.Errorf("invalid tag format: byte %d should have MSB set", i)
		}
	}

	return nil
}

// if bits 1 - 5 are set
func isMultiByte(tag []byte) bool {
	return tag[0]&0b0001_1111 == 0b0001_1111
}

// fifth bit should be set to 1 for constructed (composite) tags
func isConstructed(tag []byte) bool {
	return tag[0]&0b0010_0000 == 0b0010_0000
}

func decodeTag(data []byte) ([]byte, int, error) {
	if len(data) == 0 {
		return nil, 0, errors.New("tag is empty")
	}

	if !isMultiByte(data) {
		// single-byte tag
		return data[:1], 1, nil
	}

	// read multi byte tag, last byte of the tag has no MSB set
	for i := 1; i < len(data); i++ {
		if data[i]&0b1000_0000 != 0b1000_0000 {
			return data[:i+1], i + 1, nil
		}
	}

	return nil, len(data), errors.New("tag is incomplete")
}

func decodeLength(data []byte) (int, int, error) {
	if len(data) == 0 {
		return 0, 0, errors.New("length is empty")
	}

	if data[0] < 128 {
		// short form
		return int(data[0]), 1, nil
	}

	// long form
	lengthBytes := int(data[0] & 0b0111_1111)
	if len(data) < lengthBytes+1 {
		return 0, 0, errors.New("length is incomplete")
	}

	length := 0
	for i := 1; i <= lengthBytes; i++ {
		length = length<<8 | int(data[i])
	}

	return length, lengthBytes + 1, nil
}

// FindTagByPath returns the TLV with the specified path.
func FindTagByPath(tlvs []TLV, path string) (TLV, bool) {
	tag, path, _ := strings.Cut(path, ".")

	for _, tlv := range tlvs {
		if tlv.Tag == tag {
			if path == "" {
				return tlv, true
			}

			if len(tlv.TLVs) > 0 {
				return FindTagByPath(tlv.TLVs, path)
			}
		}
	}

	return TLV{}, false
}

// FindFirstTag returns the first TLV with the specified tag. It searches
// recursively.
func FindFirstTag(tlvs []TLV, tag string) (TLV, bool) {
	for _, tlv := range tlvs {
		if tlv.Tag == tag {
			return tlv, true
		}

		if len(tlv.TLVs) > 0 {
			return FindFirstTag(tlv.TLVs, tag)
		}
	}

	return TLV{}, false
}

type fieldTag struct {
	name    string
	options []string
}

func (v fieldTag) HasOption(option string) bool {
	return slices.Contains(v.options, option)
}

func newFieldTag(s string) fieldTag {
	splits := strings.Split(s, ",")

	ft := fieldTag{
		name: splits[0],
	}

	if len(splits) > 1 {
		ft.options = splits[1:]
	}

	return ft
}

func Unmarshal(tlvs []TLV, s any) error {
	// let's create map for lookup
	tagToValue := make(map[string]TLV)
	for _, tlv := range tlvs {
		tagToValue[tlv.Tag] = tlv
	}

	v := reflect.ValueOf(s)
	if v.Kind() != reflect.Pointer || v.IsNil() {
		return fmt.Errorf("%T is not a pointer or nil", s)
	}

	v = v.Elem()

	if v.Kind() != reflect.Struct {
		return fmt.Errorf("%T is not a struct, but", v.Kind())
	}

	t := v.Type()

	for i := 0; i < t.NumField(); i++ {
		typeField := t.Field(i)

		tag := newFieldTag(typeField.Tag.Get("bertlv"))
		if tag.name == "" {
			continue
		}

		tlv, ok := tagToValue[tag.name]
		if !ok {
			continue
		}

		valField := v.Field(i)

		if typeField.Type.Kind() == reflect.Struct {
			if err := Unmarshal(tlv.TLVs, valField.Addr().Interface()); err != nil {
				return fmt.Errorf("unmarshalling nested field %s: %w", typeField.Name, err)
			}

			continue
		}

		switch {
		case typeField.Type.Kind() == reflect.Slice && typeField.Type.Elem().Kind() == reflect.Uint8:
			valField.Set(reflect.ValueOf(tlv.Value))
		case typeField.Type.Kind() == reflect.String:
			var str string
			if tag.HasOption("ascii") {
				str = string(tlv.Value)
			} else {
				str = strings.ToUpper(hex.EncodeToString(tlv.Value))
			}
			valField.SetString(str)
		case typeField.Type.Kind() == reflect.Int64:
			var intVal int64
			var err error
			if tag.HasOption("ascii") {
				intVal, err = strconv.ParseInt(string(tlv.Value), 10, 64)
			} else {
				hexStr := strings.ToUpper(hex.EncodeToString(tlv.Value))
				intVal, err = strconv.ParseInt(hexStr, 10, 64)
			}
			if err != nil {
				return fmt.Errorf("parsing int64 for field %s: %w", typeField.Name, err)
			}
			valField.SetInt(intVal)
		}
	}

	return nil
}

// CopyTags creates a new slice containing only TLVs with the specified tags.
// It performs a deep copy of the matching TLVs, ensuring the original data is not modified.
// When a parent TLV is included in the tags list, its entire subtree is copied.
func CopyTags(tlvs []TLV, tags ...string) []TLV {
	if len(tlvs) == 0 || len(tags) == 0 {
		return nil
	}

	// Create a map for O(1) lookups of allowed tags
	tagsToCopy := make(map[string]bool, len(tags))
	for _, tag := range tags {
		tagsToCopy[tag] = true
	}

	// Create a new slice for the result
	result := make([]TLV, 0, len(tags)) // Pre-allocate for efficiency

	// Filter and copy the TLVs
	for _, tlv := range tlvs {
		if tagsToCopy[tlv.Tag] {
			copiedTLV := TLV{
				Tag: tlv.Tag,
			}

			if len(tlv.Value) > 0 {
				copiedTLV.Value = make([]byte, len(tlv.Value))
				copy(copiedTLV.Value, tlv.Value)
			}

			// Deep copy nested TLVs if they exist (entire subtree)
			if len(tlv.TLVs) > 0 {
				copiedTLV.TLVs = deepCopyTLVs(tlv.TLVs)
			}

			result = append(result, copiedTLV)
		}
	}

	if len(result) == 0 {
		return nil
	}

	return result
}

// deepCopyTLVs creates a deep copy of a slice of TLVs
func deepCopyTLVs(tlvs []TLV) []TLV {
	if len(tlvs) == 0 {
		return nil
	}

	result := make([]TLV, 0, len(tlvs))
	for _, tlv := range tlvs {
		copiedTLV := TLV{
			Tag: tlv.Tag,
		}

		// Deep copy the Value slice if it exists
		if len(tlv.Value) > 0 {
			copiedTLV.Value = make([]byte, len(tlv.Value))
			copy(copiedTLV.Value, tlv.Value)
		}

		// Recursively copy nested TLVs if they exist
		if len(tlv.TLVs) > 0 {
			copiedTLV.TLVs = deepCopyTLVs(tlv.TLVs)
		}

		result = append(result, copiedTLV)
	}

	return result
}
