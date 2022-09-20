package main

import "fmt"

func main() {
	// sum_product := nums_1to10()
	// fmt.Println(nums_1to10())
	fmt.Println("Hello WOrld")

	// var myArray[3] string
	var myarey = [3]string{"first", "second", "third"}
	myarey[2] = "Another"
	fmt.Println(len(myarey))
	fmt.Println(myarey[2])
	myArray := myarey
	fmt.Println(myArray[1])
}
