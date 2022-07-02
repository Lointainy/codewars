// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

/*
Description:

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
*/

const removeDuplicateWords = (s) => Array.from(new Set(s.split(' '))).join(' ')

/* another solution code here */

