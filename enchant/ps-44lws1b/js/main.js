enchant(); 
// enchant.js を利用したコミュニケーションエイド web speech api text to speech の導入
//さらにスキャン動作を導入

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
    scan_interval : 1.0,               // オートスキャンの間隔[秒]
    mouse_hover_wait : 1.0,             // マウス滞留入力の決定までの待ち時間[秒]
    one_switch_step_scan_wait : 1.0,    // 1スイッチステップスキャンの決定までの待ち時間[秒]
    first_wait : 1.0,                   // 最初のスキャンまでの待ち時間[秒]
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
    scan_interval : 1.0,               // オートスキャンの間隔[秒]
    mouse_hover_wait : 1.0,             // マウス滞留入力の決定までの待ち時間[秒]
    one_switch_step_scan_wait : 1.0,    // 1スイッチステップスキャンの決定までの待ち時間[秒]
    first_wait : 1.0,                   // 最初のスキャンまでの待ち時間[秒]
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

//各種設定部分
  //表示関係設定
    var game_ = new Game(window.innerWidth  , window.innerHeight  );
    var wiw = window.innerWidth;
    var wih = window.innerHeight;
    var scx = wiw * 1.8 / 1280;// 文字キー幅の係数
    var scy = wih * 1.8 / 1024;// 文字キー高さ係数

            /*var title1 = new Label('');//モニターの寸法を表示する機能
            title1.x = 0;
            title1.y = 10;
            scene.addChild(title1);
            title1.text = window.innerWidth;*/
  //文字列表示設定
            var title = new Label('');         //入力した文字列を表示するラベルの設定
            title.color = '#000000';            // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォントを大きさを変更する
		title.font = '60px sans-serif';            // 37pxのゴシック体にする
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30pxのゴシック体にする
		} else {
		title.font = '35px sans-serif';            // 33pxのゴシック体にする
		}
            title.textAlign = 'left';           // 左揃え
            title.width = wiw * 0.8;            // 自動改行の指定
            title.x = wiw * 0.1;                // 横位置調整
            title.y = wih * 0.05;               // 縦位置調整
  //表示フレーム設定
    game_.fps = 10; // frames per second: 進行スピード設定　大きくするとcpu負荷、バッテリ消費大注意

  //web speech api tts 音声の設定と起動時の音声発声
            var synthes = new SpeechSynthesisUtterance();
               synthes.voiceURI = 'Google 日本人';//'native';
               synthes.volume = 1;
               synthes.rate = 1;
               synthes.pitch = 1;
               synthes.lang = 'ja-JP';
               synthes.text = '準備出来ました';
               //synthes.lang = 'en-US';
               //synthes.text = 'hello, Now, We start the enchant.js';
               speechSynthesis.speak(synthes);


　//ファイル設定
    //画像ファイル　ひらがな
      var imga = './img/a.png';
      var imgi = './img/i.png';
      var imgu = './img/u.png';
      var imge = './img/e.png';
      var imgo = './img/o.png';
      var imgka = './img/ka.png';
      var imgki = './img/ki.png';
      var imgku = './img/ku.png';
      var imgke = './img/ke.png';
      var imgko = './img/ko.png';
      var imgsa = './img/sa.png';
      var imgsi = './img/si.png';
      var imgsu = './img/su.png';
      var imgse = './img/se.png';
      var imgso = './img/so.png';
      var imgta = './img/ta.png';
      var imgti = './img/ti.png';
      var imgtu = './img/tu.png';
      var imgte = './img/te.png';
      var imgto = './img/to.png';
      var imgna = './img/na.png';
      var imgni = './img/ni.png';
      var imgnu = './img/nu.png';
      var imgne = './img/ne.png';
      var imgno = './img/no.png';
      var imgha = './img/ha.png';
      var imghi = './img/hi.png';
      var imghu = './img/hu.png';
      var imghe = './img/he.png';
      var imgho = './img/ho.png';
      var imgma = './img/ma.png';
      var imgmi = './img/mi.png';
      var imgmu = './img/mu.png';
      var imgme = './img/me.png';
      var imgmo = './img/mo.png';
      var imgya = './img/ya.png';
      var imgyu = './img/yu.png';
      var imgyo = './img/yo.png';
      var imgra = './img/ra.png';
      var imgri = './img/ri.png';
      var imgru = './img/ru.png';
      var imgre = './img/re.png';
      var imgro = './img/ro.png';
      var imgwa = './img/wa.png';
      var imgwo = './img/wo.png';
      var imgnn = './img/nn.png';
    //画像ファイル　カタカナ
      var imgkta = './img/kta.png';
      var imgkti = './img/kti.png';
      var imgktu = './img/ktu.png';
      var imgkte = './img/kte.png';
      var imgkto = './img/kto.png';
      var imgktka = './img/ktka.png';
      var imgktki = './img/ktki.png';
      var imgktku = './img/ktku.png';
      var imgktke = './img/ktke.png';
      var imgktko = './img/ktko.png';
      var imgktsa = './img/ktsa.png';
      var imgktsi = './img/ktsi.png';
      var imgktsu = './img/ktsu.png';
      var imgktse = './img/ktse.png';
      var imgktso = './img/ktso.png';
      var imgktta = './img/ktta.png';
      var imgktti = './img/ktti.png';
      var imgkttu = './img/kttu.png';
      var imgktte = './img/ktte.png';
      var imgktto = './img/ktto.png';
      var imgktna = './img/ktna.png';
      var imgktni = './img/ktni.png';
      var imgktnu = './img/ktnu.png';
      var imgktne = './img/ktne.png';
      var imgktno = './img/ktno.png';
      var imgktha = './img/ktha.png';
      var imgkthi = './img/kthi.png';
      var imgkthu = './img/kthu.png';
      var imgkthe = './img/kthe.png';
      var imgktho = './img/ktho.png';
      var imgktma = './img/ktma.png';
      var imgktmi = './img/ktmi.png';
      var imgktmu = './img/ktmu.png';
      var imgktme = './img/ktme.png';
      var imgktmo = './img/ktmo.png';
      var imgktya = './img/ktya.png';
      var imgktyu = './img/ktyu.png';
      var imgktyo = './img/ktyo.png';
      var imgktra = './img/ktra.png';
      var imgktri = './img/ktri.png';
      var imgktru = './img/ktru.png';
      var imgktre = './img/ktre.png';
      var imgktro = './img/ktro.png';
      var imgktwa = './img/ktwa.png';
      var imgktwo = './img/ktwo.png';
      var imgktnn = './img/ktnn.png';
    //画像ファイル　その他
      var imghiragana = './img/hiragana.png';
      var imgkatakana = './img/katakana.png';

      var imggb = './img/gb.png';
      var imggc = './img/gc.png';
      var imgbar = './img/bar.png';
      var imgten = './img/ten.png';
      var imgmaru = './img/maru.png';
      var img00 = './img/00.png';
      var imgkesu = './img/kesu.png';
      var imgzenbukesu = './img/zenbukesu.png';
      var imghai = './img/hai.png';
      var imgiie = './img/iie.png';
      var img0 = './img/0.png';
      var img1 = './img/1.png';
      var img2 = './img/2.png';
      var img3 = './img/3.png';
      var img4 = './img/4.png';
      var img5 = './img/5.png';
      var img6 = './img/6.png';
      var img7 = './img/7.png';
      var img8 = './img/8.png';
      var img9 = './img/9.png';
      var imgtalk = './img/talk0.png';
    //音声ファイル
      var sndbuz = './snd/incorrect2.mp3';
      var sndse2 = './snd/se2.mp3';

      //var sndend = './snd/gameover.mp3';
　//読み込み準備　配列設定
      var ASSETS = [
          imga,
          imgi,
          imgu,
          imge,
          imgo,
          imgka,
          imgki,
          imgku,
          imgke,
          imgko,
          imgsa,
          imgsi,
          imgsu,
          imgse,
          imgso,
          imgta,
          imgti,
          imgtu,
          imgte,
          imgto,
          imgna,
          imgni,
          imgnu,
          imgne,
          imgno,
          imgha,
          imghi,
          imghu,
          imghe,
          imgho,
          imgma,
          imgmi,
          imgmu,
          imgme,
          imgmo,
          imgya,
          imgyu,
          imgyo,
          imgra,
          imgri,
          imgru,
          imgre,
          imgro,
          imgwa,
          imgwo,
          imgnn,

          imgkta,
          imgkti,
          imgktu,
          imgkte,
          imgkto,
          imgktka,
          imgktki,
          imgktku,
          imgktke,
          imgktko,
          imgktsa,
          imgktsi,
          imgktsu,
          imgktse,
          imgktso,
          imgktta,
          imgktti,
          imgkttu,
          imgktte,
          imgktto,
          imgktna,
          imgktni,
          imgktnu,
          imgktne,
          imgktno,
          imgktha,
          imgkthi,
          imgkthu,
          imgkthe,
          imgktho,
          imgktma,
          imgktmi,
          imgktmu,
          imgktme,
          imgktmo,
          imgktya,
          imgktyu,
          imgktyo,
          imgktra,
          imgktri,
          imgktru,
          imgktre,
          imgktro,
          imgktwa,
          imgktwo,
          imgktnn,

          imghiragana,
          imgkatakana,

          imggb,
          imggc,
          imgbar,
          imgten,
          imgmaru,
          img00,
          imgkesu,
          imgzenbukesu,
          imghai,
          imgiie,
          img0,
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
          img9,
          imgtalk,

          sndbuz,
          sndse2,
          ];

    game_.preload(ASSETS);//読み込み部分

//オートスキャン用オブジェクトの作成
/************************************************/
/*#シーンごとのスキャンオブジェクトを用意する*/
   scanner.scene1 = new SpriteScanner(game_);
   scanner.scene2 = new SpriteScanner(game_);
