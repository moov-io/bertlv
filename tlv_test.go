package bertlv_test

import (
	"fmt"
	"testing"

	"github.com/moov-io/bertlv"
	"github.com/stretchr/testify/require"
)

func TestEncodeDecode(t *testing.T) {
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

	decoded, err := bertlv.Decode(encoded)
	require.NoError(t, err)

	require.Equal(t, data, decoded)

	bertlv.PrettyPrint(decoded)
}

func TestFindTag(t *testing.T) {
	_, found := bertlv.FindTagByPath([]bertlv.TLV{}, "00")
	require.False(t, found)

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

	_, found = bertlv.FindTagByPath(data, "6F")
	require.True(t, found)

	tag, found := bertlv.FindTagByPath(data, "6F.A5.BF0C.61.4F")
	require.True(t, found)
	require.Equal(t, []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}, tag.Value)

	_, found = bertlv.FindFirstTag(data, "4F")
	require.True(t, found)
	require.Equal(t, []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}, tag.Value)
}

func TestUnmarshalSuccess(t *testing.T) {
	data := []bertlv.TLV{
		bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
		bertlv.NewComposite("61", // Application Template
			bertlv.NewTag("4F", []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}),
			bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
			bertlv.NewTag("87", []byte{0x01}), // Application Priority Indicator
		),
	}

	type EMVData struct {
		DedicatedFileName   []byte `bertlv:"84"`
		ApplicationTemplate struct {
			ApplicationID                string `bertlv:"4F"`
			ApplicationLabel             string `bertlv:"50,ascii"`
			ApplicationPriorityIndicator []byte `bertlv:"87"`
		} `bertlv:"61"`
	}

	emvData := &EMVData{}

	err := bertlv.Unmarshal(data, emvData)
	require.NoError(t, err)

	require.Equal(t, []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}, emvData.DedicatedFileName)
	require.Equal(t, "A0000000041010", emvData.ApplicationTemplate.ApplicationID)
	require.Equal(t, "Mastercard", emvData.ApplicationTemplate.ApplicationLabel)
	require.Equal(t, []byte{0x01}, emvData.ApplicationTemplate.ApplicationPriorityIndicator)
}

func TestUnmarshalEdgeCases(t *testing.T) {
	data := []bertlv.TLV{
		bertlv.NewComposite("61"), // empty composite
	}

	type Nested struct {
		Template struct {
			Field []byte `bertlv:"4F"`
		} `bertlv:"61"`
	}

	var n Nested
	err := bertlv.Unmarshal(data, &n)
	require.NoError(t, err)

	// Missing tag in data
	data = []bertlv.TLV{
		bertlv.NewTag("84", []byte{1}),
		bertlv.NewComposite("61",
			bertlv.NewTag("4F", []byte{2}),
		),
	}

	type MissingTag struct {
		Field  []byte `bertlv:"99"` // non-existent tag
		Field2 []byte // no mapping to tag
	}

	err = bertlv.Unmarshal(data, &MissingTag{})
	require.NoError(t, err) // should skip missing tags

	// Nil pointer
	var nilPtr *struct {
		Field []byte `bertlv:"84"`
	}
	err = bertlv.Unmarshal(data, nilPtr)
	require.Error(t, err)
}
