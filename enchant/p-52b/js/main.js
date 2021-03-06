enchant();

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
    var wiw = window.innerWidth;  //モニター表示幅
    var wih = window.innerHeight; //表示高
    var scx = wiw * 5.5 / 1280; // 文字キー幅の係数
    var scy = wih * 2.5 / 1024;// 文字キー高さ係数

        game_.fps = 15; // frames per second: 進行速度
        game_.preload('kotoba11.gif', 'kotoba11.mp3', 'kotoba12.gif', 'kotoba12.mp3', 'kotoba13.gif', 'kotoba13.mp3', 'kotoba14.gif', 'kotoba14.mp3', 'kotoba21.gif', 'kotoba21.mp3', 'kotoba22.gif', 'kotoba22.mp3', 'kotoba23.gif', 'kotoba23.mp3', 'kotoba24.gif', 'kotoba24.mp3', 'kotoba31.gif', 'kotoba31.mp3', 'kotoba32.gif', 'kotoba32.mp3', 'kotoba33.gif', 'kotoba33.mp3', 'kotoba34.gif', 'kotoba34.mp3', 'kotoba41.gif', 'kotoba41.mp3', 'kotoba42.gif', 'kotoba42.mp3', 'kotoba43.gif', 'kotoba43.mp3', 'kotoba44.gif', 'kotoba44.mp3', 'p1.gif', 'p2.gif', 'p3.gif', 'p4.gif',  'jump.mp3', 'gameover.mp3'); // pre-load:素材読込

        game_.onload = function() {     // メイン
        game_.assets['gameover.mp3'].play();

      // 画面１
          var create1stScene = function() {
                var scene = new Scene();
                //var label = new Label('画面1');
                //scene.addChild(label);
                scene.backgroundColor = 'rgba(0, 255, 255, 1)';      // 背景色

	//表示する画像の設定
        var word1 = new Sprite(200, 50);  // word1スプライトを準備,表示領域設定
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);
        var p1 = new Sprite(50, 50);
        var p2 = new Sprite(50, 50);
        var p3 = new Sprite(50, 50);
        var p4 = new Sprite(50, 50);
        word1.image = game_.assets['kotoba11.gif']; // word1に画像を適用
        word2.image = game_.assets['kotoba12.gif'];
        word3.image = game_.assets['kotoba13.gif'];
        word4.image = game_.assets['kotoba14.gif'];
        p1.image = game_.assets['p1.gif'];
        p2.image = game_.assets['p2.gif'];
        p3.image = game_.assets['p3.gif'];
        p4.image = game_.assets['p4.gif'];
	word1.x =  wiw * 0.5 -100; // word1の横位置左から幅の50%
        word1.y =  wih * 0.15; // word1の縦位置上から高さの15%
	word1.scaleX = scx;   // 幅
	word1.scaleY = scy;   // 高さ
	word2.x =  wiw * 0.5 -100;
        word2.y =  wih * 0.3;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.5 -100;
        word3.y =  wih * 0.45;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.5 -100;
        word4.y =  wih * 0.6;
	word4.scaleX = scx;
	word4.scaleY = scy;
	p1.x =  wiw * 0.14 -25;
        p1.y =  wih * 0.75;
	p1.scaleX = scx;
	p1.scaleY = scy;
	p2.x =  wiw * 0.38 -25;
        p2.y =  wih * 0.75;
	p2.scaleX = scx;
	p2.scaleY = scy;
	p3.x =  wiw * 0.62 -25;
        p3.y =  wih * 0.75;
	p3.scaleX = scx;
	p3.scaleY = scy;
	p4.x =  wiw * 0.86 -25;
        p4.y =  wih * 0.75;
	p4.scaleX = scx;
	p4.scaleY = scy;

        scene.addChild(word1); // 画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(p2);
        scene.addChild(p3);
        scene.addChild(p4);

        var title = new Label('あいさつ　１');         //文字列表示
            title.color = '#000000';                   // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォントを変更
		title.font = '60px sans-serif';            // 60pxゴシック体
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30px
		} else {
		title.font = '35px sans-serif';            // 35px
		}
            title.textAlign = 'center';                // 中央揃え
            title.width = wiw * 0.8;                   // 自動改行指定
            title.x = wiw * 0.1;                       // 横位置調整
            title.y = wih * 0.025;                     // 縦位置調整
            scene.addChild(title);                     // 追加

        // 発声部分
            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['kotoba11.mp3'].clone().play(); //言葉を発声する
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba12.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba13.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) { 
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba14.mp3'].clone().play();
            });
            p2.addEventListener(Event.TOUCH_START, function(e) {
		p2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create2ndScene()); // 画面２に切り替え
            });
            p3.addEventListener(Event.TOUCH_START, function(e) {
		p3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create2ndScene()); // 画面２に切り替え
                game_.pushScene(create3rdScene()); // 画面３に切り替え
            });
            p4.addEventListener(Event.TOUCH_START, function(e) {
		p4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create2ndScene()); // 画面２に切り替え
                game_.pushScene(create3rdScene()); // 画面３に切り替え
                game_.pushScene(create4thScene()); // 画面４に切り替え
            });

           return scene;
       };
    	// 画面２
            var create2ndScene = function() {
                var scene = new Scene();                // 新しいシーン
                //var label = new Label('画面２');        // 新しいラベル(文字)を作る
                //scene.addChild(label);                  // シーンにラベルに追加
                scene.backgroundColor = 'rgba(255, 140, 0, 1)';

	//表示する画像の設定
        var word1 = new Sprite(200, 50);  // word1スプライトを準備,表示領域設定
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);
        var p1 = new Sprite(50, 50);
        var p2 = new Sprite(50, 50);
        var p3 = new Sprite(50, 50);
        var p4 = new Sprite(50, 50);
        word1.image = game_.assets['kotoba21.gif']; // word1に画像適用
        word2.image = game_.assets['kotoba22.gif'];
        word3.image = game_.assets['kotoba23.gif'];
        word4.image = game_.assets['kotoba24.gif'];
        p1.image = game_.assets['p1.gif'];
        p2.image = game_.assets['p2.gif'];
        p3.image = game_.assets['p3.gif'];
        p4.image = game_.assets['p4.gif'];
	word1.x =  wiw * 0.5 -100; // word1の横位置左から幅の50%
        word1.y =  wih * 0.15; // word1の縦位置上から高さの15%
	word1.scaleX = scx;   // 幅
	word1.scaleY = scy;   // 高さ
	word2.x =  wiw * 0.5 -100;
        word2.y =  wih * 0.3;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.5 -100;
        word3.y =  wih * 0.45;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.5 -100;
        word4.y =  wih * 0.6;
	word4.scaleX = scx;
	word4.scaleY = scy;
	p1.x =  wiw * 0.14 -25;
        p1.y =  wih * 0.75;
	p1.scaleX = scx;
	p1.scaleY = scy;
	p2.x =  wiw * 0.38 -25;
        p2.y =  wih * 0.75;
	p2.scaleX = scx;
	p2.scaleY = scy;
	p3.x =  wiw * 0.62 -25;
        p3.y =  wih * 0.75;
	p3.scaleX = scx;
	p3.scaleY = scy;
	p4.x =  wiw * 0.86 -25;
        p4.y =  wih * 0.75;
	p4.scaleX = scx;
	p4.scaleY = scy;

        scene.addChild(word1); // 画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(p1);
        scene.addChild(p3);
        scene.addChild(p4);

        var title = new Label('あいさつ　２');         //文字列の表示
            title.color = '#000000';                   // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォント変更
		title.font = '60px sans-serif';            // 60pxのゴシック体
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30px
		} else {
		title.font = '35px sans-serif';            // 35px
		}
            title.textAlign = 'center';                // 中央揃えに
            title.width = wiw * 0.8;                   // 自動改行指定
            title.x = wiw * 0.1;                       // 横位置調整
            title.y = wih * 0.025;                     // 縦位置調整
            scene.addChild(title);                     // シーンに追加


        // 発声部分
            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['kotoba21.mp3'].clone().play(); //言葉を発声する
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba22.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba23.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba24.mp3'].clone().play();
            });
            p1.addEventListener(Event.TOUCH_START, function(e) {
		p1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面１へ
            });
            p3.addEventListener(Event.TOUCH_START, function(e) {
		p3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create3rdScene()); // 画面３に切り替え
            });
            p4.addEventListener(Event.TOUCH_START, function(e) {
		p4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create3rdScene()); // 画面３に切り替え
                game_.pushScene(create4thScene()); // 画面４に切り替え
            });

                return scene;
            };

    	// 画面３
            var create3rdScene = function() {
                var scene = new Scene();                // 新しいシーン
                //var label = new Label('画面３');        // 新しいラベル(文字)を作る
                //scene.addChild(label);                  // シーンにラベルに追加
                scene.backgroundColor = 'rgba(50, 205, 50, 1)';

	//表示する画像の設定
        var word1 = new Sprite(200, 50);  // word1スプライトを準備,表示領域設定
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);
        var p1 = new Sprite(50, 50);
        var p2 = new Sprite(50, 50);
        var p3 = new Sprite(50, 50);
        var p4 = new Sprite(50, 50);
        word1.image = game_.assets['kotoba31.gif']; // word1に画像適用
        word2.image = game_.assets['kotoba32.gif'];
        word3.image = game_.assets['kotoba33.gif'];
        word4.image = game_.assets['kotoba34.gif'];
        p1.image = game_.assets['p1.gif'];
        p2.image = game_.assets['p2.gif'];
        p3.image = game_.assets['p3.gif'];
        p4.image = game_.assets['p4.gif'];
	word1.x =  wiw * 0.5 -100; // word1の横位置左から幅の50%
        word1.y =  wih * 0.15; // word1の縦位置上から高さの15%
	word1.scaleX = scx;   // 幅
	word1.scaleY = scy;   // 高さ
	word2.x =  wiw * 0.5 -100;
        word2.y =  wih * 0.3;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.5 -100;
        word3.y =  wih * 0.45;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.5 -100;
        word4.y =  wih * 0.6;
	word4.scaleX = scx;
	word4.scaleY = scy;
	p1.x =  wiw * 0.14 -25;
        p1.y =  wih * 0.75;
	p1.scaleX = scx;
	p1.scaleY = scy;
	p2.x =  wiw * 0.38 -25;
        p2.y =  wih * 0.75;
	p2.scaleX = scx;
	p2.scaleY = scy;
	p3.x =  wiw * 0.62 -25;
        p3.y =  wih * 0.75;
	p3.scaleX = scx;
	p3.scaleY = scy;
	p4.x =  wiw * 0.86 -25;
        p4.y =  wih * 0.75;
	p4.scaleX = scx;
	p4.scaleY = scy;

        scene.addChild(word1); // 画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(p1);
        scene.addChild(p2);
        scene.addChild(p4);

        var title = new Label('はい　いいえ');         //文字列の表示
            title.color = '#000000';                   // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォント変更
		title.font = '60px sans-serif';            // 60pxのゴシック体
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30px
		} else {
		title.font = '35px sans-serif';            // 35px
		}
            title.textAlign = 'center';                // 中央揃えに
            title.width = wiw * 0.8;                   // 自動改行指定
            title.x = wiw * 0.1;                       // 横位置調整
            title.y = wih * 0.025;                     // 縦位置調整
            scene.addChild(title);                     // シーンに追加


        // 発声部分
            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['kotoba31.mp3'].clone().play(); //言葉を発声する
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba32.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba33.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba34.mp3'].clone().play();
            });
            p1.addEventListener(Event.TOUCH_START, function(e) {
		p1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面２へ
                game_.popScene(); // 画面１へ
            });
            p2.addEventListener(Event.TOUCH_START, function(e) {
		p2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面２へ
            });
            p4.addEventListener(Event.TOUCH_START, function(e) {
		p4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create4thScene()); // 画面４に切り替え
            });

                return scene;
            };

    	// 画面４
            var create4thScene = function() {
                var scene = new Scene();                // 新しいシーン
                //var label = new Label('画面４');        // 新しいラベル(文字)を作る
                //scene.addChild(label);                  // シーンにラベルに追加
                scene.backgroundColor = 'rgba(255, 105, 180, 1)';

	//表示する画像の設定
        var word1 = new Sprite(200, 50);  // word1スプライトを準備,表示領域設定
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);
        var p1 = new Sprite(50, 50);
        var p2 = new Sprite(50, 50);
        var p3 = new Sprite(50, 50);
        var p4 = new Sprite(50, 50);
        word1.image = game_.assets['kotoba41.gif']; // word1に画像適用
        word2.image = game_.assets['kotoba42.gif'];
        word3.image = game_.assets['kotoba43.gif'];
        word4.image = game_.assets['kotoba44.gif'];
        p1.image = game_.assets['p1.gif'];
        p2.image = game_.assets['p2.gif'];
        p3.image = game_.assets['p3.gif'];
        p4.image = game_.assets['p4.gif'];
	word1.x =  wiw * 0.5 -100; // word1の横位置左から幅の50%
        word1.y =  wih * 0.15; // word1の縦位置上から高さの15%
	word1.scaleX = scx;   // 幅
	word1.scaleY = scy;   // 高さ
	word2.x =  wiw * 0.5 -100;
        word2.y =  wih * 0.3;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.5 -100;
        word3.y =  wih * 0.45;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.5 -100;
        word4.y =  wih * 0.6;
	word4.scaleX = scx;
	word4.scaleY = scy;
	p1.x =  wiw * 0.14 -25;
        p1.y =  wih * 0.75;
	p1.scaleX = scx;
	p1.scaleY = scy;
	p2.x =  wiw * 0.38 -25;
        p2.y =  wih * 0.75;
	p2.scaleX = scx;
	p2.scaleY = scy;
	p3.x =  wiw * 0.62 -25;
        p3.y =  wih * 0.75;
	p3.scaleX = scx;
	p3.scaleY = scy;
	p4.x =  wiw * 0.86 -25;
        p4.y =  wih * 0.75;
	p4.scaleX = scx;
	p4.scaleY = scy;

        scene.addChild(word1); // 画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(p1);
        scene.addChild(p2);
        scene.addChild(p3);

        var title = new Label('き　も　ち');         //文字列の表示
            title.color = '#000000';                   // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォント変更
		title.font = '60px sans-serif';            // 60pxのゴシック体
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30px
		} else {
		title.font = '35px sans-serif';            // 35px
		}
            title.textAlign = 'center';                // 中央揃えに
            title.width = wiw * 0.8;                   // 自動改行指定
            title.x = wiw * 0.1;                       // 横位置調整
            title.y = wih * 0.025;                     // 縦位置調整
            scene.addChild(title);                     // シーンに追加


        // 発声部分
            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['kotoba41.mp3'].clone().play(); //言葉を発声する
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba42.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba43.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba44.mp3'].clone().play();
            });
            p1.addEventListener(Event.TOUCH_START, function(e) {
		p1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面３へ
                game_.popScene(); // 画面２へ
                game_.popScene(); // 画面１へ
            });
            p2.addEventListener(Event.TOUCH_START, function(e) {
		p2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面３へ
                game_.popScene(); // 画面２へ
            });
            p3.addEventListener(Event.TOUCH_START, function(e) {
		p3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                p3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面３へ
            });

                return scene;
            };


            // ゲームの_rootScene置き換えます
            game_.replaceScene(create1stScene());
 
    }
        game_.start(); // ゲームをスタートさせます
    };
