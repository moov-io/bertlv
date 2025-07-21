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
// Each tag maps to a slice of all its occurrences, preserving duplicate tags
// that appear in different constructed TLVs.
//
// Usage:
//   tagMap := BuildTagMap(tlvs)
//   if tags, found := tagMap["84"]; found {
//       // Process tag(s) - O(1) operation
//       for _, tag := range tags {
//           // Handle each occurrence
//       }
//   }
//
// Note: Duplicate tags within constructed TLVs are preserved in the order
// they are encountered during depth-first traversal.
func BuildTagMap(tlvs []TLV) map[string][]TLV {
	if len(tlvs) == 0 {
		return make(map[string][]TLV)
	}
	
	// Estimate map size to reduce reallocations
	estimatedSize := estimateTagCount(tlvs)
	tagMap := make(map[string][]TLV, estimatedSize)
	
	// Recursively flatten all tags including nested ones
	flattenTags(tlvs, tagMap)
	
	return tagMap
}

// flattenTags recursively adds all tags from the TLV structure to the map.
// Uses depth-first traversal to maintain consistent ordering for duplicate tags.
func flattenTags(tlvs []TLV, tagMap map[string][]TLV) {
	for _, tlv := range tlvs {
		// Always append - preserve all instances
		tagMap[tlv.Tag] = append(tagMap[tlv.Tag], tlv)
		
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

// FindFirst returns the first occurrence of a tag from the tag map.
// This is useful when you only need one instance of a tag.
func FindFirst(tagMap map[string][]TLV, tag string) (TLV, bool) {
	instances, found := tagMap[tag]
	if !found || len(instances) == 0 {
		return TLV{}, false
	}
	return instances[0], true
}

// Find returns all occurrences of a tag from the tag map.
// This is essential for processing duplicate tags within constructed TLVs,
// which is common in EMV data where tags like 9F10 appear in multiple templates.
func Find(tagMap map[string][]TLV, tag string) ([]TLV, bool) {
	instances, found := tagMap[tag]
	return instances, found && len(instances) > 0
}

// TagMapStats provides statistics about a tag map for debugging and optimization.
type TagMapStats struct {
	TotalTags      int
	UniqueTags     int
	DuplicateTags  int
	MemoryEstimate int64 // Rough memory usage estimate in bytes
}

// GetTagMapStats returns statistics about the provided tag map.
func GetTagMapStats(tagMap map[string][]TLV) TagMapStats {
	stats := TagMapStats{
		UniqueTags: len(tagMap),
	}
	
	// Count total tags and calculate memory estimate
	for tag, instances := range tagMap {
		stats.TotalTags += len(instances)
		if len(instances) > 1 {
			stats.DuplicateTags += len(instances) - 1
		}
		
		// Memory estimate
		stats.MemoryEstimate += int64(len(tag)) * int64(len(instances)) // Tag strings
		for _, tlv := range instances {
			stats.MemoryEstimate += int64(len(tlv.Value))     // Value bytes
			stats.MemoryEstimate += 64                        // Struct overhead estimate
		}
		stats.MemoryEstimate += int64(len(instances)) * 8 // Slice overhead
	}
	
	return stats
}