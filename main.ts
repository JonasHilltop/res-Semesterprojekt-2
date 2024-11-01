scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (info.score() == 0) {
        tiles.setCurrentTilemap(tilemap`level0`)
        game.splash("Level 2", "Press A to start")
        game.showLongText("Sluk alle computerne ved at trykke på A, men pas på spøgelserne", DialogLayout.Bottom)
        Player_1.setPosition(2, 4)
        myEnemy.vx += 10
        myEnemy.vy += 10
    } else {
        game.showLongText("Du forbruger stadig for meget strøm", DialogLayout.Center)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    game.splash("Level 1", "Press A to start")
    game.showLongText("Sluk alle lamperne ved at trykke på A, men pas på spøgelserne", DialogLayout.Bottom)
    Player_1 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    Player_1.setPosition(25, 25)
    animation.runImageAnimation(
    Player_1,
    assets.animation`myAnim`,
    200,
    true
    )
    controller.moveSprite(Player_1)
    Player_1.setStayInScreen(true)
    scene.cameraFollowSprite(Player_1)
}
function Enemyting () {
    for (let index = 0; index < 3; index++) {
        myEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......fd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fbddddbfd1df......
            ......fcbbbdcfddbf......
            .......fcbb11111f.......
            ........fffff1b1f.......
            ........fb111cfbf.......
            ........ffb1b1ff........
            ......f.fffbfbf.........
            ......ffffffff..........
            .......fffff............
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(myEnemy, sprites.skillmap.islandTile4)
        myEnemy.setVelocity(33, 26)
        myEnemy.setBounceOnWall(true)
        pause(5000)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile1`)
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (info.score() == 11) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    } else {
        game.showLongText("Du forbruger stadig for meget strøm", DialogLayout.Center)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    pause(1000)
})
let myEnemy: Sprite = null
let Player_1: Sprite = null
info.setLife(3)
info.setScore(0)
Level_1()
Enemyting()