/************************************************/

    game_.onload = function() { // メイン処理実行

      // ひらがな文字盤を作る関数
          var createHiraScene = function() {
                var scene = new Scene();
                //var label = new Label('ひらがな画面');//シーン切り替え確認テスト用
                //scene.addChild(label);
                //scene.backgroundColor = 'rgba(0, 191, 255, 1)';      // 背景色設定

	//画像の設定
        var worda = new Sprite(50, 50);  // スプライト大きさ設定
        var wordi = new Sprite(50, 50);
        var wordu = new Sprite(50, 50);
        var worde = new Sprite(50, 50);
        var wordo = new Sprite(50, 50);
        var wordka = new Sprite(50, 50);
        var wordki = new Sprite(50, 50);
        var wordku = new Sprite(50, 50);
        var wordke = new Sprite(50, 50);
        var wordko = new Sprite(50, 50);
        var wordsa = new Sprite(50, 50);
        var wordsi = new Sprite(50, 50);
        var wordsu = new Sprite(50, 50);
        var wordse = new Sprite(50, 50);
        var wordso = new Sprite(50, 50);
        var wordta = new Sprite(50, 50);
        var wordti = new Sprite(50, 50);
        var wordtu = new Sprite(50, 50);
        var wordte = new Sprite(50, 50);
        var wordto = new Sprite(50, 50);
        var wordna = new Sprite(50, 50);
        var wordni = new Sprite(50, 50);
        var wordnu = new Sprite(50, 50);
        var wordne = new Sprite(50, 50);
        var wordno = new Sprite(50, 50);
        var wordha = new Sprite(50, 50);
        var wordhi = new Sprite(50, 50);
        var wordhu = new Sprite(50, 50);
        var wordhe = new Sprite(50, 50);
        var wordho = new Sprite(50, 50);
        var wordma = new Sprite(50, 50);
        var wordmi = new Sprite(50, 50);
        var wordmu = new Sprite(50, 50);
        var wordme = new Sprite(50, 50);
        var wordmo = new Sprite(50, 50);
        var wordya = new Sprite(50, 50);
        var wordyu = new Sprite(50, 50);
        var wordyo = new Sprite(50, 50);
        var wordra = new Sprite(50, 50);
        var wordri = new Sprite(50, 50);
        var wordru = new Sprite(50, 50);
        var wordre = new Sprite(50, 50);
        var wordro = new Sprite(50, 50);
        var wordwa = new Sprite(50, 50);
        var wordwo = new Sprite(50, 50);
        var wordnn = new Sprite(50, 50);
        var wordkatakana = new Sprite(50,50);
        var wordgb = new Sprite(50, 50);
        var wordgc = new Sprite(50, 50);
        var wordkesu = new Sprite(50, 50);
        var wordzenbukesu = new Sprite(50, 50);
        var word00 = new Sprite(50, 50);
        var wordmaru = new Sprite(50, 50);
        var wordten = new Sprite(50, 50);
        var wordbar = new Sprite(50, 50);
        var wordhai = new Sprite(50, 50);
        var wordiie = new Sprite(50, 50);
        var word0 = new Sprite(50, 50);
        var word1 = new Sprite(50, 50);
        var word2 = new Sprite(50, 50);
        var word3 = new Sprite(50, 50);
        var word4 = new Sprite(50, 50);
        var word5 = new Sprite(50, 50);
        var word6 = new Sprite(50, 50);
        var word7 = new Sprite(50, 50);
        var word8 = new Sprite(50, 50);
        var word9 = new Sprite(50, 50);
        var wordtalk = new Sprite(50, 50);

        worda.image = game_.assets[imga];  // word*に画像適用
        wordi.image = game_.assets[imgi];
        wordu.image = game_.assets[imgu];
        worde.image = game_.assets[imge];
        wordo.image = game_.assets[imgo];
        wordka.image = game_.assets[imgka];
        wordki.image = game_.assets[imgki];
        wordku.image = game_.assets[imgku];
        wordke.image = game_.assets[imgke];
        wordko.image = game_.assets[imgko];
        wordsa.image = game_.assets[imgsa];
        wordsi.image = game_.assets[imgsi];
        wordsu.image = game_.assets[imgsu];
        wordse.image = game_.assets[imgse];
        wordso.image = game_.assets[imgso];
        wordta.image = game_.assets[imgta];
        wordti.image = game_.assets[imgti];
        wordtu.image = game_.assets[imgtu];
        wordte.image = game_.assets[imgte];
        wordto.image = game_.assets[imgto];
        wordna.image = game_.assets[imgna];
        wordni.image = game_.assets[imgni];
        wordnu.image = game_.assets[imgnu];
        wordne.image = game_.assets[imgne];
        wordno.image = game_.assets[imgno];
        wordha.image = game_.assets[imgha];
        wordhi.image = game_.assets[imghi];
        wordhu.image = game_.assets[imghu];
        wordhe.image = game_.assets[imghe];
        wordho.image = game_.assets[imgho];
        wordma.image = game_.assets[imgma];
        wordmi.image = game_.assets[imgmi];
        wordmu.image = game_.assets[imgmu];
        wordme.image = game_.assets[imgme];
        wordmo.image = game_.assets[imgmo];
        wordya.image = game_.assets[imgya];
        wordyu.image = game_.assets[imgyu];
        wordyo.image = game_.assets[imgyo];
        wordra.image = game_.assets[imgra];
        wordri.image = game_.assets[imgri];
        wordru.image = game_.assets[imgru];
        wordre.image = game_.assets[imgre];
        wordro.image = game_.assets[imgro];
        wordwa.image = game_.assets[imgwa];
        wordwo.image = game_.assets[imgwo];
        wordnn.image = game_.assets[imgnn];
        wordkatakana.image = game_.assets[imgkatakana];
        wordgb.image = game_.assets[imggb];
        wordgc.image = game_.assets[imggc];
        wordkesu.image = game_.assets[imgkesu];
        wordzenbukesu.image = game_.assets[imgzenbukesu];
        word00.image = game_.assets[img00];
        wordmaru.image = game_.assets[imgmaru];
        wordten.image = game_.assets[imgten];
        wordbar.image = game_.assets[imgbar];
        wordhai.image = game_.assets[imghai];
        wordiie.image = game_.assets[imgiie];
        word0.image = game_.assets[img0];
        word1.image = game_.assets[img1];
        word2.image = game_.assets[img2];
        word3.image = game_.assets[img3];
        word4.image = game_.assets[img4];
        word5.image = game_.assets[img5];
        word6.image = game_.assets[img6];
        word7.image = game_.assets[img7];
        word8.image = game_.assets[img8];
        word9.image = game_.assets[img9];
        wordtalk.image = game_.assets[imgtalk];

	worda.x = wiw * 0.88; // wordaの横位置を設定します。
        worda.y = wih * 0.3; // wordaの縦位置を設定します。
	worda.scaleX = scx;
	worda.scaleY = scy;
	wordi.x = wiw * 0.88;
        wordi.y = wih * 0.4;
	wordi.scaleX = scx;
	wordi.scaleY = scy;
	wordu.x = wiw * 0.88;
        wordu.y = wih * 0.5;
	wordu.scaleX = scx;
	wordu.scaleY = scy;
	worde.x = wiw * 0.88;
        worde.y = wih * 0.6;
        worde.scaleX = scx;
	worde.scaleY = scy;
	wordo.x = wiw * 0.88;
        wordo.y = wih * 0.7;
	wordo.scaleX = scx;
	wordo.scaleY = scy;
	wordkesu.x = wiw * 0.88;
        wordkesu.y = wih * 0.8;
	wordkesu.scaleX = scx;
	wordkesu.scaleY = scy;
	word9.x = wiw * 0.88;
        word9.y = wih * 0.9;
	word9.scaleX = scx;
	word9.scaleY = scy;

	wordka.x = wiw * 0.79; // か行
        wordka.y = wih * 0.3;
	wordka.scaleX = scx;
	wordka.scaleY = scy;
	wordki.x = wiw * 0.79;
        wordki.y = wih * 0.4;
	wordki.scaleX = scx;
	wordki.scaleY = scy;
	wordku.x = wiw * 0.79;
        wordku.y = wih * 0.5;
	wordku.scaleX = scx;
	wordku.scaleY = scy;
	wordke.x = wiw * 0.79;
        wordke.y = wih * 0.6;
        wordke.scaleX = scx;
	wordke.scaleY = scy;
	wordko.x = wiw * 0.79;
        wordko.y = wih * 0.7;
	wordko.scaleX = scx;
	wordko.scaleY = scy;
	wordzenbukesu.x = wiw * 0.79;
        wordzenbukesu.y = wih * 0.8;
	wordzenbukesu.scaleX = scx;
	wordzenbukesu.scaleY = scy;
	word8.x = wiw * 0.79;
        word8.y = wih * 0.9;
	word8.scaleX = scx;
	word8.scaleY = scy;

	wordsa.x = wiw * 0.7; // さ行
        wordsa.y = wih * 0.3;
	wordsa.scaleX = scx;
	wordsa.scaleY = scy;
	wordsi.x = wiw * 0.7;
        wordsi.y = wih * 0.4;
	wordsi.scaleX = scx;
	wordsi.scaleY = scy;
	wordsu.x = wiw * 0.7;
        wordsu.y = wih * 0.5;
	wordsu.scaleX = scx;
	wordsu.scaleY = scy;
	wordse.x = wiw * 0.7;
        wordse.y = wih * 0.6;
        wordse.scaleX = scx;
	wordse.scaleY = scy;
	wordso.x = wiw * 0.7;
        wordso.y = wih * 0.7;
	wordso.scaleX = scx;
	wordso.scaleY = scy;
	wordtalk.x = wiw * 0.7;
        wordtalk.y = wih * 0.8;
	wordtalk.scaleX = scx;
	wordtalk.scaleY = scy;
	word7.x = wiw * 0.7;
        word7.y = wih * 0.9;
	word7.scaleX = scx;
	word7.scaleY = scy;

	wordta.x = wiw * 0.61; // た行
        wordta.y = wih * 0.3;
	wordta.scaleX = scx;
	wordta.scaleY = scy;
	wordti.x = wiw * 0.61;
        wordti.y = wih * 0.4;
	wordti.scaleX = scx;
	wordti.scaleY = scy;
	wordtu.x = wiw * 0.61;
        wordtu.y = wih * 0.5;
	wordtu.scaleX = scx;
	wordtu.scaleY = scy;
	wordte.x = wiw * 0.61;
        wordte.y = wih * 0.6;
        wordte.scaleX = scx;
	wordte.scaleY = scy;
	wordto.x = wiw * 0.61;
        wordto.y = wih * 0.7;
	wordto.scaleX = scx;
	wordto.scaleY = scy;
	word00.x = wiw * 0.61;
        word00.y = wih * 0.8;
	word00.scaleX = scx;
	word00.scaleY = scy;
	word6.x = wiw * 0.61;
        word6.y = wih * 0.9;
	word6.scaleX = scx;
	word6.scaleY = scy;

	wordna.x = wiw * 0.52; // な行
        wordna.y = wih * 0.3;
	wordna.scaleX = scx;
	wordna.scaleY = scy;
	wordni.x = wiw * 0.52;;
        wordni.y = wih * 0.4;
	wordni.scaleX = scx;
	wordni.scaleY = scy;
	wordnu.x = wiw * 0.52;;
        wordnu.y = wih * 0.5;
	wordnu.scaleX = scx;
	wordnu.scaleY = scy;
	wordne.x = wiw * 0.52;;
        wordne.y = wih * 0.6;
        wordne.scaleX = scx;
	wordne.scaleY = scy;
	wordno.x = wiw * 0.52;;
        wordno.y = wih * 0.7;
	wordno.scaleX = scx;
	wordno.scaleY = scy;
	wordbar.x = wiw * 0.52;;
        wordbar.y = wih * 0.8;
	wordbar.scaleX = scx;
	wordbar.scaleY = scy;
	word5.x = wiw * 0.52;
        word5.y = wih * 0.9;
	word5.scaleX = scx;
	word5.scaleY = scy;

	wordha.x = wiw * 0.43; // は行
        wordha.y = wih * 0.3;
	wordha.scaleX = scx;
	wordha.scaleY = scy;
	wordhi.x = wiw * 0.43;
        wordhi.y = wih * 0.4;
	wordhi.scaleX = scx;
	wordhi.scaleY = scy;
	wordhu.x = wiw * 0.43;
        wordhu.y = wih * 0.5;
	wordhu.scaleX = scx;
	wordhu.scaleY = scy;
	wordhe.x = wiw * 0.43;
        wordhe.y = wih * 0.6;
        wordhe.scaleX = scx;
	wordhe.scaleY = scy;
	wordho.x = wiw * 0.43;
        wordho.y = wih * 0.7;
	wordho.scaleX = scx;
	wordho.scaleY = scy;
	wordmaru.x = wiw * 0.43;
        wordmaru.y = wih * 0.8;
	wordmaru.scaleX = scx;
	wordmaru.scaleY = scy;
	word4.x = wiw * 0.43;
        word4.y = wih * 0.9;
	word4.scaleX = scx;
	word4.scaleY = scy;

	wordma.x = wiw * 0.34; // ま行
        wordma.y = wih * 0.3;
	wordma.scaleX = scx;
	wordma.scaleY = scy;
	wordmi.x = wiw * 0.34;
        wordmi.y = wih * 0.4;
	wordmi.scaleX = scx;
	wordmi.scaleY = scy;
	wordmu.x = wiw * 0.34;
        wordmu.y = wih * 0.5;
	wordmu.scaleX = scx;
	wordmu.scaleY = scy;
	wordme.x = wiw * 0.34;
        wordme.y = wih * 0.6;
        wordme.scaleX = scx;
	wordme.scaleY = scy;
	wordmo.x = wiw * 0.34;
        wordmo.y = wih * 0.7;
	wordmo.scaleX = scx;
	wordmo.scaleY = scy;
	wordten.x = wiw * 0.34;
        wordten.y = wih * 0.8;
	wordten.scaleX = scx;
	wordten.scaleY = scy;
	word3.x = wiw * 0.34;
        word3.y = wih * 0.9;
	word3.scaleX = scx;
	word3.scaleY = scy;

	wordya.x = wiw * 0.25; // や行
        wordya.y = wih * 0.3;
	wordya.scaleX = scx;
	wordya.scaleY = scy;
	wordyu.x = wiw * 0.25;
        wordyu.y = wih * 0.5;
	wordyu.scaleX = scx;
	wordyu.scaleY = scy;
	wordyo.x = wiw * 0.25;
        wordyo.y = wih * 0.7;
	wordyo.scaleX = scx;
	wordyo.scaleY = scy;
	wordiie.x = wiw * 0.25;
        wordiie.y = wih * 0.8;
	wordiie.scaleX = scx;
	wordiie.scaleY = scy;
	word2.x = wiw * 0.25;
        word2.y = wih * 0.9;
	word2.scaleX = scx;
	word2.scaleY = scy;

	wordra.x = wiw * 0.16; // ら行
        wordra.y = wih * 0.3;
	wordra.scaleX = scx;
	wordra.scaleY = scy;
	wordri.x = wiw * 0.16;
        wordri.y = wih * 0.4;
	wordri.scaleX = scx;
	wordri.scaleY = scy;
	wordru.x = wiw * 0.16;
        wordru.y = wih * 0.5;
	wordru.scaleX = scx;
	wordru.scaleY = scy;
	wordre.x = wiw * 0.16;
        wordre.y = wih * 0.6;
        wordre.scaleX = scx;
	wordre.scaleY = scy;
	wordro.x = wiw * 0.16;
        wordro.y = wih * 0.7;
	wordro.scaleX = scx;
	wordro.scaleY = scy;
	wordhai.x = wiw * 0.16;
        wordhai.y = wih * 0.8;
	wordhai.scaleX = scx;
	wordhai.scaleY = scy;
	word1.x = wiw * 0.16;
        word1.y = wih * 0.9;
	word1.scaleX = scx;
	word1.scaleY = scy;

	wordwa.x = wiw * 0.07; // わ行
        wordwa.y = wih * 0.3;
	wordwa.scaleX = scx;
	wordwa.scaleY = scy;
	wordwo.x = wiw * 0.07;
        wordwo.y = wih * 0.4;
	wordwo.scaleX = scx;
	wordwo.scaleY = scy;
	wordnn.x = wiw * 0.07;
        wordnn.y = wih * 0.5;
	wordnn.scaleX = scx;
	wordnn.scaleY = scy;
	wordgb.x = wiw * 0.07;
        wordgb.y = wih * 0.6;
	wordgb.scaleX = scx;
	wordgb.scaleY = scy;
	wordgc.x = wiw * 0.07;
        wordgc.y = wih * 0.7;
	wordgc.scaleX = scx;
	wordgc.scaleY = scy;
	wordkatakana.x = wiw * 0.07; // カタカナの入り口
        wordkatakana.y = wih * 0.8;
	wordkatakana.scaleX = scx;
	wordkatakana.scaleY = scy;
	word0.x = wiw * 0.07;
        word0.y = wih * 0.9;
	word0.scaleX = scx;
	word0.scaleY = scy;

        scene.addChild(worda); // あ行　文字表示
        scene.addChild(wordi);
        scene.addChild(wordu);
        scene.addChild(worde);
        scene.addChild(wordo);
        scene.addChild(wordkesu);
        scene.addChild(word9);

        scene.addChild(wordka); // か行
        scene.addChild(wordki);
        scene.addChild(wordku);
        scene.addChild(wordke);
        scene.addChild(wordko);
        scene.addChild(wordzenbukesu);
        scene.addChild(word8);

        scene.addChild(wordsa); // さ行
        scene.addChild(wordsi);
        scene.addChild(wordsu);
        scene.addChild(wordse);
        scene.addChild(wordso);
        scene.addChild(wordtalk);
        scene.addChild(word7);

        scene.addChild(wordta); // た行
        scene.addChild(wordti);
        scene.addChild(wordtu);
        scene.addChild(wordte);
        scene.addChild(wordto);
        scene.addChild(word00);
        scene.addChild(word6);

        scene.addChild(wordna); // な行
        scene.addChild(wordni);
        scene.addChild(wordnu);
        scene.addChild(wordne);
        scene.addChild(wordno);
        scene.addChild(wordbar);
        scene.addChild(word5);

        scene.addChild(wordha); // は行
        scene.addChild(wordhi);
        scene.addChild(wordhu);
        scene.addChild(wordhe);
        scene.addChild(wordho);
        scene.addChild(wordmaru);
        scene.addChild(word4);

        scene.addChild(wordma); // ま行
        scene.addChild(wordmi);
        scene.addChild(wordmu);
        scene.addChild(wordme);
        scene.addChild(wordmo);
        scene.addChild(wordten);
        scene.addChild(word3);

        scene.addChild(wordya); // や行
        scene.addChild(wordyu);
        scene.addChild(wordyo);
        scene.addChild(word2);

        scene.addChild(wordra); // ら行
        scene.addChild(wordri);
        scene.addChild(wordru);
        scene.addChild(wordre);
        scene.addChild(wordro);
        scene.addChild(wordiie);
        scene.addChild(word1);

        scene.addChild(wordkatakana); // カタカナ文字盤へ
        scene.addChild(wordwa); // わ行
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordgb);
        scene.addChild(wordgc);
        scene.addChild(wordhai);
        scene.addChild(word0);

	scene.addEventListener(Event.ENTER, function(e) {
	scene.addChild(title);                     // シーンが開いたら文字列を表示する  
	}); 

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定

             // 文字にスキャンイベントを設定する
            worda.addEventListener("scanselect", function() {
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'あ';    //文字を追加する
                scanner.scene1.scanStart(2);

         //var title1 = new Label('');//テスト用 文字列の文字数を検出し表示する
            //title1.x = 0;
            //title1.y = 10;
            //scene.addChild(title1);
            //title1.text = title.text.length -1;//文字数を表示する
            //title1.text = title.text.charAt(title.text.length -1);//最後の文字を表示する
            });

            wordi.addEventListener("scanselect", function() {
 		wordi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'い';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'い';
                scanner.scene1.scanStart(2);
            });

            wordu.addEventListener("scanselect", function() {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'う';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'う';
                scanner.scene1.scanStart(2);
            });

            worde.addEventListener("scanselect", function() {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'え';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'え';
                scanner.scene1.scanStart(2);
            });

            wordo.addEventListener("scanselect", function() {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'お';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'お';
                scanner.scene1.scanStart(2);
            });

            word9.addEventListener("scanselect", function() {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '９';
                speechSynthesis.speak(synthes);
                title.text = title.text + '９';
                scanner.scene1.scanStart(2);
            });

            wordka.addEventListener("scanselect", function() {  // か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'か';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'か';
                scanner.scene1.scanStart(2);
            });

            wordki.addEventListener("scanselect", function() {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'き';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'き';
                scanner.scene1.scanStart(2);
            });

            wordku.addEventListener("scanselect", function() {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'く';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'く';
                scanner.scene1.scanStart(2);
            });

            wordke.addEventListener("scanselect", function() {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'け';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'け';
                scanner.scene1.scanStart(2);
            });

            wordko.addEventListener("scanselect", function() {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'こ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'こ';
                scanner.scene1.scanStart(2);
            });

            word8.addEventListener("scanselect", function() {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '８';
                speechSynthesis.speak(synthes);
                title.text = title.text + '８';
                scanner.scene1.scanStart(2);
            });

            wordsa.addEventListener("scanselect", function() {  // さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'さ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'さ';
                scanner.scene1.scanStart(2);
            });

            wordsi.addEventListener("scanselect", function() {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'し';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'し';
                scanner.scene1.scanStart(2);
            });

            wordsu.addEventListener("scanselect", function() {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'す';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'す';
                scanner.scene1.scanStart(2);
            });

            wordse.addEventListener("scanselect", function() {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'せ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'せ';
                scanner.scene1.scanStart(2);
            });

            wordso.addEventListener("scanselect", function() {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'そ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'そ';
                scanner.scene1.scanStart(2);
            });

            wordtalk.addEventListener("scanselect", function() {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
                scanner.scene1.scanStart(2);
            });

            word7.addEventListener("scanselect", function() {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '７';
                speechSynthesis.speak(synthes);
                title.text = title.text + '７';
                scanner.scene1.scanStart(2);
            });

            wordta.addEventListener("scanselect", function() {  // た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'た';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'た';
                scanner.scene1.scanStart(2);
            });

            wordti.addEventListener("scanselect", function() {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ち';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ち';
                scanner.scene1.scanStart(2);
            });

            wordtu.addEventListener("scanselect", function() {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'つ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'つ';
                scanner.scene1.scanStart(2);
            });

            wordte.addEventListener("scanselect", function() {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'て';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'て';
                scanner.scene1.scanStart(2);
            });

            wordto.addEventListener("scanselect", function() {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'と';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'と';
                scanner.scene1.scanStart(2);
            });

            word00.addEventListener("scanselect", function() {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '空白';
                speechSynthesis.speak(synthes);
                title.text = title.text + '　';
                scanner.scene1.scanStart(2);
            });

            word6.addEventListener("scanselect", function() {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '６';
                speechSynthesis.speak(synthes);
                title.text = title.text + '６';
                scanner.scene1.scanStart(2);
            });

            wordna.addEventListener("scanselect", function() {  // な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'な';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'な';
                scanner.scene1.scanStart(2);
            });

            wordni.addEventListener("scanselect", function() {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'に';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'に';
                scanner.scene1.scanStart(2);
            });

            wordnu.addEventListener("scanselect", function() {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ぬ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ぬ';
                scanner.scene1.scanStart(2);
            });

            wordne.addEventListener("scanselect", function() {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ね';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ね';
                scanner.scene1.scanStart(2);
            });

            wordno.addEventListener("scanselect", function() {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'の';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'の';
                scanner.scene1.scanStart(2);
            });

            wordbar.addEventListener("scanselect", function() {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'のばす';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ー';
                scanner.scene1.scanStart(2);
            });

            word5.addEventListener("scanselect", function() {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '５';
                speechSynthesis.speak(synthes);
                title.text = title.text + '５';
                scanner.scene1.scanStart(2);
            });

            wordha.addEventListener("scanselect", function() {  // は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'は';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'は';
                scanner.scene1.scanStart(2);
            });

            wordhi.addEventListener("scanselect", function() {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ひ';
                scanner.scene1.scanStart(2);
            });

            wordhu.addEventListener("scanselect", function() {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ふ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ふ';
                scanner.scene1.scanStart(2);
            });

            wordhe.addEventListener("scanselect", function() {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'へ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'へ';
                scanner.scene1.scanStart(2);
            });

            wordho.addEventListener("scanselect", function() {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ほ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ほ';
                scanner.scene1.scanStart(2);
            });

            wordmaru.addEventListener("scanselect", function() {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まる';
                speechSynthesis.speak(synthes);
                title.text = title.text + '。';
                scanner.scene1.scanStart(2);
            });

            word4.addEventListener("scanselect", function() {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '４';
                speechSynthesis.speak(synthes);
                title.text = title.text + '４';
                scanner.scene1.scanStart(2);
            });

            wordma.addEventListener("scanselect", function() {  // ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ま';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ま';
                scanner.scene1.scanStart(2);
            });

            wordmi.addEventListener("scanselect", function() {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'み';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'み';
                scanner.scene1.scanStart(2);
            });

            wordmu.addEventListener("scanselect", function() {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'む';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'む';
                scanner.scene1.scanStart(2);
            });

            wordme.addEventListener("scanselect", function() {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'め';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'め';
                scanner.scene1.scanStart(2);
            });

            wordmo.addEventListener("scanselect", function() {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'も';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'も';
                scanner.scene1.scanStart(2);
            });

            wordten.addEventListener("scanselect", function() {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'てん';
                speechSynthesis.speak(synthes);
                title.text = title.text + '、';
                scanner.scene1.scanStart(2);
            });

            word3.addEventListener("scanselect", function() {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '３';
                speechSynthesis.speak(synthes);
                title.text = title.text + '３';
                scanner.scene1.scanStart(2);
            });

            wordya.addEventListener("scanselect", function() {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'や';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'や';
                scanner.scene1.scanStart(2);
            });

            wordyu.addEventListener("scanselect", function() {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ゆ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ゆ';
                scanner.scene1.scanStart(2);
            });

            wordyo.addEventListener("scanselect", function() {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'よ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'よ';
                scanner.scene1.scanStart(2);
            });

            word2.addEventListener("scanselect", function() {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '２';
                speechSynthesis.speak(synthes);
                title.text = title.text + '２';
                scanner.scene1.scanStart(2);
            });

            wordra.addEventListener("scanselect", function() {  // ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ら';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ら';
                scanner.scene1.scanStart(2);
            });

            wordri.addEventListener("scanselect", function() {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'り';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'り';
                scanner.scene1.scanStart(2);
            });

            wordru.addEventListener("scanselect", function() {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'る';
                speechSynthesis.speak(synthes);
               title.text = title.text + 'る';
                scanner.scene1.scanStart(2);
            });

            wordre.addEventListener("scanselect", function() {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'れ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'れ';
                scanner.scene1.scanStart(2);
            });

            wordro.addEventListener("scanselect", function() {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ろ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ろ';
                scanner.scene1.scanStart(2);
            });

            wordiie.addEventListener("scanselect", function() {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'いいえ';
                scanner.scene1.scanStart(2);
            });

            word1.addEventListener("scanselect", function() {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '１';
                speechSynthesis.speak(synthes);
                title.text = title.text + '１';
                scanner.scene1.scanStart(2);
            });

            wordkatakana.addEventListener("scanselect", function() {  //カタカナ文字盤
 		wordkatakana.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkatakana.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.pushScene(createKataScene()); // カタカナ文字盤へ切り替え
                scanner.scene1.scanStart(2);
            });

            wordwa.addEventListener("scanselect", function() {  // わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'わ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'わ';
                scanner.scene1.scanStart(2);
            });

            wordwo.addEventListener("scanselect", function() {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'を';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'を';
                scanner.scene1.scanStart(2);
            });

            wordnn.addEventListener("scanselect", function() {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'んん';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ん';
                scanner.scene1.scanStart(2);
            });

            wordhai.addEventListener("scanselect", function() {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'はい';
                scanner.scene1.scanStart(2);
            });

            word0.addEventListener("scanselect", function() {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '０';
                speechSynthesis.speak(synthes);
                title.text = title.text + '０';
                scanner.scene1.scanStart(2);
            });

            wordkesu.addEventListener("scanselect", function() {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひとつ消す';
                speechSynthesis.speak(synthes);
                title.text = title.text.substring(0, title.text.length -1 );
                scanner.scene1.scanStart(2);
            });

            wordzenbukesu.addEventListener("scanselect", function() {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '全部消す';
                speechSynthesis.speak(synthes);
                title.text = '';
                scanner.scene1.scanStart(2);
            });

	//濁音処理部分
            wordgb.addEventListener("scanselect", function() {
 		wordgb.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgb.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgb].clone().play();
                //title.text = title.text + 'daku';
                lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                 if (lastletter == 'か') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'が';
                   synthes.text = 'が';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'き') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぎ';
                   synthes.text = 'ぎ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'く'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぐ';
                   synthes.text = 'ぐ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'け'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'げ';
                   synthes.text = 'げ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'こ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ご';
                   synthes.text = 'ご';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'さ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ざ';
                   synthes.text = 'ざ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'し'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'じ';
                   synthes.text = 'じ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'す'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ず';
                   synthes.text = 'ず';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'せ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぜ';
                   synthes.text = 'ぜ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'そ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぞ';
                   synthes.text = 'ぞ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'た'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'だ';
                   synthes.text = 'だ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ち'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぢ';
                   synthes.text = 'ぢ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'つ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'づ';
                   synthes.text = 'づ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'て'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'で';
                   synthes.text = 'で';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'と'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ど';
                   synthes.text = 'ど';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'は'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ば';
                   synthes.text = 'ば';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ひ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'び';
                   synthes.text = 'び';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ふ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぶ';
                   synthes.text = 'ぶ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'へ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'べ';
                   synthes.text = 'べ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ほ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぼ';
                   synthes.text = 'ぼ';
                   speechSynthesis.speak(synthes);
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
                scanner.scene1.scanStart(2);
            });

	//半濁音　小文字処理部分
            wordgc.addEventListener("scanselect", function() {
 		wordgc.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgc.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgc].clone().play();
                //title.text = title.text + 'handaku';
                 lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                  if (lastletter == 'は'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぱ';
                   synthes.text = 'ぱ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ひ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぴ';
                   synthes.text = 'ぴ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ふ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぷ';
                   synthes.text = 'ぷ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'へ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぺ';
                   synthes.text = 'ぺ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ほ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぽ';
                   synthes.text = 'ぽ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'あ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぁ';
                   synthes.text = 'あ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'い'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぃ';
                   synthes.text = 'い';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'う'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぅ';
                   synthes.text = 'う';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'え'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぇ';
                   synthes.text = 'え';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'お'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぉ';
                   synthes.text = 'お';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'や'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゃ';
                   synthes.text = 'や';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ゆ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゅ';
                   synthes.text = 'ゆ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'よ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ょ';
                   synthes.text = 'よ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'つ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'っ';
                   synthes.text = 'つ';
                   speechSynthesis.speak(synthes);
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
                scanner.scene1.scanStart(2);
            });
