// https://www.codewars.com/kata/59342039eb450e39970000a6

/*
Description:

Given a number n, return the number of positive odd numbers below n, EASY!
*/

const oddCount = (n) => Math.floor(n / 2)

/* memmory lost cycle bad idea

let arr = []

for (let i = 0; i < n; i++) {
    if (i % 2 == 1) {
    arr.push(i)
    }
}
return arr.length

*/

/* another solution code here */

