
class Unit extends Entity
{
	defnName: string;
	posInCells: Coords;

	constructor(factionName: string, defnName: string, posInCells: Coords)
	{
		super
		(
			Unit.name,
			[
				Drawable.fromVisual(Unit.visualBuild(defnName)),
				new Factionable(factionName),
				Locatable.create(),
				new Mappable(posInCells)
			]
		);

		this.defnName = defnName;
	}

	static visualBuild(defnName: string): Visual
	{
		var colors = Color.Instances();

		var returnValue = new VisualGroup
		([
			VisualCircle.fromRadiusAndColorFill(16, colors.Blue),
			VisualText.fromTextAndColor(defnName, colors.Gray)
		]);

		return returnValue;
	}
}
