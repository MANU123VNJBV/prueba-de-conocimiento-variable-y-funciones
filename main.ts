let REGISTRAR_BOTON_A_Y_B = 0
input.onButtonPressed(Button.AB, function () {
    REGISTRAR_BOTON_A_Y_B += 2
    basic.showNumber(REGISTRAR_BOTON_A_Y_B)
})
input.onButtonPressed(Button.B, function () {
    REGISTRAR_BOTON_A_Y_B = 0
    basic.showNumber(REGISTRAR_BOTON_A_Y_B)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < REGISTRAR_BOTON_A_Y_B; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
