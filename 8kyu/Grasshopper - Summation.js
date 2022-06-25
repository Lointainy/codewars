// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

/*
Description:

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/

const summation = (n) => {
    let result = 0

    for(let i = 0; i <= n; i++) {
      result = result + i
    }

    return result
}

/* another solution code here */

