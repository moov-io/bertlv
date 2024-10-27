package bertlv

import (
	"encoding/hex"
	"errors"
	"fmt"
)

type TLV struct {
	Tag   string
	Value []byte
	TLVs  []TLV
}

func (t TLV) Length() int {
	return 0
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
			return nil, fmt.Errorf("encoding tag %s: %v", tlvs[i], err)
		}

		if err := validateTag(tag); err != nil {
			return nil, fmt.Errorf("validating tag %s: %v", tlvs[i].Tag, err)
		}

		// if it's a composite, encode the TLVs recursively

		var value []byte
		if len(tlvs[i].TLVs) > 0 {
			// fifth bi should be set to 1 for constructed (composite) tags
			constructed := (tag[0] & 0x20) == 0x20
			if !constructed {
				return nil, fmt.Errorf("tag %s is not constructed/composite", tlvs[i].Tag)
			}

			// encode the composite
			encodedComposite, err := Encode(tlvs[i].TLVs)
			if err != nil {
				return nil, fmt.Errorf("encoding composite %s: %v", tlvs[i], err)
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
	return nil, nil
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

	// Determine if it's a multi-byte tag based on the first byte
	isMultiByte := tag[0]&0x1F == 0x1F
	if isMultiByte && len(tag) == 1 {
		return errors.New("multi-byte tag is incomplete; additional bytes are required")
	}

	// Single-byte tags should not have additional bytes
	if !isMultiByte && len(tag) > 1 {
		return errors.New("invalid single-byte tag: additional bytes are not allowed")
	}

	if !isMultiByte && len(tag) == 1 {
		return nil // Single-byte tag is valid
	}

	// check multi-byte tag

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

	return nil // Tag is valid
}
