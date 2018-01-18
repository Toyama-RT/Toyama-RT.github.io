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

    // 行の終わりには、;(セミコロン)をつけます。

    var game_ = new Game(320, 320); // ゲーム本体を準備すると同時に、表示される領域の大きさを設定しています。
    game_.fps = 12; // frames(フレーム) per(毎) second(秒): ゲームの進行スピードを設定しています。
    game_.preload('chara1.gif', 'se2.wav', 'jump.mp3', 'gameover.mp3'); // pre(前)-load(読み込み): ゲームに使う素材を予め読み込んでおきます。

    game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します。
        game_.assets['gameover.mp3'].play();
	//クマの設定
        var kuma = new Sprite(32, 32);  // クマというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
        kuma.image = game_.assets['chara1.gif']; // クマにあらかじめロードしておいた画像を適用します。

	var modev = 0; //モード変数　タッチごとに変化する。
        kuma.x = 100; // クマの横位置を設定します。
        kuma.y = 120; // クマの縦位置を設定します。
	kuma.scaleX = 2;   // 幅を2倍にする
	kuma.scaleY = 2; 　　// 高さを2倍にする
        game_.rootScene.addChild(kuma); // ゲームのシーンにクマを表示させます。
        game_.rootScene.backgroundColor  = '#7ecef4'; // ゲームの動作部分の背景色を設定しています(16進数)。

        var speed = 2;// クマのスピードを表す変数(ハコ)を用意しておきます。

        // シーンに「毎フレーム実行イベント」を追加します。
        game_.rootScene.addEventListener(Event.ENTER_FRAME, function() {
            kuma.x += speed; // 毎フレーム、クマの座標を右に1pxずつずらす
	// くまのフレームを0, 1, 2, 0, 1, 2…… と繰り返します 歩いているように見えます
	// 正確には0, 1, 2, 1, 0, 1, 2, 1, 0, 1…… ですが、
	// 0, 1, 2, 0, 1, 2…… でも十分走っているように見えるため、良いものとします
	kuma.frame ++;
	if (kuma.frame > 2) {
	kuma.frame = 0;
         }
	if (modev == 1) {
	kuma.frame = 0;
	}
	if (modev == 3) {
	kuma.frame = 0;
	}
        });

        // シーンに「タッチイベント」を追加します。
        game_.rootScene.addEventListener(Event.TOUCH_START, function(e) {

            // タッチイベントは、タッチした座標をe.x , e.y として取ることができます。
            // なお、eという変数の名前は自由に変更できます。 例：function(好きな名前) { ?

/*            if (e.x > kuma.x) { // if (もしも) タッチした横位置がクマの横位置よりも右側(大きい)かったら
                speed = 2; // クマのスピードを1にする
		kuma.scaleX = 2; // 左右を反転させる
		kuma.scaleY = 2;   // 高さは変更しない
            } else { // それ以外のときは
                speed = -2; // クマのスピードを-1にする
		kuma.scaleX = - 2; // 左右を反転させる
		kuma.scaleY = 2;   // 高さは変更しない

            }*/
		game_.assets['jump.mp3'].clone().play(); //クリックすると音がなる
		modev ++;
		if (modev > 3){
		modev = 0;
		}
		//modev = modev + 1

		if (modev == 0){ //右向いて右に進む
		speed = 2;
		kuma.scaleX = 2;
		kuma.scaleY = 2;

		} else if (modev == 1){　//右向いて止まる
		speed = 0;
		kuma.scaleX = 2;
		kuma.scaleY = 2;
		} else if (modev == 2){　//左向いて左に進む
		speed = - 2;
		kuma.scaleX = - 2;
		kuma.scaleY = 2;
		} else {　//左向いて止まる
		speed = 0;
		kuma.scaleX = - 2;
		kuma.scaleY = 2;
		}

        });

    }
    game_.start(); // ゲームをスタートさせます

    // このようにスラッシュ2つで書き始めた行は「コメント」扱いとなります。
    // プログラム中のメモとして活用しましょう。
    /* また、このようにスラッシュと米印を使うと、
        複数行に渡ってコメントを書くことができます。 */


};
