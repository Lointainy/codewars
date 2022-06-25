// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

/*
Description:

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/

const solution = (str, end) => str.split('').reverse().slice(0, end.length).reverse().join('') == end ? true : false

/* another solution code here */

