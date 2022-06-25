// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

/*
Description:

Given a string str, reverse it and omit all non-alphabetic characters.
*/

const reverseLetter = (str) => str.replace(/[^a-z]/gi,'').split('').reverse().join('')

/* another solution code here */

