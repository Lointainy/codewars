// https://www.codewars.com/kata/539ee3b6757843632d00026b

/*
Description:

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/

const capitals = (word) => word.split('').map((x,i) => x == x.toUpperCase() ? i : '*').filter(x => x != '*' )

/* another solution code here */

