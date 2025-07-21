// Copyright 2020 The Moov Authors
// Use of this source code is governed by an Apache License
// license that can be found in the LICENSE file.

package bertlv

import (
	"encoding/hex"
	"testing"

	"github.com/stretchr/testify/require"
)

// Test data representing realistic EMV TLV structures
var (
	// Simple EMV AID Response with basic tags
	simpleEMVData = "6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840"
	
	// Complex nested EMV data with multiple levels - same as simpleEMVData for now
	complexEMVData = simpleEMVData
)

func TestBuildTagMap(t *testing.T) {
	// Test with simple TLV structure
	data, err := hex.DecodeString(simpleEMVData)
	require.NoError(t, err)
	
	tlvs, err := Decode(data)
	require.NoError(t, err)
	
	tagMap := BuildTagMap(tlvs)
	
	// Verify expected tags are present
	expectedTags := []string{"6F", "84", "A5", "50", "87", "5F2D", "9F38", "BF0C", "9F5A"}
	
	for _, expectedTag := range expectedTags {
		instances, found := tagMap[expectedTag]
		require.True(t, found, "Expected tag %s not found in map", expectedTag)
		require.Greater(t, len(instances), 0, "Tag %s should have at least one instance", expectedTag)
		require.Equal(t, expectedTag, instances[0].Tag)
	}
	
	// Verify tag map size is reasonable
	require.Greater(t, len(tagMap), 5, "Tag map should contain multiple tags")
}

func TestBuildTagMapEmpty(t *testing.T) {
	tagMap := BuildTagMap([]TLV{})
	require.Empty(t, tagMap, "Empty TLV slice should produce empty map")
}

func TestBuildTagMapNestedStructures(t *testing.T) {
	// Create nested TLV structure manually
	nestedTLVs := []TLV{
		{
			Tag:   "70",
			Value: []byte{},
			TLVs: []TLV{
				{Tag: "84", Value: []byte("TEST"), TLVs: nil},
				{Tag: "A5", Value: []byte{}, TLVs: []TLV{
					{Tag: "50", Value: []byte("NESTED"), TLVs: nil},
					{Tag: "9F38", Value: []byte{0x01, 0x02}, TLVs: nil},
				}},
			},
		},
	}
	
	tagMap := BuildTagMap(nestedTLVs)
	
	// Verify all tags are flattened into map
	expectedTags := []string{"70", "84", "A5", "50", "9F38"}
	for _, expectedTag := range expectedTags {
		instances, found := tagMap[expectedTag]
		require.True(t, found, "Expected nested tag %s not found", expectedTag)
		require.Equal(t, 1, len(instances), "Expected exactly one instance of tag %s", expectedTag)
	}
}

