# bertlv

`bertlv` is a Golang package that provides encoding and decoding for BER-TLV (Basic Encoding Rules for Tag-Length-Value) structures. BER-TLV is widely used in financial and card-related data communication, particularly in EMV chip card applications.

## Features

- Encode and decode BER-TLV data structures.
- Support for both simple and composite TLV tags.
- Easy pretty-printing of decoded TLV structures for debugging and analysis.

## Installation

To install the `bertlv` package, use the following command:

```sh
go get github.com/alovak/bertlv
```

## Usage

Below is an example of how to use the `bertlv` package to encode and decode a File Control Information (FCI) Template.

### Example

```go
package bertlv_test

import (
    "fmt"
    "testing"

    "github.com/alovak/bertlv"
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
```

### Explanation
- **Encode**: The `bertlv.Encode` function takes a list of TLV objects and encodes them into a hexadecimal string.
- **Decode**: The `bertlv.Decode` function decodes a hexadecimal string back into a list of TLV objects.
- **PrettyPrint**: The `bertlv.PrettyPrint` function allows you to visualize the TLV structure in a readable format.

### TLV Structures
- **Simple Tags**: Use `bertlv.NewTag(tag, value)` to create a TLV with a simple tag.
- **Composite Tags**: Use `bertlv.NewComposite(tag, subTags...)` to create a TLV that contains nested tags.

## Contribution

Feel free to contribute by opening issues or creating pull requests. Any contributions, such as adding new features or improving the documentation, are welcome.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This package was inspired by the need to simplify the encoding and decoding of BER-TLV structures commonly used in the financial and card payment industries.

