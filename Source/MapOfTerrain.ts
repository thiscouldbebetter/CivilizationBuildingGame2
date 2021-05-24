
class MapOfTerrain extends MapOfCells<MapOfTerrainCell>
{
	terrains: Terrain[];
	terrainsByCode: Map<string, Terrain>;

	constructor
	(
		sizeInCells: Coords, cellSize: Coords, terrains: Terrain[]
	)
	{
		super(MapOfTerrain.name, sizeInCells, cellSize, MapOfTerrain.cellCreate, null, null);

		this.terrains = terrains;
		this.terrainsByCode =
			ArrayHelper.addLookups(terrains, (x: Terrain) => x.code);
	}

	static cellCreate(): MapOfTerrainCell
	{
		return new MapOfTerrainCell(".");
	}

	terrainAtPosInCells(posInCells: Coords): Terrain
	{
		var cell = this.cellAtPosInCells(posInCells) as MapOfTerrainCell;
		var terrainCode = cell.terrainCode;
		var returnValue = this.terrainsByCode.get(terrainCode);
		return returnValue;
	}

	toEntity(): Entity
	{
		var visual = new VisualMapOfTerrain(this);

		var drawable = Drawable.fromVisual(visual);

		var returnValue = new Entity
		(
			MapOfTerrain.name,
			[
				drawable,
				Locatable.create()
			]
		);

		return returnValue;
	}
}

class MapOfTerrainCell
{
	terrainCode: string;
	entitiesPresent: Entity[];

	constructor(terrainCode: string)
	{
		this.terrainCode = terrainCode;
		this.entitiesPresent = new Array<Entity>();
	}
}
