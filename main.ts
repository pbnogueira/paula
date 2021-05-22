input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Meh)
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(0)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(10)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Bom dia")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
