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
	
	// Fast O(1) lookups - use FindFirst for single tag access
	if aid, found := FindFirst(tagMap, "84"); found {
		fmt.Printf("AID: %X\n", aid.Value)
	}
	
	if label, found := FindFirst(tagMap, "50"); found {
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
		if tlv, found := FindFirst(tagMap, tag); found {
			fmt.Printf("  Tag %s: %X\n", tag, tlv.Value)
		}
	}
	
	// Output:
	// Single lookup - AID: A0000000031010
	// Multiple lookups:
	//   Tag 84: A0000000031010
	//   Tag 50: 5649534120435245444954
	//   Tag 87: 01
	//   Tag 9F38: 9F66049F02069F03069F1A0295055F2A029A039C019F3704
	//   Tag 5F2D: 656E
}

// ExampleBuildTagMap_emvPaymentProcessing shows real-world EMV usage
func ExampleBuildTagMap_emvPaymentProcessing() {
	// Simulate EMV card response with nested tags - using the simpler complexEMVData
	data, _ := hex.DecodeString(complexEMVData)
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
		"9F5A": "Application Program Identifier",
	}
	
	fmt.Println("EMV Card Analysis:")
	// Process tags in a specific order for consistent output
	tagOrder := []string{"84", "50", "87", "9F38", "5F2D", "9F5A"}
	for _, tag := range tagOrder {
		if description, ok := emvTags[tag]; ok {
			if tlv, found := FindFirst(tagMap, tag); found {
				fmt.Printf("  %s (%s): %X\n", description, tag, tlv.Value)
			}
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
	//   Application Label (50): 5649534120435245444954
	//   Application Priority Indicator (87): 01
	//   Processing Options Data Object List (PDOL) (9F38): 9F66049F02069F03069F1A0295055F2A029A039C019F3704
	//   Language Preference (5F2D): 656E
	//   Application Program Identifier (9F5A): 1108400840
	//
	// Tag Map Statistics:
	//   Total Tags: 9
	//   Memory Usage: ~724 bytes
}

// ExampleFindFirst demonstrates finding the first occurrence of a tag
func ExampleFindFirst() {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	
	tagMap := BuildTagMap(tlvs)
	
	// Find the first occurrence of a tag
	aid, found := FindFirst(tagMap, "84")
	if found {
		fmt.Printf("AID found: %X\n", aid.Value)
	}
	
	// Failed lookup
	_, found = FindFirst(tagMap, "NONEXISTENT")
	fmt.Printf("Non-existent tag found: %v\n", found)
	
	// Output:
	// AID found: A0000000031010
	// Non-existent tag found: false
}

// ExampleFind demonstrates handling duplicate tags in constructed TLVs
func ExampleFind() {
	// Create TLV structure with duplicate tags manually
	// This simulates multiple application templates in a single response
	tlvsWithDuplicates := []TLV{
		{
			Tag: "70", // First template
			TLVs: []TLV{
				{Tag: "9F10", Value: []byte{0x01, 0x02}},
				{Tag: "84", Value: []byte{0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99}},
				{Tag: "50", Value: []byte("VISA")},
			},
		},
		{
			Tag: "77", // Second template  
			TLVs: []TLV{
				{Tag: "9F10", Value: []byte{0x03, 0x04}},
				{Tag: "84", Value: []byte{0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x98}},
				{Tag: "50", Value: []byte("MASTERCARD")},
			},
		},
		{
			Tag: "80", // Third template
			TLVs: []TLV{
				{Tag: "9F10", Value: []byte{0x05, 0x06}},
			},
		},
	}
	
	tagMap := BuildTagMap(tlvsWithDuplicates)
	
	// Find all instances of tag 9F10 (Issuer Application Data)
	if instances, found := Find(tagMap, "9F10"); found {
		fmt.Printf("Found %d instances of tag 9F10:\n", len(instances))
		for i, instance := range instances {
			fmt.Printf("  Instance %d: %X\n", i+1, instance.Value)
		}
	}
	
	// Find all Application Labels
	if labels, found := Find(tagMap, "50"); found {
		fmt.Printf("\nFound %d Application Labels:\n", len(labels))
		for i, label := range labels {
			fmt.Printf("  %d: %s\n", i+1, string(label.Value))
		}
	}
	
	// Output:
	// Found 3 instances of tag 9F10:
	//   Instance 1: 0102
	//   Instance 2: 0304
	//   Instance 3: 0506
	//
	// Found 2 Application Labels:
	//   1: VISA
	//   2: MASTERCARD
}