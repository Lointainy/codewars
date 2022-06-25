// https://www.codewars.com/kata/54edbc7200b811e956000556

/*
Description:

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

const countSheeps = (arr) => {
    let count = 0;
    arr.map(x=>x === true ? count++ : '')
    return count
  }

/* another solution code here */

