// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

/*
Description:

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
*/

const sortByLength = (array) => array.sort((a, b) => a.length - b.length)

/* another solution code here */

