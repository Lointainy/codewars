// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

/*
Description:

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
*/

const minValue = (v) => Number([...new Set(v)].sort().join(''))

/* another solution code here */
const minValue = (v) => {
    let sortedArr = [...new Set(v.join(''))].sort((a,b) => a - b)
    let result = ''

    for(let i = 0; i < sortedArr.length; i++) {
      result += sortedArr[i]
    }

    return Number(result)
  }
