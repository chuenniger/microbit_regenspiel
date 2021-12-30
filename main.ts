input.onButtonPressed(Button.A, function () {
    balken.move(-1)
})
input.onButtonPressed(Button.B, function () {
    balken.move(1)
})
let drop: game.LedSprite = null
let balken: game.LedSprite = null
balken = game.createSprite(2, 4)
basic.forever(function () {
    drop = game.createSprite(randint(0, 4), 0)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        drop.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    drop.delete()
})
