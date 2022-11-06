package L0007 

import (
	"testing"
)

func TestInput_123_ShouldBe_321(t *testing.T) {
	result := reverse(123);
	if result != 321 {
		t.Errorf("Expected: 321 => Actual: %d", result); 
	}
}

func TestInput_n123_ShouldBe_n321(t *testing.T) {
	result := reverse(-123);
	if result != -321 {
		t.Errorf("Expected: -321 => Actual: %d", result);  
	}
}
