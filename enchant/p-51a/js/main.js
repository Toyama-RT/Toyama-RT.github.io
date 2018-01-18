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
　　　　　　/*　　var title1 = new Label('');
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
    game_.preload('pdo.png', '1do.mp3', 'pre.png', '2re.mp3', 'pmi.png', '3mi.mp3','pfa.png', '4fa.mp3', 'psol.png', '5sol.mp3', 'pla.png', '6la.mp3','psi.png', '7si.mp3', 'pdo2.png', '8do.mp3', 'jump.mp3', 'gameover.mp3'); // ゲームに使う素材読み込み

    game_.onload = function() { // メイン処理開始

        game_.assets['gameover.mp3'].play();//起動時の音 音量調節用

	//表示画像の設定
        var word1 = new Sprite(137, 30);  // word1　画像表示領域の寸法設定
        var word2 = new Sprite(137, 30);
        var word3 = new Sprite(137, 30);
        var word4 = new Sprite(137, 30);
        var word5 = new Sprite(137, 30);
        var word6 = new Sprite(137, 30);
        var word7 = new Sprite(137, 30);
        var word8 = new Sprite(137, 30);

        word1.image = game_.assets['pdo.png']; // word1にロードした画像を適用
　       word2.image = game_.assets['pre.png'];　//　画像提供　ツボタ様
　       word3.image = game_.assets['pmi.png'];
        word4.image = game_.assets['pfa.png'];
　       word5.image = game_.assets['psol.png'];
　       word6.image = game_.assets['pla.png'];
        word7.image = game_.assets['psi.png'];
　       word8.image = game_.assets['pdo2.png'];

	word1.x =  wiw * 0.5 - 68;  // 横位置設定　左から幅の50%
        word1.y =  wih * 0.1 - 15; // 縦位置設定　上から高さの10%
	word1.scaleX = scx * 1.5 ; // 幅　1.5倍表示
	word1.scaleY = scy * 1.5 ; // 高
	word2.x =  wiw * 0.5 - 68; //左から50%
        word2.y =  wih * 0.2 - 15; //上から20%
	word2.scaleX = scx * 1.5 ;
	word2.scaleY = scy * 1.5 ;
	word3.x =  wiw * 0.5 - 68;
        word3.y =  wih * 0.3 - 15;
	word3.scaleX = scx * 1.5 ;
	word3.scaleY = scy * 1.5 ;
	word4.x =  wiw * 0.5 - 68;
        word4.y =  wih * 0.4 - 15;
	word4.scaleX = scx * 1.5 ;
	word4.scaleY = scy * 1.5 ;
	word5.x =  wiw * 0.5 - 68;
        word5.y =  wih * 0.5 - 10;//yの値を微調整しています
	word5.scaleX = scx * 1.5 ;
	word5.scaleY = scy * 1.5 ;
	word6.x =  wiw * 0.5 - 68;
        word6.y =  wih * 0.6 - 3　;
	word6.scaleX = scx * 1.5 ;
	word6.scaleY = scy * 1.5 ;
	word7.x =  wiw * 0.5 - 68;
        word7.y =  wih * 0.7 + 3 ;
	word7.scaleX = scx * 1.5 ;
	word7.scaleY = scy * 1.5 ;
	word8.x =  wiw * 0.5 - 68;
        word8.y =  wih * 0.8 + 9 ;
	word8.scaleX = scx * 1.5 ;
	word8.scaleY = scy * 1.5 ;


        game_.rootScene.addChild(word1); // シーンに画像を表示
        game_.rootScene.addChild(word2);
        game_.rootScene.addChild(word3);
        game_.rootScene.addChild(word4);
        game_.rootScene.addChild(word5);
        game_.rootScene.addChild(word6);
        game_.rootScene.addChild(word7);
        game_.rootScene.addChild(word8);

        game_.rootScene.backgroundColor  = '#000000'; // 背景色設定


        // シーンに「タッチイベント」を追加

            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　　//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　//元に戻る
                game_.assets['1do.mp3'].clone().play();// 音源提供　魔王魂様
	        word1.frame ++;
	        if (word1.frame > 1) {
	        word1.frame = 0;
                }
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['2re.mp3'].clone().play();
	        word2.frame ++;
	        if (word2.frame > 1) {
	        word2.frame = 0;
                }
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['3mi.mp3'].clone().play();
	        word3.frame ++;
	        if (word3.frame > 1) {
	        word3.frame = 0;
                }
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets['4fa.mp3'].clone().play();
	        word4.frame ++;
	        if (word4.frame > 1) {
	        word4.frame = 0;
                }
            });     
            word5.addEventListener(Event.TOUCH_START, function(e) {
		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['5sol.mp3'].clone().play();
	        word5.frame ++;
	        if (word5.frame > 1) {
	        word5.frame = 0;
                }
            });
            word6.addEventListener(Event.TOUCH_START, function(e) {
		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['6la.mp3'].clone().play();
	        word6.frame ++;
	        if (word6.frame > 1) {
	        word6.frame = 0;
                }
            });
            word7.addEventListener(Event.TOUCH_START, function(e) {
		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets['7si.mp3'].clone().play();
	        word7.frame ++;
	        if (word7.frame > 1) {
	        word7.frame = 0;
                }
            });     
            word8.addEventListener(Event.TOUCH_START, function(e) {
		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['8do.mp3'].clone().play();
	        word8.frame ++;
	        if (word8.frame > 1) {
	        word8.frame = 0;
                }
            });


    }
    game_.start(); // スタート
};