func TestBuildTagMapDuplicateTags(t *testing.T) {
	// Create TLV structure with duplicate tags in different constructed TLVs
	// This simulates EMV data where tag 9F10 appears in multiple application templates
	tlvsWithDuplicates := []TLV{
		{
			Tag: "70", // First template
			TLVs: []TLV{
				{Tag: "84", Value: []byte{0xA0, 0x00, 0x00, 0x00, 0x03}}, // AID
				{Tag: "9F10", Value: []byte{0x01, 0x02, 0x03}}, // Issuer Application Data
				{Tag: "50", Value: []byte("VISA")},
			},
		},
		{
			Tag: "77", // Second template
			TLVs: []TLV{
				{Tag: "84", Value: []byte{0xA0, 0x00, 0x00, 0x00, 0x04}}, // Different AID
				{Tag: "9F10", Value: []byte{0x04, 0x05, 0x06}}, // Different Issuer Application Data
				{Tag: "50", Value: []byte("MASTERCARD")},
			},
		},
		{
			Tag: "80", // Third template
			TLVs: []TLV{
				{Tag: "9F10", Value: []byte{0x07, 0x08, 0x09}}, // Yet another instance
			},
		},
	}
	
	tagMap := BuildTagMap(tlvsWithDuplicates)
	
	// Test that duplicate tags are preserved
	instances9F10, found := tagMap["9F10"]
	require.True(t, found, "Tag 9F10 should be in the map")
	require.Equal(t, 3, len(instances9F10), "Should have 3 instances of tag 9F10")
	
	// Verify all three different values are preserved
	expectedValues := [][]byte{
		{0x01, 0x02, 0x03},
		{0x04, 0x05, 0x06},
		{0x07, 0x08, 0x09},
	}
	
	for i, instance := range instances9F10 {
		require.Equal(t, "9F10", instance.Tag)
		require.Equal(t, expectedValues[i], instance.Value, "Instance %d value mismatch", i)
	}
	
	// Test duplicate AID tags
	instances84, found := tagMap["84"]
	require.True(t, found)
	require.Equal(t, 2, len(instances84), "Should have 2 instances of tag 84")
	
	// Test duplicate Application Label tags
	instances50, found := tagMap["50"]
	require.True(t, found)
	require.Equal(t, 2, len(instances50), "Should have 2 instances of tag 50")
	require.Equal(t, "VISA", string(instances50[0].Value))
	require.Equal(t, "MASTERCARD", string(instances50[1].Value))
	
	// Test template tags
	templates, found := tagMap["70"]
	require.True(t, found)
	require.Equal(t, 1, len(templates))
	
	templates, found = tagMap["77"]
	require.True(t, found)
	require.Equal(t, 1, len(templates))
}

func TestFindFirst(t *testing.T) {
	data, err := hex.DecodeString(simpleEMVData)
	require.NoError(t, err)
	
	tlvs, err := Decode(data)
	require.NoError(t, err)
	
	tagMap := BuildTagMap(tlvs)
	
	// Test successful lookup - returns first instance
	tlv, found := FindFirst(tagMap, "84")
	require.True(t, found)
	require.Equal(t, "84", tlv.Tag)
	
	// Test failed lookup
	_, found = FindFirst(tagMap, "NONEXISTENT")
	require.False(t, found)
}

func TestFind(t *testing.T) {
	// Create structure with duplicate tags
	tlvsWithDuplicates := []TLV{
		{
			Tag: "70",
			TLVs: []TLV{
				{Tag: "9F10", Value: []byte{0x01}},
			},
		},
		{
			Tag: "77",
			TLVs: []TLV{
				{Tag: "9F10", Value: []byte{0x02}},
			},
		},
	}
	
	tagMap := BuildTagMap(tlvsWithDuplicates)
	
	// Test finding all instances
	instances, found := Find(tagMap, "9F10")
	require.True(t, found)
	require.Equal(t, 2, len(instances))
	require.Equal(t, []byte{0x01}, instances[0].Value)
	require.Equal(t, []byte{0x02}, instances[1].Value)
	
	// Test finding single instance
	instances, found = Find(tagMap, "70")
	require.True(t, found)
	require.Equal(t, 1, len(instances))
	
	// Test not found
	_, found = Find(tagMap, "NONEXISTENT")
	require.False(t, found)
}

func TestGetTagMapStats(t *testing.T) {
	data, err := hex.DecodeString(simpleEMVData)
	require.NoError(t, err)
	
	tlvs, err := Decode(data)
	require.NoError(t, err)
	
	tagMap := BuildTagMap(tlvs)
	stats := GetTagMapStats(tagMap)
	
	require.Greater(t, stats.TotalTags, 0)
	require.Greater(t, stats.UniqueTags, 0)
	require.Equal(t, 0, stats.DuplicateTags, "Simple data should have no duplicates")
	require.Greater(t, stats.MemoryEstimate, int64(0))
}

