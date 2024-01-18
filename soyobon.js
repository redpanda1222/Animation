class Soyobon {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./soyobon.png"), 0, 0, 29, 36, 2, 0.2);

        this.x = 0;
        this.y = 718;
        this.speed = 250;
    };

    update() {
        
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = -30;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 50, 50);
    };
};