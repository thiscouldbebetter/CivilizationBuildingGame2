"use strict";
class MapOfTerrain extends MapOfCells {
    constructor(sizeInCells, cellSize, terrains) {
        super(MapOfTerrain.name, sizeInCells, cellSize, MapOfTerrain.cellCreate, null, null);
        this.terrains = terrains;
        this.terrainsByCode =
            ArrayHelper.addLookups(terrains, (x) => x.code);
    }
    static cellCreate() {
        return new MapOfTerrainCell(".");
    }
    terrainAtPosInCells(posInCells) {
        var cell = this.cellAtPosInCells(posInCells);
        var terrainCode = cell.terrainCode;
        var returnValue = this.terrainsByCode.get(terrainCode);
        return returnValue;
    }
    toEntity() {
        var visual = new VisualMapOfTerrain(this);
        var drawable = Drawable.fromVisual(visual);
        var returnValue = new Entity(MapOfTerrain.name, [
            drawable,
            Locatable.create()
        ]);
        return returnValue;
    }
}
class MapOfTerrainCell {
    constructor(terrainCode) {
        this.terrainCode = terrainCode;
        this.entitiesPresent = new Array();
    }
}
