import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling._racesInstances += 1;
  }
  
  public static createdRacesInstances(): number {
    return Halfling._racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;