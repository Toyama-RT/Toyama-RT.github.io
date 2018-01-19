enchant();//物理エンジンのサンプル　No.５

enchant.Sound.enabledInMobileSafari = true;

if(location.protocol == 'file:'){
    enchant.ENV.USE_WEBAUDIO = false;
    console.log('1');
}

window.onload = function() {

    var Rectangle = enchant.Class.create({
        initialize: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        right: {
            get: function() {
                return this.x + this.width;
            }
        },
        bottom: {
            get: function() {
                return this.y + this.height;
            }
        }
    });

        var game = new Core(window.innerWidth  , window.innerHeight  );
        var wiw = window.innerWidth;  //モニター幅
        var wih = window.innerHeight; //モニター高
        var sukima = 28;

/*     // 表示画面の大きさを表示する機能
        var title1 = new Label('');
            title1.x = 0;
            title1.y = 10;
            game.rootScene.addChild(title1);
            title1.text = window.innerHeight;
            //title1.text = game_.width;
        var title2 = new Label('');
            title2.x = 0;
            title2.y = 30;
            game.rootScene.addChild(title2);
            title2.text = window.innerWidth;
            //title2.text = game_.width;
*/
           game.fps = 10;
           game.preload ('./img/icon0.png', './snd/gameover.mp3', './snd/water-drop1.mp3');

        //メインループ
        game.onload = function() {
        //game.assets['./snd/gameover.mp3'].play();

                //物理エンジンの宣言
                var world = new PhysicsWorld(0, 9.8);
                //床０の作成
                var floor0 = new PhyBoxSprite(wiw * 1, 16, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor0.backgroundColor = "#aaa";
                floor0.position = {
                        x: wiw * 0.5,
                        y: wih * 1
                }
                floor0.angle = 0;
                game.rootScene.addChild(floor0);
               //床１の作成
                var floor1 = new PhyBoxSprite(wiw * 0.5, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor1.backgroundColor = "#aaa";
                floor1.position = {
                        x: wiw * 0.25,
                        y: wih * 0.2
                }
                floor1.angle = 1;
                game.rootScene.addChild(floor1);
                //床２の作成
                var floor2 = new PhyBoxSprite(wiw * 0.5, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor2.backgroundColor = "#aaa";
                floor2.position = {
                        x: wiw * 0.75,
                        y: wih * 0.2 + 10 + sukima
                }
                floor2.angle = -1;
                game.rootScene.addChild(floor2);
                //床３の作成
                var floor3 = new PhyBoxSprite(wiw * 0.5, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor3.backgroundColor = "#aaa";
                floor3.position = {
                        x: wiw * 0.25,
                        y: wih * 0.2 + (10 + sukima) * 2
                }
                floor3.angle = 1;
                game.rootScene.addChild(floor3);
                //床４の作成
                var floor4 = new PhyBoxSprite(wiw * 0.5, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor4.backgroundColor = "#aaa";
                floor4.position = {
                        x: wiw * 0.75,
                        y: wih * 0.2 + (10 + sukima) * 3
                }
                floor4.angle = -1;
                game.rootScene.addChild(floor4);
                //床５の作成
                var floor5 = new PhyBoxSprite(wiw * 0.5, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor5.backgroundColor = "#aaa";
                floor5.position = {
                        x: wiw * 0.25,
                        y: wih * 0.2 + (10 + sukima) * 4
                }
                floor5.angle = 1;
                game.rootScene.addChild(floor5);
                //床６の作成
                var floor6 = new PhyBoxSprite(wiw * 0.5, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor6.backgroundColor = "#aaa";
                floor6.position = {
                        x: wiw * 0.75,
                        y: wih * 0.2 + (10 + sukima) * 5
                }
                floor6.angle = -1;
                game.rootScene.addChild(floor6);

                //ボールの作成
            var addBall = function(){
                var ball = new PhyCircleSprite(8, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.5, true);
                ball.image = game.assets['./img/icon0.png'];
                ball.frame = 19;
                ball.position = {
                        x: wiw * 0.25,
                        y: 0
                }
                game.rootScene.addChild(ball);
            }
            //addBall();

                //物理エンジン処理
                game.rootScene.onenterframe = function() {
                        world.step(game.fps);
                }

        game.rootScene.addEventListener(Event.TOUCH_START, function() {
            addBall();
            game.assets['./snd/water-drop1.mp3'].play();  //お礼　効果音ラボ様
        });
        }

        game.start();

}


