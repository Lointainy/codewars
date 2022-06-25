// https://www.codewars.com/kata/544aed4c4a30184e960010f4

/*
Description:

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/

const divisors = (int) => {
    let result = []
    let prime = ''

    for(let i = 2; i < int; i++) {
      Number.isInteger(int / i) != false ? result.push(i) : prime = `${int} is prime`
    }

    return result.length > 1 ? result : prime
  }

/* another solution code here */

