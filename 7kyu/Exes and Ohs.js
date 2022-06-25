// https://www.codewars.com/kata/55908aad6620c066bc00002a

/*
Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

const XO = (str) => [...str].map((x) => x.toLowerCase()).filter((x) => x == 'x').length == [...str].map((x) => x.toLowerCase()).filter((x) => x == 'o').length

/* another solution code here */

