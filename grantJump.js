class GrantJump {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./spritesheet_grant1.png"), 0, 0, 165, 300, 11, 0.1);

        this.x = 0;
        this.y = 100;
        this.speed = 250;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};