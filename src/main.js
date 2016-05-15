'use strict';
import BootState from 'states/BootState';
import DungeonState from 'states/DungeonState';
// import GameState from 'states/GameState';

class Game extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.AUTO, '');
    this.state.add('BootState', BootState, false);
    this.state.add('DungeonState', DungeonState, false);
    this.state.start('BootState');
    // this.state.add('GameState', GameState, false);
    // this.state.start('GameState');
  }

}

const game = new Game();
