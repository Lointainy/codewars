// https://www.codewars.com/kata/5842df8ccbd22792a4000245

/*
Description:

You will be given a number and you will need to return it as a string in Expanded Form. For example:
*/

const expandedForm = (num) => {
    num = num.toString().split('')

    let arr = []
    let numLength = []
    let numCount = []
    let result = []

    for (let i = 0; i < num.length; i++) {
      numLength.push(num.length - (i + 1))
      arr.push(num[i])
    }

    arr.reverse()

    for (let i = 0; i < numLength.length; i++) {
      numCount.push('1')
      for (let k = 0; k < i; k++) {
        numCount[i] += 0
      }
    }

    for (let i = 0; i < arr.length; i++) {
      result.push(Number(arr[i] * numCount[i]))
    }

    result = result
      .reverse()
      .filter((x) => x != 0)
      .join(' + ')

    return result
  }

/* another solution code here */

