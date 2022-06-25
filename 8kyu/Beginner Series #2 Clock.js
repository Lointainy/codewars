// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

/*
Description:

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000

/* another solution code here */

