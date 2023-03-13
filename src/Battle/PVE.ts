import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    let monstersAlives = this._monsters.some((m) => m.lifePoints !== -1);

    while (this._player.lifePoints !== -1 && monstersAlives) {
      this._monsters.forEach((m) => {
        this._player.attack(m);
        m.attack(this._player);
      });

      monstersAlives = this._monsters.some((m) => m.lifePoints !== -1);
    }

    return super.fight();
  }
}

export default PVE;