
class WorldGame extends World
{
	constructor(map: MapOfTerrain)
	{
		super
		(
			"CivilizationBuildingGame",
			DateTime.now(),
			WorldGame.defnBuild(),
			[ new PlaceMap(map, [], []) ]
		);
	}

	static random(): WorldGame
	{
		var cellSize = Coords.fromXY(32, 32);
		var terrains = WorldGame.terrains(cellSize);

		var map = new MapOfTerrain
		(
			Coords.fromXY(8, 8), // sizeInCells
			cellSize,
			terrains
		);

		var returnValue = new WorldGame(map);
		return returnValue;
	}

	static defnBuild(): WorldDefn
	{
		return new WorldDefn
		([
			[
				ActivityDefn.Instances().HandleUserInput
			],
			[
				PlaceMap.defnBuild()
			]
		]);
	}

	static _terrains: Terrain[];
	static terrains(cellSize: Coords): Terrain[]
	{
		if (WorldGame._terrains == null)
		{
			var colors = Color.Instances();

			WorldGame._terrains =
			[
				new Terrain("Water", "~", 0, new Traversable(false), new VisualNone() ),
				new Terrain
				(
					"Land",
					".", // code
					1,
					new Traversable(true),
					VisualRectangle.fromSizeAndColorFill
					(
						cellSize, colors.Green
					)
				)
			];
		}

		return WorldGame._terrains;
	}

	toControl(): ControlBase
	{
		return new ControlNone();
	}
}
