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
		bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x00, 0x12, 0x34}), // Amount, Authorised (Numeric)
		bertlv.NewTag("9F03", []byte("5678")),                             // Amount, Other (Numeric) in ASCII
	}

	type EMVData struct {
		DedicatedFileName   []byte `bertlv:"84"`
		ApplicationTemplate struct {
			ApplicationID                string `bertlv:"4F"`
			ApplicationLabel             string `bertlv:"50,ascii"`
			ApplicationPriorityIndicator []byte `bertlv:"87"`
		} `bertlv:"61"`
		AmountAuthorized int64 `bertlv:"9F02"`
		AmountOther      int64 `bertlv:"9F03,ascii"`
	}

	emvData := &EMVData{}

	err := bertlv.Unmarshal(data, emvData)
	require.NoError(t, err)

	require.Equal(t, []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}, emvData.DedicatedFileName)
	require.Equal(t, "A0000000041010", emvData.ApplicationTemplate.ApplicationID)
	require.Equal(t, "Mastercard", emvData.ApplicationTemplate.ApplicationLabel)
	require.Equal(t, []byte{0x01}, emvData.ApplicationTemplate.ApplicationPriorityIndicator)
	require.Equal(t, int64(1234), emvData.AmountAuthorized)
	require.Equal(t, int64(5678), emvData.AmountOther)
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

func TestCopyTags(t *testing.T) {
	tests := []struct {
		name     string
		input    []bertlv.TLV
		tags     []string
		expected []bertlv.TLV
	}{
		{
			name:     "Empty input",
			input:    []bertlv.TLV{},
			tags:     []string{"9F02"},
			expected: nil,
		},
		{
			name: "Single flat tag match",
			input: []bertlv.TLV{
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
				bertlv.NewTag("5A", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77}),
			},
			tags: []string{"9F02"},
			expected: []bertlv.TLV{
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
			},
		},
		{
			name: "Multiple flat tag matches",
			input: []bertlv.TLV{
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
				bertlv.NewTag("5A", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77}),
				bertlv.NewTag("57", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0xD2, 0x30, 0x12}),
			},
			tags: []string{"9F02", "57"},
			expected: []bertlv.TLV{
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
				bertlv.NewTag("57", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0xD2, 0x30, 0x12}),
			},
		},
		{
			name: "No matches",
			input: []bertlv.TLV{
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
				bertlv.NewTag("5A", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77}),
			},
			tags:     []string{"9F03", "9F06"},
			expected: nil,
		},
		{
			name: "Nested structures - parent tag match",
			input: []bertlv.TLV{
				bertlv.NewComposite("6F", // File Control Information (FCI) Template
					bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
					bertlv.NewComposite("A5", // FCI Proprietary Template
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
					),
				),
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
			},
			tags: []string{"6F"},
			expected: []bertlv.TLV{
				bertlv.NewComposite("6F", // File Control Information (FCI) Template
					bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
					bertlv.NewComposite("A5", // FCI Proprietary Template
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
					),
				),
			},
		},
		{
			name: "Multiple nested and flat matches",
			input: []bertlv.TLV{
				bertlv.NewComposite("6F", // File Control Information (FCI) Template
					bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
					bertlv.NewComposite("A5", // FCI Proprietary Template
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
					),
				),
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
				bertlv.NewTag("5A", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77}),
			},
			tags: []string{"6F", "9F02"},
			expected: []bertlv.TLV{
				bertlv.NewComposite("6F", // File Control Information (FCI) Template
					bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
					bertlv.NewComposite("A5", // FCI Proprietary Template
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
					),
				),
				bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
			},
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			result := bertlv.CopyTags(tc.input, tc.tags...)

			require.Equal(t, tc.expected, result)

			// Verify it's a deep copy by modifying the original
			if len(tc.input) > 0 && len(tc.input[0].Value) > 0 {
				// Modify first tag's value in original
				tc.input[0].Value[0] = 0xFF

				// Result should remain unchanged
				if len(result) > 0 && len(result[0].Value) > 0 && result[0].Tag == tc.input[0].Tag {
					require.NotEqual(t, tc.input[0].Value[0], result[0].Value[0])
				}
			}
		})
	}
}

func BenchmarkCopyTags(b *testing.B) {
	input := []bertlv.TLV{
		bertlv.NewComposite("6F", // File Control Information (FCI) Template
			bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
			bertlv.NewComposite("A5", // FCI Proprietary Template
				bertlv.NewComposite("BF0C", // FCI Issuer Discretionary Data
					bertlv.NewComposite("61", // Application Template
						bertlv.NewTag("4F", []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}),
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
						bertlv.NewTag("87", []byte{0x01}),
					),
				),
			),
		),
		bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}),
		bertlv.NewTag("5A", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77}),
		bertlv.NewTag("57", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0xD2, 0x30, 0x12}),
		bertlv.NewTag("5F20", []byte{0x4A, 0x4F, 0x48, 0x4E, 0x20, 0x44, 0x4F, 0x45}),
		bertlv.NewTag("9F1A", []byte{0x08, 0x40}),
		bertlv.NewTag("9F1B", []byte{0x00, 0x00, 0x00, 0x01, 0x00, 0x00}),
		bertlv.NewTag("9F1C", []byte{0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38}),
		bertlv.NewTag("9F35", []byte{0x22}),
		bertlv.NewTag("9F36", []byte{0x00, 0x01}),
	}

	benchmarks := []struct {
		name    string
		tags    []string
		matches int // expected number of matches for context
	}{
		{
			name:    "No tags matched",
			tags:    []string{"9F99", "9F98"},
			matches: 0,
		},
		{
			name:    "One flat tag matched",
			tags:    []string{"9F02"},
			matches: 1,
		},
		{
			name:    "Multiple flat tags matched",
			tags:    []string{"9F02", "5A", "57", "5F20"},
			matches: 4,
		},
		{
			name:    "Nested composite tag matched",
			tags:    []string{"6F"},
			matches: 1, // But contains a complex nested structure
		},
		{
			name:    "Mix of flat and nested tags",
			tags:    []string{"6F", "9F02", "5A", "57"},
			matches: 4,
		},
		{
			name:    "All tags matched",
			tags:    []string{"6F", "9F02", "5A", "57", "5F20", "9F1A", "9F1B", "9F1C", "9F35", "9F36"},
			matches: 10,
		},
	}

	for _, bm := range benchmarks {
		b.Run(bm.name, func(b *testing.B) {
			b.ReportAllocs() // Track allocations
			b.ResetTimer()

			for i := 0; i < b.N; i++ {
				result := bertlv.CopyTags(input, bm.tags...)
				// Force compiler to evaluate result to prevent optimization
				if len(result) > 100000 {
					b.Fatalf("unexpected result length")
				}
			}
		})
	}
}
