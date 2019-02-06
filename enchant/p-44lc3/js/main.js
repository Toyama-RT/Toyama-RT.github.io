enchant(); 
// enchant.js を利用したコミュニケーションエイド web speech api text to speech の導入
// 文章ファイルの保存機能の基礎テスト その5　10の文章ファイルを扱う ローカルストレージを使う
// レッツチャット風のタッチ版　2019/01/11


enchant.Sound.enabledInMobileSafari = true;

if(location.protocol == 'file:'){
    enchant.ENV.USE_WEBAUDIO = false;
    console.log('1');
}

//文書ファイル保存機能
  //local storage 関係宣言
   var SERVICE_NAME0 = 'SERVICE_NAME0';
   var storage0;
   var SERVICE_NAME1 = 'SERVICE_NAME1';
   var storage1 = null;
   var SERVICE_NAME2 = 'SERVICE_NAME2';
   var storage2 = null;
   var SERVICE_NAME3 = 'SERVICE_NAME3';
   var storage3 = null;
   var SERVICE_NAME4 = 'SERVICE_NAME4';
   var storage4 = null;
   var SERVICE_NAME5 = 'SERVICE_NAME5';
   var storage5 = null;
   var SERVICE_NAME6 = 'SERVICE_NAME6';
   var storage6 = null;
   var SERVICE_NAME7 = 'SERVICE_NAME7';
   var storage7 = null;
   var SERVICE_NAME8 = 'SERVICE_NAME8';
   var storage8 = null;
   var SERVICE_NAME9 = 'SERVICE_NAME9';
   var storage9 = null;
   var SERVICE_NAME10 = 'SERVICE_NAME10';
   var storage10 = null;

