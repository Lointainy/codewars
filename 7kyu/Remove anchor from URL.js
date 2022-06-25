// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

/*
Description:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

const removeUrlAnchor = (url) => {
    let arr = [...url]
    let result = ''

    for (let el of arr) {
      if (el !== "#") {
        result += el
      } else break
    }

    return result
}

/* another solution code here */

