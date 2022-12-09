import { ASSET_MANAGER } from './main'
import Animator from './Animator'

class Background {
  constructor(game, x, y, image) {
    this.sprite = ASSET_MANAGER.getAsset(image)
    this.animation = new Animator(this.sprite, 0, 0, 760, 768, 0, 1, 0, false, true)
    this.game = game;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
  }

  update() {

  }
}

export default Background