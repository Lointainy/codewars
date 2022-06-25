// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

/*
Description:

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
*/

const getGrade = (s1, s2, s3) => (s1 + s2 + s3) / 3 >= 90 ? 'A' : (s1 + s2 + s3) / 3 >= 80 ? 'B' : (s1 + s2 + s3) / 3 >= 70 ? 'C' : (s1 + s2 + s3) / 3 >= 60 ? 'D' : 'F'

/* another solution code here */
const getGrade = (s1, s2, s3) => {
    let ar = []
    let result = ''

    ar.push(s1, s2, s3)
    ar.reduce((a, b) => (result = a + b))

    if (result / 3 >= 90) result = 'A'
    if (result / 3 >= 80) result = 'B'
    if (result / 3 >= 70) result = 'C'
    if (result / 3 >= 60) result = 'D'
    if (result / 3 < 60) result = 'F'

    return result
  }
