const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./spritesheet_grant.png")
ASSET_MANAGER.queueDownload("./spritesheet_grant1.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Grant(gameEngine));

	gameEngine.addEntity(new GrantJump(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