func TestGetTagMapStatsWithDuplicates(t *testing.T) {
	// Create structure with duplicate tags
	tlvsWithDuplicates := []TLV{
		{Tag: "70", TLVs: []TLV{{Tag: "9F10", Value: []byte{0x01}}}},
		{Tag: "77", TLVs: []TLV{{Tag: "9F10", Value: []byte{0x02}}}},
		{Tag: "80", TLVs: []TLV{{Tag: "9F10", Value: []byte{0x03}}}},
	}
	
	tagMap := BuildTagMap(tlvsWithDuplicates)
	stats := GetTagMapStats(tagMap)
	
	require.Equal(t, 6, stats.TotalTags, "Should have 6 total tags (3 templates + 3 instances of 9F10)")
	require.Equal(t, 4, stats.UniqueTags, "Should have 4 unique tags (70, 77, 80, 9F10)")
	require.Equal(t, 2, stats.DuplicateTags, "Should have 2 duplicate instances of 9F10")
	require.Greater(t, stats.MemoryEstimate, int64(0))
}

// Benchmarks comparing FindFirstTag vs BuildTagMap performance

func BenchmarkFindFirstTag_Single(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		FindFirstTag(tlvs, "84")
	}
}

func BenchmarkFindFirstTag_Multiple(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	tags := []string{"84", "50", "87", "9F38", "BF0C"}
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		for _, tag := range tags {
			FindFirstTag(tlvs, tag)
		}
	}
}

func BenchmarkBuildTagMap(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		BuildTagMap(tlvs)
	}
}

func BenchmarkTagMapLookup_Single(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	tagMap := BuildTagMap(tlvs)
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		FindFirst(tagMap, "84")
	}
}

func BenchmarkTagMapLookup_Multiple(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	tagMap := BuildTagMap(tlvs)
	tags := []string{"84", "50", "87", "9F38", "BF0C"}
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		for _, tag := range tags {
			FindFirst(tagMap, tag)
		}
	}
}

func BenchmarkCompleteWorkflow_FindFirstTag(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	tags := []string{"84", "50", "87", "9F38", "BF0C", "5F2D", "6F"}
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		for _, tag := range tags {
			FindFirstTag(tlvs, tag)
		}
	}
}

func BenchmarkCompleteWorkflow_TagMap(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	tags := []string{"84", "50", "87", "9F38", "BF0C", "5F2D", "6F"}
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		tagMap := BuildTagMap(tlvs)
		for _, tag := range tags {
			FindFirst(tagMap, tag)
		}
	}
}

func BenchmarkCompleteWorkflow_TagMapReused(b *testing.B) {
	data, _ := hex.DecodeString(simpleEMVData)
	tlvs, _ := Decode(data)
	tags := []string{"84", "50", "87", "9F38", "BF0C", "5F2D", "6F"}
	tagMap := BuildTagMap(tlvs)
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		for _, tag := range tags {
			FindFirst(tagMap, tag)
		}
	}
}

func BenchmarkNestedStructures_FindFirstTag(b *testing.B) {
	data, _ := hex.DecodeString(complexEMVData)
	tlvs, _ := Decode(data)
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		FindFirstTag(tlvs, "DF63")
	}
}

func BenchmarkNestedStructures_TagMap(b *testing.B) {
	data, _ := hex.DecodeString(complexEMVData)
	tlvs, _ := Decode(data)
	
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		tagMap := BuildTagMap(tlvs)
		FindFirst(tagMap, "DF63")
	}
}

// Memory benchmarks
func BenchmarkMemoryUsage_BuildTagMap(b *testing.B) {
	data, _ := hex.DecodeString(complexEMVData)
	tlvs, _ := Decode(data)
	
	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		tagMap := BuildTagMap(tlvs)
		_ = tagMap
	}
}

func BenchmarkMemoryUsage_FindFirstTag(b *testing.B) {
	data, _ := hex.DecodeString(complexEMVData)
	tlvs, _ := Decode(data)
	
	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		FindFirstTag(tlvs, "DF63")
	}
}