basic.forever(function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.clearScreen()
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . # .
            # # # . .
            `)
    }
    basic.clearScreen()
    // Button A
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else {
        basic.showString("Try Again")
    }
})
