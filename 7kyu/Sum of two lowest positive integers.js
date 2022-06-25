// https://www.codewars.com/kata/558fc85d8fd1938afb000014

/*
Description:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
*/

const sumTwoSmallestNumbers = (num) => num.sort((a,b)=> a - b).slice(0, 2).reduce((a,b) => a + b)

/* another solution code here */

