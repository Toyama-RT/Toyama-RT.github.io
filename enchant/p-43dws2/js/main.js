enchant(); // 簡易会話装置のサンプル 合成音声テスト用 ios用

enchant.Sound.enabledInMobileSafari = true;
//enchant.jsはデフォルトではiOSで音が鳴らないようになっている。音を鳴らすにはこの一文を入れる

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

    var game_ = new Game(window.innerWidth  , window.innerHeight  ); 

    var wiw = window.innerWidth;  //モニター表示範囲幅
    var wih = window.innerHeight; // モニター表示範囲高
    var scx = wiw * 5.5 / 1280; // 文字キー幅の係数
    var scy = wih * 2.5 / 1024;　// 文字キー高さ係数

            var title3 = new Label('');
            title3.x = 10;
            title3.y = 10;
            game_.rootScene.addChild(title3);
            title3.text = 'web speech api のテスト用　safari日本語　こんにちは　はgoogle日本語　さようならはkyoko　ありがとう　Otoya、speechSynthesis　api　で発声　ごめんなさい　は　mp3ファイルを再生しています。';

/*     // 表示画面の大きさを表示する機能
　　　　　　　　var title1 = new Label('');
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
            //title2.text = game_.width;
*/

            //　speechSynthesis　api音声の設定　起動時の音声発声
        if (!'SpeechSynthesisUtterance' in window) {
          alert('Web Speech API には未対応です.');
        return;
        }

            var synthes = new SpeechSynthesisUtterance();
               //synthes.voiceURI = 'Google 日本人';//'native';
               synthes.volume = 1;
               synthes.rate = 1;
               synthes.pitch = 1;
               synthes.lang = "ja-JP";
               synthes.text = "準備出来ました";
               //synthes.lang = 'en-US';
               //synthes.text = 'hello, Now, We start the enchant.js';
            //synthes.onend = function (event) {
              //console.log('speech end. time=' + event.elapsedTime + 's');
            //}

               speechSynthesis.speak(synthes);


    game_.fps = 10; 
    game_.preload('kotoba1.gif', 'kotoba1.mp3', 'kotoba2.gif', 'kotoba2.mp3', 'kotoba3.gif', 'kotoba3.mp3', 'kotoba4.gif', 'kotoba4.mp3', 'jump.mp3', 'gameover.mp3');
    game_.onload = function() { 
        game_.assets['gameover.mp3'].play();


	//表示する画像の設定
        var word1 = new Sprite(200, 50);
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);

        word1.image = game_.assets['kotoba1.gif'];
　       word2.image = game_.assets['kotoba2.gif'];
　       word3.image = game_.assets['kotoba3.gif'];
　       word4.image = game_.assets['kotoba4.gif'];

	word1.x =  wiw * 0.5 -100;
        word1.y =  wih * 0.15;
	word1.scaleX = scx;
	word1.scaleY = scy;
	word2.x =  wiw * 0.5 - 100;
        word2.y =  wih * 0.3;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.5 -100;
        word3.y =  wih * 0.45;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.5 - 100;
        word4.y =  wih * 0.6;
	word4.scaleX = scx;
	word4.scaleY = scy;

        game_.rootScene.addChild(word1);
        game_.rootScene.addChild(word2);
        game_.rootScene.addChild(word3);
        game_.rootScene.addChild(word4);

        game_.rootScene.backgroundColor  = '#7ecef4';


        // シーンに「タッチイベント」を追加します。

            word1.addEventListener(Event.TOUCH_START, function(e) {
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = "こんにちは、私は横浜に住んでいます。";
                speechSynthesis.speak(synthes);
                //game_.assets['kotoba1.mp3'].clone().play();
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.voice = 'Kyoko';
                synthes.text = "さようなら";
                speechSynthesis.speak(synthes);
                //synthes.voice = 'Google 日本語';

		//game_.assets['kotoba2.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.voice = "Kyoko";
                synthes.text = "ありがとう";
                speechSynthesis.speak(synthes);
                //synthes.voice = 'Google 日本語';
		//game_.assets['kotoba3.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
                synthes.text = "ごめんなさい";
                speechSynthesis.speak(synthes);
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.voice = "Kyoko";
		//game_.assets['kotoba4.mp3'].clone().play();
            });

    }
    game_.start();

};
