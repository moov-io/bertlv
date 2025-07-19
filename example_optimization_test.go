// Copyright 2020 The Moov Authors
// Use of this source code is governed by an Apache License
// license that can be found in the LICENSE file.

package bertlv

import (
	"encoding/hex"
	"fmt"
	"log"
)

// ExampleBuildTagMap demonstrates basic usage of the tag map optimization
func ExampleBuildTagMap() {
	// EMV TLV data from a card response
	data, _ := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
	
	tlvs, err := Decode(data)
	if err != nil {
		log.Fatal(err)
	}
	
	// Build tag map for fast lookups
	tagMap := BuildTagMap(tlvs)
	
	// Fast O(1) lookups
	if aid, found := tagMap["84"]; found {
		fmt.Printf("AID: %X\n", aid.Value)
	}
	
	if label, found := tagMap["50"]; found {
		fmt.Printf("Application Label: %s\n", string(label.Value))
	}
	
	// Output:
	// AID: A0000000031010
	// Application Label: VISA CREDIT
}

// ExampleBuildTagMap_performance demonstrates when to use tag maps vs FindFirstTag
func ExampleBuildTagMap_performance() {
	data, _ := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
	tlvs, _ := Decode(data)
	
	// For single tag lookup, use FindFirstTag (simpler)
	aid, found := FindFirstTag(tlvs, "84")
	if found {
		fmt.Printf("Single lookup - AID: %X\n", aid.Value)
	}
	
	// For multiple tag lookups, use BuildTagMap (faster)
	tagMap := BuildTagMap(tlvs)
	tagsToFind := []string{"84", "50", "87", "9F38", "5F2D"}
	
	fmt.Println("Multiple lookups:")
	for _, tag := range tagsToFind {
		if tlv, found := tagMap[tag]; found {
			fmt.Printf("  Tag %s: %X\n", tag, tlv.Value)
		}
	}
	
	// Output:
	// Single lookup - AID: A0000000031010
	// Multiple lookups:
	//   Tag 84: A0000000031010
	//   Tag 50: 56495341204352454449
	//   Tag 87: 01
	//   Tag 9F38: 9F66049F02069F03069F1A0295055F2A029A039C019F3704
	//   Tag 5F2D: 656E
}

// ExampleBuildTagMap_emvPaymentProcessing shows real-world EMV usage
func ExampleBuildTagMap_emvPaymentProcessing() {
	// Simulate EMV card response with nested tags
	data, _ := hex.DecodeString("6F5C8407A0000000031010A551500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C17DF600101DF610101DF6207840103DF6307840104DF6407840105")
	tlvs, _ := Decode(data)
	
	// Build tag map once for the transaction
	tagMap := BuildTagMap(tlvs)
	
	// EMV processing requires multiple tag lookups
	emvTags := map[string]string{
		"84":   "Application Identifier (AID)",
		"50":   "Application Label", 
		"87":   "Application Priority Indicator",
		"9F38": "Processing Options Data Object List (PDOL)",
		"5F2D": "Language Preference",
		"DF60": "EMV Contact Chip Offline PIN",
		"DF61": "EMV Contact Chip Online PIN",
	}
	
	fmt.Println("EMV Card Analysis:")
	for tag, description := range emvTags {
		if tlv, found := tagMap[tag]; found {
			fmt.Printf("  %s (%s): %X\n", description, tag, tlv.Value)
		}
	}
	
	// Get performance statistics
	stats := GetTagMapStats(tagMap)
	fmt.Printf("\nTag Map Statistics:\n")
	fmt.Printf("  Total Tags: %d\n", stats.TotalTags)
	fmt.Printf("  Memory Usage: ~%d bytes\n", stats.MemoryEstimate)
	
	// Output:
	// EMV Card Analysis:
	//   Application Identifier (AID) (84): A0000000031010
	//   Application Label (50): 56495341204352454449
	//   Application Priority Indicator (87): 01
	//   Processing Options Data Object List (PDOL) (9F38): 9F66049F02069F03069F1A0295055F2A029A039C019F3704
	//   Language Preference (5F2D): 656E
	//   EMV Contact Chip Offline PIN (DF60): 01
	//   EMV Contact Chip Online PIN (DF61): 01
	//
	// Tag Map Statistics:
	//   Total Tags: 15
	//   Memory Usage: ~342 bytes
}

// ExampleFindTagInMap demonstrates the convenience function
func ExampleFindTagInMap() {
	data, _ := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E")
	tlvs, _ := Decode(data)
	
	tagMap := BuildTagMap(tlvs)
	
	// FindTagInMap has same signature as FindFirstTag for easy migration
	aid, found := FindTagInMap(tagMap, "84")
	if found {
		fmt.Printf("AID found: %X\n", aid.Value)
	}
	
	// Failed lookup
	_, found = FindTagInMap(tagMap, "NONEXISTENT")
	fmt.Printf("Non-existent tag found: %v\n", found)
	
	// Output:
	// AID found: A0000000031010
	// Non-existent tag found: false
}