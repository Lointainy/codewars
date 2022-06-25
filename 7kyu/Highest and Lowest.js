// https://www.codewars.com/kata/554b4ac871d6813a03000035

/*
Description:

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

const highAndLow = (num) => {
	let min = 0
	let max = 0
	const maxAr = num
		.split(' ')
		.map((i) => Number(i))
		.reduce((a, b) => Math.max(a, b))
	const minAr = num
		.split(' ')
		.map((i) => Number(i))
		.reduce((a, b) => Math.min(a, b))
	return `${maxAr} ${minAr}`
}

/* another solution code here */

