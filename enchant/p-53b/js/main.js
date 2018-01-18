enchant(); // おまじない

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

    var game_ = new Core(window.innerWidth  , window.innerHeight  ); // 表示領域設定

    var wiw = window.innerWidth;  //モニター表示幅
    var wih = window.innerHeight; // モニター表示高
    var scx = wiw * 5.5 / 1280; // 横の係数
    var scy = wih * 2.5 / 1024;　// 縦の係数
     // 表示画面の大きさ表示機能
   /*     var title1 = new Label('');
            title1.x = 0;
            title1.y = 10;
            game_.rootScene.addChild(title1);
            title1.text = window.innerHeight;
            //title1.text = game_.width;
          var title2 = new Label('');
            title2.x = 0;
            title2.y = 30;
            game_.rootScene.addChild(title2);
            title2.text = window.innerWidth;
            //title2.text = game_.width; */

    game_.fps = 15; // frames/second: 進行スピード設定
    game_.preload('1a.png', '2a.png', '3a.png', 'jump.mp3', 'gameover.mp3', 'onajimono.mp3', 'correct1.mp3', 'incorrect1.mp3'); // ゲームに使う素材読み込み　感謝　oide43.com

	var randnum = Math.floor( Math.random() * 3 );//乱数発生

    game_.onload = function() { // メイン処理

        game_.assets['gameover.mp3'].play();//起動時の音 音量調節用

	//表示画像の設定
        var word1 = new Sprite(50, 50);  // word1　画像表示領域設定
        var word2 = new Sprite(50, 50);
        var word3 = new Sprite(50, 50);
        var word4 = new Sprite(50, 50);

        word1.image = game_.assets['1a.png'];
        word2.image = game_.assets['2a.png'];
        word3.image = game_.assets['3a.png'];
	if (randnum == 0) {
	    word4.image = game_.assets['1a.png'];
            }else if (randnum == 1) {
	    word4.image = game_.assets['2a.png'];
            }else{
	    word4.image = game_.assets['3a.png'];
        }

	word1.x =  wiw * 0.15 -25; // 横位置設定　左から幅
        word1.y =  wih * 0.8  -25; // 縦位置設定　上から高
	word1.scaleX = scx * 1.3 ; // 幅
	word1.scaleY = scy * 2.5 ; // 高
	word2.x =  wiw * 0.5 - 25;
        word2.y =  wih * 0.8 - 25;
	word2.scaleX = scx * 1.3 ;
	word2.scaleY = scy * 2.5 ;
	word3.x =  wiw * 0.85 - 25;
        word3.y =  wih * 0.8  -25;
	word3.scaleX = scx * 1.3 ;
	word3.scaleY = scy * 2.5 ;
	word4.x =  wiw * -0.15  - 25;
        word4.y =  wih * 0.3  -25;
	word4.scaleX = scx * 1.3 ;
	word4.scaleY = scy * 2.5 ;


        game_.rootScene.addChild(word1); // シーンに画像を表示
        game_.rootScene.addChild(word2);
        game_.rootScene.addChild(word3);
        game_.rootScene.addChild(word4);

        game_.rootScene.backgroundColor  = '#7ecef4'; // 背景色設定

        var title1 = new Label('おなじものクイズ');
            title1.color = '#000000';                   // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォントを大きさを変更する
		title1.font = '120px sans-serif';            // 120pxのゴシック体にする
		} else if (window.innerWidth < 600){
		title1.font = '30px sans-serif';            // 30pxのゴシック体にする
		} else {
		title1.font = '60px sans-serif';            // 60pxのゴシック体にする
		}
            title1.textAlign = 'center';                // 中央揃えにする
            title1.width = wiw * 0.8;                       // 自動改行の指定
            title1.x = wiw * 0.1;
            title1.y = wih * 0.3;
            game_.rootScene.addChild(title1);
 
        var speed = 5;// スピードを表す変数
        var voice1 = 0;
        // 毎フレーム実行イベント
        game_.rootScene.addEventListener(Event.ENTER_FRAME, function() {
            word4.x += speed;
	    if ((word4.x > 0) && (voice1 == 0)) {
		game_.assets['onajimono.mp3'].clone().play();
                game_.rootScene.removeChild(title1);
                voice1 = 1;
            }
	    if (word4.x > wiw * 0.5 - 25) {
	    speed = 0;
            }
        });

        // シーンに「タッチイベント」を追加

            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　　//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　//元に戻る
		if (randnum == 0) {
		    game_.assets['correct1.mp3'].clone().play();
        	    }else {
		    game_.assets['incorrect1.mp3'].clone().play();
        	}
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		if (randnum == 1) {
		    game_.assets['correct1.mp3'].clone().play();
        	    }else {
		    game_.assets['incorrect1.mp3'].clone().play();
        	}
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		if (randnum == 2) {
		    game_.assets['correct1.mp3'].clone().play();
        	    }else {
		    game_.assets['incorrect1.mp3'].clone().play();
        	}
            });


    }
    game_.start(); // スタート
};
