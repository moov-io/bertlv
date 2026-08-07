package bertlv_test

import (
	"encoding/hex"
	"testing"

	"github.com/moov-io/bertlv"
)

func FuzzDecodeEncode(f *testing.F) {
	// Real-world EMV FCI template from library tests
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
	// Also raw byte seeds
	f.Add([]byte{0x6F, 0x00})
	f.Add([]byte{0x9F, 0x02, 0x06, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34})

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
