package bertlv_test

import (
	"fmt"
	"testing"

	"github.com/alovak/bertlv"
	"github.com/stretchr/testify/require"
)

func TestBuilder(t *testing.T) {
	// FCI template
	data := []bertlv.TLV{
		bertlv.NewComposite("6F", // File Control Information (FCI) Template
			bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
			bertlv.NewComposite("A5", // FCI Proprietary Template
				bertlv.NewComposite("BF0C", // FCI Issuer Discretionary Data
					bertlv.NewComposite("61", // Application Template
						bertlv.NewTag("4F", []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}),
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
						bertlv.NewTag("87", []byte{0x01}), // Application Priority Indicator
					),
				),
			),
		),
	}

	encoded, err := bertlv.Encode(data)
	require.NoError(t, err)

	expectedData := "6F2F840E325041592E5359532E4444463031A51DBF0C1A61184F07A0000000041010500A4D617374657263617264870101"
	require.Equal(t, expectedData, fmt.Sprintf("%X", encoded))

	// // decode and parse
	// tags, err := bertlv.Decode(encoded)
	// require.NoError(t, err)

	// // validate tags
	// require.Len(t, tags, 4)

	// // validate tags
	// require.Equal(t, "9F02", tags[0].Tag)
	// require.Equal(t, "9F03", tags[1].Tag)
	// require.Equal(t, "E1", tags[2].Tag)
	// require.Equal(t, "E2", tags[3].Tag)
}

// data to parse
// 6F2F840E325041592E5359532E4444463031A51DBF0C1A61184F07A0000000041010500A4D6173746572636172648701019000
