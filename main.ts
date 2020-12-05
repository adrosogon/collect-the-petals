sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy(effects.starField, 100)
    music.magicWand.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    bee.destroy(effects.ashes, 100)
    music.pewPew.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(img`
    99e99999999999999e9999eee399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99e9399999999999ee33999ee399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99e9999999999933339999333399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9333399999999999339993933339399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9333339999999933339999933399399999999999939933339999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9333339999339333399999933339339999993999333333999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    993333999999933333999933333e3339999999939333e3999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99e333999999933333999933333e333999999333333333999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    e99333993339e33933999993333e333999999333333999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    e33333993339ee39339999933333339993333333333999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    e333e99933333e93339999939e33339933333333333933999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    93333e9999333e93393339939933339333333333393393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    93333e9999333999993339999933333333333333339939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    993333ee99333333393333399933333333333333939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    993333ee3333333339993339933333333ee33333939999993339399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999333ee33333333333333333333333333933399999333333339399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999e33333e9993333993333e3e3e333339999333933333339939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999933333e9933333933333eeeee333999933999933333993993999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9993339333eee3333333933399eeeee333999999999933333333399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999333333eeee3333393333399e3eeee99999999939999333333939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    939333333e333333999333999eeeee9993339999999999333333339999999999991111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    993933333e33399999933399eeeee33393333999933333333333939999999999111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999
    993333399e333e999993339eeeeee3333333399993333333333339999999991111111111111111b111111111199999999999999999999999999999999999999999999999999999999999999999999999
    e933333999333ee99999999eeeeee33333333999933333333333999999991111111111b11111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
    eee3333399333ee99999999eeeeee33333333999ee33399999399999991111111111b111111111111b111111111111199999999999999999999999999999999999999999999999999999999999999999
    e33333339999eeee999999eeeeee9933339999333e33399999999991111111111111111111111111111b1111111111111999999999999999999999999999999999999999999999999999999999999999
    e33333993999eeee99999eeeeeee9993333333eee39999999999911111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999
    9333333993999eeee9999eeeeee9999933339ee3399999999999111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999
    9933333339399eeeee999eeeeee9999933333339999999999911111111111111111111111111111111111111111b11111111111119999999999999999999999999999999999999999999999999999999
    99933333399399eeee99eeeeeee99999333eee999999999911111111111b1111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999
    99933333399399eeeeeeeeeeee999933eeeee9999999999111111111111111111111111111111111111111111111111b1111111111111999999999999999999999999999999999999999999999999999
    99993333ee9999eeeeeeeeeeee999999eeee99999999911e111111111b111111111111111111111111111111111111111b11111111111119999999999999999999999999999999999999999999999999
    999933333e9999eeeeeeeeeee999999eeee9993339911ee1111111111111111111111111111111b111111111111111111111111111111111119999999999999999999999999999999999999999999999
    eeee33333ee999eeeeeeeeeee99999eeeee993333eeeee11111111b1111111111b1111111111111b1111111111b111111111111111111111111199999999999999999999999999999999999999999999
    eeeee3333eee99eeeeeeeeeee9999eeeee9e33333ee1113331111bb1111111111111111111111111bb111111111b1111111111111111111b111111999999999999999999999999999999999999999999
    333eeeeeeeeee99eeeeeeeeee999eeeeeeee3333333311333111b111111111111111111111111111bbbb11111111b111111111111b111111b11111119999999999999999999999999999999999999999
    3339eeeeeeeeee9eeeeeeeee9999eeeeeeee333113331133311bb11111111b1111bb111111b11111bbbbbb111111111111111111111111111b1111111999999999999999999999999999999999999999
    3339999eeeeeee9eeeeeeeee999eeeee999bb1111333bb11bbbb111111111b1111bb1111111b11111bbbbbbb1111111111111111111b1111111111111119999999999999999999999999999999999999
    99999999eeeeee9eeeeeeeee99eeeee99bbb11111bbbbbbbbbb1111111111b1111bbbb111111b1111bbbbbbbbb11111bbb111111111111b11111111111bbb99999999999999999999999999999999999
    9999999999eeee9eeeeeeeee9eeeee99bbbbbbbbbbbbbbbbbb111111111bbbb111bbbbbb111111111bbbbbbbbbbb1111bbbbb1111111111bbb111111111bbbb999999999999999999999999999999999
    99999999999eee9eeeeeeee9eeeee9bbbbbbbbbbbbbbbbbb111111111bbbbbbb11bbbbbbbb11111111bbbbbbbbbbb111bbbbbbbb11111111bbbbbbbbbbbbbbbb99999999999999999999999999999999
    99999999999eeeeeeeeeeee9eeeebbbbbbbbbbbbbbbbbbb11111111bbbbbbbbb11bbbbbbbbbb111111bbbbbbbbbbbbb1bbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbb999999999999999999999999999999
    99999999999eeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbb1bbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbb99999999999999999999999999999
    999999999999eeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999
    9999999999999eeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999
    9999999999999eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999
    9999999999999eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999
    9999999999999eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999
    99999999999999eeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999
    99999999999999eeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999
    99999999999999eeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999
    999999999999bbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999
    9999999999bbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999
    99999999bbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999
    9999999bbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999
    99999bbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999
    999bbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999
    9bbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9
    777777777777777eeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777eeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777eeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777eeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777eeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f d d d d d d d f . . . . 
    . . . d d f d d d f d d . . . . 
    . . . d d f d d d f d d . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c 8 8 8 8 8 c . . . . . 
    . . . . d 8 8 8 8 8 d . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . e e . e e . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . c 3 3 3 c . . . . . . . 
        . . c c 3 3 3 3 3 c . . . . . . 
        . c 3 3 3 c 3 3 3 3 b . . . . . 
        . c 3 3 3 3 c 3 3 3 3 b . . . . 
        . c 3 3 3 3 3 b 3 3 d 3 b . . . 
        . c 3 3 3 3 3 3 b 3 3 d b . . . 
        . . c 3 3 3 3 d 3 b d 3 d b . . 
        . . . b 3 3 3 3 d 3 3 d d b . . 
        . . . . b b b d d d d d d b . . 
        . . . . . . . b b b b b b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(0, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        . . . . . 5 f 5 f 5 f . . . . . 
        . . . . f 5 f 5 f 5 f 5 . . . . 
        . . . . 5 5 f 5 f 5 f 5 f f . . 
        . . . . 5 5 f 5 f 5 f 5 . . . . 
        . . . . . 5 f 5 f 5 f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
