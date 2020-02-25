namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.ay = 300
mySprite.setPosition(10, 50)
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topImage = img`
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . b b b b b b b c c b . . . . . . . 
. . . . . . . b b b b b b b c c b . . . . . . . 
. . . . . . . b b b b b b b c c b . . . . . . . 
. . . . . . . . b b b b b c c b b . . . . . . . 
. . . . . . . . b b b b b c c b . . . . . . . . 
. . . . . . . . b b b b b c c b . . . . . . . . 
. . . . . . . . . b b b c c b b . . . . . . . . 
. . . . . . . . . b b b c c b . . . . . . . . . 
. . . . . . . . . b b b c c b . . . . . . . . . 
. . . . . . . . . . b b c b b . . . . . . . . . 
. . . . . . . . . . b b c b . . . . . . . . . . 
. . . . . . . . . . b b c b . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . b . . . . . . . . . . . . 
. . . . . . . . . . . b . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . b . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . . . . . . . . . 
. . . . . . . . . b b b . . . . . . . . . . . . 
. . . . . . . . . b b b . . . . . . . . . . . . 
. . . . . . . . . b b b . . . . . . . . . . . . 
. . . . . . . . . b c b . . . . . . . . . . . . 
. . . . . . . . b b c b . . . . . . . . . . . . 
. . . . . . . . b b c b . . . . . . . . . . . . 
. . . . . . . . b b c b . . . . . . . . . . . . 
. . . . . . . . b b c b . . . . . . . . . . . . 
. . . . . . . . b c c b . . . . . . . . . . . . 
. . . . . . . . b c c b . . . . . . . . . . . . 
. . . . . . . . b c c c b . . . . . . . . . . . 
. . . . . . . . b c c c b . . . . . . . . . . . 
. . . . . . . . b c c c b . . . . . . . . . . . 
. . . . . . . . b c c c b . . . . . . . . . . . 
. . . . . . . . b c c c b . . . . . . . . . . . 
. . . . . . . b b c c c b . . . . . . . . . . . 
. . . . . . . b b c c c b . . . . . . . . . . . 
. . . . . . . b b c c c c b . . . . . . . . . . 
. . . . . . . b b c c c c b . . . . . . . . . . 
. . . . . . b b b c c c c b . . . . . . . . . . 
. . . . . . b b b c c c c b . . . . . . . . . . 
. . . . . . b b b c c c c b . . . . . . . . . . 
. . . . . . b b b c c c c b . . . . . . . . . . 
. . . . . b b b b c c c c b . . . . . . . . . . 
. . . . . b b b b c c c c b . . . . . . . . . . 
. . . . . b b b b b c c c c b . . . . . . . . . 
. . . . . b b b b b c c c c b . . . . . . . . . 
. . . . . b b b b b c c c c b . . . . . . . . . 
. . . . b b b b b b c c c c b . . . . . . . . . 
. . . . b b b b b b c c c c b . . . . . . . . . 
. . . . b b b b b b b c c c b . . . . . . . . . 
. . . . b b b b b b b c c c b . . . . . . . . . 
. . . b b b b b b b b c c c c b . . . . . . . . 
. . . b b b b b b b b c c c c b . . . . . . . . 
. . . b b b b b b b b c c c c b . . . . . . . . 
. . . b b b b b b b b c c c c b . . . . . . . . 
. . . b b b b b b b b c c c c b . . . . . . . . 
. . . b b b b b b b b c c c c b . . . . . . . . 
. . b b b b b b b b b c c c c b . . . . . . . . 
. . b b b b b b b b b b c c c b . . . . . . . . 
. . b b b b b b b b b b c c c b . . . . . . . . 
. . b b b b b b b b b b c c c c b . . . . . . . 
. . b b b b b b b b b b c c c c b . . . . . . . 
. . b b b b b b b b b b c c c c b . . . . . . . 
. . b b b b b b b b b b c c c c b . . . . . . . 
. . b b b b b b b b b b c c c c c b . . . . . . 
. . b b b b b b b b b b c c c c c b . . . . . . 
. . b b b b b b b b b b c c c c c b . . . . . . 
. . b b b b b b b b b b c c c c c c b . . . . . 
. . b b b b b b b b b b c c c c c c b . . . . . 
. . b b b b b b b b b b c c c c c c b . . . . . 
. . b b b b b b b b b b b c c c c c c b . . . . 
. . b b b b b b b b b b b c c c c c c b . . . . 
. . b b b b b b b b b b b c c c c c c b . . . . 
. . b b b b b b b b b b b c c c c c c c b . . . 
. b b b b b b b b b b b b c c c c c c c b . . . 
. b b b b b b b b b b b b c c c c c c c b . . . 
. b b b b b b b b b b b b c c c c c c c b . . . 
`
    } else if (gap == 1) {
        topImage = img`
. . . . b b b b b b b b b b b c c c c c b . . . 
. . . . . b b b b b b b b b c c c c c c b . . . 
. . . . . b b b b b b b b b c c c c c c b . . . 
. . . . . b b b b b b b b b c c c c c b b . . . 
. . . . . . b b b b b b b c c c c c c b . . . . 
. . . . . . b b b b b b b c c c c c b b . . . . 
. . . . . . b b b b b b b c c c c c b . . . . . 
. . . . . . . b b b b b b b c c c c b . . . . . 
. . . . . . . b b b b b b b c c c c b . . . . . 
. . . . . . . b b b b b b b c c c b b . . . . . 
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . . b b b b b b c c c b . . . . . . 
. . . . . . . . b b b b b b c c b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b c c c b . . . . . . . . 
. . . . . . . . . b b b c c c b . . . . . . . . 
. . . . . . . . . . b b c c b . . . . . . . . . 
. . . . . . . . . . . b c c b . . . . . . . . . 
. . . . . . . . . . . b c b . . . . . . . . . . 
. . . . . . . . . . . b c b . . . . . . . . . . 
. . . . . . . . . . . . b . . . . . . . . . . . 
. . . . . . . . . . . . b . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . b . . . . . . . . . . 
. . . . . . . . . . . . . b . . . . . . . . . . 
. . . . . . . . . . . . . b . . . . . . . . . . 
. . . . . . . . . . . . . b b . . . . . . . . . 
. . . . . . . . . . . . b b b . . . . . . . . . 
. . . . . . . . . . . b b b b . . . . . . . . . 
. . . . . . . . . . . b b b b . . . . . . . . . 
. . . . . . . . . . b b b b b . . . . . . . . . 
. . . . . . . . . b b b b b b . . . . . . . . . 
. . . . . . . . . b b b b b b . . . . . . . . . 
. . . . . . . . . b b b b b c b . . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . b b b b b c c b . . . . . . . . 
. . . . . . . . b b b b b c c b . . . . . . . . 
. . . . . . . . b b b b b c c b b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . b b b b b b c c c b . . . . . . . 
. . . . . . . b b b b b b c c c b . . . . . . . 
. . . . . . . b b b b b b c c c b b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . b b b b b b b c c c c b . . . . . . 
. . . . . . b b b b b b b c c c c b . . . . . . 
. . . . . . b b b b b b b c c c c b . . . . . . 
. . . . . . b b b b b b b c c c c b . . . . . . 
. . . . . . b b b b b b b c c c c b . . . . . . 
. . . . . . b b b b b b b c c c c b . . . . . . 
. . . . . b b b b b b b b c c c c b . . . . . . 
. . . . . b b b b b b b b c c c c b . . . . . . 
. . . . . b b b b b b b b c c c c b . . . . . . 
. . . . . b b b b b b b b c c c c b . . . . . . 
. . . . . b b b b b b b b c c c c c b . . . . . 
. . . . . b b b b b b b b c c c c c b . . . . . 
. . . . . b b b b b b b b c c c c c b . . . . . 
. . . . . b b b b b b b b c c c c c b . . . . . 
. . . . . b b b b b b b b c c c c c b . . . . . 
. . . . . b b b b b b b b c c c c c b . . . . . 
. . . . b b b b b b b b b c c c c c b . . . . . 
. . . . b b b b b b b b b c c c c c b . . . . . 
. . . . b b b b b b b b b b c c c c b . . . . . 
. . . . b b b b b b b b b b c c c c b . . . . . 
. . . . b b b b b b b b b b c c c c b . . . . . 
. . . . b b b b b b b b b b c c c c b . . . . . 
. . . . b b b b b b b b b b c c c c b . . . . . 
. . . . b b b b b b b b b b b c c c b b . . . . 
. . . b b b b b b b b b b b b c c c c b . . . . 
`
    } else if (gap == 2) {
        topImage = img`
. . . b b b b b b b b b b b b b c c c c b . . . 
. . . b b b b b b b b b b b b b c c c c b . . . 
. . . b b b b b b b b b b b b b c c c b . . . . 
. . . . b b b b b b b b b b b c c c c b . . . . 
. . . . b b b b b b b b b b b c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c b b . . . . 
. . . . . b b b b b b b b b c c c c b . . . . . 
. . . . . b b b b b b b b b c c c b b . . . . . 
. . . . . b b b b b b b b b c c c b . . . . . . 
. . . . . b b b b b b b b b c c c b . . . . . . 
. . . . . b b b b b b b b b c c c b . . . . . . 
. . . . . b b b b b b b b b c c b b . . . . . . 
. . . . . . b b b b b b b b c c b . . . . . . . 
. . . . . . b b b b b b b c c c b . . . . . . . 
. . . . . . b b b b b b b c c c b . . . . . . . 
. . . . . . b b b b b b b c c c b . . . . . . . 
. . . . . . b b b b b b b c c c b . . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b b c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . . b b b b b c c c c b . . . . . . 
. . . . . . . . b b b b b c c c c b . . . . . . 
. . . . . . . . b b b b b c c c c b . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . . b b b b c c c b . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b b c b b . . . . . . . . 
. . . . . . . . . b b b b c b . . . . . . . . . 
. . . . . . . . . . b b b c b . . . . . . . . . 
. . . . . . . . . . b b b c b . . . . . . . . . 
. . . . . . . . . . b b b c b . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . b . . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . b b . . . . . . . . . . . 
. . . . . . . . . . . b b b . . . . . . . . . . 
. . . . . . . . . . b b c b . . . . . . . . . . 
. . . . . . . . . . b c c b . . . . . . . . . . 
. . . . . . . . . . b c c b . . . . . . . . . . 
. . . . . . . . . . b c c b . . . . . . . . . . 
. . . . . . . . . . b c c b . . . . . . . . . . 
. . . . . . . . . . b c c b . . . . . . . . . . 
. . . . . . . . . b b c c b . . . . . . . . . . 
. . . . . . . . . b b b c b b . . . . . . . . . 
. . . . . . . . . b b b c c b . . . . . . . . . 
. . . . . . . . . b b b c c b . . . . . . . . . 
. . . . . . . . b b b c c c b . . . . . . . . . 
. . . . . . . . b b b c c c b . . . . . . . . . 
. . . . . . . . b b b c c c b . . . . . . . . . 
. . . . . . . b b b b c c c b . . . . . . . . . 
. . . . . . . b b b b c c c b . . . . . . . . . 
. . . . . . . b b b b c c c b . . . . . . . . . 
. . . . . . b b b b b c c c b . . . . . . . . . 
. . . . . . b b b b b c c c b . . . . . . . . . 
. . . . . . b b b b b c c c b . . . . . . . . . 
. . . . . . b b b b b c c c b . . . . . . . . . 
. . . . . . b b b b b c c c b . . . . . . . . . 
. . . . . b b b b b b c c c b . . . . . . . . . 
. . . . . b b b b b b c c c b . . . . . . . . . 
. . . . . b b b b b b c c c c b . . . . . . . . 
. . . . . b b b b b b c c c c b . . . . . . . . 
. . . . . b b b b b b b c c c b . . . . . . . . 
. . . . . b b b b b b b c c c b . . . . . . . . 
. . . . . b b b b b b b c c c b . . . . . . . . 
. . . . b b b b b b b b c c c b . . . . . . . . 
. . . . b b b b b b b b c c c b . . . . . . . . 
. . . . b b b b b b b b c c c b . . . . . . . . 
`
    } else {
        topImage = img`
. . b b b b b b b b b b b b b b b b b c c c c b 
. . b b b b b b b b b b b b b b b b c c c c c b 
. . b b b b b b b b b b b b b b b b c c c c c b 
. . b b b b b b b b b b b b b b b b c c c c b b 
. . . b b b b b b b b b b b b b b b c c c c b . 
. . . b b b b b b b b b b b b b b c c c c c b . 
. . . b b b b b b b b b b b b b b c c c c c b . 
. . . b b b b b b b b b b b b b b c c c c c b . 
. . . b b b b b b b b b b b b b b c c c c b b . 
. . . . b b b b b b b b b b b b c c c c c b . . 
. . . . b b b b b b b b b b b b c c c c c b . . 
. . . . b b b b b b b b b b b b c c c c c b . . 
. . . . b b b b b b b b b b b b c c c c b b . . 
. . . . b b b b b b b b b b b c c c c c b . . . 
. . . . . b b b b b b b b b b c c c c c b . . . 
. . . . . b b b b b b b b b b c c c c c b . . . 
. . . . . b b b b b b b b b b c c c c c b . . . 
. . . . . b b b b b b b b b b c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c b b . . . . 
. . . . . b b b b b b b b b c c c c b . . . . . 
. . . . . . b b b b b b b b c c c c b . . . . . 
. . . . . . b b b b b b b b c c c c b . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c c b . . . . . . 
. . . . . . . b b b b b b c c c b b . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . b b b b b c c c b . . . . . . . 
. . . . . . . . b b b b b c c b b . . . . . . . 
. . . . . . . . b b b b b c c b . . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b b c c b . . . . . . . . 
. . . . . . . . . b b b c c c b . . . . . . . . 
. . . . . . . . . b b b c c b b . . . . . . . . 
. . . . . . . . . b b b c c b . . . . . . . . . 
. . . . . . . . . b b b c c b . . . . . . . . . 
. . . . . . . . . b b b c b b . . . . . . . . . 
. . . . . . . . . b b b c b . . . . . . . . . . 
. . . . . . . . . b b c c b . . . . . . . . . . 
. . . . . . . . . . b c b . . . . . . . . . . . 
. . . . . . . . . . b c b . . . . . . . . . . . 
. . . . . . . . . . b c b . . . . . . . . . . . 
. . . . . . . . . . b c b . . . . . . . . . . . 
. . . . . . . . . . b b . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . . . . . . . . . 
. . . . . . . . . . b . . . . . . . . . . . . . 
. . . . . . . . . . b . . . . . . . . . . . . . 
. . . . . . . . . . b . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . b . . . . . . . . . . 
. . . . . . . . . . . . b b b . . . . . . . . . 
. . . . . . . . . . . . b c b . . . . . . . . . 
. . . . . . . . . . . b b c b b . . . . . . . . 
. . . . . . . . . . . b b c c b . . . . . . . . 
. . . . . . . . . . . b b c c b . . . . . . . . 
. . . . . . . . . . . b b c c b b . . . . . . . 
. . . . . . . . . . b b b c c c b . . . . . . . 
. . . . . . . . . . b b b c c c b . . . . . . . 
. . . . . . . . . . b b b c c c b b . . . . . . 
. . . . . . . . . . b b b c c c c b . . . . . . 
. . . . . . . . . . b b b c c c c b . . . . . . 
. . . . . . . . . . b b b b c c c b . . . . . . 
. . . . . . . . . . b b b b c c c b b . . . . . 
. . . . . . . . . b b b b b c c c c b . . . . . 
. . . . . . . . . b b b b b c c c c b . . . . . 
. . . . . . . . b b b b b b c c c c b . . . . . 
. . . . . . . b b b b b b b c c c c b . . . . . 
. . . . . . . b b b b b b b c c c c b . . . . . 
. . . . . . . b b b b b b b c c c c b b . . . . 
. . . . . . b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b c c c c c b . . . . 
. . . . . b b b b b b b b b b c c c c b . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdate(function () {
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
