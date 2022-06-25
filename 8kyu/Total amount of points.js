// https://www.codewars.com/kata/5bb904724c47249b10000131

/*
Description:

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
*/

const points = (games) => {
    let count = 0
    games
      .map((x) => x.split(':'))
      .map((x) =>
        x.reduce((a, b) => {
          if (a > b) count += 3
          if (a < b) count += 0
          if (a == b) count += 1
        })
      )
    return count
  }

/* another solution code here */

