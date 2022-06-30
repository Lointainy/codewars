// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

/*
Description:

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
*/

const sumOfMinimums = (arr) => arr.map((x) => Math.min(...x)).reduce((a, b) => a + b)

/* another solution code here */