/***************************************************************************************************/
/*　#グループの設定　*/
        // グループの作成
        var wordGroupa = scanner.scene1.createScanGroup('a');
        var wordGroupka = scanner.scene1.createScanGroup('ka');
        var wordGroupsa = scanner.scene1.createScanGroup('sa');
        var wordGroupta = scanner.scene1.createScanGroup('ta');
        var wordGroupna = scanner.scene1.createScanGroup('na');
        var wordGroupha = scanner.scene1.createScanGroup('ha');
        var wordGroupma = scanner.scene1.createScanGroup('ma');
        var wordGroupya = scanner.scene1.createScanGroup('ya');
        var wordGroupra = scanner.scene1.createScanGroup('ra');
        var wordGroupwa = scanner.scene1.createScanGroup('wa');
        var wordGroupyn = scanner.scene1.createScanGroup('yn');
        var wordGroupde = scanner.scene1.createScanGroup('de');
        var wordGroup04 = scanner.scene1.createScanGroup('04');
        var wordGroup59 = scanner.scene1.createScanGroup('59');
        var groupana = scanner.scene1.createScanGroup('ana');
        var grouphawa = scanner.scene1.createScanGroup('hawa');
        var groupyn09 = scanner.scene1.createScanGroup('yn09');

        // グループに子要素を割り当てる
        scanner.scene1.setScanGroup(wordGroupa, [worda, wordi, wordu, worde, wordo]);
        scanner.scene1.setScanGroup(wordGroupka, [wordka, wordki, wordku, wordke, wordko]);
        scanner.scene1.setScanGroup(wordGroupsa, [wordsa, wordsi, wordsu, wordse, wordso]);
        scanner.scene1.setScanGroup(wordGroupta, [wordta, wordti, wordtu, wordte, wordto]);
        scanner.scene1.setScanGroup(wordGroupna, [wordna, wordni, wordnu, wordne, wordno]);
        scanner.scene1.setScanGroup(wordGroupha, [wordha, wordhi, wordhu, wordhe, wordho]);
        scanner.scene1.setScanGroup(wordGroupma, [wordma, wordmi, wordmu, wordme, wordmo]);
        scanner.scene1.setScanGroup(wordGroupya, [wordya, wordyu, wordyo]);
        scanner.scene1.setScanGroup(wordGroupra, [wordra, wordri, wordru, wordre, wordro]);
        scanner.scene1.setScanGroup(wordGroupwa, [wordwa, wordwo, wordnn, wordgb, wordgc]);
        scanner.scene1.setScanGroup(wordGroupyn, [wordkatakana, wordhai, wordiie, wordten, wordmaru]);
        scanner.scene1.setScanGroup(wordGroupde, [wordbar, word00, wordtalk, wordzenbukesu, wordkesu]);
        scanner.scene1.setScanGroup(wordGroup04, [word0, word1, word2, word3, word4]);
        scanner.scene1.setScanGroup(wordGroup59, [word5, word6, word7, word8, word9]);

        scanner.scene1.setScanGroup(groupana, [wordGroupa,wordGroupka,wordGroupsa,wordGroupta,wordGroupna]);
        scanner.scene1.setScanGroup(grouphawa, [wordGroupha,wordGroupma,wordGroupya,wordGroupra,wordGroupwa]);
        scanner.scene1.setScanGroup(groupyn09, [wordGroupyn,wordGroupde,wordGroup04,wordGroup59]);


        // グループまたはスプライトをスキャン対象に設定
        scanner.scene1.setScanTargets([groupana,grouphawa,groupyn09]);

