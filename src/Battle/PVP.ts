import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  fight(): number {
    while (this._playerOne.lifePoints !== -1 
      && this._playerTwo.lifePoints !== -1) {
      this._playerOne.attack(this._playerTwo);
      if (this._playerTwo.lifePoints === -1) break;
      this._playerTwo.attack(this._playerOne);
    }

    return super.fight();
  }
}

export default PVP;