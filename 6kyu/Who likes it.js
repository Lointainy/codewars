// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

/*
Description:

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
*/

const likes = (names) => {
	let msg = 'no one likes this'
	if (names.length == 1) {
		msg = `${names[0]} likes this`
	} else if (names.length == 2) {
		msg = `${names[0]} and ${names[1]} like this`
	} else if (names.length == 3) {
		msg = `${names[0]}, ${names[1]} and ${names[2]} like this`
	} else if (names.length > 3) {
		msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	} else msg
	return msg
}

/* another solution code here */

