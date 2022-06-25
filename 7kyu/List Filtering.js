// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

/*
Description:

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

const filter_list = (l) => l.filter(Number.isInteger)

/* another solution code here */
const filter_list = (l) => l.filter(x => typeof x == "number")
