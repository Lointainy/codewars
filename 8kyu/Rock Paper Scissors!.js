// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

/*
Description:

Let's play! You have to return which player won! In case of a draw return Draw!.
*/

const rps = (p1, p2) => {
    const symbol = (symbol) => symbol.split('').slice(0, 1).join('')

    // player 1
    if (symbol(p1) === 's' && symbol(p2) === 'p')
      return 'Player 1 won!'
    if (symbol(p1) === 'p' && symbol(p2) === 'r')
      return 'Player 1 won!'
    if (symbol(p1) === 'r' && symbol(p2) === 's')
      return 'Player 1 won!'

    //player 2
    if (symbol(p2) === 's' && symbol(p1) === 'p')
      return 'Player 2 won!'
    if (symbol(p2) === 'p' && symbol(p1) === 'r')
      return 'Player 2 won!'
    if (symbol(p2) === 'r' && symbol(p1) === 's')
      return 'Player 2 won!'

    return 'Draw!'
  }

/* another solution code here */

