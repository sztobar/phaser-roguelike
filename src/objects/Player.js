'use strict';

export default class Player {
	constructor(game) {
		this.game = game;
		this.sprite = this.game.add.sprite(0, 0, 'chars', 1);
	}
}