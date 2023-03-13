import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _racesInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger._racesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._racesInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;