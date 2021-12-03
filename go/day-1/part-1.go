package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"

	"aoc-2021/internals/utils"
)

func main() {
	file, err := os.ReadFile("./data")
    utils.Check(err)
	
	data := strings.Split(string(file), "\n")

	var result int64 = 0
	var prev int64 = 0

	for i:= 1; i < len(data); i++ {
		datum, err := strconv.ParseInt(data[i], 10, 64)
		utils.Check(err)

		if (datum > prev) {
			result += 1
		}

		prev = datum
	}

	fmt.Print("result: ", result)
}