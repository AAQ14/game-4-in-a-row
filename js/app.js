//i have to do an array for each column ✔
//i may introduce the first column as a class for example ✔
//i have to insert chips pictures and fix the size ✔
//i have to allow the chip to be fall into the empty div by style
//i have to let the chip to be fall when a column being clicked && it must be at the empty string
// i have to let the chips being switched based on which turn is it
//increment the turn to be based on if(turn%==2)than(player1 turn)else than (player 2)
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


/*----------------------------- Event Listeners -----------------------------*/
column1.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column1 clicked")
        if (column1[0].innerHTML === '' && column1[3].innerHTML !== '' && column1[2].innerHTML !== '' && column1[1].innerHTML !== '') {
            if (turn % 2 === 0)
                column1[0].classList.add('redChip')
            else
                column1[0].classList.add('yellowChip')
            turn++
            column1[0] = ' '
        }
        if (column1[1].innerHTML === '' && column1[3].innerHTML !== '' && column1[2].innerHTML !== '') {
            if (turn % 2 === 0)
                column1[1].classList.add('redChip')
            else
                column1[1].classList.add('yellowChip')
            turn++
            column1[1] = ' '
        }
        if (column1[2].innerHTML === '' && column1[3].innerHTML !== '') {
            if (turn % 2 === 0)
                column1[2].classList.add('redChip')
            else
                column1[2].classList.add('yellowChip')
            turn++
            column1[2] = ' '
        }
        if (column1[3].innerHTML === '') {
            if (turn % 2 === 0)
                column1[3].classList.add('redChip')
            else
                column1[3].classList.add('yellowChip')
            turn++
            column1[3] = ' '
        }
    })
})
column2.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column2 clicked")
        console.log(column2[3])
        if (column2[0].innerHTML === '' && column2[3].innerHTML !== '' && column2[2].innerHTML !== '' && column2[1].innerHTML !== '') {
            if (turn % 2 === 0)
                column2[0].classList.add('redChip')
            else
                column2[0].classList.add('yellowChip')
            turn++
            column2[0] = ' '
        }
        if (column2[1].innerHTML === '' && column2[3].innerHTML !== '' && column2[2].innerHTML !== '') {
            if (turn % 2 === 0)
                column2[1].classList.add('redChip')
            else
                column2[1].classList.add('yellowChip')
            turn++
            column2[1] = ' '
        }
        if (column2[2].innerHTML === '' && column2[3].innerHTML !== '') {
            if (turn % 2 === 0)
                column2[2].classList.add('redChip')
            else
                column2[2].classList.add('yellowChip')
            turn++
            column2[2] = ' '
        }
        if (column2[3].innerHTML === '') {
            if (turn % 2 === 0)
                column2[3].classList.add('redChip')
            else
                column2[3].classList.add('yellowChip')
            turn++
            column2[3] = ' '
        }

    })
})
column3.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 3 clicked")
       if (column3[0].innerHTML === '' && column3[3].innerHTML !== '' && column3[2].innerHTML !== '' && column3[1].innerHTML !== '') {
            if (turn % 2 === 0)
                column3[0].classList.add('redChip')
            else
                column3[0].classList.add('yellowChip')
            turn++
            column3[0] = ' '
        }
        if (column3[1].innerHTML === '' && column3[3].innerHTML !== '' && column3[2].innerHTML !== '') {
            if (turn % 2 === 0)
                column3[1].classList.add('redChip')
            else
                column3[1].classList.add('yellowChip')
            turn++
            column3[1] = ' '
        }
        if (column3[2].innerHTML === '' && column3[3].innerHTML !== '') {
            if (turn % 2 === 0)
                column3[2].classList.add('redChip')
            else
                column3[2].classList.add('yellowChip')
            turn++
            column3[2] = ' '
        }
        if (column3[3].innerHTML === '') {
            if (turn % 2 === 0)
                column3[3].classList.add('redChip')
            else
                column3[3].classList.add('yellowChip')
            turn++
            column3[3] = ' '
        }
    })
})
column4.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 4 clicked")
        if (column4[0].innerHTML === '' && column4[3].innerHTML !== '' && column4[2].innerHTML !== '' && column4[1].innerHTML !== '') {
            if (turn % 2 === 0)
                column4[0].classList.add('redChip')
            else
                column4[0].classList.add('yellowChip')
            turn++
            column4[0] = ' '
        }
        if (column4[1].innerHTML === '' && column4[3].innerHTML !== '' && column4[2].innerHTML !== '') {
            if (turn % 2 === 0)
                column4[1].classList.add('redChip')
            else
                column4[1].classList.add('yellowChip')
            turn++
            column4[1] = ' '
        }
        if (column4[2].innerHTML === '' && column4[3].innerHTML !== '') {
            if (turn % 2 === 0)
                column4[2].classList.add('redChip')
            else
                column4[2].classList.add('yellowChip')
            turn++
            column4[2] = ' '
        }
        if (column4[3].innerHTML === '') {
            if (turn % 2 === 0)
                column4[3].classList.add('redChip')
            else
                column4[3].classList.add('yellowChip')
            turn++
            column4[3] = ' '
        }
    })
})
