// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

/*
Description:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
*/

const DNAStrand = (dna) =>  dna.split('').map(x => x == 'A' ? 'T' : x == 'T' ? 'A' : x == 'C' ? 'G' : x == 'G' ? 'C' : '').join('')

/* another solution code here */

