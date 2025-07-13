//i have to do an array for each column ✔
//i may introduce the first column as a class for example ✔
//i have to insert chips pictures and fix the size ✔
//i have to allow the chip to be fall into the empty div by style
//i have to let the chip to be fall when a column being clicked && it must be at the empty string✔
// i have to let the chips being switched based on which turn is it✔
//increment the turn to be based on if(turn%==2)than(player1 turn)else than (player 2)✔
//replace the logic of else if with for statements and with a function✔
//creating winning combos array ✔
//implement if the game a tie ✔
//implement reset button
//implementing the css


/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [3, 6, 9, 12],
    [0, 5, 10, 15],
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
]


/*---------------------------- Variables (state) ----------------------------*/
let turn = 0
let blocker = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let playerWin = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
//Array from means conveert the nodelist into an array
const column1 = Array.from(document.querySelectorAll('.column1'))
const column2 = Array.from(document.querySelectorAll('.column2'))
const column3 = Array.from(document.querySelectorAll('.column3'))
const column4 = Array.from(document.querySelectorAll('.column4'))
const blockerelm = document.querySelector('.blocker')
const parElm = document.querySelector('.message')


/*-------------------------------- Functions --------------------------------*/
function play(column) {

    for (let i = 3; i <= column.length; i--) {
        if (column[i].innerHTML === '') {
            if (turn % 2 === 0) {
                console.log(i)
                column[i].classList.add('redChip')
                turn++
                blocker[Number(column[i].id)] = "red"
                column[i] = 'red'
                // console.log(column)
                // console.log(blocker)
                return
            }
            else {
                column[i].classList.add('yellowChip')
                turn++
                blocker[Number(column[i].id)] = "yellow"
                column[i] = 'yellow'
                console.log(blocker)
                return
            }
        }
    }
}

//win condition is true if the chips match one the winning combos arrays
function win() {
    winningCombos.forEach(combo => {
        if (blocker[combo[0]] === blocker[combo[1]] && blocker[combo[0]] === blocker[combo[2]] && blocker[combo[0]] === blocker[combo[3]] &&
            blocker[combo[1]] === blocker[combo[2]] && blocker[combo[1]] === blocker[combo[3]] &&
            blocker[combo[2]] === blocker[combo[3]] && blocker[combo[0]] !== '' && blocker[combo[1]] !== '' && blocker[combo[2]] !== '' && blocker[combo[3]] !== '') {
            alert("win!")
            return playerWin = true
        } else if(blocker.every((block)=>block != "")){
            return tie = true
        }

    })
}

function displayMeassge() {
    if (playerWin === true) {
        if (turn % 2 === 0 )
            parElm.textContent = "congratulation! yellow player wins:)"
        else if (turn % 2 === 1)
            parElm.textContent = "congratulation! red player wins:)"
    }else if(tie === true) {
            parElm.textContent = "it's a tie! try again:)"
        }
}

/*----------------------------- Event Listeners -----------------------------*/
column1.forEach((item) => {
    item.addEventListener('click', event => {
        console.log("column1 clicked")
        play(column1)
        win()
        displayMeassge()
    })
})
column2.forEach((item) => {
    item.addEventListener('click', event => {
        console.log("column2 clicked")
        play(column2)
        win()
        displayMeassge()
    })
})
column3.forEach((item) => {
    item.addEventListener('click', event => {
        console.log("column 3 clicked")
        play(column3)
        win()
        displayMeassge()
    })
})
column4.forEach((item) => {
    item.addEventListener('click', event => {
        console.log("column 4 clicked")
        play(column4)
        win()
        displayMeassge()
    })
})
