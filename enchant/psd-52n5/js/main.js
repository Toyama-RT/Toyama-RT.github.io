enchant();// 簡易会話装置のサンプル　シンボル使用　４つのことば　２ページ　スキャン

var game_ = null;
/************************************************/
//オートスキャン用オブジェクト
var scanner = {};
// シーンごとにスキャンオブジェクトを用意
scanner.scene1 = null;
scanner.scene2 = null;
// スキャンの設定データ
var scanSetting = {
    scan_type : 'auto',                 // スキャン方式（auto:オートスキャン, step:ステップスキャン, step1: 1スイッチステップスキャン, mouse:マウス滞留）
    scan_interval : 5.0,               // オートスキャンの間隔[秒]
    mouse_hover_wait : 1.0,             // マウス滞留入力の決定までの待ち時間[秒]
    one_switch_step_scan_wait : 1.0,    // 1スイッチステップスキャンの決定までの待ち時間[秒]
    first_wait : 5.0,                   // 最初のスキャンまでの待ち時間[秒]
    select_wait : 1.0,                  // 選択後の待ち時間[秒]
    group_wait: 0,                      // グループ選択後の待ち時間[秒]
    scan_repaet :  3,                   // 何週スキャンして停止するか（-1で無限リピート）
    scan_group_repeat : 3,              // 何週スキャンして親グループのスキャンに戻るか(-1で戻らない)
    step_scan_Type : 'touch',           // ステップスキャンで使うスイッチインターフェース（touch:ipadタッチャーなどの画面タッチの代替え機器, key:キーボードやBluetoothなどの外部入力機器）
    iPad_toucher_area : 'right-bottom', // iPadタッチャーを使う際にフォーカス移動が可能なエリア
    scan_se : 1,                        // スキャン時のSE（0:OFF、1:ON）
    select_se : 1,                      // 決定時のSE（0:OFF、1:ON）
    focus_type : 'frame',               // フォーカスの種類（frame:枠線、background:背景色塗りつぶし）
    frame_width : 10,                   // スキャン枠の太さ[px]
    select_frame_width : 15,            // スキャン枠の選択時の太さ[px]
    focus_color : '#ff0000'             // フォーカスの色
}

// スキャンの設定データ2
var scanSetting2 = {
    scan_type : 'auto',                 // スキャン方式（auto:オートスキャン, step:ステップスキャン, step1: 1スイッチステップスキャン, mouse:マウス滞留）
    scan_interval : 5.0,               // オートスキャンの間隔[秒]
    mouse_hover_wait : 1.0,             // マウス滞留入力の決定までの待ち時間[秒]
    one_switch_step_scan_wait : 1.0,    // 1スイッチステップスキャンの決定までの待ち時間[秒]
    first_wait : 5.0,                   // 最初のスキャンまでの待ち時間[秒]
    select_wait : 1.0,                  // 選択後の待ち時間[秒]
    group_wait: 0,                      // グループ選択後の待ち時間[秒]
    scan_repaet :  3,                   // 何週スキャンして停止するか（-1で無限リピート）
    scan_group_repeat : 3,              // 何週スキャンして親グループのスキャンに戻るか(-1で戻らない)
    step_scan_Type : 'touch',           // ステップスキャンで使うスイッチインターフェース（touch:ipadタッチャーなどの画面タッチの代替え機器, key:キーボードやBluetoothなどの外部入力機器）
    iPad_toucher_area : 'right-bottom', // iPadタッチャーを使う際にフォーカス移動が可能なエリア
    scan_se : 1,                        // スキャン時のSE（0:OFF、1:ON）
    select_se : 1,                      // 決定時のSE（0:OFF、1:ON）
    focus_type : 'frame',               // フォーカスの種類（frame:枠線、background:背景色塗りつぶし）
    frame_width : 10,                   // スキャン枠の太さ[px]
    select_frame_width : 15,            // スキャン枠の選択時の太さ[px]
    focus_color : '#00ff00'             // フォーカスの色
}
/************************************************/

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
    var scx = wiw * 0.8 / 1280; // 文字キー幅の係数
    var scy = wih * 0.8 / 1024;// 文字キー高さ係数
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

        game_.fps = 10; // frames per second: 進行速度
        game_.preload('kotoba11.gif', 'kotoba11.mp3', 'kotoba12.gif', 'kotoba12.mp3', 'kotoba13.gif', 'kotoba13.mp3', 'kotoba14.gif', 'kotoba14.mp3', 'kotoba21.gif', 'kotoba21.mp3', 'kotoba22.gif', 'kotoba22.mp3', 'kotoba23.gif', 'kotoba23.mp3', 'kotoba24.gif', 'kotoba24.mp3', 'arrow1.gif', 'arrow2.gif', 'jump.mp3', 'gameover.mp3'); // pre-load:素材読込

//オートスキャン用オブジェクトの作成
/************************************************/
/*#シーンごとのスキャンオブジェクトを用意する*/
   scanner.scene1 = new SpriteScanner(game_);
   scanner.scene2 = new SpriteScanner(game_);
