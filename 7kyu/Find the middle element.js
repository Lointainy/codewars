// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

/*
Description:

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

const gimme = (triplet) => triplet.findIndex((x) => x == Number([...triplet].sort((a, b) => a - b).filter((_, i) => i == 1)))

/* another solution code here */

