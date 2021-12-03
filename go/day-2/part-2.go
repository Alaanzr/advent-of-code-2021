package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"

	"aoc-2021/internals/utils"
)

func main() {
    data, err := os.ReadFile("./data")
    utils.Check(err)
	
	lines := strings.Split(string(data), "\n")

	var depth int64 = 0
	var horizontal int64 = 0
	var aim int64 = 0

	for i := 0; i < len(lines); i++ {
		line := lines[i]
		split := strings.Split(line, " ")
		
		action := split[0]

		number, err := strconv.ParseInt(split[1], 10, 64)
		utils.Check(err)

		if (action == "forward") {
			horizontal += number;
			depth += aim * number;
		}

		if (action == "down") {
			aim += number;
		}

		if (action == "up") {
			aim -= number;
		}
	}

	fmt.Print("result: ", horizontal * depth)
}