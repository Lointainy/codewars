// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

/*
Description:

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/

const findNextSquare = (sq) => Number.isInteger(Math.sqrt(sq)) != false ? Math.pow(Math.sqrt(sq) + 1, 2) : -1

/* another solution code here */

