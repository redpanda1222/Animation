class FlashRun {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./flashRun_sprite.png"), 0, 0, 29, 30, 6, 0.1);

        this.x = 0;
        this.y = 300;
        this.speed = 1500;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};