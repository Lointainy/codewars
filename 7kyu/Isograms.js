// https://www.codewars.com/kata/54ba84be607a92aa900000f1

/*
Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

const isIsogram = (str) => Array.from(new Set(str.toLowerCase())).length === str.length ? true : false

/* another solution code here */

