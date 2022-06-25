// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

/*
Description:

Build a function that returns an array of integers from n to 1 where n>0.
*/

const reverseSeq = (n) => {
	let res = []
	for (let i = 1; i <= n; i++) {
		res.push(i)
	}
	return res.reverse()
}

/* another solution code here */

