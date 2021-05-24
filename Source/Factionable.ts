
class Factionable implements EntityProperty
{
	factionName: string;

	constructor(factionName: string)
	{
		this.factionName = factionName;
	}

	// EntityProperty.

	finalize(u: Universe, w: World, p: Place, e: Entity): void {}
	initialize(u: Universe, w: World, p: Place, e: Entity): void {}
	updateForTimerTick(u: Universe, w: World, p: Place, e: Entity): void {}
}
