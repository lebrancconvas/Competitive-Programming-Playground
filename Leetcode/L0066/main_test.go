package L0066 

import (
	"testing"
)

func TestCase01_Input_a123_Shouldbe_a124(t *testing.T) {
	result := plusOne([]int{1, 2, 3})
	if result != []int{1, 2, 4} {
		t.Errorf("Expected: [1, 2, 4] => Actual: %d", result)
	}
}