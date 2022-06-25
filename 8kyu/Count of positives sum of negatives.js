// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

/*
Description:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

const countPositivesSumNegatives = (arr) => {
    let count = 0
    let sum = 0
    let result = []
    if (arr === [] || arr === null || arr.length == 0) {
      result = []
    } else {
      arr.map((a) => (a > 0 ? count++ : ''))
      arr.map((a) => (a < 0 ? (sum += a) : ''))
      result.push(count, sum)
    }

    return result
  }

/* another solution code here */

