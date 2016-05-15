'use strict';
import Player from 'objects/Player';

const {LEFT, RIGHT, UP, DOWN} = Phaser.Keyboard;

export default class DungeonState extends Phaser.State {

  create() {
    this.player = new Player(this.game);
    this.stage.backgroundColor = '#3A3';

    this.input.keyboard.addCallbacks(this, this.onKeyDown);
  }

  update() {
  	if (this.movement) {
  		this.player.updateMovement();
  	}
  }

  onKeyDown({keyCode}) {
  	switch (keyCode) {
  		case LEFT:
  		  this.player.moveTo({x: -16});
  		case RIGHT:
  		  this.player.moveTo({x: 16});
  		case UP:
  		  this.player.moveTo({y: -16});
  		case DOWN:
  		  this.player.moveTo({y: 16});
  	}
  }
}