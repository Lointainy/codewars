// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

/*
Description:

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

const sum = (num) => (num.length < 1 ? 0 : num.reduce((a, b) => a + b))

/* another solution code here */

