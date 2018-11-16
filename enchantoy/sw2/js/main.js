enchant();//スイッチのサンプル　No.2

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
           game.preload ('./img/icon0.png', './img/green.png');

        //メインループ
        game.onload = function() {

	        //表示する画像の設定
                var blue = new Sprite(96, 96);
                var one = new Sprite(16, 16);
                var two = new Sprite(16, 16);
                var three = new Sprite(16, 16);
                var watch0 = new Sprite(16, 16);
                var watch1 = new Sprite(16, 16);
                var watch2 = new Sprite(16, 16);
                var star0 = new Sprite(16, 16);
                var star1 = new Sprite(16, 16);
                var star2 = new Sprite(16, 16);
                var star3 = new Sprite(16, 16);
                var star4 = new Sprite(16, 16);

                blue.image = game.assets['./img/green.png'];
                one.image = game.assets['./img/icon0.png'];
                one.frame = 0;
                two.image = game.assets['./img/icon0.png'];
                two.frame = 1;
                three.image = game.assets['./img/icon0.png'];
                three.frame = 2;
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


                blue.x = wiw * 0.35;
                blue.y = wih * 0.75;
                blue.scaleX = 1;
                blue.scaleY = 0.5;

                one.x = wiw * 0.1;
                one.y = wih * 0.2;
                one.scaleX = 2;
                one.scaleY = 2;

                two.x = wiw * 0.1;
                two.y = wih * 0.4;
                two.scaleX = 2;
                two.scaleY = 2;

                three.x = wiw * 0.1;
                three.y = wih * 0.6;
                three.scaleX = 2;
                three.scaleY = 2;

                watch0.x = wiw * 0.4;
                watch0.y = wih * 0.2;
                watch0.scaleX = 2;
                watch0.scaleY = 2;

                watch1.x = wiw * 0.4;
                watch1.y = wih * 0.4;
                watch1.scaleX = 2;
                watch1.scaleY = 2;

                watch2.x = wiw * 0.4;
                watch2.y = wih * 0.6;
                watch2.scaleX = 2;
                watch2.scaleY = 2;

                star0.x = wiw * 0.7;
                star0.y = wih * 0.0;
                star0.scaleX = 2;
                star0.scaleY = 2;

                star1.x = wiw * 0.7;
                star1.y = wih * 0.2;
                star1.scaleX = 2;
                star1.scaleY = 2;

                star2.x = wiw * 0.7;
                star2.y = wih * 0.4;
                star2.scaleX = 2;
                star2.scaleY = 2;

                star3.x = wiw * 0.7;
                star3.y = wih * 0.6;
                star3.scaleX = 2;
                star3.scaleY = 2;

                star4.x = wiw * 0.7;
                star4.y = wih * 0.8;
                star4.scaleX = 2;
                star4.scaleY = 2;

                game.rootScene.addChild(blue);
                game.rootScene.addChild(one);
                game.rootScene.addChild(two);
                game.rootScene.addChild(three);
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

              //タイマーを動かしている部分
              var time0 = 0;
              var count0 = 0;
              var up1 = 0;
              game.rootScene.addEventListener(Event.ENTER_FRAME, function() { //毎フレームに動作を設定する
                time0 += up1;

                if ( time0 == 90){//3秒後に押した回数を判定する
                  if ( count0 == 1 ){
                    star1.frame = 30;
                  };
                  if ( count0 == 2 ){
                    star2.frame = 30;
                  };
                  if ( count0 == 3 ){
                    star3.frame = 30;
                  };
                };

                if ( time0 >= 100){//タイマーを停止する
                 time0 = 0;
                 up1 = 0;
                };
              });

              //タッチ（クリック）した際の動作　タイマーをスタートして回数に応じてアイコン表示する
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

        }

        game.start();

}

