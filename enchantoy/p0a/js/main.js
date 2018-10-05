enchant();//物理エンジンのサンプル　No.6a バナナ

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


        var game = new Core(320, 320); //画面サイズを320*320に固定する　バウンドw均一化するため
        var wiw = 320;
        var wih = 320;

/*     // 表示画面の大きさを表示する機能　テストの際に使用する機能
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
           game.fps = 30;
           game.preload ('./img/icon0.png', './snd/gameover.mp3', './snd/water-drop1.mp3', './snd/ba.mp3', './snd/na.mp3', './img/ba.png', './img/na.png', './img/ktba.png', './img/ktna.png', './img/banana.png' );

        //メインループ
        game.onload = function() {

                //物理エンジンの宣言
                var world = new PhysicsWorld(0, 9.8);

                //床０の作成
                var floor0 = new PhyBoxSprite(wiw * 1, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor0.backgroundColor = "#aaa";
                floor0.position = {
                        x: wiw * 0.5,
                        y: wih * 1
                }
                floor0.angle = 0;
                game.rootScene.addChild(floor0);

	        //表示する画像の設定
                var word1 = new PhyBoxSprite(50, 50, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                var word2 = new PhyBoxSprite(50, 50, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                var word3 = new PhyBoxSprite(50, 50, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                var banana1 = new Sprite(100, 100);

                word1.image = game.assets['./img/ba.png'];
                word2.image = game.assets['./img/na.png'];
                word3.image = game.assets['./img/na.png'];
                banana1.image = game.assets['./img/banana.png'];

                word1.position = {
                        x: wiw * 0.25,
                        y: wih * 0.3
                }
                word1.angle = 0;

                word2.position = {
                        x: wiw * 0.45,
                        y: wih * 0.5
                }
                word2.angle = 0;
                word3.position = {
                        x: wiw * 0.65,
                        y: wih * 0.7
                }
                word3.angle = 0;

	        banana1.x = wiw * 0.5;
                banana1.y = wih * 0.1;
	        banana1.scaleX = 1;
	        banana1.scaleY = 1;

                game.rootScene.addChild(word1);
                game.rootScene.addChild(word2);
                game.rootScene.addChild(word3);
                game.rootScene.addChild(banana1);

                //ボールの作成
                var ball = new PhyCircleSprite(8, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0.5, 0.6, true);
                ball.image = game.assets['./img/icon0.png'];
                ball.frame = 19;

                //ボールを上から落とす関数
                var addBall = function(){
                ball.position = {
                        x: wiw * 0.1,
                        y: 0
                }
                ball.vx = 80;
                ball.vy = 0;
                ball.angularVelocity = 0;

                game.rootScene.addChild(ball);
                }
                //最初のボールを落とす
                addBall();
                game.assets['./snd/water-drop1.mp3'].play();  //水の音　お礼　効果音ラボ様


                //物理エンジン処理
                game.rootScene.onenterframe = function(e) {
                        world.step(game.fps);


                //衝突判定　発声部
                if (word1.within(ball, 40)) {
                       game.assets['./snd/ba.mp3'].play();
                }
                if (word2.within(ball, 50)) {
                       game.assets['./snd/na.mp3'].play();
                }
                if (word3.within(ball, 50)) {
                       game.assets['./snd/na.mp3'].play();
                }

            };
               //クリックで次のボールを落とす
               game.rootScene.addEventListener(Event.TOUCH_START, function() {
                    addBall();
                    game.assets['./snd/water-drop1.mp3'].play();  //水の音　お礼　効果音ラボ様
               });

              //一定間隔でボールを落とす         
              game.rootScene.tl.then(function () {    // 繰り返したい処理
                    addBall();
                    game.assets['./snd/water-drop1.mp3'].play();  //お礼　効果音ラボ様
              }).delay(900).loop();// 指定フレーム待機してから繰り返す。30秒間隔



        }

        game.start();

}

