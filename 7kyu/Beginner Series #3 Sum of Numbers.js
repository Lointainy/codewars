// https://www.codewars.com/kata/55f2b110f61eb01779000053

/*
Description:

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/

const getSum = (a, b) => {
    let start = a > b ? b : a
    let end = b > a ? b : a

    return Array(end - start + 1).fill().map((_, idx) => start + idx).reduce((a, b) => a + b)
  }

/* another solution code here */

