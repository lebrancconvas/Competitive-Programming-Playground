package L0009 

import (
	"strconv"
)

func isPalindrome(x int) bool { 
	originX := x; 

	if x < 0 {
		return false; 
	}

	if x == 0 {
		return true; 
	}

	lengthX := digitCount(x); 
	inverseXArray := make([]int, lengthX);  
	var reverseString string = ""; 

	for x != 0 {
		inverseXArray = append(inverseXArray, x % 10);  
		x = x / 10; 
	}

	for _, v := range inverseXArray {
		s := strconv.Itoa(v);
		reverseString += s; 
	}

	inverseX, err := strconv.Atoi(reverseString);
	if err != nil {
		panic(err); 
	}

	if originX == inverseX { 
		return true; 
	}

	return false; 	
}

func digitCount(x int) int { 
	count := 0; 
	for x != 0 {
		x = x / 10; 
		count++; 
	}
	return count; 
} 