window.onload = function() {
  //開始時　local storage  から読み込み
        storage0 = localStorage.getItem('SERVICE_NAME0');

            if (storage0 == 1 ){  //初回起動時にstrage0=nullとなるのを1にして不具合を回避している
               storage0 =  1;
            } else if (storage0 == 2 ) {
               storage0 =  2;
            } else if (storage0 == 3 ) {
               storage0 =  3;
            } else if (storage0 == 4 ) {
               storage0 =  4;
            } else if (storage0 == 5 ) {
               storage0 =  5;
            } else if (storage0 == 6 ) {
               storage0 =  6;
            } else if (storage0 == 7 ) {
               storage0 =  7;
            } else if (storage0 == 8 ) {
               storage0 =  8;
            } else if (storage0 == 9 ) {
               storage0 =  9;
            } else if (storage0 == 10 ) {
               storage0 =  10;
            } else {
               storage0 =  1;
            }


    try {
        storage1 = JSON.parse(localStorage[SERVICE_NAME1] || '');
    } catch(e) {
        storage1 = '';
    }
    try {
        storage2 = JSON.parse(localStorage[SERVICE_NAME2] || '');
    } catch(e) {
        storage2 = '';
    }
    try {
        storage3 = JSON.parse(localStorage[SERVICE_NAME3] || '');
    } catch(e) {
        storage3 = '';
    }
    try {
        storage4 = JSON.parse(localStorage[SERVICE_NAME4] || '');
    } catch(e) {
        storage4 = '';
    }
    try {
        storage5 = JSON.parse(localStorage[SERVICE_NAME5] || '');
    } catch(e) {
        storage5 = '';
    }
    try {
        storage6 = JSON.parse(localStorage[SERVICE_NAME6] || '');
    } catch(e) {
        storage6 = '';
    }
    try {
        storage7 = JSON.parse(localStorage[SERVICE_NAME7] || '');
    } catch(e) {
        storage7 = '';
    }
    try {
        storage8 = JSON.parse(localStorage[SERVICE_NAME8] || '');
    } catch(e) {
        storage8 = '';
    }
    try {
        storage9 = JSON.parse(localStorage[SERVICE_NAME9] || '');
    } catch(e) {
        storage9 = '';
    }
    try {
        storage10 = JSON.parse(localStorage[SERVICE_NAME10] || '');
    } catch(e) {
        storage10 = '';
    }

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


  //終了時　local storage  へ保存
   window.onbeforeunload = function() {
            if (storage0 == 1 ){
               storage1 = title.text;
            } else if (storage0 == 2 ) {
               storage2 = title.text;
            } else if (storage0 == 3 ) {
               storage3 = title.text;
            } else if (storage0 == 4 ) {
               storage4 = title.text;
            } else if (storage0 == 5 ) {
               storage5 = title.text;
            } else if (storage0 == 6 ) {
               storage6 = title.text;
            } else if (storage0 == 7 ) {
               storage7 = title.text;
            } else if (storage0 == 8 ) {
               storage8 = title.text;
            } else if (storage0 == 9 ) {
               storage9 = title.text;
            } else if (storage0 == 10 ) {
               storage10 = title.text;
            } else {
               //storage1 = title.text;
            }

       localStorage.setItem('SERVICE_NAME0', storage0 );

       localStorage[SERVICE_NAME1] = JSON.stringify(storage1);
       localStorage[SERVICE_NAME2] = JSON.stringify(storage2);
       localStorage[SERVICE_NAME3] = JSON.stringify(storage3);
       localStorage[SERVICE_NAME4] = JSON.stringify(storage4);
       localStorage[SERVICE_NAME5] = JSON.stringify(storage5);
       localStorage[SERVICE_NAME6] = JSON.stringify(storage6);
       localStorage[SERVICE_NAME7] = JSON.stringify(storage7);
       localStorage[SERVICE_NAME8] = JSON.stringify(storage8);
       localStorage[SERVICE_NAME9] = JSON.stringify(storage9);
       localStorage[SERVICE_NAME10] = JSON.stringify(storage10);
   }



//各種設定部分
  //表示関係設定
    var game_ = new Game(window.innerWidth  , window.innerHeight  );
    var wiw = window.innerWidth;
    var wih = window.innerHeight;
    var scx = wiw * 1.6 / 1280;// 文字キー幅の係数
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
		title.font = '60px sans-serif';            // 60pxのゴシック体にする
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30pxのゴシック体にする
		} else {
		title.font = '35px sans-serif';            // 35pxのゴシック体にする
		}
            title.textAlign = 'left';           // 左揃え
            title.width = wiw * 0.8;            // 自動改行の指定
            title.x = wiw * 0.1;                // 横位置調整
            title.y = wih * 0.05;               // 縦位置調整


  //文書番号表示設定
            var titleb = new Label('');         //文書番号ラベルの設定
            titleb.color = '#000000';            // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォントを大きさを変更する
		titleb.font = '60px sans-serif';            // 60pxのゴシック体にする
		} else if (window.innerWidth < 500){
		titleb.font = '30px sans-serif';            // 30pxのゴシック体にする
		} else {
		titleb.font = '35px sans-serif';            // 35pxのゴシック体にする
		}
            titleb.x = wiw * 0.9;                // 横位置調整
            titleb.y = wih * 0.9;               // 縦位置調整

            //if (storage0 == ''){
                //storage0 = 1 ;
            //}

            if (storage0 == 1 ){
               title.text = storage1;
            } else if (storage0 == 2 ){
               title.text = storage2;
            } else if (storage0 == 3 ){
               title.text = storage3;
            } else if (storage0 == 4 ){
               title.text = storage4;
            } else if (storage0 == 5 ){
               title.text = storage5;
            } else if (storage0 == 6 ){
               title.text = storage6;
            } else if (storage0 == 7 ){
               title.text = storage7;
            } else if (storage0 == 8 ){
               title.text = storage8;
            } else if (storage0 == 9 ){
               title.text = storage9;
            } else if (storage0 == 10 ){
               title.text = storage10;
            }

               //storage0 = 1 ;
 
            titleb.text = storage0;
            //titleb.text = 'abc';


  //表示フレーム設定
    game_.fps = 10; // frames per second: 進行スピード設定　大きくするとcpu負荷、バッテリ消費大　注意

  //web speech api tts 音声の設定と起動時の音声発声
            var synthes = new SpeechSynthesisUtterance();
               synthes.voiceURI = 'Google 日本人';//'native';
               synthes.volume = 1;
               synthes.rate = 0.9;// ややゆっくり　一文字の発話はっきりする
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
      var imgbun = './img/bun.png';

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
      var sndse3 = './snd/se3.mp3';
      var snda = './snd/a.mp3';
      var sndi = './snd/i.mp3';
      var sndu = './snd/u.mp3';
      var snde = './snd/e.mp3';
      var sndo = './snd/o.mp3';
      var sndka = './snd/ka.mp3';
      var sndki = './snd/ki.mp3';
      var sndku = './snd/ku.mp3';
      var sndke = './snd/ke.mp3';
      var sndko = './snd/ko.mp3';
      var sndsa = './snd/sa.mp3';
      var sndsi = './snd/si.mp3';
      var sndsu = './snd/su.mp3';
      var sndse = './snd/se.mp3';
      var sndso = './snd/so.mp3';
      var sndta = './snd/ta.mp3';
      var sndti = './snd/ti.mp3';
      var sndtu = './snd/tu.mp3';
      var sndte = './snd/te.mp3';
      var sndto = './snd/to.mp3';
      var sndna = './snd/na.mp3';
      var sndni = './snd/ni.mp3';
      var sndnu = './snd/nu.mp3';
      var sndne = './snd/ne.mp3';
      var sndno = './snd/no.mp3';
      var sndha = './snd/ha.mp3';
      var sndhi = './snd/hi.mp3';
      var sndhu = './snd/hu.mp3';
      var sndhe = './snd/he.mp3';
      var sndho = './snd/ho.mp3';
      var sndma = './snd/ma.mp3';
      var sndmi = './snd/mi.mp3';
      var sndmu = './snd/mu.mp3';
      var sndme = './snd/me.mp3';
      var sndmo = './snd/mo.mp3';
      var sndya = './snd/ya.mp3';
      var sndyu = './snd/yu.mp3';
      var sndyo = './snd/yo.mp3';
      var sndra = './snd/ra.mp3';
      var sndri = './snd/ri.mp3';
      var sndru = './snd/ru.mp3';
      var sndre = './snd/re.mp3';
      var sndro = './snd/ro.mp3';
      var sndwa = './snd/wa.mp3';
      var sndwo = './snd/wo.mp3';
      var sndnn = './snd/nn.mp3';
      var sndgb = './snd/gb.mp3';
      var sndgc = './snd/gc.mp3';
      var sndga = './snd/ga.mp3';
      var sndgi = './snd/gi.mp3';
      var sndgu = './snd/gu.mp3';
      var sndge = './snd/ge.mp3';
      var sndgo = './snd/go.mp3';
      var sndza = './snd/za.mp3';
      var sndzi = './snd/zi.mp3';
      var sndzu = './snd/zu.mp3';
      var sndze = './snd/ze.mp3';
      var sndzo = './snd/zo.mp3';
      var sndda = './snd/da.mp3';
      var snddi = './snd/di.mp3';
      var snddu = './snd/du.mp3';
      var sndde = './snd/de.mp3';
      var snddo = './snd/do.mp3';
      var sndba = './snd/ba.mp3';
      var sndbi = './snd/bi.mp3';
      var sndbu = './snd/bu.mp3';
      var sndbe = './snd/be.mp3';
      var sndbo = './snd/bo.mp3';
      var sndpa = './snd/pa.mp3';
      var sndpi = './snd/pi.mp3';
      var sndpu = './snd/pu.mp3';
      var sndpe = './snd/pe.mp3';
      var sndpo = './snd/po.mp3';
      var sndbar = './snd/nobasu.mp3';
      var sndten = './snd/ten.mp3';
      var sndmaru = './snd/maru.mp3';
      var snd00 = './snd/space.mp3';
      var sndkesu = './snd/kesu.mp3';
      var sndzenbukesu = './snd/zenbukesu.mp3';
      var sndbuz = './snd/incorrect2.mp3';
      var sndhai = './snd/hai.mp3';
      var sndiie = './snd/iie.mp3';
      var snd0 = './snd/0.mp3';
      var snd1 = './snd/1.mp3';
      var snd2 = './snd/2.mp3';
      var snd3 = './snd/3.mp3';
      var snd4 = './snd/4.mp3';
      var snd5 = './snd/5.mp3';
      var snd6 = './snd/6.mp3';
      var snd7 = './snd/7.mp3';
      var snd8 = './snd/8.mp3';
      var snd9 = './snd/9.mp3';

      var sndend = './snd/gameover.mp3';


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
          imgbun,

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
          sndse3,
          snda,
          sndi,
          sndu,
          snde,
          sndo,
          sndka,
          sndki,
          sndku,
          sndke,
          sndko,
          sndsa,
          sndsi,
          sndsu,
          sndse,
          sndso,
          sndta,
          sndti,
          sndtu,
          sndte,
          sndto,
          sndna,
          sndni,
          sndnu,
          sndne,
          sndno,
          sndha,
          sndhi,
          sndhu,
          sndhe,
          sndho,
          sndma,
          sndmi,
          sndmu,
          sndme,
          sndmo,
          sndya,
          sndyu,
          sndyo,
          sndra,
          sndri,
          sndru,
          sndre,
          sndro,
          sndwa,
          sndwo,
          sndnn,
          sndend,
          sndgb,
          sndgc,
          sndga,
          sndgi,
          sndgu,
          sndge,
          sndgo,
          sndza,
          sndzi,
          sndzu,
          sndze,
          sndzo,
          sndda,
          snddi,
          snddu,
          sndde,
          snddo,
          sndba,
          sndbi,
          sndbu,
          sndbe,
          sndbo,
          sndpa,
          sndpi,
          sndpu,
          sndpe,
          sndpo,
          sndbar,
          sndten,
          sndmaru,
          snd00,
          sndkesu,
          sndzenbukesu,
          sndbuz,
          sndhai,
          sndiie,
          snd0,
          snd1,
          snd2,
          snd3,
          snd4,
          snd5,
          snd6,
          snd7,
          snd8,
          snd9,

          ];

    game_.preload(ASSETS);//読み込み部分

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
        var wordbun = new Sprite(50,50);
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
        wordbun.image = game_.assets[imgbun];
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
      //表示位置とスケールの設定
        // 第一列
	wordtalk.x = wiw * 0.07;
        wordtalk.y = wih * 0.5;
	wordtalk.scaleX = scx;
	wordtalk.scaleY = scy;
	wordbun.x = wiw * 0.07; // 文きりかえ
        wordbun.y = wih * 0.6;
	wordbun.scaleX = scx;
	wordbun.scaleY = scy;
	wordhai.x = wiw * 0.07;
        wordhai.y = wih * 0.7;
	wordhai.scaleX = scx;
	wordhai.scaleY = scy;
	wordten.x = wiw * 0.07;
        wordten.y = wih * 0.8;
	wordten.scaleX = scx;
	wordten.scaleY = scy;
	wordzenbukesu.x = wiw * 0.07;
        wordzenbukesu.y = wih * 0.9;
	wordzenbukesu.scaleX = scx;
	wordzenbukesu.scaleY = scy;
        // 第二列
	word00.x = wiw * 0.13;
        word00.y = wih * 0.5;
	word00.scaleX = scx;
	word00.scaleY = scy;
	wordkatakana.x = wiw * 0.13; // カタカナの入り口
        wordkatakana.y = wih * 0.6;
	wordkatakana.scaleX = scx;
	wordkatakana.scaleY = scy;

	wordiie.x = wiw * 0.13;
        wordiie.y = wih * 0.7;
	wordiie.scaleX = scx;
	wordiie.scaleY = scy;
	wordmaru.x = wiw * 0.13;
        wordmaru.y = wih * 0.8;
	wordmaru.scaleX = scx;
	wordmaru.scaleY = scy;
	wordkesu.x = wiw * 0.13;
        wordkesu.y = wih * 0.9;
	wordkesu.scaleX = scx;
	wordkesu.scaleY = scy;
        // 第三列
	word1.x = wiw * 0.19;
        word1.y = wih * 0.5;
	word1.scaleX = scx;
	word1.scaleY = scy;
	word2.x = wiw * 0.19;
        word2.y = wih * 0.6;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x = wiw * 0.19;
        word3.y = wih * 0.7;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x = wiw * 0.19;
        word4.y = wih * 0.8;
	word4.scaleX = scx;
	word4.scaleY = scy;
	word5.x = wiw * 0.19;
        word5.y = wih * 0.9;
	word5.scaleX = scx;
	word5.scaleY = scy;
        // 第四列
	word6.x = wiw * 0.25;
        word6.y = wih * 0.5;
	word6.scaleX = scx;
	word6.scaleY = scy;
	word7.x = wiw * 0.25;
        word7.y = wih * 0.6;
	word7.scaleX = scx;
	word7.scaleY = scy;
	word8.x = wiw * 0.25;
        word8.y = wih * 0.7;
	word8.scaleX = scx;
	word8.scaleY = scy;
	word9.x = wiw * 0.25;
        word9.y = wih * 0.8;
	word9.scaleX = scx;
	word9.scaleY = scy;
	word0.x = wiw * 0.25;
        word0.y = wih * 0.9;
	word0.scaleX = scx;
	word0.scaleY = scy;
        // あ列
	worda.x = wiw * 0.32;
        worda.y = wih * 0.5;
	worda.scaleX = scx;
	worda.scaleY = scy;
	wordi.x = wiw * 0.32;
        wordi.y = wih * 0.6;
	wordi.scaleX = scx;
	wordi.scaleY = scy;
	wordu.x = wiw * 0.32;
        wordu.y = wih * 0.7;
	wordu.scaleX = scx;
	wordu.scaleY = scy;
	worde.x = wiw * 0.32;
        worde.y = wih * 0.8;
        worde.scaleX = scx;
	worde.scaleY = scy;
	wordo.x = wiw * 0.32;
        wordo.y = wih * 0.9;
	wordo.scaleX = scx;
	wordo.scaleY = scy;
        // か列
	wordka.x = wiw * 0.38;
        wordka.y = wih * 0.5;
	wordka.scaleX = scx;
	wordka.scaleY = scy;
	wordki.x = wiw * 0.38;
        wordki.y = wih * 0.6;
	wordki.scaleX = scx;
	wordki.scaleY = scy;
	wordku.x = wiw * 0.38;
        wordku.y = wih * 0.7;
	wordku.scaleX = scx;
	wordku.scaleY = scy;
	wordke.x = wiw * 0.38;
        wordke.y = wih * 0.8;
        wordke.scaleX = scx;
	wordke.scaleY = scy;
	wordko.x = wiw * 0.38;
        wordko.y = wih * 0.9;
	wordko.scaleX = scx;
	wordko.scaleY = scy;
        // さ列
	wordsa.x = wiw * 0.44;
        wordsa.y = wih * 0.5;
	wordsa.scaleX = scx;
	wordsa.scaleY = scy;
	wordsi.x = wiw * 0.44;
        wordsi.y = wih * 0.6;
	wordsi.scaleX = scx;
	wordsi.scaleY = scy;
	wordsu.x = wiw * 0.44;
        wordsu.y = wih * 0.7;
	wordsu.scaleX = scx;
	wordsu.scaleY = scy;
	wordse.x = wiw * 0.44;
        wordse.y = wih * 0.8;
        wordse.scaleX = scx;
	wordse.scaleY = scy;
	wordso.x = wiw * 0.44;
        wordso.y = wih * 0.9;
	wordso.scaleX = scx;
	wordso.scaleY = scy;
        // た列
	wordta.x = wiw * 0.50;
        wordta.y = wih * 0.5;
	wordta.scaleX = scx;
	wordta.scaleY = scy;
	wordti.x = wiw * 0.50;
        wordti.y = wih * 0.6;
	wordti.scaleX = scx;
	wordti.scaleY = scy;
	wordtu.x = wiw * 0.50;
        wordtu.y = wih * 0.7;
	wordtu.scaleX = scx;
	wordtu.scaleY = scy;
	wordte.x = wiw * 0.50;
        wordte.y = wih * 0.8;
        wordte.scaleX = scx;
	wordte.scaleY = scy;
	wordto.x = wiw * 0.50;
        wordto.y = wih * 0.9;
	wordto.scaleX = scx;
	wordto.scaleY = scy;
        // な列
	wordna.x = wiw * 0.56;
        wordna.y = wih * 0.5;
	wordna.scaleX = scx;
	wordna.scaleY = scy;
	wordni.x = wiw * 0.56;
        wordni.y = wih * 0.6;
	wordni.scaleX = scx;
	wordni.scaleY = scy;
	wordnu.x = wiw * 0.56;
        wordnu.y = wih * 0.7;
	wordnu.scaleX = scx;
	wordnu.scaleY = scy;
	wordne.x = wiw * 0.56;
        wordne.y = wih * 0.8;
        wordne.scaleX = scx;
	wordne.scaleY = scy;
	wordno.x = wiw * 0.56;
        wordno.y = wih * 0.9;
	wordno.scaleX = scx;
	wordno.scaleY = scy;
        // は列
	wordha.x = wiw * 0.63;
        wordha.y = wih * 0.5;
	wordha.scaleX = scx;
	wordha.scaleY = scy;
	wordhi.x = wiw * 0.63;
        wordhi.y = wih * 0.6;
	wordhi.scaleX = scx;
	wordhi.scaleY = scy;
	wordhu.x = wiw * 0.63;
        wordhu.y = wih * 0.7;
	wordhu.scaleX = scx;
	wordhu.scaleY = scy;
	wordhe.x = wiw * 0.63;
        wordhe.y = wih * 0.8;
        wordhe.scaleX = scx;
	wordhe.scaleY = scy;
	wordho.x = wiw * 0.63;
        wordho.y = wih * 0.9;
	wordho.scaleX = scx;
	wordho.scaleY = scy;
        // ま列
	wordma.x = wiw * 0.69;
        wordma.y = wih * 0.5;
	wordma.scaleX = scx;
	wordma.scaleY = scy;
	wordmi.x = wiw * 0.69;
        wordmi.y = wih * 0.6;
	wordmi.scaleX = scx;
	wordmi.scaleY = scy;
	wordmu.x = wiw * 0.69;
        wordmu.y = wih * 0.7;
	wordmu.scaleX = scx;
	wordmu.scaleY = scy;
	wordme.x = wiw * 0.69;
        wordme.y = wih * 0.8;
        wordme.scaleX = scx;
	wordme.scaleY = scy;
	wordmo.x = wiw * 0.69;
        wordmo.y = wih * 0.9;
	wordmo.scaleX = scx;
	wordmo.scaleY = scy;
        // や列
	wordya.x = wiw * 0.75;
        wordya.y = wih * 0.5;
	wordya.scaleX = scx;
	wordya.scaleY = scy;
	wordyu.x = wiw * 0.75;
        wordyu.y = wih * 0.6;
	wordyu.scaleX = scx;
	wordyu.scaleY = scy;
	wordyo.x = wiw * 0.75;
        wordyo.y = wih * 0.7;
	wordyo.scaleX = scx;
	wordyo.scaleY = scy;
	wordgb.x = wiw * 0.75;
        wordgb.y = wih * 0.8;
	wordgb.scaleX = scx;
	wordgb.scaleY = scy;
	wordgc.x = wiw * 0.75;
        wordgc.y = wih * 0.9;
	wordgc.scaleX = scx;
	wordgc.scaleY = scy;
        // ら列
	wordra.x = wiw * 0.81;
        wordra.y = wih * 0.5;
	wordra.scaleX = scx;
	wordra.scaleY = scy;
	wordri.x = wiw * 0.81;
        wordri.y = wih * 0.6;
	wordri.scaleX = scx;
	wordri.scaleY = scy;
	wordru.x = wiw * 0.81;
        wordru.y = wih * 0.7;
	wordru.scaleX = scx;
	wordru.scaleY = scy;
	wordre.x = wiw * 0.81;
        wordre.y = wih * 0.8;
        wordre.scaleX = scx;
	wordre.scaleY = scy;
	wordro.x = wiw * 0.81;
        wordro.y = wih * 0.9;
	wordro.scaleX = scx;
	wordro.scaleY = scy;
        // わ列
	wordwa.x = wiw * 0.87;
        wordwa.y = wih * 0.5;
	wordwa.scaleX = scx;
	wordwa.scaleY = scy;
	wordwo.x = wiw * 0.87;
        wordwo.y = wih * 0.6;
	wordwo.scaleX = scx;
	wordwo.scaleY = scy;
	wordnn.x = wiw * 0.87;
        wordnn.y = wih * 0.7;
	wordnn.scaleX = scx;
	wordnn.scaleY = scy;
	wordbar.x = wiw * 0.87;
        wordbar.y = wih * 0.8;
	wordbar.scaleX = scx;
	wordbar.scaleY = scy;

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
        //scene.addChild(wordtalk);
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
        scene.addChild(wordbun); // 文きりかえ
        scene.addChild(wordwa); // わ行
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordgb);
        scene.addChild(wordgc);
        scene.addChild(wordhai);
        scene.addChild(word0);

	scene.addEventListener(Event.ENTER, function(e) {
	scene.addChild(title);                     // シーンが開いたら文字列を表示する  
	scene.addChild(titleb);                     // 文書番号を表示する  

	}); 

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定



             // 文字にタッチイベントを設定する
            worda.addEventListener(Event.TOUCH_START, function(e) {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'あ';
                //speechSynthesis.speak(synthes);
                game_.assets[snda].clone().play(); //言葉を発声する
                title.text = title.text + 'あ';    //文字を追加する

         //var title1 = new Label('');//テスト用 文字列の文字数を検出し表示する
            //title1.x = 0;
            //title1.y = 10;
            //scene.addChild(title1);
            //title1.text = title.text.length -1;//文字数を表示する
            //title1.text = title.text.charAt(title.text.length -1);//最後の文字を表示する
            });

            wordi.addEventListener(Event.TOUCH_START, function(e) {
 		wordi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'い';
                //speechSynthesis.speak(synthes);
                game_.assets[sndi].clone().play();
                title.text = title.text + 'い';
            });

            wordu.addEventListener(Event.TOUCH_START, function(e) {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'う';
                //speechSynthesis.speak(synthes);
                game_.assets[sndu].clone().play();
                title.text = title.text + 'う';
            });

            worde.addEventListener(Event.TOUCH_START, function(e) {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'え';
                //speechSynthesis.speak(synthes);
                game_.assets[snde].clone().play();
                title.text = title.text + 'え';
            });

            wordo.addEventListener(Event.TOUCH_START, function(e) {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'お';
                //speechSynthesis.speak(synthes);
                game_.assets[sndo].clone().play();
                title.text = title.text + 'お';
            });

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '９';
                //speechSynthesis.speak(synthes);
                game_.assets[snd9].clone().play();
                title.text = title.text + '９';
            });

            wordka.addEventListener(Event.TOUCH_START, function(e) {  // か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'か';
                //speechSynthesis.speak(synthes);
                game_.assets[sndka].clone().play();
                title.text = title.text + 'か';
            });

            wordki.addEventListener(Event.TOUCH_START, function(e) {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'き';
                //speechSynthesis.speak(synthes);
                game_.assets[sndki].clone().play();
                title.text = title.text + 'き';
            });

            wordku.addEventListener(Event.TOUCH_START, function(e) {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'く';
                //speechSynthesis.speak(synthes);
                game_.assets[sndku].clone().play();
                title.text = title.text + 'く';
            });

            wordke.addEventListener(Event.TOUCH_START, function(e) {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'け';
                //speechSynthesis.speak(synthes);
                game_.assets[sndke].clone().play();
                title.text = title.text + 'け';
            });

            wordko.addEventListener(Event.TOUCH_START, function(e) {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'こ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndko].clone().play();
                title.text = title.text + 'こ';
            });

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '８';
                //speechSynthesis.speak(synthes);
                game_.assets[snd8].clone().play();
                title.text = title.text + '８';
            });

            wordsa.addEventListener(Event.TOUCH_START, function(e) {  // さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'さ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndsa].clone().play();
                title.text = title.text + 'さ';
            });

            wordsi.addEventListener(Event.TOUCH_START, function(e) {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'し';
                //speechSynthesis.speak(synthes);
                game_.assets[sndsi].clone().play();
                title.text = title.text + 'し';
            });

            wordsu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'す';
                //speechSynthesis.speak(synthes);
                game_.assets[sndsu].clone().play();
                title.text = title.text + 'す';
            });

            wordse.addEventListener(Event.TOUCH_START, function(e) {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'せ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndse].clone().play();
                title.text = title.text + 'せ';
            });

            wordso.addEventListener(Event.TOUCH_START, function(e) {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'そ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndso].clone().play();
                title.text = title.text + 'そ';
            });

