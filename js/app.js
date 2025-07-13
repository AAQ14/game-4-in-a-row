//i have to do an array for each column ✔
//i may introduce the first column as a class for example ✔
//i have to insert chips pictures and fix the size ✔
//i have to allow the chip to be fall into the empty div by style
//i have to let the chip to be fall when a column being clicked && it must be at the empty string✔
// i have to let the chips being switched based on which turn is it✔
//increment the turn to be based on if(turn%==2)than(player1 turn)else than (player 2)✔
//replace the logic of else if with for statements and with a function


/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let turn = 0


/*------------------------ Cached Element References ------------------------*/
//Array from means conveert the nodelist into an array
const column1 = Array.from(document.querySelectorAll('.column1'))
const column2 = Array.from(document.querySelectorAll('.column2'))
const column3 = Array.from(document.querySelectorAll('.column3'))
const column4 = Array.from(document.querySelectorAll('.column4'))
const blocker = document.querySelector('.blocker')

let idx = 1

/*-------------------------------- Functions --------------------------------*/
function play(column) {
    for (let i = 3; i <= column.length; i--) {
        if (column[i].innerHTML === '') {
            if (turn % 2 === 0) {
                column[i].classList.add('redChip')
                turn++
                column[i] = ' '
                break
            }
            else {
                column[i].classList.add('yellowChip')
                turn++
                column[i] = ' '
                break
            }
        }
    }
}

/*----------------------------- Event Listeners -----------------------------*/
column1.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column1 clicked")
        play(column1)
    })
})
column2.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column2 clicked")
        play(column2)
    })
})
column3.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 3 clicked")
        play(column3)
    })
})
column4.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 4 clicked")
        play(column4)
    })
})
