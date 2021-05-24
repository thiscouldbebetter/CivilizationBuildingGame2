
class VisualMapOfTerrain implements Visual
{
	map: MapOfTerrain;

	constructor(map: MapOfTerrain)
	{
		this.map = map;
	}

	// Display.

	draw
	(
		universe: Universe, world: World, place: Place, entity: Entity,
		display: Display
	): void
	{
		var map = this.map;
		var sizeInCells = map.sizeInCells;
		var cellSizeInPixels = map.cellSize;
		var cellPosInCells = Coords.create();
		var entityPos = entity.locatable().loc.pos;

		for (var y = 0; y < sizeInCells.y; y++)
		{
			cellPosInCells.y = y;

			for (var x = 0; x < sizeInCells.x; x++)
			{
				cellPosInCells.x = x;

				entityPos.overwriteWith
				(
					cellPosInCells
				).multiply
				(
					cellSizeInPixels
				);
				var terrain = map.terrainAtPosInCells(cellPosInCells);
				var visual = terrain.visual;
				visual.draw(universe, world, place, entity, display);
			}
		}
	}

	// Clonable.

	clone(): VisualMapOfTerrain { return this; }
	overwriteWith(other: VisualMapOfTerrain): VisualMapOfTerrain { return this; }

	// Transformable.
	transform(transformToApply: Transform): Transformable { return this; }
}