/*            wordtalk.addEventListener(Event.TOUCH_START, function(e) {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
            });
*/
            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '７';
                //speechSynthesis.speak(synthes);
                game_.assets[snd7].clone().play();
                title.text = title.text + '７';
            });

            wordta.addEventListener(Event.TOUCH_START, function(e) {  // た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'た';
                //speechSynthesis.speak(synthes);
                game_.assets[sndta].clone().play();
                title.text = title.text + 'た';
            });

            wordti.addEventListener(Event.TOUCH_START, function(e) {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ち';
                //speechSynthesis.speak(synthes);
                game_.assets[sndti].clone().play();
                title.text = title.text + 'ち';
            });

            wordtu.addEventListener(Event.TOUCH_START, function(e) {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'つ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndtu].clone().play();
                title.text = title.text + 'つ';
            });

            wordte.addEventListener(Event.TOUCH_START, function(e) {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'て';
                //speechSynthesis.speak(synthes);
                game_.assets[sndte].clone().play();
                title.text = title.text + 'て';
            });

            wordto.addEventListener(Event.TOUCH_START, function(e) {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'と';
                //speechSynthesis.speak(synthes);
                game_.assets[sndto].clone().play();
                title.text = title.text + 'と';
            });

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '空白';
                //speechSynthesis.speak(synthes);
                game_.assets[snd00].clone().play();
                title.text = title.text + '　';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '６';
                //speechSynthesis.speak(synthes);
                game_.assets[snd6].clone().play();
                title.text = title.text + '６';
            });

            wordna.addEventListener(Event.TOUCH_START, function(e) {  // な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'な';
                //speechSynthesis.speak(synthes);
                game_.assets[sndna].clone().play();
                title.text = title.text + 'な';
            });

            wordni.addEventListener(Event.TOUCH_START, function(e) {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'に';
                //speechSynthesis.speak(synthes);
                game_.assets[sndni].clone().play();
                title.text = title.text + 'に';
            });

            wordnu.addEventListener(Event.TOUCH_START, function(e) {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ぬ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndnu].clone().play();
                title.text = title.text + 'ぬ';
            });

            wordne.addEventListener(Event.TOUCH_START, function(e) {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ね';
                //speechSynthesis.speak(synthes);
                game_.assets[sndne].clone().play();
                title.text = title.text + 'ね';
            });

            wordno.addEventListener(Event.TOUCH_START, function(e) {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'の';
                //speechSynthesis.speak(synthes);
                game_.assets[sndno].clone().play();
                title.text = title.text + 'の';
            });

            wordbar.addEventListener(Event.TOUCH_START, function(e) {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'のばす';
                //speechSynthesis.speak(synthes);
                game_.assets[sndbar].clone().play();
                title.text = title.text + 'ー';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '５';
                //speechSynthesis.speak(synthes);
                game_.assets[snd5].clone().play();
                title.text = title.text + '５';
            });

            wordha.addEventListener(Event.TOUCH_START, function(e) {  // は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'は';
                //speechSynthesis.speak(synthes);
                game_.assets[sndha].clone().play();
                title.text = title.text + 'は';
            });

            wordhi.addEventListener(Event.TOUCH_START, function(e) {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ひ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhi].clone().play();
                title.text = title.text + 'ひ';
            });

            wordhu.addEventListener(Event.TOUCH_START, function(e) {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ふ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhu].clone().play();
                title.text = title.text + 'ふ';
            });

            wordhe.addEventListener(Event.TOUCH_START, function(e) {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'へ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhe].clone().play();
                title.text = title.text + 'へ';
            });

            wordho.addEventListener(Event.TOUCH_START, function(e) {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ほ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndho].clone().play();
                title.text = title.text + 'ほ';
            });

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'まる';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmaru].clone().play();
                title.text = title.text + '。';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '４';
                //speechSynthesis.speak(synthes);
                game_.assets[snd4].clone().play();
                title.text = title.text + '４';
            });

            wordma.addEventListener(Event.TOUCH_START, function(e) {  // ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ま';
                //speechSynthesis.speak(synthes);
                game_.assets[sndma].clone().play();
                title.text = title.text + 'ま';
            });

            wordmi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'み';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmi].clone().play();
                title.text = title.text + 'み';
            });

            wordmu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'む';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmu].clone().play();
                title.text = title.text + 'む';
            });

            wordme.addEventListener(Event.TOUCH_START, function(e) {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'め';
                //speechSynthesis.speak(synthes);
                game_.assets[sndme].clone().play();
                title.text = title.text + 'め';
            });

            wordmo.addEventListener(Event.TOUCH_START, function(e) {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'も';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmo].clone().play();
                title.text = title.text + 'も';
            });

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'てん';
                //speechSynthesis.speak(synthes);
                game_.assets[sndten].clone().play();
                title.text = title.text + '、';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '３';
                //speechSynthesis.speak(synthes);
                game_.assets[snd3].clone().play();
                title.text = title.text + '３';
            });

            wordya.addEventListener(Event.TOUCH_START, function(e) {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'や';
                //speechSynthesis.speak(synthes);
                game_.assets[sndya].clone().play();
                title.text = title.text + 'や';
            });

            wordyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ゆ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndyu].clone().play();
                title.text = title.text + 'ゆ';
            });

            wordyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'よ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndyo].clone().play();
                title.text = title.text + 'よ';
            });

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '２';
                //speechSynthesis.speak(synthes);
                game_.assets[snd2].clone().play();
                title.text = title.text + '２';
            });

            wordra.addEventListener(Event.TOUCH_START, function(e) {  // ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ら';
                //speechSynthesis.speak(synthes);
                game_.assets[sndra].clone().play();
                title.text = title.text + 'ら';
            });

            wordri.addEventListener(Event.TOUCH_START, function(e) {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'り';
                //speechSynthesis.speak(synthes);
                game_.assets[sndri].clone().play();
                title.text = title.text + 'り';
            });

            wordru.addEventListener(Event.TOUCH_START, function(e) {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'る';
                //speechSynthesis.speak(synthes);
                game_.assets[sndru].clone().play();
               title.text = title.text + 'る';
            });

            wordre.addEventListener(Event.TOUCH_START, function(e) {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'れ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndre].clone().play();
                title.text = title.text + 'れ';
            });

            wordro.addEventListener(Event.TOUCH_START, function(e) {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ろ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndro].clone().play();
                title.text = title.text + 'ろ';
            });

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'いいえ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndiie].clone().play();
                //title.text = title.text + 'いいえ';
            });

            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '１';
                //speechSynthesis.speak(synthes);
                game_.assets[snd1].clone().play();
                title.text = title.text + '１';
            });

            wordbun.addEventListener(Event.TOUCH_START, function(e) {  //文いれかえ
 		wordbun.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbun.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse3].clone().play();

            if (storage0 == 1 ){
               storage1 = title.text;
               title.text = storage2;
               storage0 = 2;
            } else if (storage0 == 2 ){
               storage2 = title.text;
               title.text = storage3;
               storage0 = 3;
            } else if (storage0 == 3 ){
               storage3 = title.text;
               title.text = storage4;
               storage0 = 4;
            } else if (storage0 == 4 ){
               storage4 = title.text;
               title.text = storage5;
               storage0 = 5;
            } else if (storage0 == 5 ){
               storage5 = title.text;
               title.text = storage6;
               storage0 = 6;
            } else if (storage0 == 6 ){
               storage6 = title.text;
               title.text = storage7;
               storage0 = 7;
            } else if (storage0 == 7 ){
               storage7 = title.text;
               title.text = storage8;
               storage0 = 8;
            } else if (storage0 == 8 ){
               storage8 = title.text;
               title.text = storage9;
               storage0 = 9;
            } else if (storage0 == 9 ){
               storage9 = title.text;
               title.text = storage10;
               storage0 = 10;
            } else if (storage0 == 10 ){
               storage10 = title.text;
               title.text = storage1;
               storage0 = 1;
            }
               titleb.text = storage0;
            });

            wordkatakana.addEventListener(Event.TOUCH_START, function(e) {  //カタカナ文字盤
 		wordkatakana.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkatakana.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.pushScene(createKataScene()); // カタカナ文字盤へ切り替え
            });

            wordwa.addEventListener(Event.TOUCH_START, function(e) {  // わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'わ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndwa].clone().play();
                title.text = title.text + 'わ';
            });

            wordwo.addEventListener(Event.TOUCH_START, function(e) {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'を';
                //speechSynthesis.speak(synthes);
                game_.assets[sndwo].clone().play();
                title.text = title.text + 'を';
            });

            wordnn.addEventListener(Event.TOUCH_START, function(e) {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'んん';
                //speechSynthesis.speak(synthes);
                game_.assets[sndnn].clone().play();
                title.text = title.text + 'ん';
            });

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'はい';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhai].clone().play();
                //title.text = title.text + 'はい';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '０';
                //speechSynthesis.speak(synthes);
                game_.assets[snd0].clone().play();
                title.text = title.text + '０';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ひとつ消す';
                //speechSynthesis.speak(synthes);
                game_.assets[sndkesu].clone().play();
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '全部消す';
                //speechSynthesis.speak(synthes);
                game_.assets[sndzenbukesu].clone().play();
                title.text = '';
            });

	//濁音処理部分
            wordgb.addEventListener(Event.TOUCH_START, function(e) {
 		wordgb.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgb.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgb].clone().play();
                //title.text = title.text + 'daku';
                lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                 if (lastletter == 'か') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'が';
                   //synthes.text = 'が';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndga].clone().play();
                 } else if (lastletter == 'き') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぎ';
                   //synthes.text = 'ぎ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndgi].clone().play();
                 } else if (lastletter == 'く'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぐ';
                   //synthes.text = 'ぐ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndgu].clone().play();
                 } else if (lastletter == 'け'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'げ';
                   //synthes.text = 'げ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndge].clone().play();
                 } else if (lastletter == 'こ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ご';
                   //synthes.text = 'ご';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndgo].clone().play();
                 } else if (lastletter == 'さ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ざ';
                   //synthes.text = 'ざ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndza].clone().play();
                 } else if (lastletter == 'し'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'じ';
                   //synthes.text = 'じ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndzi].clone().play();
                 } else if (lastletter == 'す'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ず';
                   //synthes.text = 'ず';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndzu].clone().play();
                 } else if (lastletter == 'せ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぜ';
                   //synthes.text = 'ぜ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndze].clone().play();
                 } else if (lastletter == 'そ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぞ';
                   //synthes.text = 'ぞ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndzo].clone().play();
                 } else if (lastletter == 'た'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'だ';
                   //synthes.text = 'だ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndda].clone().play();
                 } else if (lastletter == 'ち'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぢ';
                   //synthes.text = 'ぢ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[snddi].clone().play();
                 } else if (lastletter == 'つ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'づ';
                   //synthes.text = 'づ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[snddu].clone().play();
                 } else if (lastletter == 'て'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'で';
                   //synthes.text = 'で';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndde].clone().play();
                 } else if (lastletter == 'と'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ど';
                   //synthes.text = 'ど';
                   //speechSynthesis.speak(synthes);
                   game_.assets[snddo].clone().play();
                 } else if (lastletter == 'は'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ば';
                   //synthes.text = 'ば';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndba].clone().play();
                 } else if (lastletter == 'ひ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'び';
                   //synthes.text = 'び';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndbi].clone().play();
                 } else if (lastletter == 'ふ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぶ';
                   //synthes.text = 'ぶ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndbu].clone().play();
                 } else if (lastletter == 'へ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'べ';
                   //synthes.text = 'べ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndbe].clone().play();
                 } else if (lastletter == 'ほ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぼ';
                   //synthes.text = 'ぼ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndbo].clone().play();
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
            });

	//半濁音　小文字処理部分
            wordgc.addEventListener(Event.TOUCH_START, function(e) {
 		wordgc.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgc.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgc].clone().play();
                //title.text = title.text + 'handaku';
                 lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                  if (lastletter == 'は'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぱ';
                   //synthes.text = 'ぱ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndpa].clone().play();
                 } else if (lastletter == 'ひ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぴ';
                   //synthes.text = 'ぴ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndpi].clone().play();
                 } else if (lastletter == 'ふ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぷ';
                   //synthes.text = 'ぷ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndpu].clone().play();
                 } else if (lastletter == 'へ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぺ';
                   //synthes.text = 'ぺ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndpe].clone().play();
                 } else if (lastletter == 'ほ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぽ';
                   //synthes.text = 'ぽ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndpo].clone().play();
                 } else if (lastletter == 'あ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぁ';
                   //synthes.text = 'あ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[snda].clone().play();
                 } else if (lastletter == 'い'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぃ';
                   //synthes.text = 'い';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndi].clone().play();
                 } else if (lastletter == 'う'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぅ';
                   //synthes.text = 'う';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndu].clone().play();
                 } else if (lastletter == 'え'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぇ';
                   //synthes.text = 'え';
                   //speechSynthesis.speak(synthes);
                   game_.assets[snde].clone().play();
                 } else if (lastletter == 'お'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぉ';
                   //synthes.text = 'お';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndo].clone().play();
                 } else if (lastletter == 'や'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゃ';
                   //synthes.text = 'や';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndya].clone().play();
                 } else if (lastletter == 'ゆ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゅ';
                   //synthes.text = 'ゆ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndyu].clone().play();
                 } else if (lastletter == 'よ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ょ';
                   //synthes.text = 'よ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndyo].clone().play();
                 } else if (lastletter == 'つ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'っ';
                   //synthes.text = 'つ';
                   //speechSynthesis.speak(synthes);
                   game_.assets[sndtu].clone().play();
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
            });

           return scene;
       };

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
        var wordbun = new Sprite(50,50);
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
        wordbun.image = game_.assets[imgbun];
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
      //表示位置とスケールの設定
        // 第一列
	wordtalk.x = wiw * 0.07;
        wordtalk.y = wih * 0.5;
	wordtalk.scaleX = scx;
	wordtalk.scaleY = scy;
	wordbun.x = wiw * 0.07; // 文きりかえ
        wordbun.y = wih * 0.6;
	wordbun.scaleX = scx;
	wordbun.scaleY = scy;
	wordhai.x = wiw * 0.07;
        wordhai.y = wih * 0.7;
	wordhai.scaleX = scx;
	wordhai.scaleY = scy;
	wordten.x = wiw * 0.07;
        wordten.y = wih * 0.8;
	wordten.scaleX = scx;
	wordten.scaleY = scy;
	wordzenbukesu.x = wiw * 0.07;
        wordzenbukesu.y = wih * 0.9;
	wordzenbukesu.scaleX = scx;
	wordzenbukesu.scaleY = scy;
        // 第二列
	word00.x = wiw * 0.13;
        word00.y = wih * 0.5;
	word00.scaleX = scx;
	word00.scaleY = scy;
	wordhiragana.x = wiw * 0.13; // カタカナの入り口
        wordhiragana.y = wih * 0.6;
	wordhiragana.scaleX = scx;
	wordhiragana.scaleY = scy;

	wordiie.x = wiw * 0.13;
        wordiie.y = wih * 0.7;
	wordiie.scaleX = scx;
	wordiie.scaleY = scy;
	wordmaru.x = wiw * 0.13;
        wordmaru.y = wih * 0.8;
	wordmaru.scaleX = scx;
	wordmaru.scaleY = scy;
	wordkesu.x = wiw * 0.13;
        wordkesu.y = wih * 0.9;
	wordkesu.scaleX = scx;
	wordkesu.scaleY = scy;
        // 第三列
	word1.x = wiw * 0.19;
        word1.y = wih * 0.5;
	word1.scaleX = scx;
	word1.scaleY = scy;
	word2.x = wiw * 0.19;
        word2.y = wih * 0.6;
	word2.scaleX = scx;
	word2.scaleY = scy;
	word3.x = wiw * 0.19;
        word3.y = wih * 0.7;
	word3.scaleX = scx;
	word3.scaleY = scy;
	word4.x = wiw * 0.19;
        word4.y = wih * 0.8;
	word4.scaleX = scx;
	word4.scaleY = scy;
	word5.x = wiw * 0.19;
        word5.y = wih * 0.9;
	word5.scaleX = scx;
	word5.scaleY = scy;
        // 第四列
	word6.x = wiw * 0.25;
        word6.y = wih * 0.5;
	word6.scaleX = scx;
	word6.scaleY = scy;
	word7.x = wiw * 0.25;
        word7.y = wih * 0.6;
	word7.scaleX = scx;
	word7.scaleY = scy;
	word8.x = wiw * 0.25;
        word8.y = wih * 0.7;
	word8.scaleX = scx;
	word8.scaleY = scy;
	word9.x = wiw * 0.25;
        word9.y = wih * 0.8;
	word9.scaleX = scx;
	word9.scaleY = scy;
	word0.x = wiw * 0.25;
        word0.y = wih * 0.9;
	word0.scaleX = scx;
	word0.scaleY = scy;
        // あ列
	worda.x = wiw * 0.32;
        worda.y = wih * 0.5;
	worda.scaleX = scx;
	worda.scaleY = scy;
	wordi.x = wiw * 0.32;
        wordi.y = wih * 0.6;
	wordi.scaleX = scx;
	wordi.scaleY = scy;
	wordu.x = wiw * 0.32;
        wordu.y = wih * 0.7;
	wordu.scaleX = scx;
	wordu.scaleY = scy;
	worde.x = wiw * 0.32;
        worde.y = wih * 0.8;
        worde.scaleX = scx;
	worde.scaleY = scy;
	wordo.x = wiw * 0.32;
        wordo.y = wih * 0.9;
	wordo.scaleX = scx;
	wordo.scaleY = scy;
        // か列
	wordka.x = wiw * 0.38;
        wordka.y = wih * 0.5;
	wordka.scaleX = scx;
	wordka.scaleY = scy;
	wordki.x = wiw * 0.38;
        wordki.y = wih * 0.6;
	wordki.scaleX = scx;
	wordki.scaleY = scy;
	wordku.x = wiw * 0.38;
        wordku.y = wih * 0.7;
	wordku.scaleX = scx;
	wordku.scaleY = scy;
	wordke.x = wiw * 0.38;
        wordke.y = wih * 0.8;
        wordke.scaleX = scx;
	wordke.scaleY = scy;
	wordko.x = wiw * 0.38;
        wordko.y = wih * 0.9;
	wordko.scaleX = scx;
	wordko.scaleY = scy;
        // さ列
	wordsa.x = wiw * 0.44;
        wordsa.y = wih * 0.5;
	wordsa.scaleX = scx;
	wordsa.scaleY = scy;
	wordsi.x = wiw * 0.44;
        wordsi.y = wih * 0.6;
	wordsi.scaleX = scx;
	wordsi.scaleY = scy;
	wordsu.x = wiw * 0.44;
        wordsu.y = wih * 0.7;
	wordsu.scaleX = scx;
	wordsu.scaleY = scy;
	wordse.x = wiw * 0.44;
        wordse.y = wih * 0.8;
        wordse.scaleX = scx;
	wordse.scaleY = scy;
	wordso.x = wiw * 0.44;
        wordso.y = wih * 0.9;
	wordso.scaleX = scx;
	wordso.scaleY = scy;
        // た列
	wordta.x = wiw * 0.50;
        wordta.y = wih * 0.5;
	wordta.scaleX = scx;
	wordta.scaleY = scy;
	wordti.x = wiw * 0.50;
        wordti.y = wih * 0.6;
	wordti.scaleX = scx;
	wordti.scaleY = scy;
	wordtu.x = wiw * 0.50;
        wordtu.y = wih * 0.7;
	wordtu.scaleX = scx;
	wordtu.scaleY = scy;
	wordte.x = wiw * 0.50;
        wordte.y = wih * 0.8;
        wordte.scaleX = scx;
	wordte.scaleY = scy;
	wordto.x = wiw * 0.50;
        wordto.y = wih * 0.9;
	wordto.scaleX = scx;
	wordto.scaleY = scy;
        // な列
	wordna.x = wiw * 0.56;
        wordna.y = wih * 0.5;
	wordna.scaleX = scx;
	wordna.scaleY = scy;
	wordni.x = wiw * 0.56;
        wordni.y = wih * 0.6;
	wordni.scaleX = scx;
	wordni.scaleY = scy;
	wordnu.x = wiw * 0.56;
        wordnu.y = wih * 0.7;
	wordnu.scaleX = scx;
	wordnu.scaleY = scy;
	wordne.x = wiw * 0.56;
        wordne.y = wih * 0.8;
        wordne.scaleX = scx;
	wordne.scaleY = scy;
	wordno.x = wiw * 0.56;
        wordno.y = wih * 0.9;
	wordno.scaleX = scx;
	wordno.scaleY = scy;
        // は列
	wordha.x = wiw * 0.63;
        wordha.y = wih * 0.5;
	wordha.scaleX = scx;
	wordha.scaleY = scy;
	wordhi.x = wiw * 0.63;
        wordhi.y = wih * 0.6;
	wordhi.scaleX = scx;
	wordhi.scaleY = scy;
	wordhu.x = wiw * 0.63;
        wordhu.y = wih * 0.7;
	wordhu.scaleX = scx;
	wordhu.scaleY = scy;
	wordhe.x = wiw * 0.63;
        wordhe.y = wih * 0.8;
        wordhe.scaleX = scx;
	wordhe.scaleY = scy;
	wordho.x = wiw * 0.63;
        wordho.y = wih * 0.9;
	wordho.scaleX = scx;
	wordho.scaleY = scy;
        // ま列
	wordma.x = wiw * 0.69;
        wordma.y = wih * 0.5;
	wordma.scaleX = scx;
	wordma.scaleY = scy;
	wordmi.x = wiw * 0.69;
        wordmi.y = wih * 0.6;
	wordmi.scaleX = scx;
	wordmi.scaleY = scy;
	wordmu.x = wiw * 0.69;
        wordmu.y = wih * 0.7;
	wordmu.scaleX = scx;
	wordmu.scaleY = scy;
	wordme.x = wiw * 0.69;
        wordme.y = wih * 0.8;
        wordme.scaleX = scx;
	wordme.scaleY = scy;
	wordmo.x = wiw * 0.69;
        wordmo.y = wih * 0.9;
	wordmo.scaleX = scx;
	wordmo.scaleY = scy;
        // や列
	wordya.x = wiw * 0.75;
        wordya.y = wih * 0.5;
	wordya.scaleX = scx;
	wordya.scaleY = scy;
	wordyu.x = wiw * 0.75;
        wordyu.y = wih * 0.6;
	wordyu.scaleX = scx;
	wordyu.scaleY = scy;
	wordyo.x = wiw * 0.75;
        wordyo.y = wih * 0.7;
	wordyo.scaleX = scx;
	wordyo.scaleY = scy;
	wordgb.x = wiw * 0.75;
        wordgb.y = wih * 0.8;
	wordgb.scaleX = scx;
	wordgb.scaleY = scy;
	wordgc.x = wiw * 0.75;
        wordgc.y = wih * 0.9;
	wordgc.scaleX = scx;
	wordgc.scaleY = scy;
        // ら列
	wordra.x = wiw * 0.81;
        wordra.y = wih * 0.5;
	wordra.scaleX = scx;
	wordra.scaleY = scy;
	wordri.x = wiw * 0.81;
        wordri.y = wih * 0.6;
	wordri.scaleX = scx;
	wordri.scaleY = scy;
	wordru.x = wiw * 0.81;
        wordru.y = wih * 0.7;
	wordru.scaleX = scx;
	wordru.scaleY = scy;
	wordre.x = wiw * 0.81;
        wordre.y = wih * 0.8;
        wordre.scaleX = scx;
	wordre.scaleY = scy;
	wordro.x = wiw * 0.81;
        wordro.y = wih * 0.9;
	wordro.scaleX = scx;
	wordro.scaleY = scy;
        // わ列
	wordwa.x = wiw * 0.87;
        wordwa.y = wih * 0.5;
	wordwa.scaleX = scx;
	wordwa.scaleY = scy;
	wordwo.x = wiw * 0.87;
        wordwo.y = wih * 0.6;
	wordwo.scaleX = scx;
	wordwo.scaleY = scy;
	wordnn.x = wiw * 0.87;
        wordnn.y = wih * 0.7;
	wordnn.scaleX = scx;
	wordnn.scaleY = scy;
	wordbar.x = wiw * 0.87;
        wordbar.y = wih * 0.8;
	wordbar.scaleX = scx;
	wordbar.scaleY = scy;

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
        scene.addChild(wordbun); // 文きりかえ
        scene.addChild(wordwa); // わ行
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordgb);
        scene.addChild(wordgc);
        scene.addChild(wordhai);
        scene.addChild(word0);

        scene.addChild(title);
        scene.addChild(titleb);

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定

             // 文字にタッチイベントを設定する
            worda.addEventListener(Event.TOUCH_START, function(e) {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ア';
                //speechSynthesis.speak(synthes);
                game_.assets[snda].clone().play();
                title.text = title.text + 'ア';    //文字を追加する

         //var title1 = new Label('');//テスト 文字列の文字数を検出し表示する
            //title1.x = 0;
            //title1.y = 10;
            //scene.addChild(title1);
            //title1.text = title.text.length -1;//文字数を表示する
            //title1.text = title.text.charAt(title.text.length -1);//最後の文字を表示する
            });

            wordi.addEventListener(Event.TOUCH_START, function(e) {
 		wordi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'イ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndi].clone().play();
                title.text = title.text + 'イ';
            });

            wordu.addEventListener(Event.TOUCH_START, function(e) {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ウ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndu].clone().play();
                title.text = title.text + 'ウ';
            });

            worde.addEventListener(Event.TOUCH_START, function(e) {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'エ';
                //speechSynthesis.speak(synthes);
                game_.assets[snde].clone().play();
                title.text = title.text + 'エ';
            });

            wordo.addEventListener(Event.TOUCH_START, function(e) {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'オ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndo].clone().play();
                title.text = title.text + 'オ';
            });

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '９';
                //speechSynthesis.speak(synthes);
                game_.assets[snd9].clone().play();
                title.text = title.text + '９';
            });

            wordka.addEventListener(Event.TOUCH_START, function(e) {  // か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'カ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndka].clone().play();
                title.text = title.text + 'カ';
            });

            wordki.addEventListener(Event.TOUCH_START, function(e) {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'キ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndki].clone().play();
                title.text = title.text + 'キ';
            });

            wordku.addEventListener(Event.TOUCH_START, function(e) {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ク';
                //speechSynthesis.speak(synthes);
                game_.assets[sndku].clone().play();
                title.text = title.text + 'ク';
            });

            wordke.addEventListener(Event.TOUCH_START, function(e) {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ケ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndke].clone().play();
                title.text = title.text + 'ケ';
            });

            wordko.addEventListener(Event.TOUCH_START, function(e) {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'コ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndko].clone().play();
                title.text = title.text + 'コ';
            });

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '８';
                //speechSynthesis.speak(synthes);
                game_.assets[snd8].clone().play();
                title.text = title.text + '８';
            });

            wordsa.addEventListener(Event.TOUCH_START, function(e) {  // さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'サ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndsa].clone().play();
                title.text = title.text + 'サ';
            });

            wordsi.addEventListener(Event.TOUCH_START, function(e) {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'シ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndsi].clone().play();
                title.text = title.text + 'シ';
            });

            wordsu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ス';
                //speechSynthesis.speak(synthes);
                game_.assets[sndsu].clone().play();
                title.text = title.text + 'ス';
            });

            wordse.addEventListener(Event.TOUCH_START, function(e) {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'セ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndse].clone().play();
                title.text = title.text + 'セ';
            });

            wordso.addEventListener(Event.TOUCH_START, function(e) {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ソ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndso].clone().play();
                title.text = title.text + 'ソ';
            });

