package utils

import (
	"bufio"
	"fmt"
	"os"
)

func GetInput(problem string) string {
	filePath := "../../../input/" + problem + "/input.txt"
	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println("Error Opening File: ", err)
		return ""
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := scanner.Text()
		fmt.Println(line)
	}

	if err := scanner.Err(); err != nil {
		fmt.Println("Error reading File: ", err)
	}

	return ""
}
