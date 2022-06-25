// https://www.codewars.com/kata/5813d19765d81c592200001a

/*
Description:

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
*/

const dontGiveMeFive = (start, end) =>    Array(end - start + 1).fill().map((_, idx) => start + idx).filter((x) => !x.toString().includes('5')).length

/* another solution code here */
const dontGiveMeFive = (start, end) => {
    let arr = []
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
    arr = arr
      .map((x) => x.toString().split(''))
      .filter((x) => !x.includes('5'))
      .map((x) => Number(x.join('')))
    return arr.length
  }
