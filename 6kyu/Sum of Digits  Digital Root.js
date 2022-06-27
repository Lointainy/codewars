// https://www.codewars.com/kata/541c8630095125aba6000c00

/*
Description:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

/* code here */

/* another solution code here */
const digital_root = (n) => {
    const numToArr = (num) => num.toString().split('').map((x) => Number(x)) // create array from number

    let arr = numToArr(n)

    let length = arr.length

    let cycleResult = 0

    for (let i = 0; i <= length; i++) { // the cycle is valid as long as its length is not equal to 1
      if (length > 1) { // is performed only when the length = 1
            for (let i = 0; i < length; i++) {
            cycleResult += arr[i]
            }

            arr = numToArr(cycleResult) // all values are written to the array

            length = arr.length // overwrite length to continue the cycle

            cycleResult = 0 // zeroing of the result
        }
    }
    return Number(arr.join(''))
}
