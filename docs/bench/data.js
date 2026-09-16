window.BENCHMARK_DATA = {
  "lastUpdate": 1789551379243,
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
      }
    ]
  }
}