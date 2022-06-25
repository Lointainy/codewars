// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

/*
Description:

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

const isAnagram = (a, b) => a.toLowerCase().split('').sort().join('') !=  b.toLowerCase().split('').sort().join('') ? false : true

/* another solution code here */

