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
	// var tlvs []TLV

	// for len(data) > 0 {
	// 	// read the tag
	// 	tag, read, err := decodeTag(data)
	// 	if err != nil {
	// 		return nil, fmt.Errorf("reading tag: %w", err)
	// 	}

	// 	// read the length
	// 	length, read, err := decodeLength(data[read:])
	// 	if err != nil {
	// 		return nil, fmt.Errorf("reading length: %w", err)
	// 	}

	// 	// read the value
	// 	value := data[read : read+length]

	// 	// if it's a composite, decode the TLVs recursively
	// 	if isConstructed(tag) {
	// 		decoded, err := Decode(value)
	// 		if err != nil {
	// 			return nil, fmt.Errorf("decoding composite: %w", err)
	// 		}

	// 		tlvs = append(tlvs, TLV{Tag: hex.EncodeToString(tag), TLVs: decoded})
	// 	} else {
	// 		tlvs = append(tlvs, TLV{Tag: hex.EncodeToString(tag), Value: value})
	// 	}
	// }

	// return nil, nil
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
