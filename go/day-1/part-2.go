package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"

	"aoc-2021/internals/utils"
)

func parseInt(value string) int {
	num, err := strconv.ParseInt(value, 10, 64)
	utils.Check(err)

	return int(num)
}

func main() {
	file, err := os.ReadFile("./data")
    utils.Check(err)
	
	data := strings.Split(string(file), "\n")

	num1 := parseInt(data[0])
	num2 := parseInt(data[1])
	num3 := parseInt(data[2])

	var sums []int
	sums = append(sums, num1 + num2 + num3)

	result := 0

	for i:= 3; i < len(data); i++ {
		if (i + 3 > len(data)) {
			break
		}

		num1 := parseInt(data[i])
		num2 := parseInt(data[i + 1])
		num3 := parseInt(data[i + 2])
		
		fmt.Print(num3)

		sum := num1 + num2 + num3

		if (sum > sums[len(sums) - 1]) {
			result += 1
		}

		sums = append(sums, sum)
	}

	fmt.Print("result: ", result)
}