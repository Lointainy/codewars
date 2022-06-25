// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

/*
Description:

This time no story, no theory. The examples below show you how to write function accum:
*/

const accum = (s) =>
    s.split('').map((x) => x.toUpperCase())
    .map((x, i) => {
        for (let k = 0; k < i; k++) {
            x += x[k].toLowerCase()
        }
        return x
    }).join('-')

/* another solution code here */

