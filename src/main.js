import GameState from './states/GameState';

function preload() {
  //game.load.image('img', 'assets/');
  game.load.spritesheet('chars', 'assets/roguelikeChar_magenta.png', 16, 16);
  game.load.spritesheet('dungeon', 'assets/roguelikeDungeon_magenta.png', 16, 16);
  game.load.spritesheet('indoor', 'assets/roguelikeIndoor_magenta.png', 16, 16);
  game.load.spritesheet('sheet', 'assets/roguelikeSheet_magenta.png', 16, 16);
}

class Game extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.AUTO, '', {preload, create, update});
    this.state.add('GameState', GameState, false);
    this.state.start('GameState');
  }

}

const game = new Game();
