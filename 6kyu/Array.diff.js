// https://www.codewars.com/kata/523f5d21c841566fde000009

/*
Description:

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order
*/

const arrayDiff = (a, b) => {
	let filteredArr = []
	let arr = a
	for (let i = 0; i < b.length; i++) {
		arr = arr.filter((x) => x != b[i])
	}
	return arr
}

/* another solution code here */

