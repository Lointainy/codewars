// https://www.codewars.com/kata/577a98a6ae28071780000989

/*
Description:

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

const min = (list) => list.reduce((a, b) => Math.min(a, b))
const max = (list) => list.reduce((a, b) => Math.max(a, b))

/* another solution code here */

