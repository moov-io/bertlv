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
	
	// Complex nested EMV data with multiple levels
	complexEMVData = "6F5C8407A0000000031010A551500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C17DF600101DF610101DF6207840103DF6307840104DF6407840105"
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
		tlv, found := tagMap[expectedTag]
		require.True(t, found, "Expected tag %s not found in map", expectedTag)
		require.Equal(t, expectedTag, tlv.Tag)
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
		_, found := tagMap[expectedTag]
		require.True(t, found, "Expected nested tag %s not found", expectedTag)
	}
}

func TestFindTagInMap(t *testing.T) {
	data, err := hex.DecodeString(simpleEMVData)
	require.NoError(t, err)
	
	tlvs, err := Decode(data)
	require.NoError(t, err)
	
	tagMap := BuildTagMap(tlvs)
	
	// Test successful lookup
	tlv, found := FindTagInMap(tagMap, "84")
	require.True(t, found)
	require.Equal(t, "84", tlv.Tag)
	
	// Test failed lookup
	_, found = FindTagInMap(tagMap, "NONEXISTENT")
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
	require.Equal(t, stats.TotalTags, stats.UniqueTag)
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
		FindTagInMap(tagMap, "84")
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
			FindTagInMap(tagMap, tag)
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
			FindTagInMap(tagMap, tag)
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
			FindTagInMap(tagMap, tag)
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
		FindTagInMap(tagMap, "DF63")
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