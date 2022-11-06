package L0007 

import (
	"testing"
)

func TestCase01_Input_123_ShouldBe_321(t *testing.T) { 
	result := reverse(123);
	if result != 321 {
		t.Errorf("Expected: 321 => Actual: %d", result); 
	}
}

func TestCase02_Input_n123_ShouldBe_n321(t *testing.T) {
	result := reverse(-123);
	if result != -321 {
		t.Errorf("Expected: -321 => Actual: %d", result);  
	}
}

func TestCase03_Input_120_ShouldBe_21(t *testing.T) {
	result := reverse(120); 
	if result != 21 { 
		t.Errorf("Expected: 21 => Actual: %d", result); 
	}
}

func TestCase04_Input_21500_ShouldBe_512(t *testing.T) {
	result := reverse(21500); 
	if result != 512 { 
		t.Errorf("Expected: 512 => Actual: %d", result);  
	}
}

