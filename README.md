<h1 align="center">Project 1: 4 in a row</h1>

![screenshot](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmN0MXIwNmo0OXhncDQzbzM5cjlkcnN4eWJwenMyYjl5NnZpODM2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hDxPg6vhjpaG2gxXYm/giphy.gif)

# Introduction 
As part of unit 1"Front-end development" at GA, I was assign to develop an interactive game project with applied styling. I chose to create 4 in a row.

# List of contents
* [Introduction](#Introduction)
* [Project Brief](#Project-Brief)
* [Technologies](#Technologies)
* [Attributions](#Attributions)
* [Game Mechanics](#Game-Mechanics)
   * [Drop Chip](#Drop-Chip)
   * [winning combos](#Winning-Combos)
   * [win](#win)
   * [tie](#tie)
* [Conclusion](#Conclusion)

# Project Brief
Four in a row is two-player gamethat challenges the player to connect four dropped chips in a single line.

* Use HTML, CSS, and Javascript.
* Array for each cloumn to drop the chip on the empty circle.
* Change the turn of the player.
* Insert chips pictures and fix the size.

#  Technologies
* HTML
* CSS
* Java Script
* Git

# Attributions
* The chips images used were cropped from https://www.ebay.com.au/itm/267085710737.
* Color Palletes https://colorhunt.co/.

# Game Mechanics
## Drop Chip
click event listeners, so based on which array the user cliked if there is an empty index drop the chip on the lower indexed circle. This is one of the event listeners for the first column so if win still false run the play function. To call the play function an argument must be passed and this argument will be the column to go throw it and if all conditions are ture a new class list added to the selected cell. These classes applying background which will be shown on the board.
```javascript
column1.forEach((item) => {
    item.addEventListener('click', event => {
        if(!playerWin){
        console.log("column1 clicked")
        play(column1)
        win()
        displayMessage()
        }
       
    })
})
function play(column) {

    for (let i = 7; i <= column.length; i--) {
        if (!column[i].classList.contains('redChip') && !column[i].classList.contains('yellowChip')) {
            if (turn % 2 === 0) {
                column[i].classList.add('redChip')
                turn++
                board[Number(column[i].id)] = "red"
                return
            }
            else {
                column[i].classList.add('yellowChip')
                turn++
                board[Number(column[i].id)] = "yellow"
                return
            }
        }
    }
}
```

## winning combos
Stored all possible winning combinations in arrays into a parent array.
```javascript
const winningCombos = [
    [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [24, 32, 40, 48], [32, 40, 48, 56],
    [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [25, 33, 41, 49], [33, 41, 49, 57],
    [2, 10, 18, 26], [10, 18, 26, 34], [18, 26, 34, 42], [26, 34, 42, 50], [34, 42, 50, 58],
    [3, 11, 19, 27], [11, 19, 27, 35], [19, 27, 35, 43], [27, 35, 43, 51], [35, 43, 51, 59],
    [4, 12, 20, 28], [12, 20, 28, 36], [20, 28, 36, 44], [28, 36, 44, 52], [36, 44, 52, 60],
    [5, 13, 21, 29], [13, 21, 29, 37], [21, 29, 37, 45], [29, 37, 45, 53], [37, 45, 53, 61],
    [6, 14, 22, 30], [14, 22, 30, 38], [22, 30, 38, 46], [30, 38, 46, 54], [38, 46, 54, 62],
    [7, 15, 23, 31], [15, 23, 31, 39], [23, 31, 39, 47], [31, 39, 47, 55], [39, 47, 55, 63],
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7],
    [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [11, 12, 13, 14], [12, 13, 14, 15],
    [16, 17, 18, 19], [17, 18, 19, 20], [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
    [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29], [27, 28, 29, 30], [28, 29, 30, 31],
    [32, 33, 34, 35], [33, 34, 35, 36], [34, 35, 36, 37], [35, 36, 37, 38], [36, 37, 38, 39],
    [40, 41, 42, 43], [41, 42, 43, 44], [42, 43, 44, 45], [43, 44, 45, 46], [44, 45, 46, 47],
    [48, 49, 50, 51], [49, 50, 51, 52], [50, 51, 52, 53], [51, 52, 53, 54], [52, 53, 54, 55],
    [56, 57, 58, 59], [57, 58, 59, 60], [58, 59, 60, 61], [59, 60, 61, 62], [60, 61, 62, 63],
    [56, 49, 42, 35], [49, 42, 35, 28], [42, 35, 28, 21], [35, 28, 21, 14], [28, 21, 14, 7],
    [57, 50, 43, 36], [50, 43, 36, 29], [43, 36, 29, 22], [36, 29, 22, 15],
    [58, 51, 44, 37], [51, 44, 37, 30], [44, 37, 30, 23],
    [59, 52, 45, 38], [52, 45, 38, 31],
    [60, 53, 46, 39],
    [48, 41, 34, 27], [41, 34, 27, 20], [34, 27, 20, 13], [27, 20, 13, 6],
    [40, 33, 26, 19], [33, 26, 19, 12], [26, 19, 12, 5],
    [32, 25, 18, 11], [25, 18, 11, 4],
    [24, 17, 10, 3],
    [32, 41, 50, 59],
    [24, 33, 42, 51], [33, 42, 51, 60],
    [16, 25, 34, 43], [25, 34, 43, 52], [34, 43, 52, 61],
    [8, 17, 26, 35], [17, 26, 35, 44], [26, 35, 44, 53], [35, 44, 53, 62],
    [0, 9, 18, 27], [9, 18, 27, 36], [18, 27, 36, 45], [27, 36, 45, 54], [36, 45, 54, 63],
    [1, 10, 19, 28], [10, 19, 28, 37], [19, 28, 37, 46], [28, 37, 46, 55],
    [2, 11, 20, 29], [11, 20, 29, 38], [20, 29, 38, 47],
    [3, 12, 21, 30], [12, 21, 30, 39],
    [4, 13, 22, 31]

]
```
## win
Initialized a variable playerWin to false and whenver yellow or red chips match one of the winnning arrays then change the the playerWin variable to true and display the appropriate message.
```javascript
function win() {
    console.log("In win")
    winningCombos.forEach(combo => {
        if (board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]] && board[combo[0]] === board[combo[3]] &&
            board[combo[1]] === board[combo[2]] && board[combo[1]] === board[combo[3]] &&
            board[combo[2]] === board[combo[3]] && board[combo[0]] !== '' && board[combo[1]] !== '' && board[combo[2]] !== '' && board[combo[3]] !== '') {
            // alert("win!")


            return playerWin = true
            
        } else if (board.every((cir) => cir != "")) {
            return tie = true
        }

    })
}
function displayMessage() {
    if (playerWin === true) {
        if (turn % 2 === 0) {
            parElm.style.color = "#DDA853";
            parElm.textContent = "congratulation! yellow player wins🥳👏"
        }

        else if (turn % 2 === 1) {
            parElm.style.color = "#B8001F";
            parElm.textContent = "congratulation! red player wins🥳👏"
        }
    } else if (tie === true) {
        parElm.style.color = "#7F8CAA";
        parElm.textContent = "it's a tie! try again:)😊"
    }
}

```
## tie
As well for tie, if all the divs on the board has filled and no winner the true will be assigned to the tie variable. As it shown in the above win() function if all the if it doesn't return win equal true and the array of the board is full than tie will be equal to true and display the appropriate message.

# Future work
I want to add an option for the player to play with the computer. Also, I want the game have multi levels.

# Conclusion
This game have many challenges, I enjoyed solving the problems and it was so fun to create this game. As well as I learned new things in CSS dring the development. 
