input.onButtonPressed(Button.A, function () {
    Spite_1.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Sprite_2.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Spite_1.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Sprite_2.change(LedSpriteProperty.Y, 1)
})
let Sprite_2: game.LedSprite = null
let Spite_1: game.LedSprite = null
Spite_1 = game.createSprite(1, 1)
Sprite_2 = game.createSprite(5, 5)
basic.forever(function () {
    if (Spite_1.isTouching(Sprite_2)) {
        basic.pause(100)
        basic.clearScreen()
        basic.showString("BOOM!")
        basic.showString("Well done you have saved the gaol!")
    }
    if (Spite_1.isTouchingEdge()) {
        game.addScore(1)
        basic.showString("You have won the match!")
    }
})
