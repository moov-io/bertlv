package bertlv

import (
	"encoding/hex"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestFilterPan(t *testing.T) {
	pan, err := hex.DecodeString("5432121234561437")
	require.NoError(t, err)

	filteredPan := filterPan(pan)

	require.Equal(t, "543212****1437", filteredPan)
}

func TestFilterTrack2Data(t *testing.T) {
	track2Data, err := hex.DecodeString("5432121234561437D23032011324500004380F")
	require.NoError(t, err)

	filteredTrack2Data := filterTrack2Data(track2Data)

	require.Equal(t, "543212****1437D23032011324500004380F", filteredTrack2Data)
}
