//i have to do an array for each column ✔
//i may introduce the first column as a class for example ✔
//i have to insert chips pictures and fix the size ✔
//i have to allow the chip to be fall into the empty div by style
//i have to let the chip to be fall when a column being clicked && it must be at the empty string
// i have to let the chips being switched based on which turn is it
//increment the turn to be based on if(turn%==2)than(player1 turn)else than (player 2)


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
        if (turn % 2 === 0)
            item.classList.add('redChip')
        else
            item.classList.add('yellowChip')
        turn++
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
        if (turn % 2 === 0)
            item.classList.add('redChip')
        else
            item.classList.add('yellowChip')
        turn++
    })
})
column4.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 4 clicked")
        if (turn % 2 === 0)
            item.classList.add('redChip')
        else
            item.classList.add('yellowChip')
        turn++
    })
})