/************************************************/

        game_.onload = function() {
        game_.assets['gameover.mp3'].play();

      // 画面１
          var create1stScene = function() {
                var scene = new Scene();
                //var label = new Label('画面1');
                //scene.addChild(label);
                scene.backgroundColor = 'rgba(0, 255, 255, 1)';      // 背景色

	//表示する画像の設定
        var word1 = new Sprite(512, 512);
        var word2 = new Sprite(512, 512);
        var word3 = new Sprite(512, 512);
        var word4 = new Sprite(512, 512);
        var arrow = new Sprite(150, 50);
        word1.image = game_.assets['kotoba11.gif']; // word1に画像を適用
        word2.image = game_.assets['kotoba12.gif'];
        word3.image = game_.assets['kotoba13.gif'];
        word4.image = game_.assets['kotoba14.gif'];
        arrow.image = game_.assets['arrow1.gif'];

	word1.x =  wiw * 0.25 -256;
        word1.y =  wih * 0.25 -256;
	word1.scaleX = scx;
	word1.scaleY = scy;
	word2.x =  wiw * 0.75 - 256;
        word2.y =  wih * 0.25 - 256;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.25 - 256;
        word3.y =  wih * 0.70 - 256;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.75 - 256;
        word4.y =  wih * 0.70 - 256;
	word4.scaleX = scx;
	word4.scaleY = scy;
	arrow.x =  wiw * 0.5 -75;
        arrow.y =  wih * 0.92;
	arrow.scaleX = scx * 3;
	arrow.scaleY = scy * 2;

        scene.addChild(word1); // 画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(arrow);


        // オートスキャンイベント
        word1.addEventListener("scanselect", function() {
            //ボタンのタッチイベントを呼び出し、疑似的にボタンをタッチしたことにする
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
		game_.assets['kotoba11.mp3'].clone().play();
            // 3秒後にオートスキャンを再開させる：(遅延時間[秒])
            scanner.scene1.scanStart(2);
        });
        word2.addEventListener("scanselect", function() {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba12.mp3'].clone().play();
            scanner.scene1.scanStart(2);
        });
        word3.addEventListener("scanselect", function() {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba13.mp3'].clone().play();
            scanner.scene1.scanStart(2);
        });
        word4.addEventListener("scanselect", function() {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba14.mp3'].clone().play();
            scanner.scene1.scanStart(2);
        });
        arrow.addEventListener("scanselect", function() {
		arrow.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                arrow.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.pushScene(create2ndScene()); // 画面２に切り替え
            scanner.scene1.scanStart(2);
        });

        // グループの作成
        scanner.scene1.setScanTargets([word1,word2,word3,word4,arrow]);

        // スキャンの設定
        scanner.scene1.setScanSettingData(scanSetting);

        // scan開始
        scanner.scene1.scanStart(2);
        //オートスキャンを表示
        scene.addChild(scanner.scene1);

           return scene;
       };
    	// 画面２
            var create2ndScene = function() {
                var scene = new Scene();                // 新しいシーン
                //var label = new Label('画面２');        // 新しいラベル(文字)を作る
                //scene.addChild(label);                  // シーンにラベルに追加
                scene.backgroundColor = 'rgba(255, 140, 0, 1)';

	//表示する画像の設定
        var word1 = new Sprite(512, 512);
        var word2 = new Sprite(512, 512);
        var word3 = new Sprite(512, 512);
        var word4 = new Sprite(512, 512);
        var arrow = new Sprite(150, 50);
        word1.image = game_.assets['kotoba21.gif'];
        word2.image = game_.assets['kotoba22.gif'];
        word3.image = game_.assets['kotoba23.gif'];
        word4.image = game_.assets['kotoba24.gif'];
        arrow.image = game_.assets['arrow2.gif'];

	word1.x =  wiw * 0.25 -256;
        word1.y =  wih * 0.25 -256;
	word1.scaleX = scx;
	word1.scaleY = scy;
	word2.x =  wiw * 0.75 - 256;
        word2.y =  wih * 0.25 - 256;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x =  wiw * 0.25 - 256;
        word3.y =  wih * 0.70 - 256;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x =  wiw * 0.75 - 256;
        word4.y =  wih * 0.70 - 256;
	word4.scaleX = scx;
	word4.scaleY = scy;
	arrow.x =  wiw * 0.5 -75;
        arrow.y =  wih * 0.92;
	arrow.scaleX = scx * 3;
	arrow.scaleY = scy * 2;

        scene.addChild(word1); // 画像表示
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(arrow);


        // オートスキャンイベント
        word1.addEventListener("scanselect", function() {
            //ボタンのタッチイベントを呼び出し、疑似的にボタンをタッチしたことにする
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
		game_.assets['kotoba21.mp3'].clone().play();
            // 3秒後にオートスキャンを再開させる：(遅延時間[秒])
            scanner.scene2.scanStart(2);
        });
        word2.addEventListener("scanselect", function() {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba22.mp3'].clone().play();
            scanner.scene2.scanStart(2);
        });
        word3.addEventListener("scanselect", function() {
		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba23.mp3'].clone().play();
            scanner.scene2.scanStart(2);
        });
        word4.addEventListener("scanselect", function() {
		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba24.mp3'].clone().play();
            scanner.scene2.scanStart(2);
        });
        arrow.addEventListener("scanselect", function() {
		arrow.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                arrow.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['jump.mp3'].clone().play();
                game_.popScene(); // 画面１へ
            scanner.scene2.scanStart(2);
        });
        //オートスキャンの対象を設定(入れた順番にスキャンされます)
        scanner.scene2.setScanTargets([word1,word2,word3,word4,arrow]);

        // スキャンの設定2 で動かす
        scanner.scene2.setScanSettingData(scanSetting2);

        // scan開始
        scanner.scene2.scanStart(2);
        //オートスキャンを表示
        scene.addChild(scanner.scene2);

                return scene;
            };

            // ゲームの_rootScene置き換えます
            game_.replaceScene(create1stScene());
 
    }
        game_.start(); // ゲームをスタートさせます
    };
