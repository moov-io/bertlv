## v0.1.1 (Unreleased)

BUG FIXES

- return an error for invalid long-form lengths
- search later siblings in FindFirstTag after a composite

IMPROVEMENTS

- feat: add tag mapping API (BuildTagMap, FindFirst, Find, GetTagMapStats)
- test: expand fuzz coverage for Decode

## v0.1.0 (Released 2025-05-13)

IMPROVEMENTS

- fix: check index and set options properly in tlv

## v0.0.8 (Released 2025-04-03)

IMPROVEMENTS

- feat: add CopyTags method

## v0.0.7 (Released 2025-04-01)

IMPROVEMENTS

- fix: print a new line when no description for a tag is found

## v0.0.6 (Released 2025-02-19)

BUG FIXES

- fix: skip padding bytes

## v0.0.5 (Released 2025-02-12)

IMPROVEMENTS

- Supports Unmarshaling into int64 base10

## v0.0.4 (Released 2025-02-11)

IMPROVEMENTS

- Add Unmarshal function with struct tags
- Lint fixes
- Update dependencies

BUG FIXES

- Fix MSB checking in tag bytes

## v0.0.3 (Released 2024-10-29)

IMPROVEMENTS

- Improved filters to avoid exposing sensitive data


## v0.0.2 (Released 2024-10-29)

IMPROVEMENTS

- Added filters to avoid exposing sensitive data

## v0.0.1 (Released 2024-10-28)
- Initial Release
