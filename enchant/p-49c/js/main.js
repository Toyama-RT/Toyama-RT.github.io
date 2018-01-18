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

    var game_ = new Game(window.innerWidth  , window.innerHeight  ); // 表示領域の大きさ設定

    var wiw = window.innerWidth;  //モニター表示幅
    var wih = window.innerHeight; // モニター表示高
    var scx = wiw * 5.5 / 1280; // 横の係数
    var scy = wih * 2.5 / 1024;　// 縦の係数
     // 表示画面の大きさ表示機能
      /*    var title1 = new Label('');
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

    game_.fps = 30; // frames/second: 進行スピード設定
    game_.preload('1.png', '1.mp3', '2.png', '2.mp3', '3.png', '3.mp3', '4.png', '4.mp3', '5.png', '5.mp3', '6.png', '6.mp3', 'jump.mp3', 'gameover.mp3'); // ゲームに使う素材読み込み

    game_.onload = function() { // メイン処理開始

        game_.assets['gameover.mp3'].play();//起動時の音 音量調節用

	//表示画像の設定
        var word1 = new Sprite(50, 50);  // word1　画像表示領域の寸法設定
        var word2 = new Sprite(50, 50);
        var word3 = new Sprite(50, 50);
        var word4 = new Sprite(50, 50);
        var word5 = new Sprite(50, 50);
        var word6 = new Sprite(50, 50);


        word1.image = game_.assets['1.png']; // word1にロードした画像を適用
        word2.image = game_.assets['2.png'];
        word3.image = game_.assets['3.png'];
        word4.image = game_.assets['4.png'];
        word5.image = game_.assets['5.png'];
        word6.image = game_.assets['6.png'];

	word1.x =  wiw * 0.25 -25;  // 横位置設定　左から幅の25%
        word1.y =  wih * 0.17 -25; // 縦位置設定　上から高さの17%
	word1.scaleX = scx * 2.2 ; // 幅 2.2倍表示
	word1.scaleY = scy * 2.5 ; // 高
	word2.x =  wiw * 0.75 -25; //左から75%
        word2.y =  wih * 0.17 -25; //上から17%
	word2.scaleX = scx * 2.2 ;
	word2.scaleY = scy * 2.5 ;
	word3.x =  wiw * 0.25 -25; //左から25%
        word3.y =  wih * 0.50 -25; //上から50%
	word3.scaleX = scx * 2.2 ;
	word3.scaleY = scy * 2.5 ;
	word4.x =  wiw * 0.75 -25; //左から75%
        word4.y =  wih * 0.50 -25; //上から50%
	word4.scaleX = scx * 2.2 ; 
	word4.scaleY = scy * 2.5 ; 
	word5.x =  wiw * 0.25 -25; //左から25%
        word5.y =  wih * 0.83 -25; //上から83%
	word5.scaleX = scx * 2.2 ;
	word5.scaleY = scy * 2.5 ;
	word6.x =  wiw * 0.75 -25; //左から75%
        word6.y =  wih * 0.83 -25; //上から83%
	word6.scaleX = scx * 2.2 ;
	word6.scaleY = scy * 2.5 ;


        game_.rootScene.addChild(word1); // シーンに画像を表示
        game_.rootScene.addChild(word2);
        game_.rootScene.addChild(word3);
        game_.rootScene.addChild(word4);
        game_.rootScene.addChild(word5);
        game_.rootScene.addChild(word6);

        game_.rootScene.backgroundColor  = '#7ecef4'; // 背景色設定


        // シーンに「タッチイベント」を追加

            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT); //90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['1.mp3'].clone().play();
	        word1.frame ++;
	        if (word1.frame > 1) {
	        word1.frame = 0;
                }
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['2.mp3'].clone().play();
	        word2.frame ++;
	        if (word2.frame > 1) {
	        word2.frame = 0;
                }
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['3.mp3'].clone().play();
	        word3.frame ++;
	        if (word3.frame > 1) {
	        word3.frame = 0;
                }
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['4.mp3'].clone().play();
	        word4.frame ++;
	        if (word4.frame > 1) {
	        word4.frame = 0;
                }
            });
            word5.addEventListener(Event.TOUCH_START, function(e) {
		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['5.mp3'].clone().play();
	        word5.frame ++;
	        if (word5.frame > 1) {
	        word5.frame = 0;
                }
            });
            word6.addEventListener(Event.TOUCH_START, function(e) {
		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['6.mp3'].clone().play();
	        word6.frame ++;
	        if (word6.frame > 1) {
	        word6.frame = 0;
                }
            });

    }
    game_.start(); // スタート
};
