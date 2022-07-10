// https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript

/*
Description:

https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript
*/

/* code here */
const twoSum = (num, target) => {
	for (let i = 0; i < num.length; i++) {
		for (let j = i + 1; j < num.length; j++) {
			if (num[i] + num[j] === target) return [i, j]
		}
	}

	return null
}

/* another solution code here */

