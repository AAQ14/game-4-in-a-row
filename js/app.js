//i have to do an array for each column ✔
//i may introduce the first column as a class for example ✔
//i have to insert chips pictures and fix the size ✔
//i have to allow the chip to be fall into the empty div by style ✔
//i have to let the chip to be fall when a column being clicked && it must be at the empty string✔
// i have to let the chips being switched based on which turn is it✔
//increment the turn to be based on if(turn%==2)than(player1 turn)else than (player 2)✔
//replace the logic of else if with for statements and with a function✔
//creating winning combos array ✔
//implement if the game a tie ✔
//implement reset button✔
//implementing the css
//increase the size of the board array✔
//problem: if win is true than stop playing ✔
//problem2: if I win and clicked reset again the win condition not working again ✔
//problem3: Reset element after the board on the bottom\ ✔
//problem 4: drop chips problem- background
//problem 5: let the name of the game(h1) be sticky
//problem7: tie condition ✔



/*-------------------------------- Constants --------------------------------*/
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


/*---------------------------- Variables (state) ----------------------------*/
let turn = 0
let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let playerWin = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
//Array from means conveert the nodelist into an array
const column1 = Array.from(document.querySelectorAll('.column1'))
const column2 = Array.from(document.querySelectorAll('.column2'))
const column3 = Array.from(document.querySelectorAll('.column3'))
const column4 = Array.from(document.querySelectorAll('.column4'))
const column5 = Array.from(document.querySelectorAll('.column5'))
const column6 = Array.from(document.querySelectorAll('.column6'))
const column7 = Array.from(document.querySelectorAll('.column7'))
const column8 = Array.from(document.querySelectorAll('.column8'))
const boardelm = Array.from(document.querySelectorAll('.board'))
const parElm = document.querySelector('.message')
const resetElm = document.querySelector('.restart')


/*-------------------------------- Functions --------------------------------*/
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

//win condition is true if the chips match one the winning combos arrays
function win() {
    console.log("In win")
    winningCombos.forEach(combo => {
        if (board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]] && board[combo[0]] === board[combo[3]] &&
            board[combo[1]] === board[combo[2]] && board[combo[1]] === board[combo[3]] &&
            board[combo[2]] === board[combo[3]] && board[combo[0]] !== '' && board[combo[1]] !== '' && board[combo[2]] !== '' && board[combo[3]] !== '') {
            // alert("win!")


            return playerWin = true
            
        } else if (board.every((block) => block != "")) {
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

function reset() {
    removeChip(column1)
    removeChip(column2)
    removeChip(column3)
    removeChip(column4)
    removeChip(column5)
    removeChip(column6)
    removeChip(column7)
    removeChip(column8)
    playerWin = false
    parElm.style.color = "#BA487F";
    parElm.textContent = "Enjoy the game😊"
    board =  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

}

function removeChip(col) {
    for (let i = 0; i <= col.length; i++) {
        console.log(col[i])
        if (col[i]?.classList?.contains('yellowChip'))
            col[i].classList.remove('yellowChip')
        else if (col[i]?.classList?.contains('redChip'))
            col[i].classList.remove('redChip')

    }
}
/*----------------------------- Event Listeners -----------------------------*/
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
column2.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column2 clicked")
        play(column2)
        win()
        displayMessage()
         }
    })
})
column3.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column 3 clicked")
        play(column3)
        win()
        displayMessage()
         }
    })
})
column4.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column 4 clicked")
        play(column4)
        win()
        displayMessage()
         }
    })
})
column5.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column 5 clicked")
        play(column5)
        win()
        displayMessage()
         }
    })
})
column6.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column 6 clicked")
        play(column6)
        win()
        displayMessage()
         }
    })
})
column7.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column 7 clicked")
        play(column7)
        win()
        displayMessage()
         }
    })
})
column8.forEach((item) => {
    item.addEventListener('click', event => {
         if(!playerWin){
        console.log("column 8 clicked")
        play(column8)
        win()
        displayMessage()
         }
    })
})

resetElm.addEventListener('click', event => {
    reset()
})