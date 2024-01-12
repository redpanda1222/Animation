const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./spritesheet_grant.png")
ASSET_MANAGER.queueDownload("./spritesheet_grant1.png")
ASSET_MANAGER.queueDownload("./flashRun_sprite.png")
ASSET_MANAGER.queueDownload("./vexy.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Grant(gameEngine));
	gameEngine.addEntity(new GrantJump(gameEngine));
	gameEngine.addEntity(new FlashRun(gameEngine));
	gameEngine.addEntity(new Vexy(gameEngine));
	gameEngine.addEntity(new Vexy1(gameEngine));
	gameEngine.addEntity(new Vexy2(gameEngine));
	gameEngine.addEntity(new Vexy3(gameEngine));
	gameEngine.addEntity(new Vexy4(gameEngine));
	gameEngine.addEntity(new Vexy5(gameEngine));
	gameEngine.addEntity(new Vexy6(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
