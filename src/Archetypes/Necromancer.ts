import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _racesInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer._racesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._racesInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;