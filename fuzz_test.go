package bertlv_test

import (
	"encoding/hex"
	"testing"

	"github.com/moov-io/bertlv"
)

// FuzzDecodeEncode ensures Decode never panics on arbitrary input and that
// values which decode successfully can be re-encoded and looked up without
// panicking. Returning an error is the only acceptable failure mode for
// malformed data.
func FuzzDecodeEncode(f *testing.F) {
	// Real-world EMV FCI templates and common tags from library tests
	seeds := []string{
		"",
		"6F00",
		"6F2F840E325041592E5359532E4444463031A51DBF0C1A61184F07A0000000041010500A4D617374657263617264870101",
		"9F0206000000001234",
		"840E325041592E5359532E4444463031",
		"FF81010100",
		"4F07A0000000041010",
	}
	for _, s := range seeds {
		raw, err := hex.DecodeString(s)
		if err != nil {
			f.Add([]byte(s))
		} else {
			f.Add(raw)
		}
	}

	// Raw byte seeds, including known crashers from the length-overflow bug
	rawSeeds := [][]byte{
		{0x6F, 0x00},
		{0x9F, 0x02, 0x06, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34},
		{0x5A, 0x08, 0x41, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11},
		{0x6F, 0x03, 0x84, 0x01, 0x00}, // composite (recurses)
		// 8-byte length overflows to negative (slice-bounds panic pre-fix)
		{0x5A, 0x88, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF},
		// nested long-form overflow corpus
		{0x30, 0x89, 0x30, 0x89, 0x00, 0x00, 0x00, 0x00, 0x00},
		// 28-byte length field (rejected as too large)
		[]byte("0\x9c00000000000000000000\x9c0000000"),
		// indefinite length
		{0x5A, 0x80},
	}
	for _, s := range rawSeeds {
		f.Add(s)
	}

	f.Fuzz(func(t *testing.T, data []byte) {
		if len(data) > 16*1024 {
			t.Skip()
		}

		tlvs, err := bertlv.Decode(data)
		if err != nil {
			return
		}

		encoded, err := bertlv.Encode(tlvs)
		if err != nil {
			return
		}
		// Round-trip decode
		_, _ = bertlv.Decode(encoded)

		_ = bertlv.BuildTagMap(tlvs)
		_, _ = bertlv.FindFirstTag(tlvs, "4F")
		_, _ = bertlv.FindTagByPath(tlvs, "6F")
	})
}
