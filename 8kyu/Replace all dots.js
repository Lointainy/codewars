// link

/*
Description:

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
*/

const replaceDots = (str) => str.replace(/\./g, '-')

/* another solution code here */
const replaceDots = (str) => str.split('.').join('-')
