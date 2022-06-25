// https://www.codewars.com/kata/586f6741c66d18c22800010a

/*
Description:

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0
*/

const sequenceSum = (start, end, step) => {
    let result = 0

    for(let i = start; i <= end; i += step) {
      result += i
    }

    return result
}

/* another solution code here */

