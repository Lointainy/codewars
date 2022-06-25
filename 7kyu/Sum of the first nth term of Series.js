// https://www.codewars.com/kata/555eded1ad94b00403000071

/*
Description:

Your task is to write a function which returns the sum of following series upto nth term(parameter).
*/

const SeriesSum = (n) => {
    let result = 0;
    let dnmtr = 1;

    for (let i = 0; i < n; i += 1) {
      if (i === 0) {
        result = 1;
      } else {
        dnmtr  += 3;
        result = result + (1 / dnmtr );
      }
    }

    return result.toFixed(2);
}

/* another solution code here */

