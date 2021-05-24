"use strict";
class WorldGame extends World {
    constructor(map) {
        super("CivilizationBuildingGame", DateTime.now(), WorldGame.defnBuild(), [new PlaceMap(map, [], [])]);
    }
    static random() {
        var cellSize = Coords.fromXY(32, 32);
        var terrains = WorldGame.terrains(cellSize);
        var map = new MapOfTerrain(Coords.fromXY(8, 8), // sizeInCells
        cellSize, terrains);
        var returnValue = new WorldGame(map);
        return returnValue;
    }
    static defnBuild() {
        return new WorldDefn([
            [
                ActivityDefn.Instances().HandleUserInput
            ],
            [
                PlaceMap.defnBuild()
            ]
        ]);
    }
    static terrains(cellSize) {
        if (WorldGame._terrains == null) {
            var colors = Color.Instances();
            WorldGame._terrains =
                [
                    new Terrain("Water", "~", 0, new Traversable(false), new VisualNone()),
                    new Terrain("Land", ".", // code
                    1, new Traversable(true), VisualRectangle.fromSizeAndColorFill(cellSize, colors.Green))
                ];
        }
        return WorldGame._terrains;
    }
    toControl() {
        return new ControlNone();
    }
}
