// Copyright 2020 The Moov Authors
// Use of this source code is governed by an Apache License
// license that can be found in the LICENSE file.

package bertlv

// BuildTagMap creates a flattened map of all tags for O(1) lookups.
// This optimization is particularly useful for applications that need to 
// access multiple tags from the same TLV structure repeatedly, such as
// EMV payment processing where tag lookups are performance-critical.
//
// The function recursively flattens nested TLV structures into a single map,
// providing O(1) lookup time instead of O(n) search time of FindFirstTag.
//
// Usage:
//   tagMap := BuildTagMap(tlvs)
//   if tag, found := tagMap["84"]; found {
//       // Process tag - O(1) operation
//   }
//
// Note: If duplicate tags exist at different nesting levels, the first
// occurrence encountered during depth-first traversal is stored.
func BuildTagMap(tlvs []TLV) map[string]TLV {
	if len(tlvs) == 0 {
		return make(map[string]TLV)
	}
	
	// Estimate map size to reduce reallocations
	estimatedSize := estimateTagCount(tlvs)
	tagMap := make(map[string]TLV, estimatedSize)
	
	// Recursively flatten all tags including nested ones
	flattenTags(tlvs, tagMap)
	
	return tagMap
}

// flattenTags recursively adds all tags from the TLV structure to the map.
// Uses depth-first traversal to maintain consistent ordering for duplicate tags.
func flattenTags(tlvs []TLV, tagMap map[string]TLV) {
	for _, tlv := range tlvs {
		// Only add if tag doesn't already exist (first occurrence wins)
		if _, exists := tagMap[tlv.Tag]; !exists {
			tagMap[tlv.Tag] = tlv
		}
		
		// Recursively process nested TLVs
		if len(tlv.TLVs) > 0 {
			flattenTags(tlv.TLVs, tagMap)
		}
	}
}

// estimateTagCount provides a rough estimate of total tags for map sizing.
// This helps reduce map reallocations during building.
func estimateTagCount(tlvs []TLV) int {
	count := len(tlvs)
	
	// Add estimated nested tags (assume average of 2x nesting)
	for _, tlv := range tlvs {
		if len(tlv.TLVs) > 0 {
			count += estimateTagCount(tlv.TLVs)
		}
	}
	
	return count
}

// FindTagInMap is a convenience function that combines map lookup with
// the same return signature as FindFirstTag for easy migration.
func FindTagInMap(tagMap map[string]TLV, tag string) (TLV, bool) {
	tlv, found := tagMap[tag]
	return tlv, found
}

// TagMapStats provides statistics about a tag map for debugging and optimization.
type TagMapStats struct {
	TotalTags    int
	UniqueTag    int
	MemoryEstimate int64 // Rough memory usage estimate in bytes
}

// GetTagMapStats returns statistics about the provided tag map.
func GetTagMapStats(tagMap map[string]TLV) TagMapStats {
	stats := TagMapStats{
		TotalTags: len(tagMap),
		UniqueTag: len(tagMap),
	}
	
	// Rough memory estimate (tag string + TLV struct + map overhead)
	for tag, tlv := range tagMap {
		stats.MemoryEstimate += int64(len(tag))           // Tag string
		stats.MemoryEstimate += int64(len(tlv.Value))     // Value bytes
		stats.MemoryEstimate += 64                        // Struct + map overhead estimate
	}
	
	return stats
}