/*            wordtalk.addEventListener(Event.TOUCH_START, function(e) {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
            });
*/
            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '７';
                //speechSynthesis.speak(synthes);
                game_.assets[snd7].clone().play();
                title.text = title.text + '７';
            });

            wordta.addEventListener(Event.TOUCH_START, function(e) {  // た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'タ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndta].clone().play();
                title.text = title.text + 'タ';
            });

            wordti.addEventListener(Event.TOUCH_START, function(e) {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'チ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndti].clone().play();
                title.text = title.text + 'チ';
            });

            wordtu.addEventListener(Event.TOUCH_START, function(e) {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ツ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndtu].clone().play();
                title.text = title.text + 'ツ';
            });

            wordte.addEventListener(Event.TOUCH_START, function(e) {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'テ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndte].clone().play();
                title.text = title.text + 'テ';
            });

            wordto.addEventListener(Event.TOUCH_START, function(e) {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ト';
                //speechSynthesis.speak(synthes);
                game_.assets[sndto].clone().play();
                title.text = title.text + 'ト';
            });

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '空白';
                //speechSynthesis.speak(synthes);
                game_.assets[snd00].clone().play();
                title.text = title.text + '　';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '６';
                //speechSynthesis.speak(synthes);
                game_.assets[snd6].clone().play();
                title.text = title.text + '６';
            });

            wordna.addEventListener(Event.TOUCH_START, function(e) {  // な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ナ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndna].clone().play();
                title.text = title.text + 'ナ';
            });

            wordni.addEventListener(Event.TOUCH_START, function(e) {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ニ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndni].clone().play();
                title.text = title.text + 'ニ';
            });

            wordnu.addEventListener(Event.TOUCH_START, function(e) {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ヌ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndnu].clone().play();
                title.text = title.text + 'ヌ';
            });

            wordne.addEventListener(Event.TOUCH_START, function(e) {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ネ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndne].clone().play();
                title.text = title.text + 'ネ';
            });

            wordno.addEventListener(Event.TOUCH_START, function(e) {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ノ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndno].clone().play();
                title.text = title.text + 'ノ';
            });

            wordbar.addEventListener(Event.TOUCH_START, function(e) {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'のばす';
                //speechSynthesis.speak(synthes);
                game_.assets[sndbar].clone().play();
                title.text = title.text + 'ー';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '５';
                //speechSynthesis.speak(synthes);
                game_.assets[snd5].clone().play();
                title.text = title.text + '５';
            });

            wordha.addEventListener(Event.TOUCH_START, function(e) {  // は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ハ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndha].clone().play();
                title.text = title.text + 'ハ';
            });

            wordhi.addEventListener(Event.TOUCH_START, function(e) {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ヒ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhi].clone().play();
                title.text = title.text + 'ヒ';
            });

            wordhu.addEventListener(Event.TOUCH_START, function(e) {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'フ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhu].clone().play();
                title.text = title.text + 'フ';
            });

            wordhe.addEventListener(Event.TOUCH_START, function(e) {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ヘ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhe].clone().play();
                title.text = title.text + 'ヘ';
            });

            wordho.addEventListener(Event.TOUCH_START, function(e) {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ホ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndho].clone().play();
                title.text = title.text + 'ホ';
            });

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'まる';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmaru].clone().play();
                title.text = title.text + '。';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '４';
                //speechSynthesis.speak(synthes);
                game_.assets[snd4].clone().play();
                title.text = title.text + '４';
            });

            wordma.addEventListener(Event.TOUCH_START, function(e) {  // ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'マ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndma].clone().play();
                title.text = title.text + 'マ';
            });

            wordmi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ミ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmi].clone().play();
                title.text = title.text + 'ミ';
            });

            wordmu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ム';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmu].clone().play();
                title.text = title.text + 'ム';
            });

            wordme.addEventListener(Event.TOUCH_START, function(e) {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'メ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndme].clone().play();
                title.text = title.text + 'メ';
            });

            wordmo.addEventListener(Event.TOUCH_START, function(e) {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'モ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndmo].clone().play();
                title.text = title.text + 'モ';
            });

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'てん';
                //speechSynthesis.speak(synthes);
                game_.assets[sndten].clone().play();
                title.text = title.text + '、';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '３';
                //speechSynthesis.speak(synthes);
                game_.assets[snd3].clone().play();
                title.text = title.text + '３';
            });

            wordya.addEventListener(Event.TOUCH_START, function(e) {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ヤ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndya].clone().play();
                title.text = title.text + 'ヤ';
            });

            wordyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ユ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndyu].clone().play();
                title.text = title.text + 'ユ';
            });

            wordyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ヨ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndyo].clone().play();
                title.text = title.text + 'ヨ';
            });

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '２';
                //speechSynthesis.speak(synthes);
                game_.assets[snd2].clone().play();
                title.text = title.text + '２';
            });

            wordra.addEventListener(Event.TOUCH_START, function(e) {  // ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ラ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndra].clone().play();
                title.text = title.text + 'ラ';
            });

            wordri.addEventListener(Event.TOUCH_START, function(e) {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'リ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndri].clone().play();
                title.text = title.text + 'リ';
            });

            wordru.addEventListener(Event.TOUCH_START, function(e) {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ル';
                //speechSynthesis.speak(synthes);
                game_.assets[sndru].clone().play();
                title.text = title.text + 'ル';
            });

            wordre.addEventListener(Event.TOUCH_START, function(e) {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'レ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndre].clone().play();
                title.text = title.text + 'レ';
            });

            wordro.addEventListener(Event.TOUCH_START, function(e) {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ロ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndro].clone().play();
                title.text = title.text + 'ロ';
            });

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'いいえ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndiie].clone().play();
                //title.text = title.text + 'いいえ';
            });

            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '１';
                //speechSynthesis.speak(synthes);
                game_.assets[snd1].clone().play();
                title.text = title.text + '１';
            });

           wordbun.addEventListener(Event.TOUCH_START, function(e) {  //文いれかえ
 		wordbun.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbun.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse3].clone().play();

            if (storage0 == 1 ){
               storage1 = title.text;
               title.text = storage2;
               storage0 = 2;
            } else if (storage0 == 2 ){
               storage2 = title.text;
               title.text = storage3;
               storage0 = 3;
            } else if (storage0 == 3 ){
               storage3 = title.text;
               title.text = storage4;
               storage0 = 4;
            } else if (storage0 == 4 ){
               storage4 = title.text;
               title.text = storage5;
               storage0 = 5;
            } else if (storage0 == 5 ){
               storage5 = title.text;
               title.text = storage6;
               storage0 = 6;
            } else if (storage0 == 6 ){
               storage6 = title.text;
               title.text = storage7;
               storage0 = 7;
            } else if (storage0 == 7 ){
               storage7 = title.text;
               title.text = storage8;
               storage0 = 8;
            } else if (storage0 == 8 ){
               storage8 = title.text;
               title.text = storage9;
               storage0 = 9;
            } else if (storage0 == 9 ){
               storage9 = title.text;
               title.text = storage10;
               storage0 = 10;
            } else if (storage0 == 10 ){
               storage10 = title.text;
               title.text = storage1;
               storage0 = 1;
            }
               titleb.text = storage0;
            });


            wordhiragana.addEventListener(Event.TOUCH_START, function(e) {  //ひらがな文字盤
 		wordhiragana.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhiragana.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.popScene(); // ひらがな文字盤へ切り替え
            });

            wordwa.addEventListener(Event.TOUCH_START, function(e) {  // わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ワ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndwa].clone().play();
                title.text = title.text + 'ワ';
            });

            wordwo.addEventListener(Event.TOUCH_START, function(e) {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ヲ';
                //speechSynthesis.speak(synthes);
                game_.assets[sndwo].clone().play();
                title.text = title.text + 'ヲ';
            });

            wordnn.addEventListener(Event.TOUCH_START, function(e) {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ンン';
                //speechSynthesis.speak(synthes);
                game_.assets[sndnn].clone().play();
                title.text = title.text + 'ン';
            });

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'はい';
                //speechSynthesis.speak(synthes);
                game_.assets[sndhai].clone().play();
                //title.text = title.text + 'はい';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '０';
                //speechSynthesis.speak(synthes);
                game_.assets[snd0].clone().play();
                title.text = title.text + '０';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = 'ひとつ消す';
                //speechSynthesis.speak(synthes);
                game_.assets[sndkesu].clone().play();
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //synthes.text = '全部消す';
                //speechSynthesis.speak(synthes);
                game_.assets[sndzenbukesu].clone().play();
                title.text = '';
            });

	//濁音処理部分
            wordgb.addEventListener(Event.TOUCH_START, function(e) {
 		wordgb.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgb.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgb].clone().play();
                //title.text = title.text + 'daku';
                lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                 if (lastletter == 'カ') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ガ';
                   //synthes.text = 'ガ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndga].clone().play();
                 } else if (lastletter == 'キ') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ギ';
                   //synthes.text = 'ギ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndgi].clone().play();
                 } else if (lastletter == 'ク'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'グ';
                   //synthes.text = 'グ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndgu].clone().play();
                 } else if (lastletter == 'ケ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゲ';
                   //synthes.text = 'ゲ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndge].clone().play();
                 } else if (lastletter == 'コ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゴ';
                   //synthes.text = 'ゴ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndgo].clone().play();
                 } else if (lastletter == 'サ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ザ';
                   //synthes.text = 'ザ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndza].clone().play();
                 } else if (lastletter == 'シ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ジ';
                   //synthes.text = 'ジ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndzi].clone().play();
                 } else if (lastletter == 'ス'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ズ';
                   //synthes.text = 'ズ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndzu].clone().play();
                 } else if (lastletter == 'セ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゼ';
                   //synthes.text = 'ゼ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndze].clone().play();
                 } else if (lastletter == 'ソ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゾ';
                   //synthes.text = 'ゾ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndzo].clone().play();
                 } else if (lastletter == 'タ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ダ';
                   //synthes.text = 'ダ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndda].clone().play();
                 } else if (lastletter == 'チ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ヂ';
                   //synthes.text = 'ヂ';
                   //speechSynthesis.speak(synthes);
                game_.assets[snddi].clone().play();
                 } else if (lastletter == 'ツ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ヅ';
                   //synthes.text = 'ヅ';
                   //speechSynthesis.speak(synthes);
                game_.assets[snddu].clone().play();
                 } else if (lastletter == 'テ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'デ';
                   //synthes.text = 'デ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndde].clone().play();
                 } else if (lastletter == 'ト'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ド';
                   //synthes.text = 'ド';
                   //speechSynthesis.speak(synthes);
                game_.assets[snddo].clone().play();
                 } else if (lastletter == 'ハ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'バ';
                   //synthes.text = 'バ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndba].clone().play();
                 } else if (lastletter == 'ヒ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ビ';
                   //synthes.text = 'ビ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndbi].clone().play();
                 } else if (lastletter == 'フ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ブ';
                   //synthes.text = 'ブ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndbu].clone().play();
                 } else if (lastletter == 'ヘ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ベ';
                   //synthes.text = 'ベ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndbe].clone().play();
                 } else if (lastletter == 'ホ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ボ';
                   //synthes.text = 'ボ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndbo].clone().play();
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
            });

	//半濁音　小文字処理部分
            wordgc.addEventListener(Event.TOUCH_START, function(e) {
 		wordgc.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgc.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndgc].clone().play();
                //title.text = title.text + 'handaku';
                 lastletter = title.text.charAt(title.text.length -1);
                //title.text = lastletter
                  if (lastletter == 'ハ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'パ';
                   //synthes.text = 'パ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndpa].clone().play();
                 } else if (lastletter == 'ヒ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ピ';
                   //synthes.text = 'ピ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndpi].clone().play();
                 } else if (lastletter == 'フ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'プ';
                   //synthes.text = 'プ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndpu].clone().play();
                 } else if (lastletter == 'ヘ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ペ';
                   //synthes.text = 'ペ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndpe].clone().play();
                 } else if (lastletter == 'ホ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ポ';
                   //synthes.text = 'ポ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndpo].clone().play();
                 } else if (lastletter == 'ア'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ァ';
                   //synthes.text = 'ア';
                   //speechSynthesis.speak(synthes);
                game_.assets[snda].clone().play();
                 } else if (lastletter == 'イ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ィ';
                   //synthes.text = 'イ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndi].clone().play();
                 } else if (lastletter == 'ウ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゥ';
                   //synthes.text = 'ウ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndu].clone().play();
                 } else if (lastletter == 'エ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ェ';
                   //synthes.text = 'エ';
                   //speechSynthesis.speak(synthes);
                game_.assets[snde].clone().play();
                 } else if (lastletter == 'オ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ォ';
                   //synthes.text = 'オ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndo].clone().play();
                 } else if (lastletter == 'ヤ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ャ';
                   //synthes.text = 'ヤ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndya].clone().play();
                 } else if (lastletter == 'ユ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ュ';
                   //synthes.text = 'ユ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndyu].clone().play();
                 } else if (lastletter == 'ヨ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ョ';
                   //synthes.text = 'ヨ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndyo].clone().play();
                 } else if (lastletter == 'ツ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ッ';
                   //synthes.text = 'ツ';
                   //speechSynthesis.speak(synthes);
                game_.assets[sndtu].clone().play();
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
            });
           return scene;
       };

            // ひらがな画面にもどります
            game_.replaceScene(createHiraScene());
 
    }
    game_.start(); // スタート
};
