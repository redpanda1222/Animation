class Vexy {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 900, 110, 120, 8, 0.1);

        this.x = 0;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};

class Vexy1 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 780, 110, 120, 8, 0.1);

        this.x = 150;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};

class Vexy2 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 650, 110, 120, 8, 0.1);

        this.x = 300;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};

class Vexy3 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 270, 110, 120, 8, 0.1);

        this.x = 450;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};

class Vexy4 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 400, 110, 120, 8, 0.1);

        this.x = 600;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};

class Vexy5 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 530, 110, 120, 8, 0.1);

        this.x = 750;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};

class Vexy6 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./vexy.png"), 0, 1035, 110, 120, 8, 0.1);

        this.x = 900;
        this.y = 450;
    };

    update() {
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 150, 150);
    };
};