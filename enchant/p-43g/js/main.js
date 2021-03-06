enchant(); // 簡易会話装置のサンプル　シンボル使用 アニメーション試作
/*
このアニメーション化に際してドロップレット・プロジェクトさんから許可をいただいています。皆さんが同様の試みをする場合も事前にドロップレット・プロジェクトさんに確認し許可を得る必要があります。ご注意ください。 
*/

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

    var game_ = new Core(window.innerWidth  , window.innerHeight  );

    var wiw = window.innerWidth;  //モニター幅
    var wih = window.innerHeight; // モニター高
    var scx = wiw * 0.8 / 1280;
    var scy = wih * 0.8 / 1024;
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

    game_.fps = 6;
    game_.preload('kotoba1.gif', 'kotoba1.mp3', 'kotoba2.gif', 'kotoba2.mp3', 'kotoba3.gif', 'kotoba3.mp3', 'kotoba4.gif', 'kotoba4.mp3', 'jump.mp3', 'gameover.mp3');

    game_.onload = function() { 
        game_.assets['gameover.mp3'].play();


	//表示画像設定
        var word1 = new Sprite(512, 512);
        var word2 = new Sprite(512, 512);
        var word3 = new Sprite(512, 512);
        var word4 = new Sprite(512, 512);

        word1.image = game_.assets['kotoba1.gif'];
        word2.image = game_.assets['kotoba2.gif'];
        word3.image = game_.assets['kotoba3.gif'];
        word4.image = game_.assets['kotoba4.gif'];

	word1.x =  wiw * 0.25 -256; // word1の横位置
        word1.y =  wih * 0.25 -256; // word1の縦位置
	word1.scaleX = scx;
	word1.scaleY = scy;
	word2.x =  wiw * 0.75 - 256;
        word2.y =  wih * 0.25 - 256;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.25 - 256;
        word3.y =  wih * 0.75 - 256;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.75 - 256;
        word4.y =  wih * 0.75 - 256;
	word4.scaleX = scx;
	word4.scaleY = scy;

        game_.rootScene.addChild(word1);
        game_.rootScene.addChild(word2);
        game_.rootScene.addChild(word3);
        game_.rootScene.addChild(word4);

        game_.rootScene.backgroundColor  = '#7ecef4';


        //毎フレーム実行イベント
        game_.rootScene.addEventListener(Event.ENTER_FRAME, function() {
	word1.frame ++;
	if (word1.frame > 2) {
	word1.frame = 0;
         }
	word2.frame ++;
	if (word2.frame > 2) {
	word2.frame = 0;
         }
        });


        //タッチイベント
            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['kotoba1.mp3'].clone().play(); //言葉を発声する
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba2.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba3.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba4.mp3'].clone().play();
            });

    }
    game_.start();


};
