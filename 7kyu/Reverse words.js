// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

/*
Description:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

const reverseWords = (str) => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')

/* another solution code here */

