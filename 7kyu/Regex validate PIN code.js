// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

/*
Description:

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

const validatePIN = (pin) => {
    let result = false
    let pinLenght = pin.split('').length

    if (pinLenght == 4 || pinLenght == 6) {
      result = pin.replace(/[0-9]/g, '').length == 0 ? true : false
    }

    return result
}

/* another solution code here */

