// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

/*
Description:

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

const longest = (s1, s2) => Array.from(new Set(s1 + s2)).sort().join('')

/* another solution code here */
const longest = (s1, s2) => {
    let array = (s1 + s2).split('')

    array = array.filter((el, i) => array.indexOf(el) === i).sort().join('')

    return array
  }
