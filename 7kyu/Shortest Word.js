// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

/*
Description:

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const findShort = (s) =>s.split(' ').map((x) => x.split('').length).reduce((a, b) => Math.min(a, b))

/* another solution code here */

