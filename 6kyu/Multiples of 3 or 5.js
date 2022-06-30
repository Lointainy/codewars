// https://www.codewars.com/kata/514b92a657cdc65150000006

/*
Description:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

const solution = (num) => (num <= 3 ? 0 : [...Array(num).keys()].filter((x) => (x % 3 == 0 || x % 5 == 0 ? x : '')).reduce((a, b) => a + b))

/* another solution code here */

