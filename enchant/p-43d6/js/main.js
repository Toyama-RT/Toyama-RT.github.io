enchant(); // おまじない  簡易会話装置のサンプルp-43d2 : eviacam android のテスト　2019/05/21

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
    });      // 行の終わりには、;(セミコロン)をつけます。

    //var game_ = new Game(window.innerWidth  , window.innerHeight  ); // 本体を準備すると同時に、表示される領域の大きさを設定しています。
    var game_ = new Game( 320  , 320  ); // 本体を準備すると同時に、表示される領域の大きさを設定しています。


    var wiw = window.innerWidth;  //モニター表示範囲幅
    var wih = window.innerHeight; // モニター表示範囲高
    var scx = wiw * 5.5 / 1280; // 文字キー幅の係数
    var scy = wih * 2.5 / 1024;　// 文字キー高さ係数
     // 表示画面の大きさを表示する機能
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


    game_.fps = 30; // frames(フレーム) per(毎) second(秒): 進行スピードを設定しています。
    //game_.preload('kotoba1.gif', 'kotoba1.mp3', 'kotoba2.gif', 'kotoba2.mp3', 'kotoba3.gif', 'kotoba3.mp3', 'kotoba4.gif', 'kotoba4.mp3', 'jump.mp3', 'gameover.mp3'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。
    game_.preload('kotoba1.gif', 'kotoba1.mp3', 'jump.mp3'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。

    game_.onload = function() { // 準備が整ったらメインの処理を実行します。
        //game_.assets['gameover.mp3'].play();


	//表示する画像の設定
        var word1 = new Sprite(32, 32);  // word1というスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
        //var word2 = new Sprite(200, 50);  
        //var word3 = new Sprite(200, 50);  // word3という　以下同文。
        //var word4 = new Sprite(200, 50);  // word4という　以下同文。

        word1.image = game_.assets['kotoba1.gif']; // word1にあらかじめロードしておいた画像を適用します。
        //word2.image = game_.assets['kotoba2.gif'];  // word2に　以下同文。
        //word3.image = game_.assets['kotoba3.gif'];   // word3に　以下同文。
        //word4.image = game_.assets['kotoba4.gif']; // word4に　以下同文。

	word1.x = 100; // wiw * 0.1 -100; // word1の横位置を設定します。　左から幅の50%
        word1.y = 120; // wih * 0.15; // word1の縦位置を設定します。　上から高さの15%
	word1.scaleX = 2;//scx/5;   // 幅
	word1.scaleY = 2; //scy/5; 　　// 高さ
/*	word2.x =  wiw * 0.5 - 100; // word2の横位置を設定します。
        word2.y =  wih * 0.3;  // word2の縦位置を設定します。
	word2.scaleX = scx;   // 幅
	word2.scaleY = scy; 　　// 高さ
	word3.x =  wiw * 0.5 -100; // word3の横位置を設定します。
        word3.y =  wih * 0.45; // word3の縦位置を設定します。
	word3.scaleX = scx;   // 幅を1倍にする
	word3.scaleY = scy; 　　// 高さを1倍にする
	word4.x =  wiw * 0.5 - 100; // word4の横位置を設定します。
        word4.y =  wih * 0.6;  // word4の縦位置を設定します。
	word4.scaleX = scx;   // 幅
	word4.scaleY = scy; 　　// 高さ
*/
        game_.rootScene.addChild(word1); // シーンに画像を表示させます。
//        game_.rootScene.addChild(word2); // 同上
//        game_.rootScene.addChild(word3); // 同上
//        game_.rootScene.addChild(word4); // 同上

        game_.rootScene.backgroundColor  = '#7ecef4'; // 動作部分の背景色の設定(16進数)。


        // シーンに「タッチイベント」を追加します。

            //word1.addEventListener(Event.TOUCH_START, function(e) {  // word1をタッチしたら
            game_.rootScene.addEventListener(Event.TOUCH_START, function(e) {
            //word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　　//90%の大きさになり
                //word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);　//元に戻る

    // タッチした位置を取得
    var x = e.localX;
    var y = e.localY;

　　　　　　　　var title3 = new Label('');
            title1.x = 50;
            title1.y = 10;
            game_.rootScene.addChild(title3);
            title1.text = x;
            //title1.text = game_.width;
　　　　　　　　var title4 = new Label('');
            title2.x = 50;
            title2.y = 30;
            game_.rootScene.addChild(title4);
            title2.text = y;
            //title2.text = game_.width;

if(( x > 83 && x < 147) &&  ( y > 104 && y < 166)) {
 
                game_.assets['kotoba1.mp3'].clone().play(); //言葉を発声する
 
}

            });     
/*            word2.addEventListener(Event.TOUCH_START, function(e) {  // word2をタッチしたら
		//word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba2.mp3'].clone().play(); //言葉を発声する
            });
            word3.addEventListener(Event.TOUCH_START, function(e) {  // word3をタッチしたら
		//word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba3.mp3'].clone().play(); //言葉を発声する
            });
            word4.addEventListener(Event.TOUCH_START, function(e) {  // word4をタッチしたら
		//word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
		game_.assets['kotoba4.mp3'].clone().play(); //言葉を発声する
            });
*/
    }
    game_.start(); // スタートさせます

    // このようにスラッシュ2つで書き始めた行は「コメント」扱いとなります。プログラム中のメモとして活用しましょう。
    /* また、このようにスラッシュと米印を使うと、
        複数行に渡ってコメントを書くことができます。 */
};
