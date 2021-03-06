// https://www.codewars.com/kata/5513795bd3fafb56c200049e

/*
Description:

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).
*/

const countBy = (x, n) => {
    let ar = []
    for(let i = 1; i <= n; i++) {
      ar.push(x * i)
    }
    return ar
  }

/* another solution code here */

