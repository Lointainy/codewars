// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

/*
Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
*/

const abbrevName = (name) => name.toUpperCase().split(' ').map(x => x.split('').slice(0,1)).join('.')

/* another solution code here */

