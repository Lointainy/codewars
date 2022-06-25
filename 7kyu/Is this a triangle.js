// https://www.codewars.com/kata/56606694ec01347ce800001b

/*
Description:

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

const isTriangle = (a,b,c) => a <= 0 || b <= 0 || c <= 0 ? false : a + b > c && a + c > b && b + c > a ? true : false

/* another solution code here */
