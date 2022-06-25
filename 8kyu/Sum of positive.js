// https://www.codewars.com/kata/5715eaedb436cf5606000381

/*
Description:

You get an array of numbers, return the sum of all of the positives ones.
*/

const positiveSum = (arr) => arr.filter((x) => x > 0).length == 0 ? 0 : arr.filter((x) => x > 0).reduce((a, b) => a + b)

/* another solution code here */