/***************************************************************************************/

        // スキャンの設定
        scanner.scene1.setScanSettingData(scanSetting);

        // scan開始
        scanner.scene1.scanStart(2);
        //オートスキャンを表示
        scene.addChild(scanner.scene1);

           return scene;
       };
/***************************************************************************************************/
/***************************************************************************************************/

    	// カタカナ文字盤を作り返す関数
            var createKataScene = function() {
                var scene = new Scene();
                //var label = new Label('カタカナ文字盤');        // 表示切り替え確認用
                //scene.addChild(label);

	//画像の設定
        var worda = new Sprite(50, 50);  // スプライト大きさ設定
        var wordi = new Sprite(50, 50);
        var wordu = new Sprite(50, 50);
        var worde = new Sprite(50, 50);
        var wordo = new Sprite(50, 50);
        var wordka = new Sprite(50, 50);
        var wordki = new Sprite(50, 50);
        var wordku = new Sprite(50, 50);
        var wordke = new Sprite(50, 50);
        var wordko = new Sprite(50, 50);
        var wordsa = new Sprite(50, 50);
        var wordsi = new Sprite(50, 50);
        var wordsu = new Sprite(50, 50);
        var wordse = new Sprite(50, 50);
        var wordso = new Sprite(50, 50);
        var wordta = new Sprite(50, 50);
        var wordti = new Sprite(50, 50);
        var wordtu = new Sprite(50, 50);
        var wordte = new Sprite(50, 50);
        var wordto = new Sprite(50, 50);
        var wordna = new Sprite(50, 50);
        var wordni = new Sprite(50, 50);
        var wordnu = new Sprite(50, 50);
        var wordne = new Sprite(50, 50);
        var wordno = new Sprite(50, 50);
        var wordha = new Sprite(50, 50);
        var wordhi = new Sprite(50, 50);
        var wordhu = new Sprite(50, 50);
        var wordhe = new Sprite(50, 50);
        var wordho = new Sprite(50, 50);
        var wordma = new Sprite(50, 50);
        var wordmi = new Sprite(50, 50);
        var wordmu = new Sprite(50, 50);
        var wordme = new Sprite(50, 50);
        var wordmo = new Sprite(50, 50);
        var wordya = new Sprite(50, 50);
        var wordyu = new Sprite(50, 50);
        var wordyo = new Sprite(50, 50);
        var wordra = new Sprite(50, 50);
        var wordri = new Sprite(50, 50);
        var wordru = new Sprite(50, 50);
        var wordre = new Sprite(50, 50);
        var wordro = new Sprite(50, 50);
        var wordwa = new Sprite(50, 50);
        var wordwo = new Sprite(50, 50);
        var wordnn = new Sprite(50, 50);
        var wordhiragana = new Sprite(50,50);
        var wordgb = new Sprite(50, 50);
        var wordgc = new Sprite(50, 50);
        var wordkesu = new Sprite(50, 50);
        var wordzenbukesu = new Sprite(50, 50);
        var word00 = new Sprite(50, 50);
        var wordmaru = new Sprite(50, 50);
        var wordten = new Sprite(50, 50);
        var wordbar = new Sprite(50, 50);
        var wordhai = new Sprite(50, 50);
        var wordiie = new Sprite(50, 50);
        var word0 = new Sprite(50, 50);
        var word1 = new Sprite(50, 50);
        var word2 = new Sprite(50, 50);
        var word3 = new Sprite(50, 50);
        var word4 = new Sprite(50, 50);
        var word5 = new Sprite(50, 50);
        var word6 = new Sprite(50, 50);
        var word7 = new Sprite(50, 50);
        var word8 = new Sprite(50, 50);
        var word9 = new Sprite(50, 50);
        var wordtalk = new Sprite(50, 50);

        worda.image = game_.assets[imgkta];  // word*に画像適用
        wordi.image = game_.assets[imgkti];
        wordu.image = game_.assets[imgktu];
        worde.image = game_.assets[imgkte];
        wordo.image = game_.assets[imgkto];
        wordka.image = game_.assets[imgktka];
        wordki.image = game_.assets[imgktki];
        wordku.image = game_.assets[imgktku];
        wordke.image = game_.assets[imgktke];
        wordko.image = game_.assets[imgktko];
        wordsa.image = game_.assets[imgktsa];
        wordsi.image = game_.assets[imgktsi];
        wordsu.image = game_.assets[imgktsu];
        wordse.image = game_.assets[imgktse];
        wordso.image = game_.assets[imgktso];
        wordta.image = game_.assets[imgktta];
        wordti.image = game_.assets[imgktti];
        wordtu.image = game_.assets[imgkttu];
        wordte.image = game_.assets[imgktte];
        wordto.image = game_.assets[imgktto];
        wordna.image = game_.assets[imgktna];
        wordni.image = game_.assets[imgktni];
        wordnu.image = game_.assets[imgktnu];
        wordne.image = game_.assets[imgktne];
        wordno.image = game_.assets[imgktno];
        wordha.image = game_.assets[imgktha];
        wordhi.image = game_.assets[imgkthi];
        wordhu.image = game_.assets[imgkthu];
        wordhe.image = game_.assets[imgkthe];
        wordho.image = game_.assets[imgktho];
        wordma.image = game_.assets[imgktma];
        wordmi.image = game_.assets[imgktmi];
        wordmu.image = game_.assets[imgktmu];
        wordme.image = game_.assets[imgktme];
        wordmo.image = game_.assets[imgktmo];
        wordya.image = game_.assets[imgktya];
        wordyu.image = game_.assets[imgktyu];
        wordyo.image = game_.assets[imgktyo];
        wordra.image = game_.assets[imgktra];
        wordri.image = game_.assets[imgktri];
        wordru.image = game_.assets[imgktru];
        wordre.image = game_.assets[imgktre];
        wordro.image = game_.assets[imgktro];
        wordwa.image = game_.assets[imgktwa];
        wordwo.image = game_.assets[imgktwo];
        wordnn.image = game_.assets[imgktnn];
        wordhiragana.image = game_.assets[imghiragana];
        wordgb.image = game_.assets[imggb];
        wordgc.image = game_.assets[imggc];
        wordkesu.image = game_.assets[imgkesu];
        wordzenbukesu.image = game_.assets[imgzenbukesu];
        word00.image = game_.assets[img00];
        wordmaru.image = game_.assets[imgmaru];
        wordten.image = game_.assets[imgten];
        wordbar.image = game_.assets[imgbar];
        wordhai.image = game_.assets[imghai];
        wordiie.image = game_.assets[imgiie];
        word0.image = game_.assets[img0];
        word1.image = game_.assets[img1];
        word2.image = game_.assets[img2];
        word3.image = game_.assets[img3];
        word4.image = game_.assets[img4];
        word5.image = game_.assets[img5];
        word6.image = game_.assets[img6];
        word7.image = game_.assets[img7];
        word8.image = game_.assets[img8];
        word9.image = game_.assets[img9];
        wordtalk.image = game_.assets[imgtalk];

	worda.x = wiw * 0.88; // wordaの横位置を設定します。
        worda.y = wih * 0.3; // wordaの縦位置を設定します。
	worda.scaleX = scx;
	worda.scaleY = scy;
	wordi.x = wiw * 0.88;
        wordi.y = wih * 0.4;
	wordi.scaleX = scx;
	wordi.scaleY = scy;
	wordu.x = wiw * 0.88;
        wordu.y = wih * 0.5;
	wordu.scaleX = scx;
	wordu.scaleY = scy;
	worde.x = wiw * 0.88;

        worde.y = wih * 0.6;
        worde.scaleX = scx;
	worde.scaleY = scy;
	wordo.x = wiw * 0.88;
        wordo.y = wih * 0.7;
	wordo.scaleX = scx;
	wordo.scaleY = scy;
	wordkesu.x = wiw * 0.88;
        wordkesu.y = wih * 0.8;
	wordkesu.scaleX = scx;
	wordkesu.scaleY = scy;
	word9.x = wiw * 0.88;
        word9.y = wih * 0.9;
	word9.scaleX = scx;
	word9.scaleY = scy;

	wordka.x = wiw * 0.79; // か行
        wordka.y = wih * 0.3;
	wordka.scaleX = scx;
	wordka.scaleY = scy;
	wordki.x = wiw * 0.79;
        wordki.y = wih * 0.4;
	wordki.scaleX = scx;
	wordki.scaleY = scy;
	wordku.x = wiw * 0.79;
        wordku.y = wih * 0.5;
	wordku.scaleX = scx;
	wordku.scaleY = scy;
	wordke.x = wiw * 0.79;
        wordke.y = wih * 0.6;
        wordke.scaleX = scx;
	wordke.scaleY = scy;
	wordko.x = wiw * 0.79;
        wordko.y = wih * 0.7;
	wordko.scaleX = scx;
	wordko.scaleY = scy;
	wordzenbukesu.x = wiw * 0.79;
        wordzenbukesu.y = wih * 0.8;
	wordzenbukesu.scaleX = scx;
	wordzenbukesu.scaleY = scy;
	word8.x = wiw * 0.79;
        word8.y = wih * 0.9;
	word8.scaleX = scx;
	word8.scaleY = scy;

	wordsa.x = wiw * 0.7; // さ行
        wordsa.y = wih * 0.3;
	wordsa.scaleX = scx;
	wordsa.scaleY = scy;
	wordsi.x = wiw * 0.7;
        wordsi.y = wih * 0.4;
	wordsi.scaleX = scx;
	wordsi.scaleY = scy;
	wordsu.x = wiw * 0.7;
        wordsu.y = wih * 0.5;
	wordsu.scaleX = scx;
	wordsu.scaleY = scy;
	wordse.x = wiw * 0.7;
        wordse.y = wih * 0.6;
        wordse.scaleX = scx;
	wordse.scaleY = scy;
	wordso.x = wiw * 0.7;
        wordso.y = wih * 0.7;
	wordso.scaleX = scx;
	wordso.scaleY = scy;
	wordtalk.x = wiw * 0.7;
        wordtalk.y = wih * 0.8;
	wordtalk.scaleX = scx;
	wordtalk.scaleY = scy;
	word7.x = wiw * 0.7;
        word7.y = wih * 0.9;
	word7.scaleX = scx;
	word7.scaleY = scy;

	wordta.x = wiw * 0.61; // た行
        wordta.y = wih * 0.3;
	wordta.scaleX = scx;
	wordta.scaleY = scy;
	wordti.x = wiw * 0.61;
        wordti.y = wih * 0.4;
	wordti.scaleX = scx;
	wordti.scaleY = scy;
	wordtu.x = wiw * 0.61;
        wordtu.y = wih * 0.5;
	wordtu.scaleX = scx;
	wordtu.scaleY = scy;
	wordte.x = wiw * 0.61;
        wordte.y = wih * 0.6;
        wordte.scaleX = scx;
	wordte.scaleY = scy;
	wordto.x = wiw * 0.61;
        wordto.y = wih * 0.7;
	wordto.scaleX = scx;
	wordto.scaleY = scy;
	word00.x = wiw * 0.61;
        word00.y = wih * 0.8;
	word00.scaleX = scx;
	word00.scaleY = scy;
	word6.x = wiw * 0.61;
        word6.y = wih * 0.9;
	word6.scaleX = scx;
	word6.scaleY = scy;

	wordna.x = wiw * 0.52; // な行
        wordna.y = wih * 0.3;
	wordna.scaleX = scx;
	wordna.scaleY = scy;
	wordni.x = wiw * 0.52;;
        wordni.y = wih * 0.4;
	wordni.scaleX = scx;
	wordni.scaleY = scy;
	wordnu.x = wiw * 0.52;;
        wordnu.y = wih * 0.5;
	wordnu.scaleX = scx;
	wordnu.scaleY = scy;
	wordne.x = wiw * 0.52;;
        wordne.y = wih * 0.6;
        wordne.scaleX = scx;
	wordne.scaleY = scy;
	wordno.x = wiw * 0.52;;
        wordno.y = wih * 0.7;
	wordno.scaleX = scx;
	wordno.scaleY = scy;
	wordbar.x = wiw * 0.52;;
        wordbar.y = wih * 0.8;
	wordbar.scaleX = scx;
	wordbar.scaleY = scy;
	word5.x = wiw * 0.52;
        word5.y = wih * 0.9;
	word5.scaleX = scx;
	word5.scaleY = scy;

	wordha.x = wiw * 0.43; // は行
        wordha.y = wih * 0.3;
	wordha.scaleX = scx;
	wordha.scaleY = scy;
	wordhi.x = wiw * 0.43;
        wordhi.y = wih * 0.4;
	wordhi.scaleX = scx;
	wordhi.scaleY = scy;
	wordhu.x = wiw * 0.43;
        wordhu.y = wih * 0.5;
	wordhu.scaleX = scx;
	wordhu.scaleY = scy;
	wordhe.x = wiw * 0.43;
        wordhe.y = wih * 0.6;
        wordhe.scaleX = scx;
	wordhe.scaleY = scy;
	wordho.x = wiw * 0.43;
        wordho.y = wih * 0.7;
	wordho.scaleX = scx;
	wordho.scaleY = scy;
	wordmaru.x = wiw * 0.43;
        wordmaru.y = wih * 0.8;
	wordmaru.scaleX = scx;
	wordmaru.scaleY = scy;
	word4.x = wiw * 0.43;
        word4.y = wih * 0.9;
	word4.scaleX = scx;
	word4.scaleY = scy;

	wordma.x = wiw * 0.34; // ま行
        wordma.y = wih * 0.3;
	wordma.scaleX = scx;
	wordma.scaleY = scy;
	wordmi.x = wiw * 0.34;
        wordmi.y = wih * 0.4;
	wordmi.scaleX = scx;
	wordmi.scaleY = scy;
	wordmu.x = wiw * 0.34;
        wordmu.y = wih * 0.5;
	wordmu.scaleX = scx;
	wordmu.scaleY = scy;
	wordme.x = wiw * 0.34;
        wordme.y = wih * 0.6;
        wordme.scaleX = scx;
	wordme.scaleY = scy;
	wordmo.x = wiw * 0.34;
        wordmo.y = wih * 0.7;
	wordmo.scaleX = scx;
	wordmo.scaleY = scy;
	wordten.x = wiw * 0.34;
        wordten.y = wih * 0.8;
	wordten.scaleX = scx;
	wordten.scaleY = scy;
	word3.x = wiw * 0.34;
        word3.y = wih * 0.9;
	word3.scaleX = scx;
	word3.scaleY = scy;

	wordya.x = wiw * 0.25; // や行
        wordya.y = wih * 0.3;
	wordya.scaleX = scx;
	wordya.scaleY = scy;
	wordyu.x = wiw * 0.25;
        wordyu.y = wih * 0.5;
	wordyu.scaleX = scx;
	wordyu.scaleY = scy;
	wordyo.x = wiw * 0.25;
        wordyo.y = wih * 0.7;
	wordyo.scaleX = scx;
	wordyo.scaleY = scy;
	wordiie.x = wiw * 0.25;
        wordiie.y = wih * 0.8;
	wordiie.scaleX = scx;
	wordiie.scaleY = scy;
	word2.x = wiw * 0.25;
        word2.y = wih * 0.9;
	word2.scaleX = scx;
	word2.scaleY = scy;

	wordra.x = wiw * 0.16; // ら行
        wordra.y = wih * 0.3;
	wordra.scaleX = scx;
	wordra.scaleY = scy;
	wordri.x = wiw * 0.16;
        wordri.y = wih * 0.4;
	wordri.scaleX = scx;
	wordri.scaleY = scy;
	wordru.x = wiw * 0.16;
        wordru.y = wih * 0.5;
	wordru.scaleX = scx;
	wordru.scaleY = scy;
	wordre.x = wiw * 0.16;
        wordre.y = wih * 0.6;
        wordre.scaleX = scx;
	wordre.scaleY = scy;
	wordro.x = wiw * 0.16;
        wordro.y = wih * 0.7;
	wordro.scaleX = scx;
	wordro.scaleY = scy;
	wordhai.x = wiw * 0.16;
        wordhai.y = wih * 0.8;
	wordhai.scaleX = scx;
	wordhai.scaleY = scy;
	word1.x = wiw * 0.16;
        word1.y = wih * 0.9;
	word1.scaleX = scx;
	word1.scaleY = scy;

	wordwa.x = wiw * 0.07; // わ行
        wordwa.y = wih * 0.3;
	wordwa.scaleX = scx;
	wordwa.scaleY = scy;
	wordwo.x = wiw * 0.07;
        wordwo.y = wih * 0.4;
	wordwo.scaleX = scx;
	wordwo.scaleY = scy;
	wordnn.x = wiw * 0.07;
        wordnn.y = wih * 0.5;
	wordnn.scaleX = scx;
	wordnn.scaleY = scy;
	wordgb.x = wiw * 0.07;
        wordgb.y = wih * 0.6;
	wordgb.scaleX = scx;
	wordgb.scaleY = scy;
	wordgc.x = wiw * 0.07;
        wordgc.y = wih * 0.7;
	wordgc.scaleX = scx;
	wordgc.scaleY = scy;
	wordhiragana.x = wiw * 0.07; // ひらがな
        wordhiragana.y = wih * 0.8;
	wordhiragana.scaleX = scx;
	wordhiragana.scaleY = scy;
	word0.x = wiw * 0.07;
        word0.y = wih * 0.9;
	word0.scaleX = scx;
	word0.scaleY = scy;

        scene.addChild(worda); // あ行　シーン文字表示
        scene.addChild(wordi);
        scene.addChild(wordu);
        scene.addChild(worde);
        scene.addChild(wordo);
        scene.addChild(wordkesu);
        scene.addChild(word9);

        scene.addChild(wordka); // か行
        scene.addChild(wordki);
        scene.addChild(wordku);
        scene.addChild(wordke);
        scene.addChild(wordko);
        scene.addChild(wordzenbukesu);
        scene.addChild(word8);

        scene.addChild(wordsa); // さ行
        scene.addChild(wordsi);
        scene.addChild(wordsu);
        scene.addChild(wordse);
        scene.addChild(wordso);
        scene.addChild(wordtalk);
        scene.addChild(word7);

        scene.addChild(wordta); // た行
        scene.addChild(wordti);
        scene.addChild(wordtu);
        scene.addChild(wordte);
        scene.addChild(wordto);
        scene.addChild(word00);
        scene.addChild(word6);

        scene.addChild(wordna); // な行
        scene.addChild(wordni);
        scene.addChild(wordnu);
        scene.addChild(wordne);
        scene.addChild(wordno);

        scene.addChild(wordbar);
        scene.addChild(word5);

        scene.addChild(wordha); // は行
        scene.addChild(wordhi);
        scene.addChild(wordhu);
        scene.addChild(wordhe);
        scene.addChild(wordho);
        scene.addChild(wordmaru);
        scene.addChild(word4);

        scene.addChild(wordma); // ま行
        scene.addChild(wordmi);
        scene.addChild(wordmu);
        scene.addChild(wordme);
        scene.addChild(wordmo);
        scene.addChild(wordten);
        scene.addChild(word3);

        scene.addChild(wordya); // や行
        scene.addChild(wordyu);
        scene.addChild(wordyo);
        scene.addChild(word2);

        scene.addChild(wordra); // ら行
        scene.addChild(wordri);
        scene.addChild(wordru);
        scene.addChild(wordre);
        scene.addChild(wordro);
        scene.addChild(wordiie);
        scene.addChild(word1);

        scene.addChild(wordhiragana); // ひらがな文字盤
        scene.addChild(wordwa); // わ行
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordgb);
        scene.addChild(wordgc);
        scene.addChild(wordhai);
        scene.addChild(word0);

        scene.addChild(title);

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定

             // 文字にタッチイベントを設定する
            worda.addEventListener("scanselect", function() {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ア';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ア';    //文字を追加する
                scanner.scene2.scanStart(2);

         //var title1 = new Label('');//テスト 文字列の文字数を検出し表示する
            //title1.x = 0;
            //title1.y = 10;
            //scene.addChild(title1);
            //title1.text = title.text.length -1;//文字数を表示する
            //title1.text = title.text.charAt(title.text.length -1);//最後の文字を表示する
            });

            wordi.addEventListener("scanselect", function() {
 		wordi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'イ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'イ';
                scanner.scene2.scanStart(2);
            });

            wordu.addEventListener("scanselect", function() {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ウ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ウ';
                scanner.scene2.scanStart(2);
            });

            worde.addEventListener("scanselect", function() {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'エ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'エ';
                scanner.scene2.scanStart(2);
            });

            wordo.addEventListener("scanselect", function() {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'オ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'オ';
                scanner.scene2.scanStart(2);
            });

            word9.addEventListener("scanselect", function() {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '９';
                speechSynthesis.speak(synthes);
                title.text = title.text + '９';
                scanner.scene2.scanStart(2);
            });

            wordka.addEventListener("scanselect", function() {  // か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'カ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'カ';
                scanner.scene2.scanStart(2);
            });

            wordki.addEventListener("scanselect", function() {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'キ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'キ';
                scanner.scene2.scanStart(2);
            });

            wordku.addEventListener("scanselect", function() {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ク';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ク';
                scanner.scene2.scanStart(2);
            });

            wordke.addEventListener("scanselect", function() {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ケ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ケ';
                scanner.scene2.scanStart(2);
            });

            wordko.addEventListener("scanselect", function() {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'コ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'コ';
                scanner.scene2.scanStart(2);
            });

            word8.addEventListener("scanselect", function() {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '８';
                speechSynthesis.speak(synthes);
                title.text = title.text + '８';
                scanner.scene2.scanStart(2);
            });

            wordsa.addEventListener("scanselect", function() {  // さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'サ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'サ';
                scanner.scene2.scanStart(2);
            });

            wordsi.addEventListener("scanselect", function() {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'シ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'シ';
                scanner.scene2.scanStart(2);
            });

            wordsu.addEventListener("scanselect", function() {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ス';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ス';
                scanner.scene2.scanStart(2);
            });

            wordse.addEventListener("scanselect", function() {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'セ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'セ';
                scanner.scene2.scanStart(2);
            });

            wordso.addEventListener("scanselect", function() {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ソ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ソ';
                scanner.scene2.scanStart(2);
            });

            wordtalk.addEventListener("scanselect", function() {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
                scanner.scene2.scanStart(2);
            });

            word7.addEventListener("scanselect", function() {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '７';
                speechSynthesis.speak(synthes);
                title.text = title.text + '７';
                scanner.scene2.scanStart(2);
            });

            wordta.addEventListener("scanselect", function() {  // た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'タ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'タ';
                scanner.scene2.scanStart(2);
            });

            wordti.addEventListener("scanselect", function() {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'チ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'チ';
                scanner.scene2.scanStart(2);
            });

            wordtu.addEventListener("scanselect", function() {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ツ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ツ';
                scanner.scene2.scanStart(2);
            });

            wordte.addEventListener("scanselect", function() {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'テ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'テ';
                scanner.scene2.scanStart(2);
            });

            wordto.addEventListener("scanselect", function() {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ト';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ト';
                scanner.scene2.scanStart(2);
            });

            word00.addEventListener("scanselect", function() {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '空白';
                speechSynthesis.speak(synthes);
                title.text = title.text + '　';
                scanner.scene2.scanStart(2);
            });

            word6.addEventListener("scanselect", function() {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '６';
                speechSynthesis.speak(synthes);
                title.text = title.text + '６';
                scanner.scene2.scanStart(2);
            });

            wordna.addEventListener("scanselect", function() {  // な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ナ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ナ';
                scanner.scene2.scanStart(2);
            });

            wordni.addEventListener("scanselect", function() {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ニ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ニ';
                scanner.scene2.scanStart(2);
            });

            wordnu.addEventListener("scanselect", function() {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヌ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヌ';
                scanner.scene2.scanStart(2);
            });

            wordne.addEventListener("scanselect", function() {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ネ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ネ';
                scanner.scene2.scanStart(2);
            });

            wordno.addEventListener("scanselect", function() {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ノ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ノ';
                scanner.scene2.scanStart(2);
            });

            wordbar.addEventListener("scanselect", function() {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'のばす';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ー';
                scanner.scene2.scanStart(2);
            });

            word5.addEventListener("scanselect", function() {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '５';
                speechSynthesis.speak(synthes);
                title.text = title.text + '５';
                scanner.scene2.scanStart(2);
            });

            wordha.addEventListener("scanselect", function() {  // は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ハ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ハ';
                scanner.scene2.scanStart(2);
            });

            wordhi.addEventListener("scanselect", function() {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヒ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヒ';
                scanner.scene2.scanStart(2);
            });

            wordhu.addEventListener("scanselect", function() {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'フ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'フ';
                scanner.scene2.scanStart(2);
            });

            wordhe.addEventListener("scanselect", function() {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヘ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヘ';
                scanner.scene2.scanStart(2);
            });

            wordho.addEventListener("scanselect", function() {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ホ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ホ';
                scanner.scene2.scanStart(2);
            });

            wordmaru.addEventListener("scanselect", function() {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まる';
                speechSynthesis.speak(synthes);
                title.text = title.text + '。';
                scanner.scene2.scanStart(2);
            });

            word4.addEventListener("scanselect", function() {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '４';
                speechSynthesis.speak(synthes);
                title.text = title.text + '４';
                scanner.scene2.scanStart(2);
            });

            wordma.addEventListener("scanselect", function() {  // ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'マ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'マ';
                scanner.scene2.scanStart(2);
            });

            wordmi.addEventListener("scanselect", function() {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ミ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ミ';
                scanner.scene2.scanStart(2);
            });

            wordmu.addEventListener("scanselect", function() {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ム';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ム';
                scanner.scene2.scanStart(2);
            });

            wordme.addEventListener("scanselect", function() {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'メ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'メ';
                scanner.scene2.scanStart(2);
            });

            wordmo.addEventListener("scanselect", function() {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'モ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'モ';
                scanner.scene2.scanStart(2);
            });

            wordten.addEventListener("scanselect", function() {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'てん';
                speechSynthesis.speak(synthes);
                title.text = title.text + '、';
                scanner.scene2.scanStart(2);
            });

            word3.addEventListener("scanselect", function() {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '３';
                speechSynthesis.speak(synthes);
                title.text = title.text + '３';
                scanner.scene2.scanStart(2);
            });

            wordya.addEventListener("scanselect", function() {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヤ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヤ';
                scanner.scene2.scanStart(2);
            });

            wordyu.addEventListener("scanselect", function() {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ユ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ユ';
                scanner.scene2.scanStart(2);
            });

            wordyo.addEventListener("scanselect", function() {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヨ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヨ';
                scanner.scene2.scanStart(2);
            });

            word2.addEventListener("scanselect", function() {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '２';
                speechSynthesis.speak(synthes);
                title.text = title.text + '２';
                scanner.scene2.scanStart(2);
            });

            wordra.addEventListener("scanselect", function() {  // ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ラ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ラ';
                scanner.scene2.scanStart(2);
            });

            wordri.addEventListener("scanselect", function() {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'リ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'リ';
                scanner.scene2.scanStart(2);
            });

            wordru.addEventListener("scanselect", function() {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ル';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ル';
                scanner.scene2.scanStart(2);
            });

            wordre.addEventListener("scanselect", function() {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'レ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'レ';
                scanner.scene2.scanStart(2);
            });

            wordro.addEventListener("scanselect", function() {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ロ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ロ';
                scanner.scene2.scanStart(2);
            });

            wordiie.addEventListener("scanselect", function() {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'いいえ';
                scanner.scene2.scanStart(2);
            });

            word1.addEventListener("scanselect", function() {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '１';
                speechSynthesis.speak(synthes);
                title.text = title.text + '１';
                scanner.scene2.scanStart(2);
            });

            wordhiragana.addEventListener("scanselect", function() {  //ひらがな文字盤
 		wordhiragana.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhiragana.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.popScene(); // ひらがな文字盤へ切り替え
                scanner.scene2.scanStart(2);
            });

            wordwa.addEventListener("scanselect", function() {  // わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ワ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ワ';
                scanner.scene2.scanStart(2);
            });

            wordwo.addEventListener("scanselect", function() {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヲ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヲ';
                scanner.scene2.scanStart(2);
            });

            wordnn.addEventListener("scanselect", function() {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ンン';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ン';
                scanner.scene2.scanStart(2);
            });

            wordhai.addEventListener("scanselect", function() {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'はい';
                scanner.scene2.scanStart(2);
            });

            word0.addEventListener("scanselect", function() {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '０';
                speechSynthesis.speak(synthes);
                title.text = title.text + '０';
                scanner.scene2.scanStart(2);
            });

            wordkesu.addEventListener("scanselect", function() {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひとつ消す';
                speechSynthesis.speak(synthes);
                title.text = title.text.substring(0, title.text.length -1 );
                scanner.scene2.scanStart(2);
            });

            wordzenbukesu.addEventListener("scanselect", function() {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '全部消す';
                speechSynthesis.speak(synthes);
                title.text = '';
                scanner.scene2.scanStart(2);
            });

	//濁音処理部分
            wordgb.addEventListener("scanselect", function() {
 		wordgb.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgb.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgb].clone().play();
                //title.text = title.text + 'daku';
                lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                 if (lastletter == 'カ') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ガ';
                   synthes.text = 'ガ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'キ') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ギ';
                   synthes.text = 'ギ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ク'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'グ';
                   synthes.text = 'グ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ケ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゲ';
                   synthes.text = 'ゲ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'コ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゴ';
                   synthes.text = 'ゴ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'サ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ザ';
                   synthes.text = 'ザ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'シ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ジ';
                   synthes.text = 'ジ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ス'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ズ';
                   synthes.text = 'ズ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'セ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゼ';
                   synthes.text = 'ゼ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ソ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゾ';
                   synthes.text = 'ゾ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'タ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ダ';
                   synthes.text = 'ダ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'チ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ヂ';
                   synthes.text = 'ヂ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ツ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ヅ';
                   synthes.text = 'ヅ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'テ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'デ';
                   synthes.text = 'デ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ト'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ド';
                   synthes.text = 'ド';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ハ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'バ';
                   synthes.text = 'バ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ヒ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ビ';
                   synthes.text = 'ビ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'フ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ブ';
                   synthes.text = 'ブ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ヘ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ベ';
                   synthes.text = 'ベ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ホ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ボ';
                   synthes.text = 'ボ';
                   speechSynthesis.speak(synthes);
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
                scanner.scene2.scanStart(2);
            });

	//半濁音　小文字処理部分
            wordgc.addEventListener("scanselect", function() {
 		wordgc.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgc.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgc].clone().play();
                //title.text = title.text + 'handaku';
                 lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                  if (lastletter == 'ハ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'パ';
                   synthes.text = 'パ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ヒ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ピ';
                   synthes.text = 'ピ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'フ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'プ';
                   synthes.text = 'プ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ヘ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ペ';
                   synthes.text = 'ペ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ホ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ポ';
                   synthes.text = 'ポ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ア'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ァ';
                   synthes.text = 'ア';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'イ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ィ';
                   synthes.text = 'イ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ウ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゥ';
                   synthes.text = 'ウ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'エ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ェ';
                   synthes.text = 'エ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'オ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ォ';
                   synthes.text = 'オ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ヤ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ャ';
                   synthes.text = 'ヤ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ユ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ュ';
                   synthes.text = 'ユ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ヨ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ョ';
                   synthes.text = 'ヨ';
                   speechSynthesis.speak(synthes);
                 } else if (lastletter == 'ツ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ッ';
                   synthes.text = 'ツ';
                   speechSynthesis.speak(synthes);
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
                scanner.scene2.scanStart(2);
            });
