package main

import (
	"fmt"
	"os"
	"log"
	"strings"
	"strconv"
)

func main() {
	// Read input from input.txt 
	input, err := os.ReadFile("/Users/poomyimyuean/Desktop/Poomkun/Hub/Code/Competitive/Advent-of-Code/2021/day01/solution/input.txt")
	if err != nil {
		log.Fatal(err)
	}

	// Convert input to array.
	inputString := string(input)
	inputArray := strings.Split(inputString, "\n")

	

	// Map to the array of the different values.
	var diff []int
	for i := 1; i < len(inputArray); i++ {
		previousvalue, err := strconv.Atoi(inputArray[i - 1])
		if err != nil {
			log.Fatal(err)
		}

		nextvalue, err := strconv.Atoi(inputArray[i])
		if err != nil {
			log.Fatal(err)
		}

		diffvalue := nextvalue - previousvalue
		diff = append(diff, diffvalue)
	}

	// Count the positive value. 
	positiveCount := 0
	for i := 0; i < len(diff); i++ {
		if(diff[i] > 0) {
			positiveCount++
		}
	}

	fmt.Println(positiveCount)  
} 