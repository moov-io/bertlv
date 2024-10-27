package bertlv

import (
	"encoding/hex"
	"errors"
	"fmt"
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

		// read the length
		length, read, err := decodeLength(data)
		if err != nil {
			return nil, fmt.Errorf("reading length: %w", err)
		}
		data = data[read:]

		// ensure the value length is within bounds
		if len(data) < length {
			return nil, fmt.Errorf("insufficient data for expected length %d", length)
		}
		value := data[:length]
		data = data[length:]

		// if it's a composite, decode the TLVs recursively
		hexTag := strings.ToUpper(hex.EncodeToString(tag))

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

type ppStack struct {
	tlvs  []TLV
	level int
}

func PrettyPrint(tlvs []TLV) {
	stack := []ppStack{{tlvs: tlvs, level: 0}}

	for len(stack) > 0 {
		current := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		for _, tlv := range current.tlvs {
			indent := strings.Repeat("  ", current.level)

			if len(tlv.TLVs) > 0 {
				fmt.Printf("%s%s\n", indent, tlv.Tag)
				stack = append(stack, ppStack{tlvs: tlv.TLVs, level: current.level + 1})
			} else {
				fmt.Printf("%s%s %X\n", indent, tlv.Tag, tlv.Value)
			}
		}
	}
}

// Short Form (Length < 128 bytes) - The first byte is the length of the value
// field, and the value field follows immediately.
// Long Form (Length >= 128 bytes) - The first byte is 0x80 plus the number of
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

	return append([]byte{byte(0x80 | len(lengthBytes))}, lengthBytes...)
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

	// Check that the last byte has the MSB unset
	if tag[len(tag)-1]&0x80 != 0 {
		return errors.New("invalid tag format: last byte must not have MSB set")
	}

	// Check that each byte except the last has the MSB set
	for i := 0; i < len(tag)-1; i++ {
		if tag[i]&0x80 == 0 {
			return fmt.Errorf("invalid tag format: byte %d should have MSB set", i)
		}
	}

	return nil
}

func isMultiByte(tag []byte) bool {
	return tag[0]&0x1F == 0x1F
}

// fifth bit should be set to 1 for constructed (composite) tags
func isConstructed(tag []byte) bool {
	return tag[0]&0x20 == 0x20
}

func decodeTag(data []byte) ([]byte, int, error) {
	if len(data) == 0 {
		return nil, 0, errors.New("tag is empty")
	}

	if !isMultiByte(data) {
		// single-byte tag
		return data[:1], 1, nil
	}

	// multi-byte tag
	// read until the last byte has the MSB unset
	for i := 1; i < len(data); i++ {
		if data[i]&0x80 == 0 {
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
	lengthBytes := int(data[0] & 0x7F)
	if len(data) < lengthBytes+1 {
		return 0, 0, errors.New("length is incomplete")
	}

	length := 0
	for i := 1; i <= lengthBytes; i++ {
		length = length<<8 | int(data[i])
	}

	return length, lengthBytes + 1, nil
}