/***************************************************************************************************/
/*　#グループの設定　*/
        // グループの作成
        var wordGroupa = scanner.scene2.createScanGroup('a');
        var wordGroupka = scanner.scene2.createScanGroup('ka');
        var wordGroupsa = scanner.scene2.createScanGroup('sa');
        var wordGroupta = scanner.scene2.createScanGroup('ta');
        var wordGroupna = scanner.scene2.createScanGroup('na');
        var wordGroupha = scanner.scene2.createScanGroup('ha');
        var wordGroupma = scanner.scene2.createScanGroup('ma');
        var wordGroupya = scanner.scene2.createScanGroup('ya');
        var wordGroupra = scanner.scene2.createScanGroup('ra');
        var wordGroupwa = scanner.scene2.createScanGroup('wa');
        var wordGroupyn = scanner.scene2.createScanGroup('yn');
        var wordGroupde = scanner.scene2.createScanGroup('de');
        var wordGroup04 = scanner.scene2.createScanGroup('04');
        var wordGroup59 = scanner.scene2.createScanGroup('59');
        var groupana = scanner.scene2.createScanGroup('ana');
        var grouphawa = scanner.scene2.createScanGroup('hawa');
        var groupyn09 = scanner.scene2.createScanGroup('yn09');

        // グループに子要素を割り当てる
        scanner.scene2.setScanGroup(wordGroupa, [worda, wordi, wordu, worde, wordo]);
        scanner.scene2.setScanGroup(wordGroupka, [wordka, wordki, wordku, wordke, wordko]);
        scanner.scene2.setScanGroup(wordGroupsa, [wordsa, wordsi, wordsu, wordse, wordso]);
        scanner.scene2.setScanGroup(wordGroupta, [wordta, wordti, wordtu, wordte, wordto]);
        scanner.scene2.setScanGroup(wordGroupna, [wordna, wordni, wordnu, wordne, wordno]);
        scanner.scene2.setScanGroup(wordGroupha, [wordha, wordhi, wordhu, wordhe, wordho]);
        scanner.scene2.setScanGroup(wordGroupma, [wordma, wordmi, wordmu, wordme, wordmo]);
        scanner.scene2.setScanGroup(wordGroupya, [wordya, wordyu, wordyo]);
        scanner.scene2.setScanGroup(wordGroupra, [wordra, wordri, wordru, wordre, wordro]);
        scanner.scene2.setScanGroup(wordGroupwa, [wordwa, wordwo, wordnn, wordgb, wordgc]);
        scanner.scene2.setScanGroup(wordGroupyn, [wordhiragana, wordhai, wordiie, wordten, wordmaru]);
        scanner.scene2.setScanGroup(wordGroupde, [wordbar, word00, wordtalk, wordzenbukesu, wordkesu]);
        scanner.scene2.setScanGroup(wordGroup04, [word0, word1, word2, word3, word4]);
        scanner.scene2.setScanGroup(wordGroup59, [word5, word6, word7, word8, word9]);

        scanner.scene2.setScanGroup(groupana, [wordGroupa,wordGroupka,wordGroupsa,wordGroupta,wordGroupna]);
        scanner.scene2.setScanGroup(grouphawa, [wordGroupha,wordGroupma,wordGroupya,wordGroupra,wordGroupwa]);
        scanner.scene2.setScanGroup(groupyn09, [wordGroupyn,wordGroupde,wordGroup04,wordGroup59]);


        // グループまたはスプライトをスキャン対象に設定
        scanner.scene2.setScanTargets([groupana,grouphawa,groupyn09]);

/***************************************************************************************************/

        // スキャンの設定
        scanner.scene2.setScanSettingData(scanSetting2);

        // scan開始
        scanner.scene2.scanStart(2);
        //オートスキャンを表示
        scene.addChild(scanner.scene2);

           return scene;
       };

            // ひらがな画面にもどります
            game_.replaceScene(createHiraScene());
 
    }
    game_.start(); // スタート
};
