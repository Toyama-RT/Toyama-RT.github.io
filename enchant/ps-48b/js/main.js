enchant(); // おまじない

var game_ = null;
//オートスキャン用オブジェクト
var scanner = null;

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

    var game_ = new Core(window.innerWidth  , window.innerHeight  ); // 表示領域の大きさ設定

    var wiw = window.innerWidth;  //モニター表示幅
    var wih = window.innerHeight; // モニター表示高
    var scx = wiw * 5.5 / 1280; // 横の係数
    var scy = wih * 2.5 / 1024;　// 縦の係数
     // 表示画面の大きさ表示機能
	/*var title1 = new Label('');
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
    game_.preload('maru.png', 'correct1.mp3', 'batu.png', 'incorrect1.mp3', 'jump.mp3', 'gameover.mp3'); // ゲームに使う素材読み込み

    //オートスキャン用オブジェクトの作成
   scanner = new SpriteScanner(game_);

    game_.onload = function() { // メイン処理開始

        game_.assets['gameover.mp3'].play();//起動時の音 音量調節用

	//表示画像の設定
        var word1 = new Sprite(50, 50);  // word1　画像表示領域の寸法設定
        var word2 = new Sprite(50, 50);

        word1.image = game_.assets['maru.png']; // word1にロードした画像を適用
        word2.image = game_.assets['batu.png'];

	word1.x =  wiw * 0.5 -25;  // 横位置設定　左から幅の50%
        word1.y =  wih * 0.25 -25; // 縦位置設定　上から高さの25%
	word1.scaleX = scx * 3.5 ; // 幅　3.5倍表示
	word1.scaleY = scy * 3.5 ; // 高
	word2.x =  wiw * 0.5 - 25; //左から50%
        word2.y =  wih * 0.75 -25; //上から75%
	word2.scaleX = scx * 3.5 ;
	word2.scaleY = scy * 3.5 ;

        game_.rootScene.addChild(word1); // シーンに画像を表示
        game_.rootScene.addChild(word2);

        game_.rootScene.backgroundColor  = '#7ecef4'; // 背景色設定


        // 「タッチイベント」を追加
/*            word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);//元に戻る
                game_.assets['correct1.mp3'].clone().play(); //提供　効果音ラボ
            });     
            word2.addEventListener(Event.TOUCH_START, function(e) {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['incorrect1.mp3'].clone().play(); //提供　効果音ラボ
            });
*/

        // オートスキャンイベント
        word1.addEventListener("scanselect", function() {
            //　ボタンのタッチイベントを呼び出し、疑似的にボタンをタッチしたことにする
		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　　//90%の大きさになり
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　//元に戻る
		game_.assets['correct1.mp3'].clone().play(); //提供　効果音ラボ
            // 3秒後にオートスキャンを再開させる：(遅延時間[秒])
            scanner.scanStart(2);
        });
        word2.addEventListener("scanselect", function() {
		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　　//90%の大きさになり
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　//元に戻る
		game_.assets['incorrect1.mp3'].clone().play(); //提供　効果音ラボ
            scanner.scanStart(2);
        });
        //オートスキャンの対象を設定(入れた順番にスキャンされます)
        scanner.addScanTargets([word1,word2]);

        // スキャンの設定
        scanner.scanSE = 1; // スキャン時のSE（0:OFF、1:ON）
        scanner.selectSE = 1; // 決定時のSE（0:OFF、1:ON）
        scanner.scanVoice = 0; // scan時のスキャン対象の音声読み上げ（0:OFF、1:ON）
        scanner.firstWait = 2; // 最初のスキャンの待ち時間[秒]
        scanner.scanInterval = 1.0; // オートスキャンの間隔[秒]
        scanner.selectWait = 1.0; // 選択後の待ち時間[秒]
        scanner.frameWidth = 8;  // スキャン枠の太さ[px]
        scanner.selectFrameWidth = 10  // スキャン枠の選択時の太さ[px]
        scanner.scanRepaet = -1;    // 何週スキャンして停止するか（-1で無限リピート）
        scanner.focusType = 'frame'; // フォーカスの種類（frame:枠線、background:背景色変更）
        scanner.focusColor = '#ff0000'; // フォーカスの色

        // scan開始
        scanner.scanStart();
        
        //オートスキャンを表示
        game_.rootScene.addChild(scanner);

    }
    game_.start(); // スタート
};
