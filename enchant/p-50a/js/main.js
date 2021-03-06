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
    game_.preload('shiro.png', 'shiro.mp3', 'kiiro.png', 'kiiro.mp3', 'lime.png', 'lime.mp3','midori.png', 'midori.mp3', 'mizuiro.png', 'mizuiro.mp3', 'ao.png', 'ao.mp3','momoiro.png', 'momoiro.mp3', 'aka.png', 'aka.mp3', 'daidai.png', 'daidai.mp3','cyairo.png', 'cyairo.mp3', 'haiiro.png', 'haiiro.mp3', 'kuro.png', 'kuro.mp3', 'jump.mp3', 'gameover.mp3'); // ゲームに使う素材読み込み

    game_.onload = function() { // メイン処理開始

        game_.assets['gameover.mp3'].play();//起動時の音 音量調節用

	//表示画像の設定
        var word1 = new Sprite(50, 50);  // word1　画像表示領域の寸法設定
        var word2 = new Sprite(50, 50);
        var word3 = new Sprite(50, 50);
        var word4 = new Sprite(50, 50);
        var word5 = new Sprite(50, 50);
        var word6 = new Sprite(50, 50);
        var word7 = new Sprite(50, 50);
        var word8 = new Sprite(50, 50);
        var word9 = new Sprite(50, 50);
        var word10 = new Sprite(50, 50);
        var word11 = new Sprite(50, 50);
        var word12 = new Sprite(50, 50);

        word1.image = game_.assets['shiro.png']; // word1にロードした画像を適用
　       word2.image = game_.assets['kiiro.png'];
　       word3.image = game_.assets['lime.png'];
        word4.image = game_.assets['midori.png'];
　       word5.image = game_.assets['mizuiro.png'];
　       word6.image = game_.assets['ao.png'];
        word7.image = game_.assets['momoiro.png'];
　       word8.image = game_.assets['aka.png'];
　       word9.image = game_.assets['daidai.png'];
        word10.image = game_.assets['cyairo.png'];
　       word11.image = game_.assets['haiiro.png'];
　       word12.image = game_.assets['kuro.png'];

	word1.x =  wiw * 0.15 -25;  // 横位置設定　左から幅の15%
        word1.y =  wih * 0.12 -25; // 縦位置設定　上から高さの12%
	word1.scaleX = scx * 1.5 ; // 幅　1.5倍表示
	word1.scaleY = scy * 1.9 ; // 高  1.9
	word2.x =  wiw * 0.5 - 25; //左から50%
        word2.y =  wih * 0.12 -25; //上から12%
	word2.scaleX = scx * 1.5 ;
	word2.scaleY = scy * 1.9 ;
	word3.x =  wiw * 0.85 - 25; //左から85%
        word3.y =  wih * 0.12 -25; //上から12%
	word3.scaleX = scx * 1.5 ;
	word3.scaleY = scy * 1.9 ;
	word4.x =  wiw * 0.15 -25;
        word4.y =  wih * 0.37 -25;
	word4.scaleX = scx * 1.5 ;
	word4.scaleY = scy * 1.9 ;
	word5.x =  wiw * 0.5 - 25;
        word5.y =  wih * 0.37 -25;
	word5.scaleX = scx * 1.5 ;
	word5.scaleY = scy * 1.9 ;
	word6.x =  wiw * 0.85 - 25;
        word6.y =  wih * 0.37 -25;
	word6.scaleX = scx * 1.5 ;
	word6.scaleY = scy * 1.9 ;
	word7.x =  wiw * 0.15 -25;
        word7.y =  wih * 0.62 -25;
	word7.scaleX = scx * 1.5 ;
	word7.scaleY = scy * 1.9 ;
	word8.x =  wiw * 0.5 - 25;
        word8.y =  wih * 0.62 -25;
	word8.scaleX = scx * 1.5 ;
	word8.scaleY = scy * 1.9 ;
	word9.x =  wiw * 0.85 - 25;
        word9.y =  wih * 0.62 -25;
	word9.scaleX = scx * 1.5 ;
	word9.scaleY = scy * 1.9 ;
	word10.x =  wiw * 0.15 -25;
        word10.y =  wih * 0.87 -25;
	word10.scaleX = scx * 1.5 ;
	word10.scaleY = scy * 1.9 ;
	word11.x =  wiw * 0.5 - 25;
        word11.y =  wih * 0.87 -25;
	word11.scaleX = scx * 1.5 ;
	word11.scaleY = scy * 1.9 ;
	word12.x =  wiw * 0.85 - 25;
        word12.y =  wih * 0.87 -25;
	word12.scaleX = scx * 1.5 ;
	word12.scaleY = scy * 1.9 ;


        game_.rootScene.addChild(word1); // シーンに画像を表示
        game_.rootScene.addChild(word2);
        game_.rootScene.addChild(word3);
        game_.rootScene.addChild(word4);
        game_.rootScene.addChild(word5);
        game_.rootScene.addChild(word6);
        game_.rootScene.addChild(word7);
        game_.rootScene.addChild(word8);
        game_.rootScene.addChild(word9);
        game_.rootScene.addChild(word10);
        game_.rootScene.addChild(word11);
        game_.rootScene.addChild(word12);

        game_.rootScene.backgroundColor  = '#ffffff'; // 背景色設定 white


        // シーンに「タッチイベント」を追加

            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　　//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　//元に戻る
                game_.assets['shiro.mp3'].clone().play();
	        word1.frame ++;
	        if (word1.frame > 1) {
	        word1.frame = 0;
                }
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kiiro.mp3'].clone().play();
	        word2.frame ++;
	        if (word2.frame > 1) {
	        word2.frame = 0;
                }
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['lime.mp3'].clone().play();
	        word3.frame ++;
	        if (word3.frame > 1) {
	        word3.frame = 0;
                }
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets['midori.mp3'].clone().play();
	        word4.frame ++;
	        if (word4.frame > 1) {
	        word4.frame = 0;
                }
            });     
            word5.addEventListener(Event.TOUCH_START, function(e) {
		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['mizuiro.mp3'].clone().play();
	        word5.frame ++;
	        if (word5.frame > 1) {
	        word5.frame = 0;
                }
            });
            word6.addEventListener(Event.TOUCH_START, function(e) {
		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['ao.mp3'].clone().play();
	        word6.frame ++;
	        if (word6.frame > 1) {
	        word6.frame = 0;
                }
            });
            word7.addEventListener(Event.TOUCH_START, function(e) {
		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets['momoiro.mp3'].clone().play();
	        word7.frame ++;
	        if (word7.frame > 1) {
	        word7.frame = 0;
                }
            });     
            word8.addEventListener(Event.TOUCH_START, function(e) {
		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['aka.mp3'].clone().play();
	        word8.frame ++;
	        if (word8.frame > 1) {
	        word8.frame = 0;
                }
            });
            word9.addEventListener(Event.TOUCH_START, function(e) {
		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['daidai.mp3'].clone().play();
	        word9.frame ++;
	        if (word9.frame > 1) {
	        word9.frame = 0;
                }
            });
            word10.addEventListener(Event.TOUCH_START, function(e) {
		word10.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word10.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets['cyairo.mp3'].clone().play();
	        word10.frame ++;
	        if (word10.frame > 1) {
	        word10.frame = 0;
                }
            });     
            word11.addEventListener(Event.TOUCH_START, function(e) {
		word11.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word11.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['haiiro.mp3'].clone().play();
	        word11.frame ++;
	        if (word11.frame > 1) {
	        word11.frame = 0;
                }
            });
            word12.addEventListener(Event.TOUCH_START, function(e) {
		word12.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word12.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kuro.mp3'].clone().play();
	        word12.frame ++;
	        if (word12.frame > 1) {
	        word12.frame = 0;
                }
            });

    }
    game_.start(); // スタート
};
