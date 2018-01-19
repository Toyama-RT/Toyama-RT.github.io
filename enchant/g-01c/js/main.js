enchant();

window.onload = function() {
        var game = new Core(320, 320);

  game.preload ('./img/icon0.png');

        //メインループ
        game.onload = function() {
                //物理エンジンの宣言
                var world = new PhysicsWorld(0, 9.8);
                game.fps = 10;
                //床の作成
                var floor = new PhyBoxSprite(320, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor.backgroundColor = "#aaa";
                floor.position = {
                        x: 160,
                        y: 312
                }
                floor.angle = 1;
                game.rootScene.addChild(floor);

                //四角形の作成
            var addBox = function(){
                //var box = new PhyBoxSprite(32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.3, true);
                var box = new PhyCircleSprite(8, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.99, true);
                //box.backgroundColor = "blue";
                box.image = game.assets['./img/icon0.png'];
                box.frame = 19;
                box.position = {
                        x: 50,
                        y: 50
                }
                game.rootScene.addChild(box);
            }
            addBox();

                //物理エンジン処理
                game.rootScene.onenterframe = function() {
                        world.step(game.fps);
                }
        }

        game.start();

}


