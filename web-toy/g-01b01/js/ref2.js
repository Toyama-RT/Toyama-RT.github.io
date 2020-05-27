
enchant();

window.onload = function() {
    game = new Game(STAGE_WIDTH, STAGE_HEIGHT);
    game.fps = FRAME;
    game.preload(
        CHARA_0_IMG
    );
    game.rootScene.backgroundColor = "white";

    game.onload = function() {
        var scene = new GamePlayScene();

        // touch start
        game.rootScene.on('touchstart', function(e){
            drawFlg = true;
        });

        // touch move
        game.rootScene.on('touchmove', function(e){
            if (drawFlg === true) { // ï`é Ç≈Ç´ÇÈÇ∆Ç´
                createCircle(e.x, e.y);
            }
        });

        // touch end
        game.rootScene.on('touchend', function(e){
            drawFlg = false;
            // ï`é êîÇÃÉÅÉÇ
            drawNo++;
        });
    }
    game.start();
}

// â~ÇÃï`é 
function createCircle(x, y) {
    var ball = new Sprite(10, 10);
    var texture = new Surface(10, 10);
    var context = texture.context;
    context.fillStyle = "green";
    context.strokeStyle = "green";

    context.lineWidth = 2;
    context.arc(5, 5, 4, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();

    ball.image = texture;
    ball.moveBy(x, y);
    ball.destroy = false;

    game.rootScene.addChild(ball);

    if (!circleList[drawNo]) {
        circleList[drawNo] = [];
    }
    circleList[drawNo].push(ball);
    drawList[drawNo] = false;

    ball.addEventListener(Event.ENTER_FRAME, function() {
        if (ball.destroy === true) {
            game.rootScene.removeChild(ball);
        }
    });
}