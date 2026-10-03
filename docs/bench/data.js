window.BENCHMARK_DATA = {
  "lastUpdate": 1791022089520,
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
        "date": 1790504263595,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 18.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64584921 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 18.66,
            "unit": "ns/op",
            "extra": "64584921 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "64584921 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "64584921 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 172.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6957855 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 172.3,
            "unit": "ns/op",
            "extra": "6957855 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6957855 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6957855 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 749.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1788025 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 749.2,
            "unit": "ns/op",
            "extra": "1788025 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1788025 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1788025 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 10.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 10.79,
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
            "value": 53.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22400086 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 53.46,
            "unit": "ns/op",
            "extra": "22400086 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22400086 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22400086 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 222.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5396762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 222.7,
            "unit": "ns/op",
            "extra": "5396762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5396762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5396762 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 749.1,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1615222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 749.1,
            "unit": "ns/op",
            "extra": "1615222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1615222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1615222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 79.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15402405 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 79.72,
            "unit": "ns/op",
            "extra": "15402405 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15402405 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15402405 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 52.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22607334 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 52.52,
            "unit": "ns/op",
            "extra": "22607334 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22607334 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22607334 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 676.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1754916 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 676.2,
            "unit": "ns/op",
            "extra": "1754916 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1754916 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1754916 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 665.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1818349 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 665.3,
            "unit": "ns/op",
            "extra": "1818349 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1818349 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1818349 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 52.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22711195 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 52.57,
            "unit": "ns/op",
            "extra": "22711195 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22711195 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22711195 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 223,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5441797 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 223,
            "unit": "ns/op",
            "extra": "5441797 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5441797 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5441797 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 201.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5913007 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 201.9,
            "unit": "ns/op",
            "extra": "5913007 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5913007 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5913007 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 351.8,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3418107 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 351.8,
            "unit": "ns/op",
            "extra": "3418107 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3418107 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3418107 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 462.5,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2610634 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 462.5,
            "unit": "ns/op",
            "extra": "2610634 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2610634 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2610634 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 626.2,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1944282 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 626.2,
            "unit": "ns/op",
            "extra": "1944282 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1944282 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1944282 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1014,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1014,
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
          "id": "86ea4f537db746a2af4f8c0eda501f0fa0f72205",
          "message": "chore(deps): update github/codeql-action action to v4.38.2 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-25T13:51:22Z",
          "url": "https://github.com/moov-io/bertlv/commit/86ea4f537db746a2af4f8c0eda501f0fa0f72205"
        },
        "date": 1790594423299,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 16.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68818569 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 16.94,
            "unit": "ns/op",
            "extra": "68818569 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68818569 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68818569 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7488530 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.8,
            "unit": "ns/op",
            "extra": "7488530 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7488530 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7488530 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 739.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1769096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 739.8,
            "unit": "ns/op",
            "extra": "1769096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1769096 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1769096 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98214678 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.27,
            "unit": "ns/op",
            "extra": "98214678 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98214678 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98214678 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 57.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20830398 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.51,
            "unit": "ns/op",
            "extra": "20830398 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20830398 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20830398 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 195.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6152569 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 195.1,
            "unit": "ns/op",
            "extra": "6152569 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6152569 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6152569 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 764.2,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1412022 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 764.2,
            "unit": "ns/op",
            "extra": "1412022 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1412022 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1412022 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 81.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14912062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 81.13,
            "unit": "ns/op",
            "extra": "14912062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14912062 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14912062 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25191681 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.69,
            "unit": "ns/op",
            "extra": "25191681 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25191681 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25191681 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 697.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1736944 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 697.4,
            "unit": "ns/op",
            "extra": "1736944 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1736944 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1736944 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 680.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1766821 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 680.7,
            "unit": "ns/op",
            "extra": "1766821 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1766821 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1766821 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25105945 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.62,
            "unit": "ns/op",
            "extra": "25105945 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25105945 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25105945 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 224.6,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5277812 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 224.6,
            "unit": "ns/op",
            "extra": "5277812 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5277812 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5277812 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 222.7,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5411136 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 222.7,
            "unit": "ns/op",
            "extra": "5411136 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5411136 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5411136 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 347.8,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3423213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 347.8,
            "unit": "ns/op",
            "extra": "3423213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3423213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3423213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 472.3,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2528667 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 472.3,
            "unit": "ns/op",
            "extra": "2528667 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2528667 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2528667 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 597.3,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2009116 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 597.3,
            "unit": "ns/op",
            "extra": "2009116 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2009116 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2009116 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1055,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1055,
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
          "id": "86ea4f537db746a2af4f8c0eda501f0fa0f72205",
          "message": "chore(deps): update github/codeql-action action to v4.38.2 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-25T13:51:22Z",
          "url": "https://github.com/moov-io/bertlv/commit/86ea4f537db746a2af4f8c0eda501f0fa0f72205"
        },
        "date": 1790679555815,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67726297 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.11,
            "unit": "ns/op",
            "extra": "67726297 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67726297 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67726297 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7610445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.6,
            "unit": "ns/op",
            "extra": "7610445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7610445 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7610445 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 699.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1725648 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 699.4,
            "unit": "ns/op",
            "extra": "1725648 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1725648 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1725648 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.3,
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
            "value": 57.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20894299 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.56,
            "unit": "ns/op",
            "extra": "20894299 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20894299 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20894299 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 197.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6095594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 197.4,
            "unit": "ns/op",
            "extra": "6095594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6095594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6095594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 774.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1534177 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 774.5,
            "unit": "ns/op",
            "extra": "1534177 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1534177 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1534177 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14732997 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.93,
            "unit": "ns/op",
            "extra": "14732997 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14732997 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14732997 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25157017 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.74,
            "unit": "ns/op",
            "extra": "25157017 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25157017 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25157017 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 704.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1722964 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 704.3,
            "unit": "ns/op",
            "extra": "1722964 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1722964 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1722964 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 689.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1705135 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 689.7,
            "unit": "ns/op",
            "extra": "1705135 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1705135 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1705135 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25243094 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.74,
            "unit": "ns/op",
            "extra": "25243094 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25243094 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25243094 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 227.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5182143 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 227.7,
            "unit": "ns/op",
            "extra": "5182143 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5182143 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5182143 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 223.5,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5397049 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 223.5,
            "unit": "ns/op",
            "extra": "5397049 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5397049 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5397049 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 350.3,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3403287 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 350.3,
            "unit": "ns/op",
            "extra": "3403287 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3403287 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3403287 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 486.9,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2490552 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 486.9,
            "unit": "ns/op",
            "extra": "2490552 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2490552 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2490552 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 601.8,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1969749 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 601.8,
            "unit": "ns/op",
            "extra": "1969749 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1969749 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1969749 times\n4 procs"
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
          "id": "86ea4f537db746a2af4f8c0eda501f0fa0f72205",
          "message": "chore(deps): update github/codeql-action action to v4.38.2 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-25T13:51:22Z",
          "url": "https://github.com/moov-io/bertlv/commit/86ea4f537db746a2af4f8c0eda501f0fa0f72205"
        },
        "date": 1790765369651,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69439356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.06,
            "unit": "ns/op",
            "extra": "69439356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69439356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69439356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 157.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7581806 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 157.8,
            "unit": "ns/op",
            "extra": "7581806 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7581806 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7581806 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 683.6,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1736150 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 683.6,
            "unit": "ns/op",
            "extra": "1736150 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1736150 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1736150 times\n4 procs"
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
            "value": 58.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20814594 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 58.03,
            "unit": "ns/op",
            "extra": "20814594 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20814594 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20814594 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 201.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5945572 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 201.3,
            "unit": "ns/op",
            "extra": "5945572 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5945572 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5945572 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 777.8,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1543220 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 777.8,
            "unit": "ns/op",
            "extra": "1543220 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1543220 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1543220 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14948509 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.61,
            "unit": "ns/op",
            "extra": "14948509 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14948509 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14948509 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25154463 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.8,
            "unit": "ns/op",
            "extra": "25154463 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25154463 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25154463 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 694,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1739839 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 694,
            "unit": "ns/op",
            "extra": "1739839 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1739839 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1739839 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 683.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1721974 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 683.7,
            "unit": "ns/op",
            "extra": "1721974 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1721974 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1721974 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25177867 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.62,
            "unit": "ns/op",
            "extra": "25177867 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25177867 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25177867 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 240.9,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5333781 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 240.9,
            "unit": "ns/op",
            "extra": "5333781 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5333781 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5333781 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 222,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5290264 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 222,
            "unit": "ns/op",
            "extra": "5290264 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5290264 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5290264 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 349.8,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3406642 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 349.8,
            "unit": "ns/op",
            "extra": "3406642 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3406642 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3406642 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 475.8,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2551604 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 475.8,
            "unit": "ns/op",
            "extra": "2551604 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2551604 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2551604 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 600.3,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1972888 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 600.3,
            "unit": "ns/op",
            "extra": "1972888 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1972888 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1972888 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1046,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1046,
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
          "id": "86ea4f537db746a2af4f8c0eda501f0fa0f72205",
          "message": "chore(deps): update github/codeql-action action to v4.38.2 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-25T13:51:22Z",
          "url": "https://github.com/moov-io/bertlv/commit/86ea4f537db746a2af4f8c0eda501f0fa0f72205"
        },
        "date": 1790853362837,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 18.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63824710 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 18.65,
            "unit": "ns/op",
            "extra": "63824710 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "63824710 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "63824710 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 171.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6975735 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 171.8,
            "unit": "ns/op",
            "extra": "6975735 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6975735 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6975735 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 697.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1575746 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 697.4,
            "unit": "ns/op",
            "extra": "1575746 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1575746 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1575746 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 10.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 10.58,
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
            "value": 53.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22401795 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 53.81,
            "unit": "ns/op",
            "extra": "22401795 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22401795 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22401795 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 223.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5370229 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 223.2,
            "unit": "ns/op",
            "extra": "5370229 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5370229 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5370229 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 770.6,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1503102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 770.6,
            "unit": "ns/op",
            "extra": "1503102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1503102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1503102 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 75.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15463954 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 75.3,
            "unit": "ns/op",
            "extra": "15463954 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15463954 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15463954 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 52.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22982883 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 52.7,
            "unit": "ns/op",
            "extra": "22982883 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22982883 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22982883 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 673,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1773200 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 673,
            "unit": "ns/op",
            "extra": "1773200 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1773200 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1773200 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 667.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1781570 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 667.5,
            "unit": "ns/op",
            "extra": "1781570 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1781570 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1781570 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 53.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22900398 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 53.49,
            "unit": "ns/op",
            "extra": "22900398 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22900398 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22900398 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 218.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "5453001 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 218.7,
            "unit": "ns/op",
            "extra": "5453001 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5453001 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5453001 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 201.4,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5918854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 201.4,
            "unit": "ns/op",
            "extra": "5918854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5918854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5918854 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 351.5,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3400213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 351.5,
            "unit": "ns/op",
            "extra": "3400213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3400213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3400213 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 458.4,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2619842 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 458.4,
            "unit": "ns/op",
            "extra": "2619842 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2619842 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2619842 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 610.9,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "1955186 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 610.9,
            "unit": "ns/op",
            "extra": "1955186 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "1955186 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1955186 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1009,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1009,
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
          "id": "86ea4f537db746a2af4f8c0eda501f0fa0f72205",
          "message": "chore(deps): update github/codeql-action action to v4.38.2 (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-25T13:51:22Z",
          "url": "https://github.com/moov-io/bertlv/commit/86ea4f537db746a2af4f8c0eda501f0fa0f72205"
        },
        "date": 1790938109709,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 9.512,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "128410365 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 9.512,
            "unit": "ns/op",
            "extra": "128410365 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "128410365 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "128410365 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 84.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14105834 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 84.59,
            "unit": "ns/op",
            "extra": "14105834 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14105834 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14105834 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 405.7,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2858066 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 405.7,
            "unit": "ns/op",
            "extra": "2858066 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2858066 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2858066 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 5.725,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "209885040 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 5.725,
            "unit": "ns/op",
            "extra": "209885040 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "209885040 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "209885040 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple",
            "value": 30.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38439511 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 30.67,
            "unit": "ns/op",
            "extra": "38439511 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38439511 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38439511 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 105.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11366984 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 105.4,
            "unit": "ns/op",
            "extra": "11366984 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11366984 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11366984 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 468.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2667844 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 468.9,
            "unit": "ns/op",
            "extra": "2667844 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2667844 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2667844 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 43.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27907610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 43.19,
            "unit": "ns/op",
            "extra": "27907610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27907610 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27907610 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 25.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43149009 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 25.14,
            "unit": "ns/op",
            "extra": "43149009 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43149009 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43149009 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 410.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2871366 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 410.3,
            "unit": "ns/op",
            "extra": "2871366 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2871366 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2871366 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 412.4,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "2881962 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 412.4,
            "unit": "ns/op",
            "extra": "2881962 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "2881962 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "2881962 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 24.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48570604 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 24.8,
            "unit": "ns/op",
            "extra": "48570604 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48570604 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48570604 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 124.5,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "9535258 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 124.5,
            "unit": "ns/op",
            "extra": "9535258 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "9535258 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9535258 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 120.1,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "9897391 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 120.1,
            "unit": "ns/op",
            "extra": "9897391 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "9897391 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "9897391 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 203.7,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "6284946 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 203.7,
            "unit": "ns/op",
            "extra": "6284946 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "6284946 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "6284946 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 250,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "4636533 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 250,
            "unit": "ns/op",
            "extra": "4636533 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "4636533 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "4636533 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 339.4,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "3702403 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 339.4,
            "unit": "ns/op",
            "extra": "3702403 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "3702403 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "3702403 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 572.8,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "2116519 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 572.8,
            "unit": "ns/op",
            "extra": "2116519 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - B/op",
            "value": 1712,
            "unit": "B/op",
            "extra": "2116519 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "2116519 times\n4 procs"
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
        "date": 1791022089125,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFindFirstTag_Single",
            "value": 17.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69444387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - ns/op",
            "value": 17.17,
            "unit": "ns/op",
            "extra": "69444387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69444387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Single - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69444387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple",
            "value": 159.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7558369 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - ns/op",
            "value": 159.5,
            "unit": "ns/op",
            "extra": "7558369 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7558369 times\n4 procs"
          },
          {
            "name": "BenchmarkFindFirstTag_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7558369 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap",
            "value": 692,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1744610 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - ns/op",
            "value": 692,
            "unit": "ns/op",
            "extra": "1744610 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1744610 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1744610 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single",
            "value": 11.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Single - ns/op",
            "value": 11.96,
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
            "value": 57.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20647083 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - ns/op",
            "value": 57.74,
            "unit": "ns/op",
            "extra": "20647083 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20647083 times\n4 procs"
          },
          {
            "name": "BenchmarkTagMapLookup_Multiple - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20647083 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag",
            "value": 195.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5959461 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - ns/op",
            "value": 195.3,
            "unit": "ns/op",
            "extra": "5959461 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5959461 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5959461 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap",
            "value": 786.9,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1531444 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - ns/op",
            "value": 786.9,
            "unit": "ns/op",
            "extra": "1531444 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1531444 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1531444 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused",
            "value": 80.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14874168 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - ns/op",
            "value": 80.48,
            "unit": "ns/op",
            "extra": "14874168 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14874168 times\n4 procs"
          },
          {
            "name": "BenchmarkCompleteWorkflow_TagMapReused - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14874168 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag",
            "value": 47.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25153081 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - ns/op",
            "value": 47.68,
            "unit": "ns/op",
            "extra": "25153081 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25153081 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25153081 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap",
            "value": 710.3,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1680900 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - ns/op",
            "value": 710.3,
            "unit": "ns/op",
            "extra": "1680900 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1680900 times\n4 procs"
          },
          {
            "name": "BenchmarkNestedStructures_TagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1680900 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap",
            "value": 683.5,
            "unit": "ns/op\t    1368 B/op\t      13 allocs/op",
            "extra": "1719114 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - ns/op",
            "value": 683.5,
            "unit": "ns/op",
            "extra": "1719114 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - B/op",
            "value": 1368,
            "unit": "B/op",
            "extra": "1719114 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_BuildTagMap - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1719114 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag",
            "value": 47.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25179404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - ns/op",
            "value": 47.62,
            "unit": "ns/op",
            "extra": "25179404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25179404 times\n4 procs"
          },
          {
            "name": "BenchmarkMemoryUsage_FindFirstTag - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25179404 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched",
            "value": 250.7,
            "unit": "ns/op\t     128 B/op\t       1 allocs/op",
            "extra": "4592950 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - ns/op",
            "value": 250.7,
            "unit": "ns/op",
            "extra": "4592950 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "4592950 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/No_tags_matched - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4592950 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched",
            "value": 222.9,
            "unit": "ns/op\t      72 B/op\t       2 allocs/op",
            "extra": "5361553 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - ns/op",
            "value": 222.9,
            "unit": "ns/op",
            "extra": "5361553 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - B/op",
            "value": 72,
            "unit": "B/op",
            "extra": "5361553 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/One_flat_tag_matched - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5361553 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched",
            "value": 353,
            "unit": "ns/op\t     296 B/op\t       5 allocs/op",
            "extra": "3389876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - ns/op",
            "value": 353,
            "unit": "ns/op",
            "extra": "3389876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "3389876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Multiple_flat_tags_matched - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3389876 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched",
            "value": 475.2,
            "unit": "ns/op\t     552 B/op\t       9 allocs/op",
            "extra": "2477988 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - ns/op",
            "value": 475.2,
            "unit": "ns/op",
            "extra": "2477988 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - B/op",
            "value": 552,
            "unit": "B/op",
            "extra": "2477988 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Nested_composite_tag_matched - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2477988 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags",
            "value": 603.3,
            "unit": "ns/op\t     776 B/op\t      12 allocs/op",
            "extra": "2007720 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - ns/op",
            "value": 603.3,
            "unit": "ns/op",
            "extra": "2007720 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - B/op",
            "value": 776,
            "unit": "B/op",
            "extra": "2007720 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/Mix_of_flat_and_nested_tags - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2007720 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched",
            "value": 1058,
            "unit": "ns/op\t    1712 B/op\t      21 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkCopyTags/All_tags_matched - ns/op",
            "value": 1058,
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
      }
    ]
  }
}