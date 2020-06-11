enchant();

window.onload = function() {
        var game = new Core(320, 320);
        game.fps = 24;
        game.preload('./snd/jump.mp3');
        game.onload = function() {
                //物理エンジンの宣言
                var world = new PhysicsWorld(0, 9.8);//重力加速度　下方向に9.8m/s2

                //床の作成
                var floor = new PhyBoxSprite(320, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);//密度0摩擦1反発0
                floor.backgroundColor = "#aaa";
                floor.position = {
                        x: 160,
                        y: 312
                }
                game.rootScene.addChild(floor);

                //右壁の作成
                var rwall = new PhyBoxSprite(16, 320, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                rwall.backgroundColor = "#aaa";
                rwall.position = {
                        x: 312,
                        y: 160
                }
                game.rootScene.addChild(rwall);

                //左壁の作成
                var lwall = new PhyBoxSprite(16, 320, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                lwall.backgroundColor = "#aaa";
                lwall.position = {
                        x: 8,
                        y: 160
                }
                game.rootScene.addChild(lwall);

                //天井の作成
                var top = new PhyBoxSprite(320, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                top.backgroundColor = "#aaa";
                top.position = {
                        x: 160,
                        y: 8
                }
                game.rootScene.addChild(top);

                //ゴールの作成
                var goall = new PhyBoxSprite(100, 4, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                goall.backgroundColor = "#aaa";
                goall.position = {
                        x: 125,
                        y: 160
                }
                goall.angle = 75;
                game.rootScene.addChild(goall);

                var goalr = new PhyBoxSprite(100, 4, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                goalr.backgroundColor = "#aaa";
                goalr.position = {
                        x: 195,
                        y: 160
                }
                goalr.angle = -75;
                game.rootScene.addChild(goalr);

                //四角形の作成
                var count1 = 0;
                var addBox = function(){
                var box = new PhyBoxSprite(32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.5, true);//密度1摩擦0.5反発0.3
                box.backgroundColor = "red";
                box.position = {
                        x: 80,
                        y: 50
                }
                game.rootScene.addChild(box);

                game.rootScene.addEventListener(Event.TOUCH_START, function(e) {
		  game.assets['./snd/jump.mp3'].clone().play(); //クリックすると音

                  if (count1 == 0){
                    Impx = 50;
                  } else if (count1 == 1){
                    Impx = -50;
                  } else {
                   Impx = 0;
                   count1 = -1;
                  }
                   Impy = -50; 
                 box.applyImpulse(new b2Vec2(Impx, Impy));
                 count1++;

                });
                }
                  addBox();

                //物理エンジン処理
                game.rootScene.onenterframe = function() {
                        world.step(game.fps);
                }
        }

        game.start();

}
