enchant();//物理エンジンのサンプル　No.7 バナナ3.1 + sw2

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


        var game = new Core(320, 320); //画面サイズを320*320に固定する　バウンドを均一化するため
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
           game.preload ('./img/icon0.png', './snd/gameover.mp3', './snd/water-drop1.mp3', './snd/ba.mp3', './snd/na.mp3', './img/ba.png', './img/na.png', './img/ktba.png', './img/ktna.png', './img/banana2.png', './img/arrow-up.png', './img/arrow-down.png', './img/circle.png', './img/green.png' );

        //メインループ
        game.onload = function() {

                //物理エンジンの宣言
                var world = new PhysicsWorld(0, 9.8);

                //床０の作成
                var floor0 = new PhyBoxSprite(wiw * 1, 10, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                floor0.backgroundColor = "#aaa";
                floor0.position = {
                        x: wiw * 0.5,
                        y: wih * 0.8
                }
                floor0.angle = 0;
                game.rootScene.addChild(floor0);

	        //表示する画像の設定
                var word1 = new PhyBoxSprite(50, 50, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                var word2 = new PhyBoxSprite(50, 50, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                var word3 = new PhyBoxSprite(50, 50, enchant.box2d.STATIC_SPRITE, 0, 1.0, 0, false);
                var banana1 = new Sprite(100, 100);
                var arrowup = new Sprite(96, 96);
                var arrowdown = new Sprite(96, 96);
                var circle = new Sprite(96, 96);
                var blue = new Sprite(96, 96);
                var watch0 = new Sprite(16, 16);
                var watch1 = new Sprite(16, 16);
                var watch2 = new Sprite(16, 16);
                var star0 = new Sprite(16, 16);
                var star1 = new Sprite(16, 16);
                var star2 = new Sprite(16, 16);
                var star3 = new Sprite(16, 16);
                var star4 = new Sprite(16, 16);


                word1.image = game.assets['./img/ba.png'];
                word2.image = game.assets['./img/na.png'];
                word3.image = game.assets['./img/banana2.png'];
                arrowup.image = game.assets['./img/arrow-up.png'];
                arrowdown.image = game.assets['./img/arrow-down.png'];
                circle.image = game.assets['./img/circle.png'];
                blue.image = game.assets['./img/green.png'];
                watch0.image = game.assets['./img/icon0.png'];
                watch0.frame = 34;
                watch1.image = game.assets['./img/icon0.png'];
                watch1.frame = 34;
                watch2.image = game.assets['./img/icon0.png'];
                watch2.frame = 34;
                star0.image = game.assets['./img/icon0.png'];
                star0.frame = 30;
                star1.image = game.assets['./img/icon0.png'];
                star1.frame = 30;
                star2.image = game.assets['./img/icon0.png'];
                star2.frame = 30;
                star3.image = game.assets['./img/icon0.png'];
                star3.frame = 30;
                star4.image = game.assets['./img/icon0.png'];
                star4.frame = 30;

                word1.position = {
                        x: wiw * 0.25,
                        y: wih * 0.3
                }
                word1.angle = 0;

                word2.position = {
                        x: wiw * 0.5,
                        y: wih * 0.5
                }
                word2.angle = 0;
                word3.position = {
                        x: wiw * 0.7,
                        y: wih * 0.55
                }
                word3.angle = 0;


                arrowup.x = wiw * 0.0;
                arrowup.y = wih * 0.75;
                arrowup.scaleX = 0.5;
                arrowup.scaleY = 0.5;

                arrowdown.x = wiw * 0.4;
                arrowdown.y = wih * 0.75;
                arrowdown.scaleX = 0.5;
                arrowdown.scaleY = 0.5;

                circle.x = wiw * 0.2;
                circle.y = wih * 0.75;
                circle.scaleX = 0.5;
                circle.scaleY = 0.5;

                blue.x = wiw * 0.65;
                blue.y = wih * 0.75;
                blue.scaleX = 0.5;
                blue.scaleY = 0.5;

                watch0.x = wiw * 0.13;
                watch0.y = wih * 0.75;
                watch0.scaleX = 2;
                watch0.scaleY = 2;

                watch1.x = wiw * 0.33;
                watch1.y = wih * 0.75;
                watch1.scaleX = 2;
                watch1.scaleY = 2;

                watch2.x = wiw * 0.53;
                watch2.y = wih * 0.75;
                watch2.scaleX = 2;
                watch2.scaleY = 2;

                star0.x = wiw * 0.03;
                star0.y = wih * 0.88;
                star0.scaleX = 1;
                star0.scaleY = 1;

                star1.x = wiw * 0.13;
                star1.y = wih * 0.88;
                star1.scaleX = 1;
                star1.scaleY = 1;

                star2.x = wiw * 0.33;
                star2.y = wih * 0.88;
                star2.scaleX = 1;
                star2.scaleY = 1;

                star3.x = wiw * 0.53;
                star3.y = wih * 0.88;
                star3.scaleX = 1;
                star3.scaleY = 1;

                star4.x = wiw * 0.63;
                star4.y = wih * 0.88;
                star4.scaleX = 1;
                star4.scaleY = 1;


                game.rootScene.addChild(word1);
                game.rootScene.addChild(word2);
                game.rootScene.addChild(word3);
                game.rootScene.addChild(arrowup);
                game.rootScene.addChild(arrowdown);
                game.rootScene.addChild(circle);
                game.rootScene.addChild(blue);
                game.rootScene.addChild(watch0);
                game.rootScene.addChild(watch1);
                game.rootScene.addChild(watch2);
                game.rootScene.addChild(star0);
                game.rootScene.addChild(star1);
                game.rootScene.addChild(star2);
                game.rootScene.addChild(star3);
                game.rootScene.addChild(star4);

                  watch0.frame = 71;
                  watch1.frame = 71;
                  watch2.frame = 71;
                  star0.frame = 71;
                  star1.frame = 71;
                  star2.frame = 71;
                  star3.frame = 71;
                  star4.frame = 71;

                //ボールの作成
                var ball = new PhyCircleSprite(8, enchant.box2d.DYNAMIC_SPRITE, 1.0, 0, 0.6, true);
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

            };
               //クリックで次のボールを落とす
               /*game.rootScene.addEventListener(Event.TOUCH_START, function() {
                    addBall();
                    game.assets['./snd/water-drop1.mp3'].play();  //水の音　お礼　効果音ラボ様
               });*/

              //一定間隔でボールを落とす         
              game.rootScene.tl.then(function () {    // 繰り返したい処理
                    addBall();
                    game.assets['./snd/water-drop1.mp3'].play();  //お礼　効果音ラボ様
              }).delay(300).loop();// 指定フレーム待機してから繰り返す。10秒間隔

              //バナナの絵を動かしている部分
              var speed = 0;
              game.rootScene.addEventListener(Event.ENTER_FRAME, function() { //毎フレームに動作を設定する
               word3.y += speed * 0.1; // 毎フレーム、バナナの座標を上下にずらす
                if ( word3.y > wih * 0.6){
                  speed = 0; 
                }
                if ( word3.y < wih * 0.1){
                  speed = 0; 
                }
              });

              //タイマーを動かしている部分
              var time0 = 0;
              var count0 = 0;
              var up1 = 0;
              game.rootScene.addEventListener(Event.ENTER_FRAME, function() { //毎フレームに動作を設定する
                time0 += up1;

                if ( time0 == 90){//3秒後に押した回数を判定する
                  if ( count0 == 1 ){
                    star1.frame = 30;
                  speed = -1; 
                  };
                  if ( count0 == 2 ){
                    star2.frame = 30;
                  speed = 0; 
                  };
                  if ( count0 == 3 ){
                    star3.frame = 30;
                  speed = 1; 
                  };
                };

                if ( time0 >= 100){//タイマーを停止する
                 time0 = 0;
                 up1 = 0;
                };
              });
              //タッチ（クリック）した際の動作　タイマーをリセットしアイコンの表示を消す
            blue.addEventListener(Event.TOUCH_START, function(e) {
                if ( count0 == 0 ){
                  time0 =0;
                  up1 =1;
                  watch0.frame = 34;
                };
                if ( count0 == 1 ){
                  watch1.frame = 34;
                };
                if ( count0 == 2 ){
                  watch2.frame = 34;
                };
                count0 += 1;

                if ( count0 >= 4 ){
                  watch0.frame = 71;
                  watch1.frame = 71;
                  watch2.frame = 71;
                  star0.frame = 71;
                  star1.frame = 71;
                  star2.frame = 71;
                  star3.frame = 71;
                  star4.frame = 71;
                  count0 = 0;
                };
            });

              //矢印や丸をタッチ（クリック）した際の動作
            arrowup.addEventListener(Event.TOUCH_START, function(e) {
                  speed = -1; 
            });
            arrowdown.addEventListener(Event.TOUCH_START, function(e) {
                  speed = 1; 
            });
            circle.addEventListener(Event.TOUCH_START, function(e) {
                  speed = 0; 
            });


        }

        game.start();

}

