// https://www.codewars.com/kata/5208f99aee097e6552000148

/*
Description:

Complete the solution so that the function will break up camel casing, using a space between words.
*/

const solution = (string) => string.split(/(?=[A-Z])/).join(' ')

/* another solution code here */

