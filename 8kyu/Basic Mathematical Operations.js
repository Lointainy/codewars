// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

/*
Description:

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

const basicOp = (o, v1, v2) => eval(v1 + o + v2)

/* another solution code here */
const basicOp = (o, v1, v2) => o == '-' ? v1 - v2 : o == '+' ? v1 + v2 : o == '*' ? v1 * v2 : o == '/' ? v1 / v2 :''
