input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        numbers += -1
        basic.showNumber(numbers)
    }
    basic.clearScreen()
})
let numbers = 0
numbers = 9
basic.showNumber(numbers)
basic.forever(function () {
	
})
