package L0009 

import (
	"testing" 
)

func TestCase01_Input_121_ShouldBe_True(t *testing.T) {
	result := isPalindrome(121); 
	if result != true {
		t.Errorf("Expected: true => Actual: %t", result); 
	}
}

func TestCase02_Input_n121_ShouldBe_False(t *testing.T) {
	result := isPalindrome(-121); 
	if result != false {
		t.Errorf("Expected: false => Actual: %t", result); 
	}
}

func TestCase03_Input_10_ShouldBe_False(t *testing.T) {
	result := isPalindrome(10); 
	if result != false {
		t.Errorf("Expected: false => Actual: %t", result); 
	} 
}