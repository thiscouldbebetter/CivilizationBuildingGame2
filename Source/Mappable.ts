
class Mappable implements EntityProperty
{
	posInCells: Coords

	constructor(posInCells: Coords)
	{
		this.posInCells = posInCells;
	}

	// EntityProperty.

	finalize(u: Universe, w: World, p: Place, e: Entity): void {}
	initialize(u: Universe, w: World, p: Place, e: Entity): void {}
	updateForTimerTick(u: Universe, w: World, p: Place, e: Entity): void {}
}
