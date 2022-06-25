// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

/*
Description:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
*/

const openOrSenior = (data) => {
    let result = []

    for (let i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        result.push('Senior')
      } else result.push('Open')
    }

    return result
  }

/* another solution code here */

