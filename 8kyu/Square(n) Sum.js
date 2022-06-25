// https://www.codewars.com/kata/515e271a311df0350d00000f

/*
Description:

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

const squareSum = (num) => num.length != 0 ? num.map(x => Math.pow(x, 2)).reduce((a,b) => a + b) : 0

/* another solution code here */

