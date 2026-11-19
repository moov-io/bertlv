# bertlv

`bertlv` is a Golang package that provides encoding and decoding for BER-TLV (Basic Encoding Rules for Tag-Length-Value) structures. BER-TLV is widely used in financial and card-related data communication, particularly in EMV chip card applications.

## Features

- Encode and decode BER-TLV data structures.
- Unmarshal BER-TLV data into Go structs
- Support for both simple and composite TLV tags.
- Easy pretty-printing of decoded TLV structures for debugging and analysis.
- Selective copying of TLV data by tag names.

## Installation

This module requires **Go 1.23.1 or later**.

```sh
go get github.com/moov-io/bertlv
```

The tag mapping API (`BuildTagMap`, `FindFirst`, `Find`, `GetTagMapStats`) is on master and will be included in **v0.1.1**. It is not in the latest tag (v0.1.0). Until v0.1.1 is published, get those APIs with:

```sh
go get github.com/moov-io/bertlv@master
```

## Usage

The example below encodes a File Control Information (FCI) Template, decodes it, and looks up a nested tag by path. See `ExampleEncode` in [example_test.go](example_test.go).

```go
package main

import (
	"fmt"
	"log"

	"github.com/moov-io/bertlv"
)

func main() {
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
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%X\n", encoded)

	decoded, err := bertlv.Decode(encoded)
	if err != nil {
		log.Fatal(err)
	}

	// FindTagByPath walks a dotted tag path. FindFirstTag matches a single tag name.
	tag, found := bertlv.FindTagByPath(decoded, "6F.A5.BF0C.61.50")
	if !found {
		log.Fatal("tag not found")
	}
	fmt.Printf("%s\n", tag.Value)
}
```

### Functions
- **Encode**: The `bertlv.Encode` encodes TLV objects into a binary format.
- **Decode**: The `bertlv.Decode` decodes a binary value back into TLV objects.
- **FindTagByPath**: The `bertlv.FindTagByPath` returns the first TLV object matching the specified path (e.g., "6F.A5.BF0C.61.50"). If the same tag appears more than once at a path step, only the first sibling is followed.
- **FindFirstTag**: The `bertlv.FindFirstTag` returns the first TLV object matching the specified name (e.g., "A5"). It searches recursively, including siblings after an unmatched composite.
- **PrettyPrint**: The `bertlv.PrettyPrint` visualizes the TLV structure in a readable format. Tags 5A (PAN) and 57 (Track 2) are masked. `CopyTags` and `Value` return the raw bytes; do not log those without filtering.
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

`bertlv.Unmarshal` copies values from a TLV slice into a struct using `bertlv` struct tags. It matches **only the tags in the slice you pass** (one level). To reach tags inside a template, nest a struct field for that template, or pass that template's `TLVs` slice directly.

Missing tags and unsupported field types are skipped without an error, so a successful call does not mean every field was populated. Supported field types:

- `[]byte` — raw tag value
- `string` — uppercase hex of the value, or the raw bytes as text with the `ascii` option (`bertlv:"50,ascii"`)
- `int64` — the value's hex digits parsed as base-10 (so `9F02` value `0000000001234` becomes `1234`), or a decimal string with the `ascii` option
- nested `struct` — unmarshaled from that composite tag's children

See `ExampleUnmarshal` in [example_test.go](example_test.go).

```go
var decoded struct {
	FCI struct {
		DFName      []byte `bertlv:"84"` // Dedicated File Name (not the AID; AID is tag 4F)
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

err := bertlv.Unmarshal(data, &decoded)
```

### Creating filtered copies of TLV data

The `bertlv.CopyTags` function allows you to create a deep copy of a TLV slice containing only the specified tags. Only top level tags are copied, and if a tag is a composite tag, its entire subtree is copied.

`CopyTags` and `TLV.Value` return unmasked data. PrettyPrint masks 5A and 57, but a copy of those tags still contains the raw PAN or Track 2. Do not log `CopyTags` output unless you have filtered those tags out.

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

# BerTLV Performance Optimization: Tag Mapping

The tag mapping API is on master and will ship in **v0.1.1**. It is not in v0.1.0. Until that tag is published:

```sh
go get github.com/moov-io/bertlv@master
```

This adds high-performance tag mapping for applications that look up many tags from the same TLV structure. Runnable examples are in [example_optimization_test.go](example_optimization_test.go) (`ExampleBuildTagMap`, `ExampleFindFirst`, `ExampleFind`).

## Problem Solved

When you need to access multiple tags from the same TLV data, the traditional approach requires repeated O(n) searches:

```go
data, err := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
if err != nil {
	log.Fatal(err)
}
tlvs, err := bertlv.Decode(data)
if err != nil {
	log.Fatal(err)
}

aid, _ := bertlv.FindFirstTag(tlvs, "84")      // O(n) search through the structure
label, _ := bertlv.FindFirstTag(tlvs, "50")    // O(n) search again from the beginning
priority, _ := bertlv.FindFirstTag(tlvs, "87") // O(n) search again
```

## Solution: Tag Map Optimization

