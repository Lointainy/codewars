// https://www.codewars.com/kata/5949481f86420f59480000e7

/*
Description:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

const oddOrEven = (arr) => arr.length == 0 ? 'even' : arr.reduce((a, b) => a + b) % 2 == 0 ? 'even' : 'odd'

/* another solution code here */

