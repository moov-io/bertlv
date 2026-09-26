window.BENCHMARK_DATA = {
  "lastUpdate": 1790415467780,
  "repoUrl": "https://github.com/moov-io/bertlv",
  "entries": {
    "moov-io/bertlv": [
      {
        "commit": {
          "author": {
            "name": "Adam Shannon",
            "username": "adamdecaf",
            "email": "adamkshannon@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0666991e94759d20e404168bf96f340fe867ad3d",
          "message": "ci: run TLV Go benchmarks in this repository (#34)",
          "timestamp": "2026-09-14T18:43:45Z",
          "url": "https://github.com/moov-io/bertlv/commit/0666991e94759d20e404168bf96f340fe867ad3d"
        },
        "date": 1789411565763,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 16.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69695226 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 16.93,
            "unit": "ns/op",
            "extra": "69695226 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69695226 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69695226 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 158.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7568092 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 158.3,
            "unit": "ns/op",
            "extra": "7568092 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7568092 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7568092 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 701.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1711498 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 701.9,
            "unit": "ns/op",
            "extra": "1711498 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1711498 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1711498 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.5,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 57.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20702726 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.77,
            "unit": "ns/op",
            "extra": "20702726 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20702726 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20702726 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 195.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6140503 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 195.3,
            "unit": "ns/op",
            "extra": "6140503 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6140503 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6140503 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 789.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1534087 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 789.1,
            "unit": "ns/op",
            "extra": "1534087 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1534087 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1534087 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 81.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14795955 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 81.1,
            "unit": "ns/op",
            "extra": "14795955 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14795955 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14795955 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 49.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24896286 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 49.15,
            "unit": "ns/op",
            "extra": "24896286 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24896286 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24896286 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 707.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1690827 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 707.9,
            "unit": "ns/op",
            "extra": "1690827 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1690827 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1690827 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 697.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1709304 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 697.5,
            "unit": "ns/op",
            "extra": "1709304 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1709304 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1709304 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25100246 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.81,
            "unit": "ns/op",
            "extra": "25100246 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25100246 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25100246 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 227.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5244586 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 227.1,
            "unit": "ns/op",
            "extra": "5244586 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5244586 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5244586 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 224.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5307692 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 224.5,
            "unit": "ns/op",
            "extra": "5307692 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5307692 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5307692 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 354.5,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3368295 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 354.5,
            "unit": "ns/op",
            "extra": "3368295 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3368295 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3368295 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 485,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2467303 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 485,
            "unit": "ns/op",
            "extra": "2467303 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2467303 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2467303 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 614.8,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1974854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 614.8,
            "unit": "ns/op",
            "extra": "1974854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1974854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1974854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1070,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "982484 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1070,
            "unit": "ns/op",
            "extra": "982484 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "982484 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "982484 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Adam Shannon",
            "username": "adamdecaf",
            "email": "adamkshannon@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0666991e94759d20e404168bf96f340fe867ad3d",
          "message": "ci: run TLV Go benchmarks in this repository (#34)",
          "timestamp": "2026-09-14T18:43:45Z",
          "url": "https://github.com/moov-io/bertlv/commit/0666991e94759d20e404168bf96f340fe867ad3d"
        },
        "date": 1789465336080,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63648189 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.21,
            "unit": "ns/op",
            "extra": "63648189 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "63648189 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "63648189 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7577632 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.8,
            "unit": "ns/op",
            "extra": "7577632 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7577632 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7577632 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 732.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1763443 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 732.7,
            "unit": "ns/op",
            "extra": "1763443 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1763443 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1763443 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.24,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 61.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19755998 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 61.02,
            "unit": "ns/op",
            "extra": "19755998 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19755998 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19755998 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 204.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5845815 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 204.2,
            "unit": "ns/op",
            "extra": "5845815 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5845815 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5845815 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 841.6,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1535062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 841.6,
            "unit": "ns/op",
            "extra": "1535062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1535062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1535062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 90.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14132265 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 90.31,
            "unit": "ns/op",
            "extra": "14132265 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14132265 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14132265 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21227283 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.66,
            "unit": "ns/op",
            "extra": "21227283 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21227283 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21227283 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 707.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1670044 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 707.5,
            "unit": "ns/op",
            "extra": "1670044 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1670044 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1670044 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 692.6,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1724776 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 692.6,
            "unit": "ns/op",
            "extra": "1724776 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1724776 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1724776 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25151953 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.62,
            "unit": "ns/op",
            "extra": "25151953 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25151953 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25151953 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 228.8,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5250831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 228.8,
            "unit": "ns/op",
            "extra": "5250831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5250831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5250831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 225.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5435101 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 225.1,
            "unit": "ns/op",
            "extra": "5435101 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5435101 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5435101 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 470.3,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "2571261 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 470.3,
            "unit": "ns/op",
            "extra": "2571261 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "2571261 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2571261 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 477.6,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2534041 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 477.6,
            "unit": "ns/op",
            "extra": "2534041 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2534041 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2534041 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 616.3,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1990855 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 616.3,
            "unit": "ns/op",
            "extra": "1990855 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1990855 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1990855 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1056,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1056,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b7cc79032dfcb3dde525addae8d051d5ab0bd89d",
          "message": "chore(deps): update benchmark-action/github-action-benchmark action to v1.22.2 (#35)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-16T01:06:48Z",
          "url": "https://github.com/moov-io/bertlv/commit/b7cc79032dfcb3dde525addae8d051d5ab0bd89d"
        },
        "date": 1789551378666,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 16.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67605271 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 16.92,
            "unit": "ns/op",
            "extra": "67605271 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67605271 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67605271 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 160.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7493048 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 160.4,
            "unit": "ns/op",
            "extra": "7493048 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7493048 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7493048 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 741.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1720234 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 741.7,
            "unit": "ns/op",
            "extra": "1720234 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1720234 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1720234 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "103598569 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.28,
            "unit": "ns/op",
            "extra": "103598569 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "103598569 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "103598569 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 59.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20750983 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 59.07,
            "unit": "ns/op",
            "extra": "20750983 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20750983 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20750983 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 197.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6038424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 197.2,
            "unit": "ns/op",
            "extra": "6038424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6038424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6038424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 787.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1510912 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 787.9,
            "unit": "ns/op",
            "extra": "1510912 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1510912 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1510912 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14927533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.9,
            "unit": "ns/op",
            "extra": "14927533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14927533 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14927533 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25072731 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.78,
            "unit": "ns/op",
            "extra": "25072731 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25072731 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25072731 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 706.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1650100 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 706.1,
            "unit": "ns/op",
            "extra": "1650100 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1650100 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1650100 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 711.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1689181 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 711.8,
            "unit": "ns/op",
            "extra": "1689181 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1689181 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1689181 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24749934 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.79,
            "unit": "ns/op",
            "extra": "24749934 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24749934 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24749934 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 224.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5268451 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 224.5,
            "unit": "ns/op",
            "extra": "5268451 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5268451 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5268451 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 221.7,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5393835 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 221.7,
            "unit": "ns/op",
            "extra": "5393835 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5393835 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5393835 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 351.8,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3420418 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 351.8,
            "unit": "ns/op",
            "extra": "3420418 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3420418 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3420418 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 477.9,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2499922 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 477.9,
            "unit": "ns/op",
            "extra": "2499922 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2499922 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2499922 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 607.9,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1973787 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 607.9,
            "unit": "ns/op",
            "extra": "1973787 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1973787 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1973787 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1069,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "979320 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1069,
            "unit": "ns/op",
            "extra": "979320 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "979320 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "979320 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b7cc79032dfcb3dde525addae8d051d5ab0bd89d",
          "message": "chore(deps): update benchmark-action/github-action-benchmark action to v1.22.2 (#35)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-16T01:06:48Z",
          "url": "https://github.com/moov-io/bertlv/commit/b7cc79032dfcb3dde525addae8d051d5ab0bd89d"
        },
        "date": 1789638275188,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67470889 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.11,
            "unit": "ns/op",
            "extra": "67470889 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67470889 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67470889 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 158.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7581006 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 158.1,
            "unit": "ns/op",
            "extra": "7581006 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7581006 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7581006 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 700.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1557692 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 700.3,
            "unit": "ns/op",
            "extra": "1557692 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1557692 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1557692 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.27,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 59.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20359863 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 59.48,
            "unit": "ns/op",
            "extra": "20359863 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20359863 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20359863 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6145544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.7,
            "unit": "ns/op",
            "extra": "6145544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6145544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6145544 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 780.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1529626 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 780.8,
            "unit": "ns/op",
            "extra": "1529626 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1529626 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1529626 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14818076 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.53,
            "unit": "ns/op",
            "extra": "14818076 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14818076 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14818076 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25215722 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.66,
            "unit": "ns/op",
            "extra": "25215722 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25215722 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25215722 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 697.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1696461 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 697.9,
            "unit": "ns/op",
            "extra": "1696461 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1696461 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1696461 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 703.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1729548 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 703.1,
            "unit": "ns/op",
            "extra": "1729548 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1729548 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1729548 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25227296 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.78,
            "unit": "ns/op",
            "extra": "25227296 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25227296 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25227296 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 223.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5318883 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 223.9,
            "unit": "ns/op",
            "extra": "5318883 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5318883 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5318883 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 220.6,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5392591 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 220.6,
            "unit": "ns/op",
            "extra": "5392591 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5392591 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5392591 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 369.5,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3415525 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 369.5,
            "unit": "ns/op",
            "extra": "3415525 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3415525 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3415525 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 479.2,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2523046 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 479.2,
            "unit": "ns/op",
            "extra": "2523046 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2523046 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2523046 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 600.7,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2015719 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 600.7,
            "unit": "ns/op",
            "extra": "2015719 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2015719 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2015719 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1048,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1048,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b7cc79032dfcb3dde525addae8d051d5ab0bd89d",
          "message": "chore(deps): update benchmark-action/github-action-benchmark action to v1.22.2 (#35)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-16T01:06:48Z",
          "url": "https://github.com/moov-io/bertlv/commit/b7cc79032dfcb3dde525addae8d051d5ab0bd89d"
        },
        "date": 1789723081834,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 16.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70007031 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 16.91,
            "unit": "ns/op",
            "extra": "70007031 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "70007031 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "70007031 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7619731 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 158,
            "unit": "ns/op",
            "extra": "7619731 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7619731 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7619731 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 729.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1749016 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 729.4,
            "unit": "ns/op",
            "extra": "1749016 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1749016 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1749016 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.87,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 58.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20771161 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 58.08,
            "unit": "ns/op",
            "extra": "20771161 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20771161 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20771161 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6177232 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.2,
            "unit": "ns/op",
            "extra": "6177232 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6177232 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6177232 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 775.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1549424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 775.9,
            "unit": "ns/op",
            "extra": "1549424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1549424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1549424 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14797258 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.42,
            "unit": "ns/op",
            "extra": "14797258 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14797258 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14797258 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24810396 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.58,
            "unit": "ns/op",
            "extra": "24810396 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24810396 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24810396 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 706.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1732365 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 706.1,
            "unit": "ns/op",
            "extra": "1732365 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1732365 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1732365 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 772,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1540182 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 772,
            "unit": "ns/op",
            "extra": "1540182 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1540182 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1540182 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25254950 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.64,
            "unit": "ns/op",
            "extra": "25254950 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25254950 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25254950 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 223.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5341088 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 223.5,
            "unit": "ns/op",
            "extra": "5341088 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5341088 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5341088 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 221.2,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5371278 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 221.2,
            "unit": "ns/op",
            "extra": "5371278 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5371278 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5371278 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 351.4,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3399384 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 351.4,
            "unit": "ns/op",
            "extra": "3399384 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3399384 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3399384 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 477.9,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2509904 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 477.9,
            "unit": "ns/op",
            "extra": "2509904 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2509904 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2509904 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 595.3,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2009406 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 595.3,
            "unit": "ns/op",
            "extra": "2009406 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2009406 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2009406 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1044,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1044,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1789808676375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 16.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68493158 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 16.91,
            "unit": "ns/op",
            "extra": "68493158 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68493158 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68493158 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 160.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7557165 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 160.8,
            "unit": "ns/op",
            "extra": "7557165 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7557165 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7557165 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 698,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1739790 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 698,
            "unit": "ns/op",
            "extra": "1739790 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1739790 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1739790 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.37,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 57.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20856864 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.55,
            "unit": "ns/op",
            "extra": "20856864 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20856864 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20856864 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6140901 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.8,
            "unit": "ns/op",
            "extra": "6140901 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6140901 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6140901 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 773.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1518327 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 773.5,
            "unit": "ns/op",
            "extra": "1518327 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1518327 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1518327 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14934474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.5,
            "unit": "ns/op",
            "extra": "14934474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14934474 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14934474 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24986388 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.68,
            "unit": "ns/op",
            "extra": "24986388 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24986388 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24986388 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 696.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1725090 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 696.5,
            "unit": "ns/op",
            "extra": "1725090 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1725090 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1725090 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 690.6,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1743086 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 690.6,
            "unit": "ns/op",
            "extra": "1743086 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1743086 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1743086 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25320802 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.57,
            "unit": "ns/op",
            "extra": "25320802 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25320802 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25320802 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 224.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5288775 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 224.1,
            "unit": "ns/op",
            "extra": "5288775 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5288775 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5288775 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 221.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5367554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 221.1,
            "unit": "ns/op",
            "extra": "5367554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5367554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5367554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 349.6,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3441918 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 349.6,
            "unit": "ns/op",
            "extra": "3441918 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3441918 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3441918 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 475.3,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2533129 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 475.3,
            "unit": "ns/op",
            "extra": "2533129 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2533129 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2533129 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 600.6,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2012966 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 600.6,
            "unit": "ns/op",
            "extra": "2012966 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2012966 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2012966 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1134,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "911497 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1134,
            "unit": "ns/op",
            "extra": "911497 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "911497 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "911497 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1789896708111,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 16.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67002475 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 16.92,
            "unit": "ns/op",
            "extra": "67002475 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67002475 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67002475 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7583055 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.5,
            "unit": "ns/op",
            "extra": "7583055 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7583055 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7583055 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 697.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1727582 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 697.4,
            "unit": "ns/op",
            "extra": "1727582 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1727582 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1727582 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.49,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 57.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20833464 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.79,
            "unit": "ns/op",
            "extra": "20833464 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20833464 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20833464 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6151617 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.8,
            "unit": "ns/op",
            "extra": "6151617 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6151617 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6151617 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 780.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1407597 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 780.7,
            "unit": "ns/op",
            "extra": "1407597 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1407597 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1407597 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14719648 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.58,
            "unit": "ns/op",
            "extra": "14719648 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14719648 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14719648 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23491448 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.77,
            "unit": "ns/op",
            "extra": "23491448 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "23491448 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "23491448 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 708.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1682515 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 708.4,
            "unit": "ns/op",
            "extra": "1682515 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1682515 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1682515 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 694.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1742742 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 694.9,
            "unit": "ns/op",
            "extra": "1742742 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1742742 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1742742 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24630463 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.64,
            "unit": "ns/op",
            "extra": "24630463 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24630463 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24630463 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 224.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5305383 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 224.3,
            "unit": "ns/op",
            "extra": "5305383 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5305383 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5305383 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 232.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5121198 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 232.9,
            "unit": "ns/op",
            "extra": "5121198 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5121198 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5121198 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 351,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3421522 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 351,
            "unit": "ns/op",
            "extra": "3421522 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3421522 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3421522 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 475.6,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2223256 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 475.6,
            "unit": "ns/op",
            "extra": "2223256 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2223256 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2223256 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 614.5,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1961876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 614.5,
            "unit": "ns/op",
            "extra": "1961876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1961876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1961876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1057,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1057,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1789985907727,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65585676 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.71,
            "unit": "ns/op",
            "extra": "65585676 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "65585676 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "65585676 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7621138 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 158,
            "unit": "ns/op",
            "extra": "7621138 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7621138 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7621138 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 692.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1693149 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 692.4,
            "unit": "ns/op",
            "extra": "1693149 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1693149 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1693149 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.25,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 59.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20501682 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 59.2,
            "unit": "ns/op",
            "extra": "20501682 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20501682 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20501682 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6159699 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.4,
            "unit": "ns/op",
            "extra": "6159699 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6159699 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6159699 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 803.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1516040 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 803.8,
            "unit": "ns/op",
            "extra": "1516040 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1516040 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1516040 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14646072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.48,
            "unit": "ns/op",
            "extra": "14646072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14646072 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14646072 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25187804 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.91,
            "unit": "ns/op",
            "extra": "25187804 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25187804 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25187804 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 701.6,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1703932 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 701.6,
            "unit": "ns/op",
            "extra": "1703932 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1703932 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1703932 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 706.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1727994 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 706.3,
            "unit": "ns/op",
            "extra": "1727994 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1727994 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1727994 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25222863 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.61,
            "unit": "ns/op",
            "extra": "25222863 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25222863 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25222863 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 228.4,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5302554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 228.4,
            "unit": "ns/op",
            "extra": "5302554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5302554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5302554 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 224,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5322726 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 224,
            "unit": "ns/op",
            "extra": "5322726 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5322726 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5322726 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 351,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3408558 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 351,
            "unit": "ns/op",
            "extra": "3408558 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3408558 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3408558 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 480.6,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2474631 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 480.6,
            "unit": "ns/op",
            "extra": "2474631 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2474631 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2474631 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 608.4,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2002767 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 608.4,
            "unit": "ns/op",
            "extra": "2002767 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2002767 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2002767 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1065,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1065,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1790069638266,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68761323 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.26,
            "unit": "ns/op",
            "extra": "68761323 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68761323 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68761323 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7570872 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.7,
            "unit": "ns/op",
            "extra": "7570872 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7570872 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7570872 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 681.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1736899 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 681.1,
            "unit": "ns/op",
            "extra": "1736899 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1736899 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1736899 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.35,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 59.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20872573 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 59.17,
            "unit": "ns/op",
            "extra": "20872573 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20872573 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20872573 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6147207 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.7,
            "unit": "ns/op",
            "extra": "6147207 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6147207 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6147207 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 781.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1400206 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 781.5,
            "unit": "ns/op",
            "extra": "1400206 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1400206 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1400206 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14889165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.74,
            "unit": "ns/op",
            "extra": "14889165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14889165 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14889165 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25199788 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.66,
            "unit": "ns/op",
            "extra": "25199788 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25199788 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25199788 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 701.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1709154 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 701.8,
            "unit": "ns/op",
            "extra": "1709154 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1709154 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1709154 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 692.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1719638 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 692.3,
            "unit": "ns/op",
            "extra": "1719638 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1719638 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1719638 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 48.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24939925 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 48.09,
            "unit": "ns/op",
            "extra": "24939925 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24939925 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24939925 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 226.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5203646 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 226.9,
            "unit": "ns/op",
            "extra": "5203646 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5203646 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5203646 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 231.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5183823 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 231.9,
            "unit": "ns/op",
            "extra": "5183823 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5183823 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5183823 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 355.2,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3386713 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 355.2,
            "unit": "ns/op",
            "extra": "3386713 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3386713 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3386713 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 487.6,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2443780 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 487.6,
            "unit": "ns/op",
            "extra": "2443780 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2443780 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2443780 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 606,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1966714 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 606,
            "unit": "ns/op",
            "extra": "1966714 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1966714 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1966714 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1059,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1059,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1790156331567,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59199964 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.09,
            "unit": "ns/op",
            "extra": "59199964 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "59199964 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "59199964 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7609033 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.5,
            "unit": "ns/op",
            "extra": "7609033 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7609033 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7609033 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 686.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1722757 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 686.2,
            "unit": "ns/op",
            "extra": "1722757 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1722757 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1722757 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.29,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 57.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20880451 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.55,
            "unit": "ns/op",
            "extra": "20880451 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20880451 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20880451 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6147920 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.6,
            "unit": "ns/op",
            "extra": "6147920 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6147920 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6147920 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 805.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1529472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 805.3,
            "unit": "ns/op",
            "extra": "1529472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1529472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1529472 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14871524 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.32,
            "unit": "ns/op",
            "extra": "14871524 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14871524 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14871524 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24680830 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.61,
            "unit": "ns/op",
            "extra": "24680830 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24680830 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24680830 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 697.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1711417 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 697.9,
            "unit": "ns/op",
            "extra": "1711417 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1711417 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1711417 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 706.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1738599 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 706.3,
            "unit": "ns/op",
            "extra": "1738599 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1738599 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1738599 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25081585 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.63,
            "unit": "ns/op",
            "extra": "25081585 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25081585 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25081585 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 226.3,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5356725 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 226.3,
            "unit": "ns/op",
            "extra": "5356725 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5356725 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5356725 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 220.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5387108 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 220.1,
            "unit": "ns/op",
            "extra": "5387108 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5387108 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5387108 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 346.8,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3461751 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 346.8,
            "unit": "ns/op",
            "extra": "3461751 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3461751 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3461751 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 497.4,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2509993 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 497.4,
            "unit": "ns/op",
            "extra": "2509993 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2509993 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2509993 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 593.7,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1969350 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 593.7,
            "unit": "ns/op",
            "extra": "1969350 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1969350 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1969350 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1049,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1049,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1790242691733,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64973482 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.11,
            "unit": "ns/op",
            "extra": "64973482 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "64973482 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "64973482 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 158.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7591634 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 158.1,
            "unit": "ns/op",
            "extra": "7591634 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7591634 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7591634 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 705.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1535696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 705.1,
            "unit": "ns/op",
            "extra": "1535696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1535696 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1535696 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.28,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 57.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20905340 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.55,
            "unit": "ns/op",
            "extra": "20905340 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20905340 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20905340 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 194.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6158708 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 194.9,
            "unit": "ns/op",
            "extra": "6158708 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6158708 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6158708 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 793.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1518146 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 793.2,
            "unit": "ns/op",
            "extra": "1518146 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1518146 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1518146 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14860987 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.53,
            "unit": "ns/op",
            "extra": "14860987 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14860987 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14860987 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 48.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25186046 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 48.08,
            "unit": "ns/op",
            "extra": "25186046 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25186046 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25186046 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 704.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1671608 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 704.5,
            "unit": "ns/op",
            "extra": "1671608 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1671608 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1671608 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 712.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1712972 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 712.2,
            "unit": "ns/op",
            "extra": "1712972 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1712972 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1712972 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25001816 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.6,
            "unit": "ns/op",
            "extra": "25001816 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25001816 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25001816 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 229.1,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5236468 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 229.1,
            "unit": "ns/op",
            "extra": "5236468 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5236468 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5236468 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 222,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5377188 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 222,
            "unit": "ns/op",
            "extra": "5377188 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5377188 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5377188 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 369,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3421764 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 369,
            "unit": "ns/op",
            "extra": "3421764 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3421764 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3421764 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 480.3,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2516304 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 480.3,
            "unit": "ns/op",
            "extra": "2516304 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2516304 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2516304 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 613.6,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1996146 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 613.6,
            "unit": "ns/op",
            "extra": "1996146 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1996146 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1996146 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1051,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1051,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e052b5fb10268ebd590692817b07e10e06f98b98",
          "message": "chore(deps): update github/codeql-action action to v4.38.1 (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-19T01:14:09Z",
          "url": "https://github.com/moov-io/bertlv/commit/e052b5fb10268ebd590692817b07e10e06f98b98"
        },
        "date": 1790330132091,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 14.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82765356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 14.54,
            "unit": "ns/op",
            "extra": "82765356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "82765356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "82765356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 134.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8965147 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 134.8,
            "unit": "ns/op",
            "extra": "8965147 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8965147 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8965147 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 514.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2334436 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 514.8,
            "unit": "ns/op",
            "extra": "2334436 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2334436 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2334436 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 8.269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146974803 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 8.269,
            "unit": "ns/op",
            "extra": "146974803 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "146974803 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "146974803 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 42.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28638451 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 42.99,
            "unit": "ns/op",
            "extra": "28638451 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28638451 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28638451 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 172.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6950014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 172.9,
            "unit": "ns/op",
            "extra": "6950014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6950014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6950014 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 579.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2057086 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 579.4,
            "unit": "ns/op",
            "extra": "2057086 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2057086 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2057086 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 58.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20602210 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 58.26,
            "unit": "ns/op",
            "extra": "20602210 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20602210 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20602210 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 40.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29481590 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 40.77,
            "unit": "ns/op",
            "extra": "29481590 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "29481590 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "29481590 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 524.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2295291 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 524.7,
            "unit": "ns/op",
            "extra": "2295291 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2295291 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2295291 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 522.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2283112 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 522.1,
            "unit": "ns/op",
            "extra": "2283112 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2283112 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2283112 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 40.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29136030 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 40.72,
            "unit": "ns/op",
            "extra": "29136030 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "29136030 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "29136030 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 169.2,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "7019548 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 169.2,
            "unit": "ns/op",
            "extra": "7019548 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "7019548 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7019548 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 156.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "7626715 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 156.1,
            "unit": "ns/op",
            "extra": "7626715 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "7626715 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7626715 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 272,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "4405640 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 272,
            "unit": "ns/op",
            "extra": "4405640 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "4405640 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4405640 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 367.3,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "3310776 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 367.3,
            "unit": "ns/op",
            "extra": "3310776 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "3310776 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "3310776 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 471.5,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2516364 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 471.5,
            "unit": "ns/op",
            "extra": "2516364 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2516364 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2516364 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 799.4,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1506103 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 799.4,
            "unit": "ns/op",
            "extra": "1506103 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1506103 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1506103 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "renovate[bot]",
            "username": "renovate[bot]",
            "email": "29139614+renovate[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "86ea4f537db746a2af4f8c0eda501f0fa0f72205",
          "message": "chore(deps): update github/codeql-action action to v4.38.2 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-25T13:51:22Z",
          "url": "https://github.com/moov-io/bertlv/commit/86ea4f537db746a2af4f8c0eda501f0fa0f72205"
        },
        "date": 1790415467228,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 14.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81819445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 14.44,
            "unit": "ns/op",
            "extra": "81819445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "81819445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "81819445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 133.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8991057 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 133.4,
            "unit": "ns/op",
            "extra": "8991057 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8991057 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8991057 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 510.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2325628 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 510.2,
            "unit": "ns/op",
            "extra": "2325628 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2325628 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2325628 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 8.174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146431840 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 8.174,
            "unit": "ns/op",
            "extra": "146431840 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "146431840 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "146431840 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 41.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27995941 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 41.5,
            "unit": "ns/op",
            "extra": "27995941 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27995941 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27995941 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 172.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6837770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 172.8,
            "unit": "ns/op",
            "extra": "6837770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6837770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6837770 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 572,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2096413 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 572,
            "unit": "ns/op",
            "extra": "2096413 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2096413 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2096413 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 58.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20580298 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 58.46,
            "unit": "ns/op",
            "extra": "20580298 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20580298 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20580298 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 40.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29437623 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 40.72,
            "unit": "ns/op",
            "extra": "29437623 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "29437623 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "29437623 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 515.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2321389 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 515.2,
            "unit": "ns/op",
            "extra": "2321389 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2321389 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2321389 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 514.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2336166 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 514.4,
            "unit": "ns/op",
            "extra": "2336166 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2336166 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2336166 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 40.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29398860 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 40.75,
            "unit": "ns/op",
            "extra": "29398860 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "29398860 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "29398860 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 169,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "7012752 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 169,
            "unit": "ns/op",
            "extra": "7012752 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "7012752 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7012752 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 156.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "7591426 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 156.1,
            "unit": "ns/op",
            "extra": "7591426 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "7591426 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7591426 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 270.5,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "4455831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 270.5,
            "unit": "ns/op",
            "extra": "4455831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "4455831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4455831 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 354.3,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "3373220 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 354.3,
            "unit": "ns/op",
            "extra": "3373220 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "3373220 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "3373220 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 490.4,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2548596 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 490.4,
            "unit": "ns/op",
            "extra": "2548596 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2548596 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2548596 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 793.3,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1463649 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 793.3,
            "unit": "ns/op",
            "extra": "1463649 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "1463649 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "1463649 times\n4 procs"
          }
        ]
      }
    ]
  }
}