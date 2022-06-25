// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

/*
Description:

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.
*/

const findSum = (n) => {
    let arr = []
    for (let i = 0; i <= n; i++) {
      if (i != 0 && (i % 3 == 0 || i % 5 == 0)) {
        arr.push(i)
      }
    }
    return arr.reduce((a, b) => a + b)
  }

/* another solution code here */

