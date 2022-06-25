// https://www.codewars.com/kata/56b1f01c247c01db92000076

/*
Description:

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

const doubleChar = (str) => str.split('').map(x => x + x).join('')

/* another solution code here */

