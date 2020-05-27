enchant();

window.onload = function() {
        var game = new Core(320, 320);

  //game.preload 'img/icon0.png', 'img/map2.png'

        //メインループ
        game.onload = function() {
                //物理エンジンの宣言
                var world = new PhysicsWorld(0, 9.8);

                //床の作成
                var floor = new PhyBoxSprite(320, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor.backgroundColor = "#aaa";
                floor.position = {
                        x: 160,
                        y: 312
                }
                game.rootScene.addChild(floor);

                //四角形の作成
            var addBox = function(){
                var box = new PhyBoxSprite(32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.3, true);
                box.backgroundColor = "red";
                box.position = {
                        x: 80,
                        y: 50
                }
                game.rootScene.addChild(box);
                        box.ontouchstart = function() {
//box.SetAwake(true);
//box.SetLinearVelocity(new b2Vec2(4,-5));
            //box.SetAwake(true);
            //box.SetPositionAndAngle(new b2Vec2(10,0),Math.PI/3);
                                box.applyForce(new b2Vec2(0, -1));
                        }
            }
            addBox();

                //四角形の作成2
            var addBox2 = function(){
                var box = new PhyBoxSprite(32, 32, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.3, true);
                box.backgroundColor = "blue";
                box.position = {
                        x: 130,
                        y: 50
                }
                game.rootScene.addChild(box);
                        box.ontouchstart = function() {

    //タッチしたときの処理
    box.addEventListener("touchstart", function (e) {
		this.setAwake(false);		//物理演算をストップ
    });
    
    //ドラッグ中の処理
     box.addEventListener("touchmove", function (e) {
        this.position = {x:e.x,y:e.y};		//現在のマウス座標をスプライトに通知
    });
    
    //タッチを離したときの処理 
    box.addEventListener("touchend", function (e) {
        this.setAwake(true);				//物理演算を開始
    });

//box.SetAwake(true);
//box.SetLinearVelocity(new b2Vec2(4,-5));
            //box.SetAwake(true);
            //box.SetPositionAndAngle(new b2Vec2(10,0),Math.PI/3);
                                //box.applyForce(new b2Vec2(0, -1));
                        }
            }
            addBox2();





                //物理エンジン処理
                game.rootScene.onenterframe = function() {
                        world.step(game.fps);
                }
        }

        game.start();

}


