
class Base extends Entity
{
	name: string;

	constructor(factionName: string, name: string, posInCells: Coords)
	{
		super
		(
			Base.name,
			[
				Drawable.fromVisual(Base.visualBuild(name)),
				new Factionable(factionName),
				Locatable.create(),
				new Mappable(posInCells)
			]
		);

		this.name = name;
	}

	static visualBuild(name: string): Visual
	{
		var colors = Color.Instances();

		var returnValue = new VisualGroup
		([
			VisualRectangle.fromSizeAndColorFill
			(
				Coords.fromXY(1, 1).multiplyScalar(24),
				colors.GrayLight
			),
			VisualText.fromTextAndColor(name, colors.Gray)
		]);

		return returnValue;
	}
}
