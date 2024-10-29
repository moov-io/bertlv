package bertlv

import (
	"encoding/hex"
	"slices"
	"strings"
)

var (
	tagFilters = map[string]func([]byte) string{
		"5A": filterPan,
		"57": filterTrack2Data,
	}
)

// filterPan filters the PAN data
func filterPan(data []byte) string {
	data = slices.Clone(data)
	pan := hex.EncodeToString(data)

	if len(pan) < 10 {
		return pan
	}

	// filter first 6 digits and last 4 digits
	return pan[:6] + "****" + pan[len(pan)-4:]
}

// naive implementation of filtering track2 data
func filterTrack2Data(data []byte) string {
	data = slices.Clone(data)
	track2Data := hex.EncodeToString(data)
	track2Data = strings.ToUpper(track2Data)

	if len(track2Data) < 12 {
		return track2Data
	}

	// filter first 6 digits and last 4 digits
	return track2Data[:6] + "****" + track2Data[12:]
}
