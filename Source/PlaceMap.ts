
class PlaceMap extends Place
{
	map: MapOfTerrain;
	bases: Base[];
	units: Unit[];

	constructor(map: MapOfTerrain, bases: Base[], units: Unit[])
	{
		super
		(
			PlaceMap.name,
			PlaceMap.defnBuild().name,
			Coords.fromXY(400, 300), // size
			 // entities
			[
				map.toEntity(),
				new UserInputListener()
			]
		);
	}

	static defnBuild(): PlaceDefn
	{
		var actionDisplayRecorderStartStop = DisplayRecorder.actionStartStop();
		var actionShowMenu = Action.Instances().ShowMenuSettings;

		var actions =
		[
			actionDisplayRecorderStartStop,
			actionShowMenu
		];

		var inputNames = Input.Names();

		var actionToInputsMappings =
		[
			new ActionToInputsMapping
			(
				actionDisplayRecorderStartStop.name, [ "~" ], true // inactivate
			),

			ActionToInputsMapping.fromActionAndInputName
			(
				actionShowMenu.name, inputNames.Escape
			)
		];

		var entityPropertyNamesToProcess: string[] =
		[
			Actor.name,
			Collidable.name,
			Constrainable.name,
			Locatable.name
		];

		return PlaceDefn.from4
		(
			PlaceMap.name,
			actions,
			actionToInputsMappings,
			entityPropertyNamesToProcess
		);
	}
}