The tag map preprocesses the tree once so later lookups are O(1). **It preserves all instances of duplicate tags**, which is essential for EMV processing:

```go
data, err := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
if err != nil {
	log.Fatal(err)
}
tlvs, err := bertlv.Decode(data)
if err != nil {
	log.Fatal(err)
}
tagMap := bertlv.BuildTagMap(tlvs) // One-time O(n) preprocessing

aid, _ := bertlv.FindFirst(tagMap, "84")      // O(1) lookup - first occurrence
labels, _ := bertlv.Find(tagMap, "50")        // O(1) lookup - all occurrences
priority, _ := bertlv.FindFirst(tagMap, "87") // O(1) lookup - first occurrence
```

## Performance

BuildTagMap is not faster for a single lookup. The map pays off when it is **reused** for several lookups on the same TLV tree. Numbers below are medians of `go test -count=6 -cpu=2 -bench ... -benchmem` on linux/amd64 after the FindFirstTag sibling-search fix. They will vary by machine.

| Operation | Result |
|-----------|--------|
| `FindFirstTag` (single lookup) | ~15 ns/op, 0 B/op |
| `BuildTagMap` | ~610 ns/op, 1368 B/op, 13 allocs/op |
| `FindFirst` (map already built) | ~7 ns/op, 0 B/op |
| Complete workflow with `FindFirstTag` | ~167 ns/op, 0 B/op |
| Complete workflow with `BuildTagMap` + lookups (map not reused) | ~660 ns/op, 1368 B/op, 13 allocs/op |
| Complete workflow with a reused tag map | ~55 ns/op, 0 B/op |

A one-shot `BuildTagMap` plus a single `FindFirst` is much slower than one `FindFirstTag` call. Building the map once and reusing it is about 3x faster than repeating `FindFirstTag` for the complete-workflow benchmark.

**Memory trade-off**: building the map allocates (about 1.3 KiB and 13 allocs in this benchmark) in exchange for faster repeated lookups.

## When to Use Each Approach

### Use Traditional Approach (`FindFirstTag`) when:
- Looking up only 1-2 tags from the same TLV data
- Working with small TLV structures
- The map would not be reused
- Memory usage is more critical than speed

### Use Tag Map Approach (`BuildTagMap` + `FindFirst`/`Find`) when:
- Looking up several tags from the same TLV data, and the map can be reused
- Processing many transactions with similar tag access patterns
- **You need every occurrence of a duplicate tag** in constructed TLVs (common in EMV)

`FindFirst(tagMap, tag)` returns the first occurrence recorded during the depth-first walk that `BuildTagMap` performs, which matches `FindFirstTag` after the sibling-search fix. Use `Find` when you need every occurrence; `FindFirstTag` only returns the first.

## API Reference

### Core Functions

```go
// BuildTagMap creates a flattened map of all tags for O(1) lookups
// Returns map[string][]TLV to preserve duplicate tags
func BuildTagMap(tlvs []TLV) map[string][]TLV

// FindFirst returns the first occurrence of a tag (O(1) lookup)
func FindFirst(tagMap map[string][]TLV, tag string) (TLV, bool)

// Find returns all occurrences of a tag (O(1) lookup)
func Find(tagMap map[string][]TLV, tag string) ([]TLV, bool)

// GetTagMapStats returns memory and performance statistics
func GetTagMapStats(tagMap map[string][]TLV) TagMapStats
```

### TagMapStats Structure

```go
type TagMapStats struct {
	TotalTags      int   // Total number of tags (including duplicates)
	UniqueTags     int   // Number of unique tag values
	DuplicateTags  int   // Number of duplicate tag instances
	MemoryEstimate int64 // Estimated memory usage in bytes
}
```

## Usage Examples

Run `go test -run Example` for the runnable versions of these snippets. Use a complete hex payload; truncated strings with `...` are not valid input to `hex.DecodeString`.

### Basic Usage
```go
data, err := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
if err != nil {
	log.Fatal(err)
}
tlvs, err := bertlv.Decode(data)
if err != nil {
	log.Fatal(err)
}

tagMap := bertlv.BuildTagMap(tlvs)

if aid, found := bertlv.FindFirst(tagMap, "84"); found {
	fmt.Printf("DF Name: %X\n", aid.Value)
}

if labels, found := bertlv.Find(tagMap, "50"); found {
	for i, label := range labels {
		fmt.Printf("Label %d: %s\n", i+1, string(label.Value))
	}
}
```

### EMV Payment Processing
```go
tagMap := bertlv.BuildTagMap(cardResponse)

// Extract required EMV tags (first occurrence)
dfName, _ := bertlv.FindFirst(tagMap, "84")       // Dedicated File Name (DF Name)
label, _ := bertlv.FindFirst(tagMap, "50")        // Application Label
priority, _ := bertlv.FindFirst(tagMap, "87")     // Priority Indicator
pdol, _ := bertlv.FindFirst(tagMap, "9F38")       // PDOL
languagePref, _ := bertlv.FindFirst(tagMap, "5F2D") // Language Preference
aid, _ := bertlv.FindFirst(tagMap, "4F")          // Application Identifier (AID)

// Process transaction with extracted data...
_, _, _, _, _, _ = dfName, label, priority, pdol, languagePref, aid
```

