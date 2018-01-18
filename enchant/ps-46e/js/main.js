enchant();

var game_ = null;
/***************************************************************************************************/
//オートスキャン用オブジェクト
var scanner = {};
// シーンごとにスキャンオブジェクトを用意
scanner.scene1 = null;
scanner.scene2 = null;
/***************************************************************************************************/

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

    var game_ = new Core(window.innerWidth  , window.innerHeight  ); // 本体の準備
    var wiw = window.innerWidth;  //モニター表示範囲幅
    var wih = window.innerHeight; // モニター表示範囲高
    var scx = wiw * 5.5 / 1280; // 文字キー幅の係数
    var scy = wih * 2.5 / 1024;　// 文字キー高さ係数

        game_.fps = 15; // frames per second: スピード設定
        game_.preload('kotoba1.gif', 'kotoba1.mp3', 'kotoba2.gif', 'kotoba2.mp3', 'kotoba3.gif', 'kotoba3.mp3', 'kotoba4.gif', 'kotoba4.mp3', 'kotoba5.gif', 'kotoba5.mp3', 'kotoba6.gif', 'kotoba6.mp3', 'kotoba7.gif', 'kotoba7.mp3', 'kotoba8.gif', 'kotoba8.mp3', 'arrow1.gif', 'arrow2.gif', 'jump.mp3', 'gameover.mp3'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。

    //オートスキャン用オブジェクトの作成
/***************************************************************************************************/
/*#シーンごとのスキャンオブジェクトを用意する*/
   scanner.scene1 = new SpriteScanner(game_);
   scanner.scene2 = new SpriteScanner(game_);
/***************************************************************************************************/

        game_.onload = function() {     // メインの処理
        game_.assets['gameover.mp3'].play();

      // 画面１
          var create1stScene = function() {
                var scene = new Scene();
                //var label = new Label('画面1');
                //scene.addChild(label);
                scene.backgroundColor = 'rgba(0, 191, 255, 1)';      // 背景色設定

	//表示する画像の設定
        var word1 = new Sprite(200, 50);  // word1というスプライトを準備し表示領域設定
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);
        var arrow1 = new Sprite(150, 50);
        word1.image = game_.assets['kotoba1.gif']; // word1に画像を適用
        word2.image = game_.assets['kotoba2.gif'];
        word3.image = game_.assets['kotoba3.gif'];
        word4.image = game_.assets['kotoba4.gif'];
        arrow1.image = game_.assets['arrow1.gif'];
	word1.x =  wiw * 0.5 -100; // word1の横位置設定左から幅の50%
        word1.y =  wih * 0.15; // word1の縦位置設定上から高さの15%
	word1.scaleX = scx;   // 幅
	word1.scaleY = scy; // 高さ
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
	arrow1.x =  wiw * 0.5 -75;
        arrow1.y =  wih * 0.75;
	arrow1.scaleX = scx;
	arrow1.scaleY = scy;

        scene.addChild(word1); // 画像を表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(arrow1);
        // タッチイベント
        /*    word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
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
            arrow1.addEventListener(Event.TOUCH_START, function(e) {
		arrow1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                arrow1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create2ndScene()); // 画面の切り替え
            });*/

        // オートスキャンイベント
        word1.addEventListener("scanselect", function() {
            //ボタンのタッチイベントを呼び出し、疑似的にボタンをタッチしたことにする
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
		game_.assets['kotoba1.mp3'].clone().play();
            // 3秒後にオートスキャンを再開させる：(遅延時間[秒])
            scanner.scene1.scanStart(2);
        });
        word2.addEventListener("scanselect", function() {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba2.mp3'].clone().play();
            scanner.scene1.scanStart(2);
        });
        word3.addEventListener("scanselect", function() {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba3.mp3'].clone().play();
            scanner.scene1.scanStart(2);
        });
        word4.addEventListener("scanselect", function() {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba4.mp3'].clone().play();
            scanner.scene1.scanStart(2);
        });
        arrow1.addEventListener("scanselect", function() {
		arrow1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                arrow1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create2ndScene()); // 画面の切り替え
            scanner.scene1.scanStart(2);
        });

        //オートスキャンの対象を設定(入れた順番にスキャンされます)
        scanner.scene1.setScanTargets([word1,word2,word3,word4,arrow1]);  // addScanTargetsをsetScanTargetsに変更

        // スキャンの設定
        scanner.scene1.scanSE = 1; // スキャン時のSE（0:OFF、1:ON）
        scanner.scene1.selectSE = 1; // 決定時のSE（0:OFF、1:ON）
        scanner.scene1.scanVoice = 0; // scan時のスキャン対象の音声読み上げ（0:OFF、1:ON）
        scanner.scene1.firstWait = 2; // 最初のスキャンの待ち時間[秒]
        scanner.scene1.scanInterval = 1.0; // オートスキャンの間隔[秒]
        scanner.scene1.selectWait = 1.0; // 選択後の待ち時間[秒]
        scanner.scene1.frameWidth = 4;  // スキャン枠の太さ[px]
        scanner.scene1.selectFrameWidth = 10  // スキャン枠の選択時の太さ[px]
        scanner.scene1.scanRepaet = -1;    // 何週スキャンして停止するか（-1で無限リピート）
        scanner.scene1.focusType = 'frame'; // フォーカスの種類（frame:枠線、background:背景色変更）
        scanner.scene1.focusColor = '#ff0000'; // フォーカスの色

        // scan開始
        scanner.scene1.scanStart();
        //オートスキャンを表示
        scene.addChild(scanner.scene1);
           return scene;
       };

    	// 画面２
            var create2ndScene = function() {
                var scene = new Scene();                // 新しいシーンを作る
                //var label = new Label('画面２');        // 新しいラベル(文字)を作る
                //scene.addChild(label);                  // シーンにラベルに追加
                scene.backgroundColor = 'rgba(255, 140, 0, 1)';

	//表示する画像の設定
        var word1 = new Sprite(200, 50);  // word1というスプライト表示領域設定
        var word2 = new Sprite(200, 50);
        var word3 = new Sprite(200, 50);
        var word4 = new Sprite(200, 50);
        var arrow2 = new Sprite(150, 50);
        word1.image = game_.assets['kotoba5.gif']; // word1に画像適用
        word2.image = game_.assets['kotoba6.gif'];
        word3.image = game_.assets['kotoba7.gif'];
        word4.image = game_.assets['kotoba8.gif'];
        arrow2.image = game_.assets['arrow2.gif'];


	word1.x =  wiw * 0.5 -100; // word1の横位置設定左から幅の50%
        word1.y =  wih * 0.15; // word1の縦位置設定上から高さの15%
	word1.scaleX = scx;   // 幅
	word1.scaleY = scy; // 高さ
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
	arrow2.x =  wiw * 0.5 -75;
        arrow2.y =  wih * 0.75;
	arrow2.scaleX = scx;
	arrow2.scaleY = scy;

        scene.addChild(word1); // シーンに画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(arrow2);
        // タッチイベント
        /*    word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['kotoba5.mp3'].clone().play(); //言葉を発声する
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba6.mp3'].clone().play();
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba7.mp3'].clone().play();
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba8.mp3'].clone().play();
            });
            arrow2.addEventListener(Event.TOUCH_START, function(e) {
		arrow2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                arrow2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面をもどす
            });*/

        // オートスキャンイベント
        word1.addEventListener("scanselect", function() {
            //　ボタンのタッチイベントを呼び出し、疑似的にボタンをタッチしたことにする
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba5.mp3'].clone().play();
            // 3秒後にオートスキャンを再開させる：(遅延時間[秒])
            scanner.scene2.scanStart(2);
        });
        word2.addEventListener("scanselect", function() {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba6.mp3'].clone().play();
            scanner.scene2.scanStart(2);
        });
        word3.addEventListener("scanselect", function() {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba7.mp3'].clone().play();
            scanner.scene2.scanStart(2);
        });
        word4.addEventListener("scanselect", function() {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba8.mp3'].clone().play();
            scanner.scene2.scanStart(2);
        });
        arrow2.addEventListener("scanselect", function() {
		arrow2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                arrow2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面をもどす
            scanner.scene2.scanStart(2);
        });

        //オートスキャンの対象を設定(入れた順番にスキャンされます)
        scanner.scene2.setScanTargets([word1,word2,word3,word4,arrow2]);

        // スキャンの設定
        scanner.scene2.scanSE = 1; // スキャン時のSE（0:OFF、1:ON）
        scanner.scene2.selectSE = 1; // 決定時のSE（0:OFF、1:ON）
        scanner.scene2.scanVoice = 0; // scan時のスキャン対象の音声読み上げ（0:OFF、1:ON）
        scanner.scene2.firstWait = 2; // 最初のスキャンの待ち時間[秒]
        scanner.scene2.scanInterval = 1.0; // オートスキャンの間隔[秒]
        scanner.scene2.selectWait = 1.0; // 選択後の待ち時間[秒]
        scanner.scene2.frameWidth = 4;  // スキャン枠の太さ[px]
        scanner.scene2.selectFrameWidth = 10  // スキャン枠の選択時の太さ[px]
        scanner.scene2.scanRepaet = -1;    // 何週スキャンして停止するか（-1で無限リピート）
        scanner.scene2.focusType = 'frame'; // フォーカスの種類（frame:枠線、background:背景色変更）
        scanner.scene2.focusColor = '#0000ff'; // フォーカスの色

        // scan開始
        scanner.scene2.scanStart();
        //オートスキャンを表示
        scene.addChild(scanner.scene2);
/***************************************************************************************************/
                return scene;
            };


            // ゲームの_rootSceneをタイトルシーンに置き換えます
            game_.replaceScene(create1stScene());
 
    }
        game_.start(); // ゲームをスタートさせます
    };
