// Move balken to left
input.onButtonPressed(Button.A, function () {
    balken.move(-1)
})
// Move balken to right
input.onButtonPressed(Button.B, function () {
    balken.move(1)
})
/**
 * drop to catch
 */
/**
 * balken to play
 */
/**
 * variables to count
 */
let point_screen = 0
let counter = 0
let punkte = 0
let drop: game.LedSprite = null
let fehler = 0
let balken: game.LedSprite = null
// start value
let pause_timer = 500
basic.showIcon(IconNames.Heart)
balken = game.createSprite(2, 4)
// and loop
basic.forever(function () {
    if (fehler < 3) {
        // erzeuge Balken neu
        if (balken.isDeleted()) {
            balken = game.createSprite(2, 4)
        }
        // create drop
        drop = game.createSprite(randint(0, 4), 0)
        basic.pause(pause_timer)
        // let it rain
        for (let index = 0; index < 4; index++) {
            // move the drop
            drop.change(LedSpriteProperty.Y, 1)
            // drop is on last Y coorinate
            if (drop.get(LedSpriteProperty.Y) == 4) {
                if (drop.get(LedSpriteProperty.X) == balken.get(LedSpriteProperty.X)) {
                    // yes
                    punkte += 1
                } else {
                    // no
                    fehler += 1
                }
            }
            // count
            counter += 1
            basic.pause(pause_timer)
            // make it harder every ten times
            if (counter % 20 == 0) {
                pause_timer = pause_timer - counter
            }
        }
        // delete drop
        drop.delete()
    } else if (fehler == 3) {
        basic.showIcon(IconNames.Sad)
        fehler = 4
    } else {
        // reset all variables
        balken.delete()
        basic.showString("" + punkte + " Points!")
        point_screen += 1
        if (point_screen >= 1) {
            point_screen = 0
            fehler = 0
            punkte = 0
            counter = 0
            pause_timer = 500
        }
    }
})
