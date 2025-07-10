//i have to do an array for each column ✔
//i may introduce the first column as a class for example ✔
//i have to insert chips pictures and fix the size
//i have to allow the chip to be fall into the empty div

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
//Array from means conveert the nodelist into an array
const column1 = Array.from(document.querySelectorAll('.column1'))
const column2 = Array.from(document.querySelectorAll('.column2'))
const column3 = Array.from(document.querySelectorAll('.column3'))
const column4 = Array.from(document.querySelectorAll('.column4'))
const blocker = document.querySelector('.blocker')

let idx = 1

/*-------------------------------- Functions --------------------------------*/
function addRedChip(){
   column1[idx].classList.add('redChip')
}
function addYellowChip(){
    column2[idx].classList.add('yellowChip')
}
addRedChip()
addYellowChip()

/*----------------------------- Event Listeners -----------------------------*/
column1.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column1 clicked")

    })
})
column2.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column2 clicked")
    })
})
column3.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 3 clicked")
    })
})
column4.forEach((item) => {
    item.addEventListener('click', event => {
        //replace the console with the picture to be fall into the circle
        console.log("column 4 clicked")
    })
})