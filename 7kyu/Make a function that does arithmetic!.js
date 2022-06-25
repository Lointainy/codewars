// https://www.codewars.com/kata/583f158ea20cfcbeb400000a

/*
Description:

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/

const arithmetic = (a, b, o) => o == "add" ? a + b : o == "subtract" ? a - b : o == "multiply" ? a * b : o == "divide" ? a / b : ''

/* another solution code here */

