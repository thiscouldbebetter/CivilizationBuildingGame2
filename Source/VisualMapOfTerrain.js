"use strict";
class VisualMapOfTerrain {
    constructor(map) {
        this.map = map;
    }
    // Display.
    draw(universe, world, place, entity, display) {
        var map = this.map;
        var sizeInCells = map.sizeInCells;
        var cellSizeInPixels = map.cellSize;
        var cellPosInCells = Coords.create();
        var entityPos = entity.locatable().loc.pos;
        for (var y = 0; y < sizeInCells.y; y++) {
            cellPosInCells.y = y;
            for (var x = 0; x < sizeInCells.x; x++) {
                cellPosInCells.x = x;
                entityPos.overwriteWith(cellPosInCells).multiply(cellSizeInPixels);
                var terrain = map.terrainAtPosInCells(cellPosInCells);
                var visual = terrain.visual;
                visual.draw(universe, world, place, entity, display);
            }
        }
    }
    // Clonable.
    clone() { return this; }
    overwriteWith(other) { return this; }
    // Transformable.
    transform(transformToApply) { return this; }
}
