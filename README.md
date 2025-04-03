# bertlv

`bertlv` is a Golang package that provides encoding and decoding for BER-TLV (Basic Encoding Rules for Tag-Length-Value) structures. BER-TLV is widely used in financial and card-related data communication, particularly in EMV chip card applications.

## Features

- Encode and decode BER-TLV data structures.
- Unmarshal BER-TLV data into Go structs
- Support for both simple and composite TLV tags.
- Easy pretty-printing of decoded TLV structures for debugging and analysis.
- Selective copying of TLV data by tag names.

## Installation

To install the `bertlv` package, use the following command:

```sh
go get github.com/moov-io/bertlv
```

## Usage

Below is an example of how to use the `bertlv` package to encode and decode a File Control Information (FCI) Template.

### Example

```go
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

    // Find a specific tag
    tag, found := bertlv.FindFirstTag(decoded, "6F.A5.BF0C.61.50")
    require.True(t, found)
    require.Equal(t, []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}, tag.Value)
}
```

### Functions
- **Encode**: The `bertlv.Encode` encodes TLV objects into a binary format.
- **Decode**: The `bertlv.Decode` decodes a binary value back into a TLV objects.
- **FindTagByPath**: The `bertlv.FindTagByPath` returns the first TLV object matching the specified path (e.g., "6F.A5.BF0C.61.50").
- **FindFirstTag**: The `bertlv.FindFirstTag` returns the first TLV object matching the specified name (e.g., "A5"). It searches recursively.
- **PrettyPrint**: The `bertlv.PrettyPrint` visaulizes the TLV structure in a readable format.
- **Unmarshal**: The `bertlv.Unmarshal` converts TLV objects into a Go struct using struct tags.
- **CopyTags**: The `bertlv.CopyTags` creates a deep copy of TLVs containing only the specified tags.

### TLV Creation
You can create TLV objects using the following helper functions (preferred way):
- **Simple Tags**: Use `bertlv.NewTag(tag, value)` to create a TLV with a simple tag.
- **Composite Tags**: Use `bertlv.NewComposite(tag, subTags...)` to create a TLV that contains nested tags.

Also, you can create TLV objects directly using the `bertlv.TLV` struct (less preferred way, as it's more verbose and less clear):

```go
	simpledata := []bertlv.TLV{
		{Tag: "6F", TLVs: []bertlv.TLV{
			{Tag: "84", Value: []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}},
			{Tag: "A5", TLVs: []bertlv.TLV{
				{Tag: "BF0C", TLVs: []bertlv.TLV{
					{Tag: "61", TLVs: []bertlv.TLV{
						{Tag: "4F", Value: []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}},
						{Tag: "50", Value: []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}},
						{Tag: "87", Value: []byte{0x01}},
					}},
				}},
			}},

		}},
	}
```

### Unmarshaling to structs

The `bertlv.Unmarshal` function allows you to unmarshal TLV data directly into Go structs using struct tags. Fields can be mapped to TLV tags using the `bertlv` struct tag:

```go
type EMVData struct {
    DedicatedFileName   []byte `bertlv:"84"`
    ApplicationTemplate struct {
        ApplicationID                string `bertlv:"4F"`       // Will be converted to HEX string
        ApplicationLabel             string `bertlv:"50,ascii"` // Will be converted to ASCII string
        ApplicationPriorityIndicator []byte `bertlv:"87"`
    } `bertlv:"61"`
}

data := []bertlv.TLV{...} // Your TLV data
var emvData EMVData
err := bertlv.Unmarshal(data, &emvData)
```

### Creating filtered copies of TLV data

The `bertlv.CopyTags` function allows you to create a deep copy of a TLV slice containing only the specified tags. Only top level tags are copied, and if a tag is a composite tag, its entire subtree is copied.

```go
// Original TLV data containing sensitive information
originalData := []bertlv.TLV{
    bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x01, 0x23, 0x45}), // Amount
    bertlv.NewTag("5A", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77}), // PAN (sensitive)
    bertlv.NewTag("57", []byte{0x41, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0xD2, 0x30, 0x12}), // Track2 (sensitive)
    bertlv.NewTag("9F1A", []byte{0x08, 0x40}), // Terminal Country Code
}

// Create a copy with only non-sensitive tags
safeData := bertlv.CopyTags(originalData, "9F02", "9F1A")

// safeData now contains only the Amount and Terminal Country Code
// Original data remains unchanged
```

## Contribution

Feel free to contribute by opening issues or creating pull requests. Any contributions, such as adding new features or improving the documentation, are welcome.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This package was inspired by the need to simplify the encoding and decoding of BER-TLV structures commonly used in the financial and card payment industries.
