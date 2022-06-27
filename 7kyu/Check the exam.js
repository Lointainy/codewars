// https://www.codewars.com/kata/5a3dd29055519e23ec000074

/*
Description:

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return
*/

const checkExam = (array1, array2) => {
    let score = array2.map((x, i) => x == '' ? 0 : x != array1[i] ? -1 : 4).reduce((a,b) => a + b)
    return score > 0 ? score : 0
}

/* another solution code here */