### Handling Duplicate Tags in Constructed TLVs
```go
tagMap := bertlv.BuildTagMap(emvResponse)

// Tag 9F10 (Issuer Application Data) can appear in multiple templates
if instances, found := bertlv.Find(tagMap, "9F10"); found {
	fmt.Printf("Found %d instances of tag 9F10:\n", len(instances))
	for i, instance := range instances {
		fmt.Printf("  Instance %d: %X\n", i+1, instance.Value)
	}
}

if aids, found := bertlv.Find(tagMap, "4F"); found {
	for _, aid := range aids {
		fmt.Printf("AID: %X\n", aid.Value)
	}
}
```

### Performance Monitoring
```go
tagMap := bertlv.BuildTagMap(tlvs)
stats := bertlv.GetTagMapStats(tagMap)

fmt.Printf("Map contains %d tags, using ~%d bytes\n",
	stats.TotalTags, stats.MemoryEstimate)
```

## Implementation Details

### Features
- **Recursive flattening**: Handles nested TLV structures
- **Duplicate tag preservation**: All instances of duplicate tags are preserved
- **EMV compliance**: Properly handles duplicate tags in constructed TLVs (e.g., multiple 9F10 tags in different templates)
- **Memory optimization**: Pre-sized maps to reduce allocations
- **Zero allocations**: For lookups after map creation
- **Thread-safe**: Maps are safe for concurrent reads

### Duplicate Tag Handling

In EMV and other TLV-based protocols, the same tag can legitimately appear multiple times within different constructed (template) tags. For example:
- Tag 9F10 (Issuer Application Data) may appear in multiple application templates
- Tag 4F (AID) may differ between applications
- Tag 50 (Application Label) varies by application

The `BuildTagMap` function preserves all instances, allowing you to:
- Use `FindFirst()` when you only need one instance
- Use `Find()` when you need to process all instances (e.g., multiple applications)

### Backward Compatibility
- No changes to existing API
- All existing tests pass
- New functionality is purely additive

### Memory Considerations
- Map overhead: ~32-48 bytes per tag entry
- Value storage: Shares memory with original TLV (no copying)
- Recommended when the map will be reused for several lookups

## Benchmarks

Run benchmarks on your system:

```bash
go test -bench=BenchmarkComplete -benchmem
# or
make bench
```

Example results (medians of 6 runs at 2 CPUs, linux/amd64):

```
BenchmarkCompleteWorkflow_FindFirstTag-2     167 ns/op      0 B/op    0 allocs/op
BenchmarkCompleteWorkflow_TagMap-2           660 ns/op   1368 B/op   13 allocs/op
BenchmarkCompleteWorkflow_TagMapReused-2      55 ns/op      0 B/op    0 allocs/op
```

`make check` needs `wget` and `bc`. Without `bc`, the coverage gate in `lint-project.sh` can print `0.0%` coverage and still report success.

## Real-World Use Cases

### EMV Payment Processing
- Card authentication data extraction
- Transaction processing optimization
- POS terminal performance improvement

### Financial Message Processing
- ISO 8583 message parsing
- Swift message field extraction
- Trading system message processing

### IoT Device Communication
- Sensor data parsing
- Protocol message extraction
- Configuration management

## Migration Guide

### From Traditional to Tag Map Approach

**Before (Traditional Approach):**
```go
data, err := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
if err != nil {
	log.Fatal(err)
}
tlvs, err := bertlv.Decode(data)
if err != nil {
	log.Fatal(err)
}

aid, _ := bertlv.FindFirstTag(tlvs, "84")
label, _ := bertlv.FindFirstTag(tlvs, "50")
priority, _ := bertlv.FindFirstTag(tlvs, "87")
```

**After (Tag Map Approach):**
```go
data, err := hex.DecodeString("6F468407A0000000031010A53B500B56495341204352454449548701015F2D02656E9F38189F66049F02069F03069F1A0295055F2A029A039C019F3704BF0C089F5A051108400840")
if err != nil {
	log.Fatal(err)
}
tlvs, err := bertlv.Decode(data)
if err != nil {
	log.Fatal(err)
}
tagMap := bertlv.BuildTagMap(tlvs) // O(n) preprocessing

aid, _ := bertlv.FindFirst(tagMap, "84")
label, _ := bertlv.FindFirst(tagMap, "50")
priority, _ := bertlv.FindFirst(tagMap, "87")
```

**Handling duplicate tags:**
```go
tagMap := bertlv.BuildTagMap(tlvs)

if instances, found := bertlv.Find(tagMap, "9F10"); found {
	for _, instance := range instances {
		fmt.Printf("%X\n", instance.Value)
	}
}

first, _ := bertlv.FindFirst(tagMap, "9F10")
_ = first
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to build, test, and send changes.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This package was inspired by the need to simplify the encoding and decoding of BER-TLV structures commonly used in the financial and card payment industries.
