// https://www.codewars.com/kata/56747fd5cb988479af000028

/*
Description:

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

const getMiddle = (str) => {
    let length = str.split('').length
    let size = Math.round(length / 2)
    return str.split('').slice(size - 1, length - size + 1).join('')
}

/* another solution code here */

