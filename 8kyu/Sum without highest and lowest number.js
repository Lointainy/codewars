// https://www.codewars.com/kata/576b93db1129fcf2200001e6

/*
Description:

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
*/

const sumArray = (arr) => arr == null || arr.length < 3 ? 0 : arr.sort((a,b) => a - b).slice(1, arr.length - 1).reduce((a,b) => a + b)

/* another solution code here */
function sumArray(array) {
    let sum = 0

    if (!array || array.length <= 1) {
      return 0
    }

    let min = array[array.length - 1]
    let max = array[array.length - 1]

    for (let i = 0; i < array.length; i++) {
      array[i] < min ? (min = array[i]) : ''
      array[i] > max ? (max = array[i]) : ''
      sum += array[i]
    }

    sum = sum - min - max

    return sum
  }
