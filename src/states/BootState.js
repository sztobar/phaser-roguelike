'use strict';

export default class BootState extends Phaser.State {

  preload() {
    //game.load.image('img', 'assets/');
    this.load.spritesheet('chars', 'assets/roguelikeChar_magenta.png', 16, 16, -1, 0, 1);
    this.load.spritesheet('dungeon', 'assets/roguelikeDungeon_magenta.png', 16, 16, -1, 0, 1);
    this.load.spritesheet('indoor', 'assets/roguelikeIndoor_magenta.png', 16, 16, -1, 0, 1);
    this.load.spritesheet('sheet', 'assets/roguelikeSheet_magenta.png', 16, 16, -1, 0, 1);
  }

  create() {
  	this.state.start('DungeonState');
  }

  update() {

  }
}