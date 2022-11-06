// Leetcode Problem 07: Reverse Integer
// Link: https://leetcode.com/problems/reverse-integer

// Constraint: -(2^31) <= x <= (2^31) - 1 
package L0007

import (
	_"math" 
	"strconv"
)

// Solution Code. 

func reverse(x int) int {
	var isNegative bool = false; 

	if x == 0 {
		return 0; 
	}

	if x < 0 {
		x = -1 * x; 
		isNegative = true; 
	}
	lengthX := digitCount(x); 
	modArray := make([]int, lengthX); 	
	var reverseString string;

	for x != 0 {
		modArray = append(modArray, x % 10);
		x = x / 10; 
	}

	for _, v := range modArray {
		s := strconv.Itoa(v);
		reverseString += s; 
	}

	reverseInt, err := strconv.Atoi(reverseString); 
	if err != nil {
		panic(err); 
	} 

	if isNegative {
		reverseInt = -1 * reverseInt; 
	}

	if reverseInt > 2147483647 || reverseInt < -2147483648 {
		return 0; 
	} 

	return reverseInt;   
}

func digitCount(x int) int { 
	count := 0; 
	for x != 0 {
		x = x / 10; 
		count++; 
	}
	return count; 
}