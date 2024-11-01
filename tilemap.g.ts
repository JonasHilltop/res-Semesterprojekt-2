// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010502040104020102020502060202010102020202020201060102050204020101010202010104010601020201010201010205020101020202020202010302010102020204020202020402040606020101020101010502010101010101010101010402030102020202020201020203010102020201010102040102020401020101050202020201020101010101010501010201010402040202050301020202010102020102020205020204010205040101050201020201010101010102010101010101010205020102020502040107010103040202050204020502010205050101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . 2 . . . . . . . 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 2 . . 2 2 . 2 . 2 . . 2 2 . 2 
2 . . . 2 2 . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 2 2 . . 2 . . . 2 . 2 
2 . . . . . 2 . 2 2 2 2 2 2 . 2 
2 . 2 2 . . . . . . . 2 . . . 2 
2 . . 2 . . . . . . . 2 . . . 2 
2 . . 2 . . 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 . . . 2 . . . . . 2 . 2 
2 . . . . . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.skillmap.islandTile4,myTiles.tile5,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileGrass1,myTiles.tile6], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level0":
            case "level6":return tiles.createTilemap(hex`10001000030303030202020202020303030303030308060303040101060606060d060b03030701030301010101010101010105030307010303010303010103030103090303070101010101010101030301030303030701010101010101010101010103030303030103030101030301010101050303030301030301010303010101010503030701010101010101030101030104030307010101010101010101010303030c03070303010103010103010101030303030703030401010101030101010105030307010303030301010303010301050303070101040303010101010103010503030a010101030301010101040304090303030303030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . . 2 2 . 2 2 . . 2 2 . 2 . 2 
2 . . . . . . . . . 2 2 . 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 2 . 2 2 . . 2 2 . . . . . 2 
2 2 2 . 2 2 . . 2 2 . . . . . 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 2 2 . 
2 . 2 2 . . 2 . . 2 . . . 2 . . 
2 . 2 2 . . . . . 2 . . . . . 2 
2 . . 2 2 2 2 . . 2 2 . 2 . . 2 
2 . . . . 2 2 . . . . . 2 . . 2 
2 . . . . 2 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.floorLight0,sprites.dungeon.floorLight4,myTiles.tile1,sprites.builtin.forestTiles11,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles5,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,myTiles.tile7,sprites.dungeon.chestClosed,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile2":
            case "tile5":return tile5;
            case "myTile3":
            case "tile6":return tile6;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile4":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
