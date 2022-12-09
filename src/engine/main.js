import GameEngine from './GameEngine'
import AssetManager from './AssetManager'
import Player from './Player'

const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload('/img/player.png')

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	canvas.focus()
	gameEngine.init(ctx);
	gameEngine.addEntity(new Player(gameEngine))
	gameEngine.start();
})

export { gameEngine, ASSET_MANAGER }
