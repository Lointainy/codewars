// https://www.codewars.com/kata/52f3149496de55aded000410

/*
Description:

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
*/

const sumDigits = (number) => {
	let numToString = Math.abs(number).toString()
	let res = 0

	for (let i = 0; i < numToString.length; i++) {
		res += Number(numToString.charAt(i))
	}

	return res
}

/* another solution code here */

