package bertlv_test

import (
	"fmt"
	"log"

	"github.com/moov-io/bertlv"
)

func ExampleEncode() {
	data := []bertlv.TLV{
		bertlv.NewComposite("6F",
			bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
			bertlv.NewComposite("A5",
				bertlv.NewComposite("BF0C",
					bertlv.NewComposite("61",
						bertlv.NewTag("4F", []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}),
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
						bertlv.NewTag("87", []byte{0x01}),
					),
				),
			),
		),
	}

	encoded, err := bertlv.Encode(data)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%X\n", encoded)

	decoded, err := bertlv.Decode(encoded)
	if err != nil {
		log.Fatal(err)
	}

	tag, found := bertlv.FindTagByPath(decoded, "6F.A5.BF0C.61.50")
	if !found {
		log.Fatal("tag not found")
	}
	fmt.Printf("%s\n", tag.Value)

	// Output:
	// 6F2F840E325041592E5359532E4444463031A51DBF0C1A61184F07A0000000041010500A4D617374657263617264870101
	// Mastercard
}

func ExampleUnmarshal() {
	// Unmarshal matches only the tags in the slice you pass. To reach nested
	// templates, either pass that template's children or nest structs to match
	// each level. Missing tags and unsupported field types are skipped without
	// an error.
	data := []bertlv.TLV{
		bertlv.NewComposite("6F",
			bertlv.NewTag("84", []byte{0x32, 0x50, 0x41, 0x59, 0x2E, 0x53, 0x59, 0x53, 0x2E, 0x44, 0x44, 0x46, 0x30, 0x31}),
			bertlv.NewComposite("A5",
				bertlv.NewComposite("BF0C",
					bertlv.NewComposite("61",
						bertlv.NewTag("4F", []byte{0xA0, 0x00, 0x00, 0x00, 0x04, 0x10, 0x10}),
						bertlv.NewTag("50", []byte{0x4D, 0x61, 0x73, 0x74, 0x65, 0x72, 0x63, 0x61, 0x72, 0x64}),
					),
				),
			),
		),
		bertlv.NewTag("9F02", []byte{0x00, 0x00, 0x00, 0x00, 0x12, 0x34}),
		bertlv.NewTag("5F2A", []byte{0x08, 0x40}),
	}

	var decoded struct {
		FCI struct {
			DFName      []byte `bertlv:"84"`
			Proprietary struct {
				IssuerData struct {
					Application struct {
						AID   string `bertlv:"4F"`
						Label string `bertlv:"50,ascii"`
					} `bertlv:"61"`
				} `bertlv:"BF0C"`
			} `bertlv:"A5"`
		} `bertlv:"6F"`
		AmountAuthorized int64  `bertlv:"9F02"`
		CurrencyCode     string `bertlv:"5F2A"`
	}
	if err := bertlv.Unmarshal(data, &decoded); err != nil {
		log.Fatal(err)
	}

	fmt.Printf("DF Name: %s\n", decoded.FCI.DFName)
	fmt.Printf("AID: %s\n", decoded.FCI.Proprietary.IssuerData.Application.AID)
	fmt.Printf("Label: %s\n", decoded.FCI.Proprietary.IssuerData.Application.Label)
	fmt.Printf("Amount: %d\n", decoded.AmountAuthorized)
	fmt.Printf("Currency: %s\n", decoded.CurrencyCode)

	// Output:
	// DF Name: 2PAY.SYS.DDF01
	// AID: A0000000041010
	// Label: Mastercard
	// Amount: 1234
	// Currency: 0840
}
