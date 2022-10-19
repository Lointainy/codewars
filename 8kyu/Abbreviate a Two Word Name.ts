// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

/*
Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
*/

export const abbrevName = (name: string): string => {
	return name
		.toUpperCase()
		.split(' ')
		.map((item) => item.slice(0, 1))
		.join('.')
}

/* another solution code here */

