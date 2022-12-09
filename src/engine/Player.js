import { ASSET_MANAGER } from './main'
import Animator from './Animator'

class Player {
  constructor(game) {

    this.spritesheet = ASSET_MANAGER.getAsset('/img/player.png');

    this.x = 0;
    this.y = 0;

    this.facing = 0; // 0: down, 1: left, 2: right, 3: up
    this.game = game;
    this.animations = [];

    this.animations.push(new Animator(this.spritesheet, 0, 6, 30, 42, 4, 0.5, 2, false, true));
    this.animations.push(new Animator(this.spritesheet, 0, 54, 30, 42, 4, 0.5, 2, false, true));
    this.animations.push(new Animator(this.spritesheet, 0, 102, 30, 42, 4, 0.5, 2, false, true));
    this.animations.push(new Animator(this.spritesheet, 0, 150, 30, 42, 4, 0.5, 2, false, true));

  }

  draw(ctx) {
    if (this.facing === 0) {
      this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else if (this.facing === 1) {
      this.animations[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else if (this.facing === 2) {
      this.animations[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    } else {
      this.animations[3].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
    }
  }

  update() {
    if (this.game.keys.KeyA) {
      this.facing = 1;
      this.x -= 5;
    }

    if (this.game.keys.KeyD) {
      this.facing = 2;
      this.x += 5;
    }

    if (this.game.keys.KeyW) {
      this.facing = 3
      this.y -= 5;
    }

    if (this.game.keys.KeyS) {
      this.facing = 0
      this.y += 5;
    }
  }
}

export default Player