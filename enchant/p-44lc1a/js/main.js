enchant(); 
// enchant.js を利用したコミュニケーションエイド web speech api text to speech の導入
// 文章ファイルの保存機能 10の文章ファイルをローカルストレージで保存し管理する
// レッツチャット風のタッチ版　2019/01/11
// レッツチャット風挨拶文字盤の追加　2019/04/04

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
//文書ファイル保存機能ここまで





//各種設定部分


 //モニタの解像度を取得する

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


  //文書番号titlebの表示設定　文書読み込み部分
            var titleb = new Label('');         //文書番号ラベルの設定
            titleb.color = '#000000';            // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォントを大きさを変更する
		titleb.font = '60px sans-serif';            // 60pxのゴシック体にする
		} else if (window.innerWidth < 500){
		titleb.font = '30px sans-serif';            // 30pxのゴシック体にする
		} else {
		titleb.font = '35px sans-serif';            // 35pxのゴシック体にする
		}
            titleb.x = wiw * 0.01;               // 横位置調整　表示位置を左上に変更
            titleb.y = wih * 0.01;               // 縦位置調整

            //if (storage0 == ''){
                //storage0 = 1 ;
            //}

            if (storage0 == 1 ){       // 文書番号storage0に指定された番号の文書をtitle.textに読み込んで表示する
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
    game_.fps = 1; // frames per second: 進行スピード設定　大きくするとcpu負荷、バッテリ消費大　注意

  //web speech api tts 音声の設定と起動時の音声発声設定
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
      var imgaisatu = './img/aisatu.png';
      var imgkarada = './img/karada.png';

      var imgbun = './img/bun.png';

      var imggb 	= './img/gb.png';
      var imggc 	= './img/gc.png';
      var imgbar 	= './img/bar.png';
      var imgten 	= './img/ten.png';
      var imgmaru 	= './img/maru.png';
      var img00 	= './img/00.png';
      var imgkesu 	= './img/kesu.png';
      var imgzenbukesu 	= './img/zenbukesu.png';
      var imghai 	= './img/hai.png';
      var imgiie 	= './img/iie.png';
      var img0 		= './img/0.png';
      var img1 		= './img/1.png';
      var img2 		= './img/2.png';
      var img3 		= './img/3.png';
      var img4 		= './img/4.png';
      var img5 		= './img/5.png';
      var img6 		= './img/6.png';
      var img7 		= './img/7.png';
      var img8 		= './img/8.png';
      var img9 		= './img/9.png';
      var imgtalk = './img/talk0.png';
    //あいさつ文字盤用ファイル
      var img2hai 		= './img2/hai.png';
      var img2iie 		= './img2/iie.png';
      var img2dochirademoii 	= './img2/dochirademoii.png';
      var img2dochirademonai 	= './img2/dochirademonai.png';
      var img2mouichido2 	= './img2/mouichido2.png';
      var img2arigatou 		= './img2/arigatou.png';
      var img2onegaisimasu2 	= './img2/onegaisimasu2.png';
      var img2mouiidesu 	= './img2/mouiidesu.png';
      var img2gomennasai 	= './img2/gomennasai.png';
      var img2sukosimatte 	= './img2/sukosimatte.png';
      var img2konnichiha 	= './img2/konnichiha.png';
      var img2sayounara 	= './img2/sayounara.png';
      var img2hajimemasite 	= './img2/hajimemasite.png';
      var img2atuidesu 		= './img2/atuidesu.png';
      var img2samuidesu 	= './img2/samuidesu.png';
      var img2tanosii 		= './img2/tanosii.png';
      var img2uresii 		= './img2/uresii.png';
      var img2sabisii 		= './img2/sabisii.png';
      var img2kanasii 		= './img2/kanasii.png';
      var img2kuyasii 		= './img2/kuyasii.png';
      var img2ohayou 		= './img2/ohayou.png';
      var img2oyasumi 		= './img2/oyasumi.png';
      var img2yorosiku 		= './img2/yorosiku.png';
      var img2nemutai 		= './img2/nemutai.png';
      var img2okiteimasu 	= './img2/okiteimasu.png';

      var img2machigaemasita2 	= './img2/machigaemasita2.png';
      var img2wakarimasita 	= './img2/wakarimasita.png';
      var img2wakarimasen 	= './img2/wakarimasen.png';
      var img2douitasimasite 	= './img2/douitasimasite.png';
      var img2chigaimasu 	= './img2/chigaimasu.png';
      var img2sukidesu 		= './img2/sukidesu.png';
      var img2kiraidesu 	= './img2/kiraidesu.png';
      var img2sitteru 		= './img2/sitteru.png';
      var img2siranai 		= './img2/siranai.png';
      var img2yokatta 		= './img2/yokatta.png';
      var img2gennkidesu 	= './img2/gennkidesu.png';
      var img2tukareta 		= './img2/tukareta.png';
      var img2watasi 		= './img2/watasi.png';
      var img2anata 		= './img2/anata.png';
      var img2minnna 		= './img2/minnna.png';
      var img2youkoso 		= './img2/youkoso.png';
      var img2matakitene 	= './img2/matakitene.png';
      var img2eeto 		= './img2/eeto.png';
      var img2saa 		= './img2/saa.png';
      var img2question 		= './img2/question.png';
      var img2maamaa 		= './img2/maamaa.png';
      var img2dekakeru 		= './img2/dekakeru.png';
      var img2ahaha 		= './img2/ahaha.png';
      var img2unnunn 		= './img2/unnunn.png';
      var img2exclamation 	= './img2/exclamation.png';
    //からだ文字盤用ファイル
      var img2atama 		= './img2/atama.png';
      var img2kao 		= './img2/kao.png';
      var img2me 		= './img2/me.png';
      var img2kuchi 		= './img2/kuchi.png';
      var img2hana 		= './img2/hana.png';
      var img2mimi 		= './img2/mimi.png';
      var img2mayu 		= './img2/mayu.png';
      var img2hoppe 		= './img2/hoppe.png';
      var img2kubi 		= './img2/kubi.png';
      var img2kata 		= './img2/kata.png';
      var img2te 		= './img2/te.png';
      var img2ashi 		= './img2/ashi.png';
      var img2yubi 		= './img2/yubi.png';
      var img2mune 		= './img2/mune.png';
      var img2koshi 		= './img2/koshi.png';
      var img2hiji 		= './img2/hiji.png';
      var img2hiza 		= './img2/hiza.png';
      var img2hara 		= './img2/hara.png';
      var img2senaka 		= './img2/senaka.png';
      var img2osiri 		= './img2/osiri.png';

      var img2kurusii 		= './img2/kurusii.png';
      var img2itai 		= './img2/itai.png';
      var img2kayui 		= './img2/kayui.png';
      var img2nodokawaku 	= './img2/nodokawaku.png';
      var img2hidari 		= './img2/hidari.png';
      var img2migi 		= './img2/migi.png';
      var img2mae 		= './img2/mae.png';
      var img2usiro 		= './img2/usiro.png';
      var img2hantai 		= './img2/hantai.png';
      var img2ue 		= './img2/ue.png';
      var img2naka 		= './img2/naka.png';
      var img2sita 		= './img2/sita.png';
      var img2tukeru 		= './img2/tukeru.png';
      var img2toru 		= './img2/toru.png';
      var img2taihen 		= './img2/taihen.png';
      var img2futuu 		= './img2/futuu.png';
      var img2sukosi 		= './img2/sukosi.png';
      var img2tudukeru 		= './img2/tudukeru.png';
      var img2yameru 		= './img2/yameru.png';
      var img2ga 		= './img2/ga.png';
      var img2ni 		= './img2/ni.png';
      var img2wo 		= './img2/wo.png';
      var img2hawa 		= './img2/hawa.png';
      var img2de 		= './img2/de.png';

    //音声ファイル
      var sndbuz = './snd/incorrect2.mp3';
      var sndse2 = './snd/se2.mp3';
      var sndse3 = './snd/se3.mp3';

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
          imgaisatu,
          imgkarada,

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

          img2hai,
          img2iie,
          img2dochirademoii,
          img2dochirademonai,
          img2mouichido2,
          img2arigatou,
          img2onegaisimasu2, 
          img2mouiidesu,
          img2gomennasai,
          img2sukosimatte,
          img2konnichiha,
          img2sayounara,
          img2hajimemasite,
          img2atuidesu,
          img2samuidesu,
          img2tanosii,
          img2uresii,
          img2sabisii,
          img2kanasii,
          img2kuyasii,
          img2ohayou,
          img2oyasumi,
          img2yorosiku,
          img2nemutai,
          img2okiteimasu,

          img2machigaemasita2,
          img2wakarimasita,
          img2wakarimasen,
          img2douitasimasite,
          img2chigaimasu,
          img2sukidesu,
          img2kiraidesu,
          img2sitteru,
          img2siranai,
          img2yokatta,
          img2gennkidesu,
          img2tukareta,
          img2watasi,
          img2anata,
          img2minnna,
          img2youkoso,
          img2matakitene,
          img2eeto,
          img2saa,
          img2question,
          img2maamaa,
          img2dekakeru,
          img2ahaha,
          img2unnunn,
          img2exclamation,
          
          img2atama,
          img2kao,
          img2me,
          img2kuchi,
          img2hana,
          img2mimi,
          img2mayu,
          img2hoppe,
          img2kubi,
          img2kata,
          img2te,
          img2ashi,
          img2yubi,
          img2mune,
          img2koshi,
          img2hiji,
          img2hiza,
          img2hara,
          img2senaka,
          img2osiri,
          
          img2kurusii,
          img2itai,
          img2kayui,
          img2nodokawaku,
          img2hidari,
          img2migi,
          img2mae,
          img2usiro,
          img2hantai,
          img2ue,
          img2naka,
          img2sita,
          img2tukeru,
          img2toru,
          img2taihen,
          img2futuu,
          img2sukosi,
          img2tudukeru,
          img2yameru,
          img2ga,
          img2ni,
          img2wo,
          img2hawa,
          img2de,

          sndbuz,
          sndse2,
          sndse3,
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

     // 第一列表示
        scene.addChild(wordtalk);
        scene.addChild(wordbun); // 文きりかえ
        scene.addChild(wordhai);
        scene.addChild(wordten);
        scene.addChild(wordzenbukesu);
     // 第二列表示
        scene.addChild(word00);
        scene.addChild(wordkatakana); // カタカナ文字盤へ
        scene.addChild(wordiie);
        scene.addChild(wordmaru);
        scene.addChild(wordkesu);
     // 第三列表示
        scene.addChild(word1);
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(word5);
     // 第四列表示
        scene.addChild(word6);
        scene.addChild(word7);
        scene.addChild(word8);
        scene.addChild(word9);
        scene.addChild(word0);
     // あ列表示
        scene.addChild(worda);
        scene.addChild(wordi);
        scene.addChild(wordu);
        scene.addChild(worde);
        scene.addChild(wordo);
     // か列表示
        scene.addChild(wordka);
        scene.addChild(wordki);
        scene.addChild(wordku);
        scene.addChild(wordke);
        scene.addChild(wordko);
     // さ列表示
        scene.addChild(wordsa);
        scene.addChild(wordsi);
        scene.addChild(wordsu);
        scene.addChild(wordse);
        scene.addChild(wordso);
     // た列表示
        scene.addChild(wordta);
        scene.addChild(wordti);
        scene.addChild(wordtu);
        scene.addChild(wordte);
        scene.addChild(wordto);
     // な列表示
        scene.addChild(wordna);
        scene.addChild(wordni);
        scene.addChild(wordnu);
        scene.addChild(wordne);
        scene.addChild(wordno);
     // は列表示
        scene.addChild(wordha);
        scene.addChild(wordhi);
        scene.addChild(wordhu);
        scene.addChild(wordhe);
        scene.addChild(wordho);
     // ま列表示
        scene.addChild(wordma);
        scene.addChild(wordmi);
        scene.addChild(wordmu);
        scene.addChild(wordme);
        scene.addChild(wordmo);
     // や列表示
        scene.addChild(wordya);
        scene.addChild(wordyu);
        scene.addChild(wordyo);
        scene.addChild(wordgb);  //濁点処理
        scene.addChild(wordgc);  //半濁点処理促音処理
     // ら列表示
        scene.addChild(wordra);
        scene.addChild(wordri);
        scene.addChild(wordru);
        scene.addChild(wordre);
        scene.addChild(wordro);
     // わ列表示
        scene.addChild(wordwa);
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordbar);


	scene.addEventListener(Event.ENTER, function(e) {
	scene.addChild(title);      // シーンが開いたら文字列を表示する  
	scene.addChild(titleb);     // 文書番号を表示する  

	}); 

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定



             // 文字にタッチイベントを設定する
            worda.addEventListener(Event.TOUCH_START, function(e) {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あ';
                speechSynthesis.speak(synthes);
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
                synthes.text = 'い';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'い';
            });

            wordu.addEventListener(Event.TOUCH_START, function(e) {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'う';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'う';
            });

            worde.addEventListener(Event.TOUCH_START, function(e) {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'え';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'え';
            });

            wordo.addEventListener(Event.TOUCH_START, function(e) {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'お';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'お';
            });

            wordka.addEventListener(Event.TOUCH_START, function(e) {  // か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'か';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'か';
            });

            wordki.addEventListener(Event.TOUCH_START, function(e) {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'き';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'き';
            });

            wordku.addEventListener(Event.TOUCH_START, function(e) {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'く';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'く';
            });

            wordke.addEventListener(Event.TOUCH_START, function(e) {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'け';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'け';
            });

            wordko.addEventListener(Event.TOUCH_START, function(e) {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'こ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'こ';
            });

            wordsa.addEventListener(Event.TOUCH_START, function(e) {  // さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'さ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'さ';
            });

            wordsi.addEventListener(Event.TOUCH_START, function(e) {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'し';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'し';
            });

            wordsu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'す';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'す';
            });

            wordse.addEventListener(Event.TOUCH_START, function(e) {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'せ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'せ';
            });

            wordso.addEventListener(Event.TOUCH_START, function(e) {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'そ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'そ';
            });

            wordta.addEventListener(Event.TOUCH_START, function(e) {  // た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'た';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'た';
            });

            wordti.addEventListener(Event.TOUCH_START, function(e) {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ち';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ち';
            });

            wordtu.addEventListener(Event.TOUCH_START, function(e) {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'つ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'つ';
            });

            wordte.addEventListener(Event.TOUCH_START, function(e) {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'て';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'て';
            });

            wordto.addEventListener(Event.TOUCH_START, function(e) {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'と';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'と';
            });

            wordna.addEventListener(Event.TOUCH_START, function(e) {  // な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'な';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'な';
            });

            wordni.addEventListener(Event.TOUCH_START, function(e) {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'に';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'に';
            });

            wordnu.addEventListener(Event.TOUCH_START, function(e) {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ぬ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ぬ';
            });

            wordne.addEventListener(Event.TOUCH_START, function(e) {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ね';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ね';
            });

            wordno.addEventListener(Event.TOUCH_START, function(e) {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'の';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'の';
            });

            wordha.addEventListener(Event.TOUCH_START, function(e) {  // は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'は';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'は';
            });

            wordhi.addEventListener(Event.TOUCH_START, function(e) {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ひ';
            });

            wordhu.addEventListener(Event.TOUCH_START, function(e) {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ふ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ふ';
            });

            wordhe.addEventListener(Event.TOUCH_START, function(e) {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'へ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'へ';
            });

            wordho.addEventListener(Event.TOUCH_START, function(e) {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ほ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ほ';
            });

            wordma.addEventListener(Event.TOUCH_START, function(e) {  // ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ま';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ま';
            });

            wordmi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'み';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'み';
            });

            wordmu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'む';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'む';
            });

            wordme.addEventListener(Event.TOUCH_START, function(e) {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'め';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'め';
            });

            wordmo.addEventListener(Event.TOUCH_START, function(e) {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'も';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'も';
            });

            wordya.addEventListener(Event.TOUCH_START, function(e) {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'や';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'や';
            });

            wordyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ゆ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ゆ';
            });

            wordyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'よ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'よ';
            });

            wordra.addEventListener(Event.TOUCH_START, function(e) {  // ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ら';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ら';
            });

            wordri.addEventListener(Event.TOUCH_START, function(e) {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'り';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'り';
            });

            wordru.addEventListener(Event.TOUCH_START, function(e) {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'る';
                speechSynthesis.speak(synthes);
               title.text = title.text + 'る';
            });

            wordre.addEventListener(Event.TOUCH_START, function(e) {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'れ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'れ';
            });

            wordro.addEventListener(Event.TOUCH_START, function(e) {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ろ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ろ';
            });

            wordwa.addEventListener(Event.TOUCH_START, function(e) {  // わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'わ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'わ';
            });

            wordwo.addEventListener(Event.TOUCH_START, function(e) {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'を';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'を';
            });

            wordnn.addEventListener(Event.TOUCH_START, function(e) {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'んん';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ん';
            });

            wordbar.addEventListener(Event.TOUCH_START, function(e) {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'のばす';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ー';
            });

      //数字
            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '１';
                speechSynthesis.speak(synthes);
                title.text = title.text + '１';
            });

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '２';
                speechSynthesis.speak(synthes);
                title.text = title.text + '２';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '３';
                speechSynthesis.speak(synthes);
                title.text = title.text + '３';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '４';
                speechSynthesis.speak(synthes);
                title.text = title.text + '４';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '５';
                speechSynthesis.speak(synthes);
                title.text = title.text + '５';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '６';
                speechSynthesis.speak(synthes);
                title.text = title.text + '６';
            });

            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '７';
                speechSynthesis.speak(synthes);
                title.text = title.text + '７';
            });

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '８';
                speechSynthesis.speak(synthes);
                title.text = title.text + '８';
            });

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '９';
                speechSynthesis.speak(synthes);
                title.text = title.text + '９';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '０';
                speechSynthesis.speak(synthes);
                title.text = title.text + '０';
            });
      // 文章読み上げ
            wordtalk.addEventListener(Event.TOUCH_START, function(e) {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
            });

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '空白';
                speechSynthesis.speak(synthes);
                title.text = title.text + '　';
            });

      //文いれかえ
            wordbun.addEventListener(Event.TOUCH_START, function(e) {
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
     // カタカナ文字盤へ切り替え
            wordkatakana.addEventListener(Event.TOUCH_START, function(e) {  //カタカナ文字盤
 		wordkatakana.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkatakana.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.pushScene(createKataScene());
            });

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'はい';
            });

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'いいえ';
            });

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'てん';
                speechSynthesis.speak(synthes);
                title.text = title.text + '、';
            });

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まる';
                speechSynthesis.speak(synthes);
                title.text = title.text + '。';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひとつ消す';
                speechSynthesis.speak(synthes);
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '全部消す';
                speechSynthesis.speak(synthes);
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
            });

           return scene;
       };
    	// ひらがな文字盤ここまで

    	// カタカナ文字盤を作る関数
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
        //var wordhiragana = new Sprite(50,50);
        var wordaisatu = new Sprite(50,50);
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

        wordaisatu.image = game_.assets[imgaisatu];
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
	wordaisatu.x = wiw * 0.13; // あいさつ入り口
        wordaisatu.y = wih * 0.6;
	wordaisatu.scaleX = scx;
	wordaisatu.scaleY = scy;
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

     // 第一列表示
        scene.addChild(wordtalk);
        scene.addChild(wordbun); // 文きりかえ
        scene.addChild(wordhai);
        scene.addChild(wordten);
        scene.addChild(wordzenbukesu);
     // 第二列表示
        scene.addChild(word00);
        scene.addChild(wordaisatu); // あいさつ文字盤
        scene.addChild(wordiie);
        scene.addChild(wordmaru);
        scene.addChild(wordkesu);
     // 第三列表示
        scene.addChild(word1);
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(word5);
     // 第四列表示
        scene.addChild(word6);
        scene.addChild(word7);
        scene.addChild(word8);
        scene.addChild(word9);
        scene.addChild(word0);
     // あ列表示
        scene.addChild(worda);
        scene.addChild(wordi);
        scene.addChild(wordu);
        scene.addChild(worde);
        scene.addChild(wordo);
     // か列表示
        scene.addChild(wordka);
        scene.addChild(wordki);
        scene.addChild(wordku);
        scene.addChild(wordke);
        scene.addChild(wordko);
     // さ列表示
        scene.addChild(wordsa);
        scene.addChild(wordsi);
        scene.addChild(wordsu);
        scene.addChild(wordse);
        scene.addChild(wordso);
     // た列表示
        scene.addChild(wordta);
        scene.addChild(wordti);
        scene.addChild(wordtu);
        scene.addChild(wordte);
        scene.addChild(wordto);
     // な列表示
        scene.addChild(wordna);
        scene.addChild(wordni);
        scene.addChild(wordnu);
        scene.addChild(wordne);
        scene.addChild(wordno);
     // は列表示
        scene.addChild(wordha);
        scene.addChild(wordhi);
        scene.addChild(wordhu);
        scene.addChild(wordhe);
        scene.addChild(wordho);
     // ま列表示
        scene.addChild(wordma);
        scene.addChild(wordmi);
        scene.addChild(wordmu);
        scene.addChild(wordme);
        scene.addChild(wordmo);
     // や列表示
        scene.addChild(wordya);
        scene.addChild(wordyu);
        scene.addChild(wordyo);
        scene.addChild(wordgb);
        scene.addChild(wordgc);
     // ら列表示
        scene.addChild(wordra);
        scene.addChild(wordri);
        scene.addChild(wordru);
        scene.addChild(wordre);
        scene.addChild(wordro);
     // わ列表示
        scene.addChild(wordwa);
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordbar);

        scene.addChild(title);   //文書　と文書番号の表示
        scene.addChild(titleb);

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定

             // 文字にタッチイベントを設定する
            worda.addEventListener(Event.TOUCH_START, function(e) {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ア';
                speechSynthesis.speak(synthes);
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
                synthes.text = 'イ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'イ';
            });

            wordu.addEventListener(Event.TOUCH_START, function(e) {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ウ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ウ';
            });

            worde.addEventListener(Event.TOUCH_START, function(e) {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'エ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'エ';
            });

            wordo.addEventListener(Event.TOUCH_START, function(e) {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'オ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'オ';
            });

            wordka.addEventListener(Event.TOUCH_START, function(e) {  // か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'カ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'カ';
            });

            wordki.addEventListener(Event.TOUCH_START, function(e) {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'キ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'キ';
            });

            wordku.addEventListener(Event.TOUCH_START, function(e) {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ク';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ク';
            });

            wordke.addEventListener(Event.TOUCH_START, function(e) {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ケ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ケ';
            });

            wordko.addEventListener(Event.TOUCH_START, function(e) {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'コ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'コ';
            });

            wordsa.addEventListener(Event.TOUCH_START, function(e) {  // さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'サ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'サ';
            });

            wordsi.addEventListener(Event.TOUCH_START, function(e) {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'シ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'シ';
            });

            wordsu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ス';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ス';
            });

            wordse.addEventListener(Event.TOUCH_START, function(e) {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'セ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'セ';
            });

            wordso.addEventListener(Event.TOUCH_START, function(e) {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ソ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ソ';
            });

            wordta.addEventListener(Event.TOUCH_START, function(e) {  // た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'タ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'タ';
            });

            wordti.addEventListener(Event.TOUCH_START, function(e) {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'チ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'チ';
            });

            wordtu.addEventListener(Event.TOUCH_START, function(e) {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ツ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ツ';
            });

            wordte.addEventListener(Event.TOUCH_START, function(e) {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'テ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'テ';
            });

            wordto.addEventListener(Event.TOUCH_START, function(e) {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ト';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ト';
            });

            wordna.addEventListener(Event.TOUCH_START, function(e) {  // な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ナ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ナ';
            });

            wordni.addEventListener(Event.TOUCH_START, function(e) {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ニ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ニ';
            });

            wordnu.addEventListener(Event.TOUCH_START, function(e) {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヌ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヌ';
            });

            wordne.addEventListener(Event.TOUCH_START, function(e) {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ネ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ネ';
            });

            wordno.addEventListener(Event.TOUCH_START, function(e) {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ノ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ノ';
            });

            wordha.addEventListener(Event.TOUCH_START, function(e) {  // は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ハ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ハ';
            });

            wordhi.addEventListener(Event.TOUCH_START, function(e) {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヒ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヒ';
            });

            wordhu.addEventListener(Event.TOUCH_START, function(e) {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'フ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'フ';
            });

            wordhe.addEventListener(Event.TOUCH_START, function(e) {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヘ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヘ';
            });

            wordho.addEventListener(Event.TOUCH_START, function(e) {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ホ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ホ';
            });

            wordma.addEventListener(Event.TOUCH_START, function(e) {  // ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'マ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'マ';
            });

            wordmi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ミ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ミ';
            });

            wordmu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ム';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ム';
            });

            wordme.addEventListener(Event.TOUCH_START, function(e) {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'メ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'メ';
            });

            wordmo.addEventListener(Event.TOUCH_START, function(e) {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'モ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'モ';
            });

            wordya.addEventListener(Event.TOUCH_START, function(e) {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヤ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヤ';
            });

            wordyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ユ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ユ';
            });

            wordyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヨ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヨ';
            });

            wordra.addEventListener(Event.TOUCH_START, function(e) {  // ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ラ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ラ';
            });

            wordri.addEventListener(Event.TOUCH_START, function(e) {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'リ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'リ';
            });

            wordru.addEventListener(Event.TOUCH_START, function(e) {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ル';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ル';
            });

            wordre.addEventListener(Event.TOUCH_START, function(e) {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'レ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'レ';
            });

            wordro.addEventListener(Event.TOUCH_START, function(e) {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ロ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ロ';
            });

            wordwa.addEventListener(Event.TOUCH_START, function(e) {  // わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ワ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ワ';
            });

            wordwo.addEventListener(Event.TOUCH_START, function(e) {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ヲ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ヲ';
            });

            wordnn.addEventListener(Event.TOUCH_START, function(e) {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ンン';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ン';
            });

            wordbar.addEventListener(Event.TOUCH_START, function(e) {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'のばす';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ー';
            });

      //　数字
            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '１';
                speechSynthesis.speak(synthes);
                title.text = title.text + '１';
            });

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '２';
                speechSynthesis.speak(synthes);
                title.text = title.text + '２';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '３';
                speechSynthesis.speak(synthes);
                title.text = title.text + '３';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '４';
                speechSynthesis.speak(synthes);
                title.text = title.text + '４';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '５';
                speechSynthesis.speak(synthes);
                title.text = title.text + '５';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '６';
                speechSynthesis.speak(synthes);
                title.text = title.text + '６';
            });

            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '７';
                speechSynthesis.speak(synthes);
                title.text = title.text + '７';
            });

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '８';
                speechSynthesis.speak(synthes);
                title.text = title.text + '８';
            });

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '９';
                speechSynthesis.speak(synthes);
                title.text = title.text + '９';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '０';
                speechSynthesis.speak(synthes);
                title.text = title.text + '０';
            });

      //読み上げ部
            wordtalk.addEventListener(Event.TOUCH_START, function(e) {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
            });

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '空白';
                speechSynthesis.speak(synthes);
                title.text = title.text + '　';
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

            wordaisatu.addEventListener(Event.TOUCH_START, function(e) {  //ひらがな文字盤
 		wordaisatu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordaisatu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.pushScene(createAisatuScene());// あいさつ文字盤へ切り替え

                //game_.popScene(); // ひらがな文字盤へ切り替え
            });

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'はい';
            });

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'いいえ';
            });

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'てん';
                speechSynthesis.speak(synthes);
                title.text = title.text + '、';
            });

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まる';
                speechSynthesis.speak(synthes);
                title.text = title.text + '。';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひとつ消す';
                speechSynthesis.speak(synthes);
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '全部消す';
                speechSynthesis.speak(synthes);
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
            });
           return scene;
       };
    	// カタカナ文字盤ここまで

    	// あいさつ文字盤を作る関数
            var createAisatuScene = function() {
                var scene = new Scene();
                //var label = new Label('あいさつ文字盤');        // 表示切り替え エラー確認用
                //scene.addChild(label);

	//画像の設定  左部分
        var wordtalk	= new Sprite(50, 50);  // スプライト大きさ設定
        var word00 	= new Sprite(50, 50);
        var wordbun	= new Sprite(50, 50);
        var wordkarada	= new Sprite(50, 50);
        var wordhai 	= new Sprite(50, 50);
        var wordiie 	= new Sprite(50, 50);
        var wordten 	= new Sprite(50, 50);
        var wordmaru 	= new Sprite(50, 50);
        var wordzenbukesu = new Sprite(50, 50);
        var wordkesu 	= new Sprite(50, 50);
        var word1 	= new Sprite(50, 50);
        var word2 	= new Sprite(50, 50);
        var word3 	= new Sprite(50, 50);
        var word4 	= new Sprite(50, 50);
        var word5 	= new Sprite(50, 50);
        var word6 	= new Sprite(50, 50);
        var word7 	= new Sprite(50, 50);
        var word8 	= new Sprite(50, 50);
        var word9 	= new Sprite(50, 50);
        var word0 	= new Sprite(50, 50);
        var wordgb 	= new Sprite(50, 50);
        var wordgc 	= new Sprite(50, 50);
        var wordbar 	= new Sprite(50, 50);

        wordtalk	.image = game_.assets[imgtalk		];  // word*に画像適用
        word00		.image = game_.assets[img00		];
        wordbun		.image = game_.assets[imgbun		];
        wordkarada	.image = game_.assets[imgkarada		];
        wordhai		.image = game_.assets[imghai		];
        wordiie		.image = game_.assets[imgiie		];
        wordten		.image = game_.assets[imgten		];
        wordmaru	.image = game_.assets[imgmaru		];
        wordzenbukesu	.image = game_.assets[imgzenbukesu	];
        wordkesu	.image = game_.assets[imgkesu		];
        word1		.image = game_.assets[img1		];
        word2		.image = game_.assets[img2		];
        word3		.image = game_.assets[img3		];
        word4		.image = game_.assets[img4		];
        word5		.image = game_.assets[img5		];
        word6		.image = game_.assets[img6		];
        word7		.image = game_.assets[img7		];
        word8		.image = game_.assets[img8		];
        word9		.image = game_.assets[img9		];
        word0		.image = game_.assets[img0		];
        wordgb		.image = game_.assets[imggb		];
        wordgc		.image = game_.assets[imggc		];
        wordbar		.image = game_.assets[imgbar		];

	//画像の設定  中央部分
        var wordhai2 		= new Sprite(50, 50);
        var wordiie2 		= new Sprite(50, 50);
        var worddochirademoii 	= new Sprite(50, 50);
        var worddochirademonai 	= new Sprite(50, 50);
        var wordmouichido2	= new Sprite(50, 50);
        var wordarigatou	= new Sprite(50, 50);
        var wordonegaisimasu2	= new Sprite(50, 50);
        var wordmouiidesu	= new Sprite(50, 50);
        var wordgomennasai	= new Sprite(50, 50);
        var wordsukosimatte	= new Sprite(50, 50);
        var wordkonnichiha	= new Sprite(50, 50);
        var wordsayounara	= new Sprite(50, 50);
        var wordhajimemasite	= new Sprite(50, 50);
        var wordatuidesu	= new Sprite(50, 50);
        var wordsamuidesu	= new Sprite(50, 50);
        var wordtanosii		= new Sprite(50, 50);
        var worduresii		= new Sprite(50, 50);
        var wordsabisii		= new Sprite(50, 50);
        var wordkanasii		= new Sprite(50, 50);
        var wordkuyasii		= new Sprite(50, 50);
        var wordohayou		= new Sprite(50, 50);
        var wordoyasumi		= new Sprite(50, 50);
        var wordyorosiku	= new Sprite(50, 50);
        var wordnemutai		= new Sprite(50, 50);
        var wordokiteimasu	= new Sprite(50, 50);

        wordhai2		.image = game_.assets[img2hai		];
        wordiie2		.image = game_.assets[img2iie		];
        worddochirademoii	.image = game_.assets[img2dochirademoii	];
        worddochirademonai	.image = game_.assets[img2dochirademonai];
        wordmouichido2		.image = game_.assets[img2mouichido2	];
        wordarigatou		.image = game_.assets[img2arigatou	];
        wordonegaisimasu2	.image = game_.assets[img2onegaisimasu2	];
        wordmouiidesu		.image = game_.assets[img2mouiidesu	];
        wordgomennasai		.image = game_.assets[img2gomennasai	];
        wordsukosimatte		.image = game_.assets[img2sukosimatte	];
        wordkonnichiha		.image = game_.assets[img2konnichiha	];
        wordsayounara		.image = game_.assets[img2sayounara	];
        wordhajimemasite	.image = game_.assets[img2hajimemasite	];
        wordatuidesu		.image = game_.assets[img2atuidesu	];
        wordsamuidesu		.image = game_.assets[img2samuidesu	];
        wordtanosii		.image = game_.assets[img2tanosii	];
        worduresii		.image = game_.assets[img2uresii	];
        wordsabisii		.image = game_.assets[img2sabisii	];
        wordkanasii		.image = game_.assets[img2kanasii	];
        wordkuyasii		.image = game_.assets[img2kuyasii	];
        wordohayou		.image = game_.assets[img2ohayou	];
        wordoyasumi		.image = game_.assets[img2oyasumi	];
        wordyorosiku		.image = game_.assets[img2yorosiku	];
        wordnemutai		.image = game_.assets[img2nemutai	];
        wordokiteimasu		.image = game_.assets[img2okiteimasu	];
	//画像の設定  右部分
        var wordmachigaemasita2	= new Sprite(50, 50);
        var wordwakarimasita 	= new Sprite(50, 50);
        var wordwakarimasen 	= new Sprite(50, 50);
        var worddouitasimasite	= new Sprite(50, 50);
        var wordchigaimasu 	= new Sprite(50, 50);
        var wordsukidesu 	= new Sprite(50, 50);
        var wordkiraidesu 	= new Sprite(50, 50);
        var wordsitteru 	= new Sprite(50, 50);
        var wordsiranai 	= new Sprite(50, 50);
        var wordyokatta 	= new Sprite(50, 50);
        var wordgennkidesu 	= new Sprite(50, 50);
        var wordtukareta 	= new Sprite(50, 50);
        var wordwatasi 		= new Sprite(50, 50);
        var wordanata 		= new Sprite(50, 50);
        var wordminnna 		= new Sprite(50, 50);
        var wordyoukoso 	= new Sprite(50, 50);
        var wordmatakitene 	= new Sprite(50, 50);
        var wordeeto 		= new Sprite(50, 50);
        var wordsaa 		= new Sprite(50, 50);
        var wordquestion 	= new Sprite(50, 50);
        var wordmaamaa 		= new Sprite(50, 50);
        var worddekakeru 	= new Sprite(50, 50);
        var wordahaha 		= new Sprite(50, 50);
        var wordunnunn 		= new Sprite(50, 50);
        var wordexclamation 	= new Sprite(50, 50);

        wordmachigaemasita2	.image = game_.assets[img2machigaemasita2];
        wordwakarimasita 	.image = game_.assets[img2wakarimasita 	];
        wordwakarimasen 	.image = game_.assets[img2wakarimasen 	];
        worddouitasimasite	.image = game_.assets[img2douitasimasite];
        wordchigaimasu 		.image = game_.assets[img2chigaimasu 	];
        wordsukidesu 		.image = game_.assets[img2sukidesu 	];
        wordkiraidesu 		.image = game_.assets[img2kiraidesu 	];
        wordsitteru 		.image = game_.assets[img2sitteru 	];
        wordsiranai 		.image = game_.assets[img2siranai 	];
        wordyokatta 		.image = game_.assets[img2yokatta 	];
        wordgennkidesu 		.image = game_.assets[img2gennkidesu 	];
        wordtukareta 		.image = game_.assets[img2tukareta 	];
        wordwatasi 		.image = game_.assets[img2watasi 	];
        wordanata 		.image = game_.assets[img2anata 	];
        wordminnna 		.image = game_.assets[img2minnna 	];
        wordyoukoso 		.image = game_.assets[img2youkoso 	];
        wordmatakitene 		.image = game_.assets[img2matakitene 	];
        wordeeto 		.image = game_.assets[img2eeto 		];
        wordsaa 		.image = game_.assets[img2saa 		];
        wordquestion 		.image = game_.assets[img2question 	];
        wordmaamaa 		.image = game_.assets[img2maamaa 	];
        worddekakeru 		.image = game_.assets[img2dekakeru 	];
        wordahaha 		.image = game_.assets[img2ahaha 	];
        wordunnunn 		.image = game_.assets[img2unnunn 	];
        wordexclamation 	.image = game_.assets[img2exclamation 	];

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
	wordkarada.x = wiw * 0.13; // からだ入り口
        wordkarada.y = wih * 0.6;
	wordkarada.scaleX = scx;
	wordkarada.scaleY = scy;
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
     // 第五列
	wordhai2	.x = wiw * 0.32;
        wordhai2	.y = wih * 0.5;
	wordhai2	.scaleX = scx;
	wordhai2	.scaleY = scy;
	wordarigatou	.x = wiw * 0.32;
        wordarigatou	.y = wih * 0.6;
	wordarigatou	.scaleX = scx;
	wordarigatou	.scaleY = scy;
	wordkonnichiha	.x = wiw * 0.32;
        wordkonnichiha	.y = wih * 0.7;
	wordkonnichiha	.scaleX = scx;
	wordkonnichiha	.scaleY = scy;
	wordtanosii	.x = wiw * 0.32;
        wordtanosii	.y = wih * 0.8;
        wordtanosii	.scaleX = scx;
	wordtanosii	.scaleY = scy;
	wordohayou	.x = wiw * 0.32;
        wordohayou	.y = wih * 0.9;
	wordohayou	.scaleX = scx;
	wordohayou	.scaleY = scy;
     // 第六列
	wordiie2	.x = wiw * 0.38;
        wordiie2	.y = wih * 0.5;
	wordiie2	.scaleX = scx;
	wordiie2	.scaleY = scy;
	wordonegaisimasu2	.x = wiw * 0.38;
        wordonegaisimasu2	.y = wih * 0.6;
	wordonegaisimasu2	.scaleX = scx;
	wordonegaisimasu2	.scaleY = scy;
	wordsayounara	.x = wiw * 0.38;
        wordsayounara	.y = wih * 0.7;
	wordsayounara	.scaleX = scx;
	wordsayounara	.scaleY = scy;
	worduresii	.x = wiw * 0.38;
        worduresii	.y = wih * 0.8;
        worduresii	.scaleX = scx;
	worduresii	.scaleY = scy;
	wordoyasumi	.x = wiw * 0.38;
        wordoyasumi	.y = wih * 0.9;
	wordoyasumi	.scaleX = scx;
	wordoyasumi	.scaleY = scy;
     // 第七列
	worddochirademoii	.x = wiw * 0.44;
        worddochirademoii	.y = wih * 0.5;
	worddochirademoii	.scaleX = scx;
	worddochirademoii	.scaleY = scy;
	wordmouiidesu	.x = wiw * 0.44;
        wordmouiidesu	.y = wih * 0.6;
	wordmouiidesu	.scaleX = scx;
	wordmouiidesu	.scaleY = scy;
	wordhajimemasite	.x = wiw * 0.44;
        wordhajimemasite	.y = wih * 0.7;
	wordhajimemasite	.scaleX = scx;
	wordhajimemasite	.scaleY = scy;
	wordsabisii	.x = wiw * 0.44;
        wordsabisii	.y = wih * 0.8;
        wordsabisii	.scaleX = scx;
	wordsabisii	.scaleY = scy;
	wordyorosiku	.x = wiw * 0.44;
        wordyorosiku	.y = wih * 0.9;
	wordyorosiku	.scaleX = scx;
	wordyorosiku	.scaleY = scy;
     // 第八列
	worddochirademonai	.x = wiw * 0.50;
        worddochirademonai	.y = wih * 0.5;
	worddochirademonai	.scaleX = scx;
	worddochirademonai	.scaleY = scy;
	wordgomennasai	.x = wiw * 0.50;
        wordgomennasai	.y = wih * 0.6;
	wordgomennasai	.scaleX = scx;
	wordgomennasai	.scaleY = scy;
	wordatuidesu	.x = wiw * 0.50;
        wordatuidesu	.y = wih * 0.7;
	wordatuidesu	.scaleX = scx;
	wordatuidesu	.scaleY = scy;
	wordkanasii	.x = wiw * 0.50;
        wordkanasii	.y = wih * 0.8;
        wordkanasii	.scaleX = scx;
	wordkanasii	.scaleY = scy;
	wordnemutai	.x = wiw * 0.50;
        wordnemutai	.y = wih * 0.9;
	wordnemutai	.scaleX = scx;
	wordnemutai	.scaleY = scy;
     // 第九列
	wordmouichido2	.x = wiw * 0.56;
        wordmouichido2	.y = wih * 0.5;
	wordmouichido2	.scaleX = scx;
	wordmouichido2	.scaleY = scy;
	wordsukosimatte	.x = wiw * 0.56;
        wordsukosimatte	.y = wih * 0.6;
	wordsukosimatte	.scaleX = scx;
	wordsukosimatte	.scaleY = scy;
	wordsamuidesu	.x = wiw * 0.56;
        wordsamuidesu	.y = wih * 0.7;
	wordsamuidesu	.scaleX = scx;
	wordsamuidesu	.scaleY = scy;
	wordkuyasii	.x = wiw * 0.56;
        wordkuyasii	.y = wih * 0.8;
        wordkuyasii	.scaleX = scx;
	wordkuyasii	.scaleY = scy;
	wordokiteimasu	.x = wiw * 0.56;
        wordokiteimasu	.y = wih * 0.9;
	wordokiteimasu	.scaleX = scx;
	wordokiteimasu	.scaleY = scy;
     // 第十列
	wordmachigaemasita2	.x = wiw * 0.63;
        wordmachigaemasita2	.y = wih * 0.5;
	wordmachigaemasita2	.scaleX = scx;
	wordmachigaemasita2	.scaleY = scy;
	wordsukidesu	.x = wiw * 0.63;
        wordsukidesu	.y = wih * 0.6;
	wordsukidesu	.scaleX = scx;
	wordsukidesu	.scaleY = scy;
	wordgennkidesu	.x = wiw * 0.63;
        wordgennkidesu	.y = wih * 0.7;
	wordgennkidesu	.scaleX = scx;
	wordgennkidesu	.scaleY = scy;
	wordyoukoso	.x = wiw * 0.63;
        wordyoukoso	.y = wih * 0.8;
        wordyoukoso	.scaleX = scx;
	wordyoukoso	.scaleY = scy;
	wordmaamaa	.x = wiw * 0.63;
        wordmaamaa	.y = wih * 0.9;
	wordmaamaa	.scaleX = scx;
	wordmaamaa	.scaleY = scy;
     // 第十一列
	wordwakarimasita	.x = wiw * 0.69;
        wordwakarimasita	.y = wih * 0.5;
	wordwakarimasita	.scaleX = scx;
	wordwakarimasita	.scaleY = scy;
	wordkiraidesu	.x = wiw * 0.69;
        wordkiraidesu	.y = wih * 0.6;
	wordkiraidesu	.scaleX = scx;
	wordkiraidesu	.scaleY = scy;
	wordtukareta	.x = wiw * 0.69;
        wordtukareta	.y = wih * 0.7;
	wordtukareta	.scaleX = scx;
	wordtukareta	.scaleY = scy;
	wordmatakitene	.x = wiw * 0.69;
        wordmatakitene	.y = wih * 0.8;
        wordmatakitene	.scaleX = scx;
	wordmatakitene	.scaleY = scy;
	worddekakeru	.x = wiw * 0.69;
        worddekakeru	.y = wih * 0.9;
	worddekakeru	.scaleX = scx;
	worddekakeru	.scaleY = scy;
     // 第十二列
	wordwakarimasen	.x = wiw * 0.75;
        wordwakarimasen	.y = wih * 0.5;
	wordwakarimasen	.scaleX = scx;
	wordwakarimasen	.scaleY = scy;
	wordsitteru	.x = wiw * 0.75;
        wordsitteru	.y = wih * 0.6;
	wordsitteru	.scaleX = scx;
	wordsitteru	.scaleY = scy;
	wordwatasi	.x = wiw * 0.75;
        wordwatasi	.y = wih * 0.7;
	wordwatasi	.scaleX = scx;
	wordwatasi	.scaleY = scy;
	wordeeto	.x = wiw * 0.75;
        wordeeto	.y = wih * 0.8;
        wordeeto	.scaleX = scx;
	wordeeto	.scaleY = scy;
	wordahaha	.x = wiw * 0.75;
        wordahaha	.y = wih * 0.9;
	wordahaha	.scaleX = scx;
	wordahaha	.scaleY = scy;
     // 第十三列
	worddouitasimasite	.x = wiw * 0.81;
        worddouitasimasite	.y = wih * 0.5;
	worddouitasimasite	.scaleX = scx;
	worddouitasimasite	.scaleY = scy;
	wordsiranai	.x = wiw * 0.81;
        wordsiranai	.y = wih * 0.6;
	wordsiranai	.scaleX = scx;
	wordsiranai	.scaleY = scy;
	wordanata	.x = wiw * 0.81;
        wordanata	.y = wih * 0.7;
	wordanata	.scaleX = scx;
	wordanata	.scaleY = scy;
	wordsaa	.x = wiw * 0.81;
        wordsaa	.y = wih * 0.8;
        wordsaa	.scaleX = scx;
	wordsaa	.scaleY = scy;
	wordunnunn	.x = wiw * 0.81;
        wordunnunn	.y = wih * 0.9;
	wordunnunn	.scaleX = scx;
	wordunnunn	.scaleY = scy;
     // 第十四列
	wordchigaimasu	.x = wiw * 0.87;
        wordchigaimasu	.y = wih * 0.5;
	wordchigaimasu	.scaleX = scx;
	wordchigaimasu	.scaleY = scy;
	wordyokatta	.x = wiw * 0.87;
        wordyokatta	.y = wih * 0.6;
	wordyokatta	.scaleX = scx;
	wordyokatta	.scaleY = scy;
	wordminnna	.x = wiw * 0.87;
        wordminnna	.y = wih * 0.7;
	wordminnna	.scaleX = scx;
	wordminnna	.scaleY = scy;
	wordquestion	.x = wiw * 0.87;
        wordquestion	.y = wih * 0.8;
        wordquestion	.scaleX = scx;
	wordquestion	.scaleY = scy;
	wordexclamation	.x = wiw * 0.87;
        wordexclamation	.y = wih * 0.9;
	wordexclamation	.scaleX = scx;
	wordexclamation	.scaleY = scy;


     // 第一列表示
        scene.addChild(wordtalk);
        scene.addChild(wordbun); // 文きりかえ
        scene.addChild(wordhai);
        scene.addChild(wordten);
        scene.addChild(wordzenbukesu);
     // 第二列表示
        scene.addChild(word00);
        scene.addChild(wordkarada); // からだ文字盤
        scene.addChild(wordiie);
        scene.addChild(wordmaru);
        scene.addChild(wordkesu);
     // 第三列表示
        scene.addChild(word1);
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(word5);
     // 第四列表示
        scene.addChild(word6);
        scene.addChild(word7);
        scene.addChild(word8);
        scene.addChild(word9);
        scene.addChild(word0);
     // 第五列表示
        scene.addChild(wordhai2		);
        scene.addChild(wordarigatou	);
        scene.addChild(wordkonnichiha	);
        scene.addChild(wordtanosii	);
        scene.addChild(wordohayou	);
     // 第六列表示
        scene.addChild(wordiie2		);
        scene.addChild(wordonegaisimasu2	);
        scene.addChild(wordsayounara	);
        scene.addChild(worduresii	);
        scene.addChild(wordoyasumi	);
     // 第七列表示
        scene.addChild(worddochirademoii	);
        scene.addChild(wordmouiidesu	);
        scene.addChild(wordhajimemasite	);
        scene.addChild(wordsabisii	);
        scene.addChild(wordyorosiku	);
     // 第八列表示
        scene.addChild(worddochirademonai	);
        scene.addChild(wordgomennasai	);
        scene.addChild(wordatuidesu	);
        scene.addChild(wordkanasii	);
        scene.addChild(wordnemutai	);
     // 第九列表示
        scene.addChild(wordmouichido2	);
        scene.addChild(wordsukosimatte	);
        scene.addChild(wordsamuidesu	);
        scene.addChild(wordkuyasii	);
        scene.addChild(wordokiteimasu	);
     // 第十列表示
        scene.addChild(wordmachigaemasita2	);
        scene.addChild(wordsukidesu	);
        scene.addChild(wordgennkidesu	);
        scene.addChild(wordyoukoso	);
        scene.addChild(wordmaamaa	);
     // 第十一列表示
        scene.addChild(wordwakarimasita	);
        scene.addChild(wordkiraidesu	);
        scene.addChild(wordtukareta	);
        scene.addChild(wordmatakitene	);
        scene.addChild(worddekakeru	);
     // 第十二列表示
        scene.addChild(wordwakarimasen	);
        scene.addChild(wordsitteru	);
        scene.addChild(wordwatasi	);
        scene.addChild(wordeeto		);
        scene.addChild(wordahaha	);
     // 第十三列表示
        scene.addChild(worddouitasimasite	);
        scene.addChild(wordsiranai	);
        scene.addChild(wordanata	);
        scene.addChild(wordsaa		);
        scene.addChild(wordunnunn	);
     // 第十四列表示
        scene.addChild(wordchigaimasu	);
        scene.addChild(wordyokatta	);
        scene.addChild(wordminnna	);
        scene.addChild(wordquestion	);
        scene.addChild(wordexclamation	);

        scene.addChild(title);   //文書　と文書番号の表示
        scene.addChild(titleb);

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定

  // 文字にタッチイベントを設定する
    // 左部分
      //読み上げ部
            wordtalk.addEventListener(Event.TOUCH_START, function(e) {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
            });

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '空白';
                speechSynthesis.speak(synthes);
                title.text = title.text + '　';
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

            wordkarada.addEventListener(Event.TOUCH_START, function(e) {  //ひらがな文字盤
 		wordkarada.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkarada.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse2].clone().play();
                game_.pushScene(createKaradaScene());// からだ文字盤へ切り替え

                //game_.popScene(); // ひらがな文字盤へ切り替え
            });

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'はい';
            });

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'いいえ';
            });

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'てん';
                speechSynthesis.speak(synthes);
                title.text = title.text + '、';
            });

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まる';
                speechSynthesis.speak(synthes);
                title.text = title.text + '。';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひとつ消す';
                speechSynthesis.speak(synthes);
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '全部消す';
                speechSynthesis.speak(synthes);
                title.text = '';
            });

      //　数字
            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '１';
                speechSynthesis.speak(synthes);
                title.text = title.text + '１';
            });

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '２';
                speechSynthesis.speak(synthes);
                title.text = title.text + '２';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '３';
                speechSynthesis.speak(synthes);
                title.text = title.text + '３';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '４';
                speechSynthesis.speak(synthes);
                title.text = title.text + '４';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '５';
                speechSynthesis.speak(synthes);
                title.text = title.text + '５';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '６';
                speechSynthesis.speak(synthes);
                title.text = title.text + '６';
            });

            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '７';
                speechSynthesis.speak(synthes);
                title.text = title.text + '７';
            });

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '８';
                speechSynthesis.speak(synthes);
                title.text = title.text + '８';
            });

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '９';
                speechSynthesis.speak(synthes);
                title.text = title.text + '９';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '０';
                speechSynthesis.speak(synthes);
                title.text = title.text + '０';
            });

    // 中部分
            wordhai2.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はい';
            });

            wordarigatou.addEventListener(Event.TOUCH_START, function(e) {
 		wordarigatou.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordarigatou.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ありがとう';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ありがとう';
            });

            wordkonnichiha.addEventListener(Event.TOUCH_START, function(e) {
 		wordkonnichiha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkonnichiha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'こんにちは';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'こんにちは';
            });

            wordtanosii.addEventListener(Event.TOUCH_START, function(e) {
 		wordtanosii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtanosii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'たのしいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'たのしいです';
            });

            wordohayou.addEventListener(Event.TOUCH_START, function(e) {
 		wordohayou.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordohayou.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'おはようございます';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'おはようございます';
            });

            wordiie2.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'いいえ';
            });

            wordonegaisimasu2.addEventListener(Event.TOUCH_START, function(e) {
 		wordonegaisimasu2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordonegaisimasu2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'おねがいします';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'おねがいします';
            });

            wordsayounara.addEventListener(Event.TOUCH_START, function(e) {
 		wordsayounara.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsayounara.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'さようなら';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'さようなら';
            });

            worduresii.addEventListener(Event.TOUCH_START, function(e) {
 		worduresii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worduresii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'うれしいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'うれしいです';
            });

            wordoyasumi.addEventListener(Event.TOUCH_START, function(e) {
 		wordoyasumi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordoyasumi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'おやすみなさい';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'おやすみなさい';
            });

            worddochirademoii.addEventListener(Event.TOUCH_START, function(e) {
 		worddochirademoii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddochirademoii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'どちらでもいいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'どちらでもいいです';
            });

            wordmouiidesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmouiidesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmouiidesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'もういいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'もういいです';
            });

            wordhajimemasite.addEventListener(Event.TOUCH_START, function(e) {
 		wordhajimemasite.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhajimemasite.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はじめまして';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はじめまして';
            });

            wordsabisii.addEventListener(Event.TOUCH_START, function(e) {
 		wordsabisii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsabisii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'さびしいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'さびしいです';
            });

            wordyorosiku.addEventListener(Event.TOUCH_START, function(e) {
 		wordyorosiku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyorosiku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'よろしく';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'よろしく';
            });

            worddochirademonai.addEventListener(Event.TOUCH_START, function(e) {
 		worddochirademonai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddochirademonai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'どちらでもありません';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'どちらでもありません';
            });

            wordgomennasai.addEventListener(Event.TOUCH_START, function(e) {
 		wordgomennasai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgomennasai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ごめんなさい';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ごめんなさい';
            });

            wordatuidesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordatuidesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordatuidesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あついです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'あついです';
            });

            wordkanasii.addEventListener(Event.TOUCH_START, function(e) {
 		wordkanasii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkanasii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'かなしいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'かなしいです';
            });

            wordnemutai.addEventListener(Event.TOUCH_START, function(e) {
 		wordnemutai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnemutai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ねむたいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ねむたいです';
            });

            wordmouichido2.addEventListener(Event.TOUCH_START, function(e) {
 		wordmouichido2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmouichido2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'もういちどおねがいします';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'もういちどおねがいします';
            });

            wordsukosimatte.addEventListener(Event.TOUCH_START, function(e) {
 		wordsukosimatte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsukosimatte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'すこしまってください';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'すこしまってください';
            });

            wordsamuidesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsamuidesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsamuidesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'さむいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'さむいです';
            });

            wordkuyasii.addEventListener(Event.TOUCH_START, function(e) {
 		wordkuyasii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkuyasii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'くやしいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'くやしいです';
            });

            wordokiteimasu.addEventListener(Event.TOUCH_START, function(e) {
 		wordokiteimasu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordokiteimasu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'おきています';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'おきています';
            });

    // 右部分
            wordmachigaemasita2.addEventListener(Event.TOUCH_START, function(e) {
 		wordmachigaemasita2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmachigaemasita2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まちがえました';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'まちがえました';
            });

            wordsukidesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsukidesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsukidesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'すきです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'すきです';
            });

            wordgennkidesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordgennkidesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordgennkidesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'げんきです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'げんきです';
            });

            wordyoukoso.addEventListener(Event.TOUCH_START, function(e) {
 		wordyoukoso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyoukoso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ようこそ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ようこそ';
            });

            wordmaamaa.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaamaa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaamaa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まあまあです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'まあまあです';
            });

            wordwakarimasita.addEventListener(Event.TOUCH_START, function(e) {
 		wordwakarimasita.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwakarimasita.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'わかりました';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'わかりました';
            });

            wordkiraidesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkiraidesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkiraidesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'きらいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'きらいです';
            });

            wordtukareta.addEventListener(Event.TOUCH_START, function(e) {
 		wordtukareta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtukareta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'つかれました';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'つかれました';
            });

            wordmatakitene.addEventListener(Event.TOUCH_START, function(e) {
 		wordmatakitene.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmatakitene.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'またきてね';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'またきてね';
            });

            worddekakeru.addEventListener(Event.TOUCH_START, function(e) {
 		worddekakeru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddekakeru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'でかけます';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'でかけます';
            });

            wordwakarimasen.addEventListener(Event.TOUCH_START, function(e) {
 		wordwakarimasen.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwakarimasen.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'わかりません';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'わかりません';
            });

            wordsitteru.addEventListener(Event.TOUCH_START, function(e) {
 		wordsitteru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsitteru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'しっています';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'しっています';
            });

            wordwatasi.addEventListener(Event.TOUCH_START, function(e) {
 		wordwatasi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwatasi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'わたし';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'わたし';
            });

            wordeeto.addEventListener(Event.TOUCH_START, function(e) {
 		wordeeto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordeeto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'えーっと';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'えーっと(^^;';
            });

            wordahaha.addEventListener(Event.TOUCH_START, function(e) {
 		wordahaha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordahaha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あはははは';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'あはは(^0^)';
            });

            worddouitasimasite.addEventListener(Event.TOUCH_START, function(e) {
 		worddouitasimasite.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddouitasimasite.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'どういたしまして';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'どういたしまして';
            });

            wordsiranai.addEventListener(Event.TOUCH_START, function(e) {
 		wordsiranai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsiranai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'しりません';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'しりません';
            });

            wordanata.addEventListener(Event.TOUCH_START, function(e) {
 		wordanata.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordanata.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あなた';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'あなた';
            });

            wordsaa.addEventListener(Event.TOUCH_START, function(e) {
 		wordsaa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsaa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'さあー';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'さあー';
            });

            wordunnunn.addEventListener(Event.TOUCH_START, function(e) {
 		wordunnunn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordunnunn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'うんうん';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'うんうん';
            });

            wordchigaimasu.addEventListener(Event.TOUCH_START, function(e) {
 		wordchigaimasu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordchigaimasu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ちがいます';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ちがいます';
            });

            wordyokatta.addEventListener(Event.TOUCH_START, function(e) {
 		wordyokatta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyokatta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'よかった';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'よかった';
            });

            wordminnna.addEventListener(Event.TOUCH_START, function(e) {
 		wordminnna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordminnna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'みんな';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'みんな';
            });

            wordquestion.addEventListener(Event.TOUCH_START, function(e) {
 		wordquestion.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordquestion.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はてな';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はてな？';
            });

            wordexclamation.addEventListener(Event.TOUCH_START, function(e) {
 		wordexclamation.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordexclamation.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'びっくり';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'びっくり';
            });

           return scene;
       };
    	// あいさつ文字盤ここまで

    	// からだ文字盤を作る関数
            var createKaradaScene = function() {
                var scene = new Scene();
                //var label = new Label('からだ文字盤');        // 表示切り替え エラー確認用
                //scene.addChild(label);

	//画像の設定  左部分
        var wordtalk	= new Sprite(50, 50);  // スプライト大きさ設定
        var word00 	= new Sprite(50, 50);
        var wordbun	= new Sprite(50, 50);
        var wordhiragana = new Sprite(50, 50);
        var wordhai 	= new Sprite(50, 50);
        var wordiie 	= new Sprite(50, 50);
        var wordten 	= new Sprite(50, 50);
        var wordmaru 	= new Sprite(50, 50);
        var wordzenbukesu = new Sprite(50, 50);
        var wordkesu 	= new Sprite(50, 50);
        var word1 	= new Sprite(50, 50);
        var word2 	= new Sprite(50, 50);
        var word3 	= new Sprite(50, 50);
        var word4 	= new Sprite(50, 50);
        var word5 	= new Sprite(50, 50);
        var word6 	= new Sprite(50, 50);
        var word7 	= new Sprite(50, 50);
        var word8 	= new Sprite(50, 50);
        var word9 	= new Sprite(50, 50);
        var word0 	= new Sprite(50, 50);
        var wordgb 	= new Sprite(50, 50);
        var wordgc 	= new Sprite(50, 50);
        var wordbar 	= new Sprite(50, 50);

        wordtalk	.image = game_.assets[imgtalk		];  // word*に画像適用
        word00		.image = game_.assets[img00		];
        wordbun		.image = game_.assets[imgbun		];
        wordhiragana	.image = game_.assets[imghiragana	];
        wordhai		.image = game_.assets[imghai		];
        wordiie		.image = game_.assets[imgiie		];
        wordten		.image = game_.assets[imgten		];
        wordmaru	.image = game_.assets[imgmaru		];
        wordzenbukesu	.image = game_.assets[imgzenbukesu	];
        wordkesu	.image = game_.assets[imgkesu		];
        word1		.image = game_.assets[img1		];
        word2		.image = game_.assets[img2		];
        word3		.image = game_.assets[img3		];
        word4		.image = game_.assets[img4		];
        word5		.image = game_.assets[img5		];
        word6		.image = game_.assets[img6		];
        word7		.image = game_.assets[img7		];
        word8		.image = game_.assets[img8		];
        word9		.image = game_.assets[img9		];
        word0		.image = game_.assets[img0		];
        wordgb		.image = game_.assets[imggb		];
        wordgc		.image = game_.assets[imggc		];
        wordbar		.image = game_.assets[imgbar		];
	//画像の設定  中央部分
        var wordhai2 		= new Sprite(50, 50);
        var wordiie2 		= new Sprite(50, 50);
        var worddochirademoii 	= new Sprite(50, 50);
        var worddochirademonai 	= new Sprite(50, 50);
        var wordmouichido2	= new Sprite(50, 50);
        var wordatama		= new Sprite(50, 50);
        var wordkao 		= new Sprite(50, 50);
        var wordme 		= new Sprite(50, 50);
        var wordkuchi		= new Sprite(50, 50);
        var wordhana 		= new Sprite(50, 50);
        var wordmimi 		= new Sprite(50, 50);
        var wordmayu 		= new Sprite(50, 50);
        var wordhoppe 		= new Sprite(50, 50);
        var wordkubi 		= new Sprite(50, 50);
        var wordkata 		= new Sprite(50, 50);
        var wordte 		= new Sprite(50, 50);
        var wordashi 		= new Sprite(50, 50);
        var wordyubi 		= new Sprite(50, 50);
        var wordmune 		= new Sprite(50, 50);
        var wordkoshi 		= new Sprite(50, 50);
        var wordhiji 		= new Sprite(50, 50);
        var wordhiza 		= new Sprite(50, 50);
        var wordhara 		= new Sprite(50, 50);
        var wordsenaka 		= new Sprite(50, 50);
        var wordosiri 		= new Sprite(50, 50);

        wordhai2		.image = game_.assets[img2hai		];
        wordiie2		.image = game_.assets[img2iie		];
        worddochirademoii	.image = game_.assets[img2dochirademoii	];
        worddochirademonai	.image = game_.assets[img2dochirademonai];
        wordmouichido2		.image = game_.assets[img2mouichido2	];
        wordatama		.image = game_.assets[img2atama		];
        wordkao 		.image = game_.assets[img2kao 		];
        wordme 			.image = game_.assets[img2me 		];
        wordkuchi		.image = game_.assets[img2kuchi		];
        wordhana 		.image = game_.assets[img2hana 		];
        wordmimi 		.image = game_.assets[img2mimi 		];
        wordmayu 		.image = game_.assets[img2mayu 		];
        wordhoppe 		.image = game_.assets[img2hoppe 	];
        wordkubi 		.image = game_.assets[img2kubi 		];
        wordkata 		.image = game_.assets[img2kata 		];
        wordte 			.image = game_.assets[img2te 		];
        wordashi 		.image = game_.assets[img2ashi 		];
        wordyubi 		.image = game_.assets[img2yubi 		];
        wordmune 		.image = game_.assets[img2mune 		];
        wordkoshi 		.image = game_.assets[img2koshi 	];
        wordhiji 		.image = game_.assets[img2hiji 		];
        wordhiza 		.image = game_.assets[img2hiza 		];
        wordhara 		.image = game_.assets[img2hara 		];
        wordsenaka 		.image = game_.assets[img2senaka 	];
        wordosiri 		.image = game_.assets[img2osiri 	];
	//画像の設定  右部分
        var wordmachigaemasita2	= new Sprite(50, 50);
        var wordkurusii		= new Sprite(50, 50);
        var worditai 		= new Sprite(50, 50);
        var wordkayui 		= new Sprite(50, 50);
        var wordnodokawaku 	= new Sprite(50, 50);
        var wordhidari 		= new Sprite(50, 50);
        var wordmigi 		= new Sprite(50, 50);
        var wordmae 		= new Sprite(50, 50);
        var wordusiro 		= new Sprite(50, 50);
        var wordhantai 		= new Sprite(50, 50);
        var wordue 		= new Sprite(50, 50);
        var wordnaka 		= new Sprite(50, 50);
        var wordsita 		= new Sprite(50, 50);
        var wordtukeru 		= new Sprite(50, 50);
        var wordtoru 		= new Sprite(50, 50);
        var wordtaihen 		= new Sprite(50, 50);
        var wordfutuu 		= new Sprite(50, 50);
        var wordsukosi 		= new Sprite(50, 50);
        var wordtudukeru	= new Sprite(50, 50);
        var wordyameru 		= new Sprite(50, 50);
        var wordga 		= new Sprite(50, 50);
        var wordni 		= new Sprite(50, 50);
        var wordwo 		= new Sprite(50, 50);
        var wordhawa 		= new Sprite(50, 50);
        var wordde 		= new Sprite(50, 50);

        wordmachigaemasita2	.image = game_.assets[img2machigaemasita2];
        wordkurusii		.image = game_.assets[img2kurusii	];
        worditai 		.image = game_.assets[img2itai 		];
        wordkayui 		.image = game_.assets[img2kayui 	];
        wordnodokawaku 		.image = game_.assets[img2nodokawaku 	];
        wordhidari 		.image = game_.assets[img2hidari 	];
        wordmigi 		.image = game_.assets[img2migi 		];
        wordmae 		.image = game_.assets[img2mae 		];
        wordusiro 		.image = game_.assets[img2usiro 	];
        wordhantai 		.image = game_.assets[img2hantai 	];
        wordue 			.image = game_.assets[img2ue 		];
        wordnaka 		.image = game_.assets[img2naka 		];
        wordsita 		.image = game_.assets[img2sita 		];
        wordtukeru 		.image = game_.assets[img2tukeru 	];
        wordtoru 		.image = game_.assets[img2toru 		];
        wordtaihen 		.image = game_.assets[img2taihen 	];
        wordfutuu 		.image = game_.assets[img2futuu 	];
        wordsukosi 		.image = game_.assets[img2sukosi 	];
        wordtudukeru		.image = game_.assets[img2tudukeru	];
        wordyameru 		.image = game_.assets[img2yameru 	];
        wordga 			.image = game_.assets[img2ga 		];
        wordni 			.image = game_.assets[img2ni 		];
        wordwo 			.image = game_.assets[img2wo 		];
        wordhawa 		.image = game_.assets[img2hawa 		];
        wordde 			.image = game_.assets[img2de 		];

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
	wordhiragana.x = wiw * 0.13; // ひらがな入り口
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
     // 第五列
	wordhai2	.x = wiw * 0.32;
        wordhai2	.y = wih * 0.5;
	wordhai2	.scaleX = scx;
	wordhai2	.scaleY = scy;
	wordatama	.x = wiw * 0.32;
        wordatama	.y = wih * 0.6;
	wordatama	.scaleX = scx;
	wordatama	.scaleY = scy;
	wordmimi	.x = wiw * 0.32;
        wordmimi	.y = wih * 0.7;
	wordmimi	.scaleX = scx;
	wordmimi	.scaleY = scy;
	wordte		.x = wiw * 0.32;
        wordte		.y = wih * 0.8;
        wordte		.scaleX = scx;
	wordte		.scaleY = scy;
	wordhiji	.x = wiw * 0.32;
        wordhiji	.y = wih * 0.9;
	wordhiji	.scaleX = scx;
	wordhiji	.scaleY = scy;
     // 第六列
	wordiie2	.x = wiw * 0.38;
        wordiie2	.y = wih * 0.5;
	wordiie2	.scaleX = scx;
	wordiie2	.scaleY = scy;
	wordkao		.x = wiw * 0.38;
        wordkao		.y = wih * 0.6;
	wordkao		.scaleX = scx;
	wordkao		.scaleY = scy;
	wordmayu	.x = wiw * 0.38;
        wordmayu	.y = wih * 0.7;
	wordmayu	.scaleX = scx;
	wordmayu	.scaleY = scy;
	wordashi	.x = wiw * 0.38;
        wordashi	.y = wih * 0.8;
        wordashi	.scaleX = scx;
	wordashi	.scaleY = scy;
	wordhiza	.x = wiw * 0.38;
        wordhiza	.y = wih * 0.9;
	wordhiza	.scaleX = scx;
	wordhiza	.scaleY = scy;
     // 第七列
	worddochirademoii	.x = wiw * 0.44;
        worddochirademoii	.y = wih * 0.5;
	worddochirademoii	.scaleX = scx;
	worddochirademoii	.scaleY = scy;
	wordme			.x = wiw * 0.44;
        wordme			.y = wih * 0.6;
	wordme			.scaleX = scx;
	wordme			.scaleY = scy;
	wordhoppe		.x = wiw * 0.44;
        wordhoppe		.y = wih * 0.7;
	wordhoppe		.scaleX = scx;
	wordhoppe		.scaleY = scy;
	wordyubi		.x = wiw * 0.44;
        wordyubi		.y = wih * 0.8;
        wordyubi		.scaleX = scx;
	wordyubi		.scaleY = scy;
	wordhara		.x = wiw * 0.44;
        wordhara		.y = wih * 0.9;
	wordhara		.scaleX = scx;
	wordhara		.scaleY = scy;
     // 第八列
	worddochirademonai	.x = wiw * 0.50;
        worddochirademonai	.y = wih * 0.5;
	worddochirademonai	.scaleX = scx;
	worddochirademonai	.scaleY = scy;
	wordkuchi	.x = wiw * 0.50;
        wordkuchi	.y = wih * 0.6;
	wordkuchi	.scaleX = scx;
	wordkuchi	.scaleY = scy;
	wordkubi	.x = wiw * 0.50;
        wordkubi	.y = wih * 0.7;
	wordkubi	.scaleX = scx;
	wordkubi	.scaleY = scy;
	wordmune	.x = wiw * 0.50;
        wordmune	.y = wih * 0.8;
        wordmune	.scaleX = scx;
	wordmune	.scaleY = scy;
	wordsenaka	.x = wiw * 0.50;
        wordsenaka	.y = wih * 0.9;
	wordsenaka	.scaleX = scx;
	wordsenaka	.scaleY = scy;
     // 第九列
	wordmouichido2	.x = wiw * 0.56;
        wordmouichido2	.y = wih * 0.5;
	wordmouichido2	.scaleX = scx;
	wordmouichido2	.scaleY = scy;
	wordhana	.x = wiw * 0.56;
        wordhana	.y = wih * 0.6;
	wordhana	.scaleX = scx;
	wordhana	.scaleY = scy;
	wordkata	.x = wiw * 0.56;
        wordkata	.y = wih * 0.7;
	wordkata	.scaleX = scx;
	wordkata	.scaleY = scy;
	wordkoshi	.x = wiw * 0.56;
        wordkoshi	.y = wih * 0.8;
        wordkoshi	.scaleX = scx;
	wordkoshi	.scaleY = scy;
	wordosiri	.x = wiw * 0.56;
        wordosiri	.y = wih * 0.9;
	wordosiri	.scaleX = scx;
	wordosiri	.scaleY = scy;
     // 第十列
	wordmachigaemasita2	.x = wiw * 0.63;
        wordmachigaemasita2	.y = wih * 0.5;
	wordmachigaemasita2	.scaleX = scx;
	wordmachigaemasita2	.scaleY = scy;
	wordhidari	.x = wiw * 0.63;
        wordhidari	.y = wih * 0.6;
	wordhidari	.scaleX = scx;
	wordhidari	.scaleY = scy;
	wordue		.x = wiw * 0.63;
        wordue		.y = wih * 0.7;
	wordue		.scaleX = scx;
	wordue		.scaleY = scy;
	wordtaihen	.x = wiw * 0.63;
        wordtaihen	.y = wih * 0.8;
        wordtaihen	.scaleX = scx;
	wordtaihen	.scaleY = scy;
	wordga		.x = wiw * 0.63;
        wordga		.y = wih * 0.9;
	wordga		.scaleX = scx;
	wordga		.scaleY = scy;
     // 第十一列
	wordkurusii	.x = wiw * 0.69;
        wordkurusii	.y = wih * 0.5;
	wordkurusii	.scaleX = scx;
	wordkurusii	.scaleY = scy;
	wordmigi	.x = wiw * 0.69;
        wordmigi	.y = wih * 0.6;
	wordmigi	.scaleX = scx;
	wordmigi	.scaleY = scy;
	wordnaka	.x = wiw * 0.69;
        wordnaka	.y = wih * 0.7;
	wordnaka	.scaleX = scx;
	wordnaka	.scaleY = scy;
	wordfutuu	.x = wiw * 0.69;
        wordfutuu	.y = wih * 0.8;
        wordfutuu	.scaleX = scx;
	wordfutuu	.scaleY = scy;
	wordni		.x = wiw * 0.69;
        wordni		.y = wih * 0.9;
	wordni		.scaleX = scx;
	wordni		.scaleY = scy;
     // 第十二列
	worditai	.x = wiw * 0.75;
        worditai	.y = wih * 0.5;
	worditai	.scaleX = scx;
	worditai	.scaleY = scy;
	wordmae		.x = wiw * 0.75;
        wordmae		.y = wih * 0.6;
	wordmae		.scaleX = scx;
	wordmae		.scaleY = scy;
	wordsita	.x = wiw * 0.75;
        wordsita	.y = wih * 0.7;
	wordsita	.scaleX = scx;
	wordsita	.scaleY = scy;
	wordsukosi	.x = wiw * 0.75;
        wordsukosi	.y = wih * 0.8;
        wordsukosi	.scaleX = scx;
	wordsukosi	.scaleY = scy;
	wordwo		.x = wiw * 0.75;
        wordwo		.y = wih * 0.9;
	wordwo		.scaleX = scx;
	wordwo		.scaleY = scy;
     // 第十三列
	wordkayui	.x = wiw * 0.81;
        wordkayui	.y = wih * 0.5;
	wordkayui	.scaleX = scx;
	wordkayui	.scaleY = scy;
	wordusiro	.x = wiw * 0.81;
        wordusiro	.y = wih * 0.6;
	wordusiro	.scaleX = scx;
	wordusiro	.scaleY = scy;
	wordtukeru 	.x = wiw * 0.81;
        wordtukeru 	.y = wih * 0.7;
	wordtukeru 	.scaleX = scx;
	wordtukeru 	.scaleY = scy;
	wordtudukeru	.x = wiw * 0.81;
        wordtudukeru	.y = wih * 0.8;
        wordtudukeru	.scaleX = scx;
	wordtudukeru	.scaleY = scy;
	wordhawa	.x = wiw * 0.81;
        wordhawa	.y = wih * 0.9;
	wordhawa	.scaleX = scx;
	wordhawa	.scaleY = scy;
     // 第十四列
	wordnodokawaku	.x = wiw * 0.87;
        wordnodokawaku	.y = wih * 0.5;
	wordnodokawaku	.scaleX = scx;
	wordnodokawaku	.scaleY = scy;
	wordhantai	.x = wiw * 0.87;
        wordhantai	.y = wih * 0.6;
	wordhantai	.scaleX = scx;
	wordhantai	.scaleY = scy;
	wordtoru	.x = wiw * 0.87;
        wordtoru	.y = wih * 0.7;
	wordtoru	.scaleX = scx;
	wordtoru	.scaleY = scy;
	wordyameru	.x = wiw * 0.87;
        wordyameru	.y = wih * 0.8;
        wordyameru	.scaleX = scx;
	wordyameru	.scaleY = scy;
	wordde		.x = wiw * 0.87;
        wordde		.y = wih * 0.9;
	wordde		.scaleX = scx;
	wordde		.scaleY = scy;


     // 第一列表示
        scene.addChild(wordtalk);
        scene.addChild(wordbun); // 文きりかえ
        scene.addChild(wordhai);
        scene.addChild(wordten);
        scene.addChild(wordzenbukesu);
     // 第二列表示
        scene.addChild(word00);
        scene.addChild(wordhiragana); // ひらがな文字盤
        scene.addChild(wordiie);
        scene.addChild(wordmaru);
        scene.addChild(wordkesu);
     // 第三列表示
        scene.addChild(word1);
        scene.addChild(word2);
        scene.addChild(word3);
        scene.addChild(word4);
        scene.addChild(word5);
     // 第四列表示
        scene.addChild(word6);
        scene.addChild(word7);
        scene.addChild(word8);
        scene.addChild(word9);
        scene.addChild(word0);
     // 第五列表示
        scene.addChild(wordhai2		);
        scene.addChild(wordatama	);
        scene.addChild(wordmimi		);
        scene.addChild(wordte		);
        scene.addChild(wordhiji		);
     // 第六列表示
        scene.addChild(wordiie2		);
        scene.addChild(wordkao		);
        scene.addChild(wordmayu		);
        scene.addChild(wordashi		);
        scene.addChild(wordhiza		);
     // 第七列表示
        scene.addChild(worddochirademoii	);
        scene.addChild(wordme			);
        scene.addChild(wordhoppe		);
        scene.addChild(wordyubi			);
        scene.addChild(wordhara			);
     // 第八列表示
        scene.addChild(worddochirademonai	);
        scene.addChild(wordkuchi	);
        scene.addChild(wordkubi		);
        scene.addChild(wordmune		);
        scene.addChild(wordsenaka	);
     // 第九列表示
        scene.addChild(wordmouichido2	);
        scene.addChild(wordhana		);
        scene.addChild(wordkata	);
        scene.addChild(wordkoshi	);
        scene.addChild(wordosiri	);
     // 第十列表示
        scene.addChild(wordmachigaemasita2	);
        scene.addChild(wordhidari	);
        scene.addChild(wordue		);
        scene.addChild(wordtaihen	);
        scene.addChild(wordga		);
     // 第十一列表示
        scene.addChild(wordkurusii	);
        scene.addChild(wordmigi		);
        scene.addChild(wordnaka		);
        scene.addChild(wordfutuu	);
        scene.addChild(wordni		);
     // 第十二列表示
        scene.addChild(worditai		);
        scene.addChild(wordmae		);
        scene.addChild(wordsita		);
        scene.addChild(wordsukosi	);
        scene.addChild(wordwo		);
     // 第十三列表示
        scene.addChild(wordkayui	);
        scene.addChild(wordusiro	);
        scene.addChild(wordtukeru 	);
        scene.addChild(wordtudukeru	);
        scene.addChild(wordhawa		);
     // 第十四列表示
        scene.addChild(wordnodokawaku	);
        scene.addChild(wordhantai	);
        scene.addChild(wordtoru	);
        scene.addChild(wordyameru	);
        scene.addChild(wordde		);

        scene.addChild(title);   //文書　と文書番号の表示
        scene.addChild(titleb);

        scene.backgroundColor  = '#d3d3d3'; // 背景色設定

  // 文字にタッチイベントを設定する
    // 左部分
      //読み上げ部
            wordtalk.addEventListener(Event.TOUCH_START, function(e) {
 		wordtalk.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtalk.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = title.text;
                speechSynthesis.speak(synthes);
            });

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '空白';
                speechSynthesis.speak(synthes);
                title.text = title.text + '　';
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
                game_.popScene(); // あいさつ文字盤へ切り替え
                game_.popScene(); // カタカナ文字盤へ切り替え
                game_.popScene(); // ひらがな文字盤へ切り替え
            });

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'はい';
            });

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                //title.text = title.text + 'いいえ';
            });

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'てん';
                speechSynthesis.speak(synthes);
                title.text = title.text + '、';
            });

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まる';
                speechSynthesis.speak(synthes);
                title.text = title.text + '。';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひとつ消す';
                speechSynthesis.speak(synthes);
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '全部消す';
                speechSynthesis.speak(synthes);
                title.text = '';
            });

      //　数字
            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '１';
                speechSynthesis.speak(synthes);
                title.text = title.text + '１';
            });

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '２';
                speechSynthesis.speak(synthes);
                title.text = title.text + '２';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '３';
                speechSynthesis.speak(synthes);
                title.text = title.text + '３';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '４';
                speechSynthesis.speak(synthes);
                title.text = title.text + '４';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '５';
                speechSynthesis.speak(synthes);
                title.text = title.text + '５';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '６';
                speechSynthesis.speak(synthes);
                title.text = title.text + '６';
            });

            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '７';
                speechSynthesis.speak(synthes);
                title.text = title.text + '７';
            });

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '８';
                speechSynthesis.speak(synthes);
                title.text = title.text + '８';
            });

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '９';
                speechSynthesis.speak(synthes);
                title.text = title.text + '９';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = '０';
                speechSynthesis.speak(synthes);
                title.text = title.text + '０';
            });

    // 中部分
            wordhai2.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はい';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はい';
            });

            wordatama.addEventListener(Event.TOUCH_START, function(e) {
 		wordatama.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordatama.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あたま';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'あたま';
            });

            wordmimi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmimi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmimi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'みみ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'みみ';
            });

            wordte.addEventListener(Event.TOUCH_START, function(e) {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'て';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'て';
            });

            wordhiji.addEventListener(Event.TOUCH_START, function(e) {
 		wordhiji.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhiji.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひじ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ひじ';
            });

            wordiie2.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いいえ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'いいえ';
            });

            wordkao.addEventListener(Event.TOUCH_START, function(e) {
 		wordkao.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkao.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'かお';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'かお';
            });

            wordmayu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmayu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmayu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まゆ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'まゆ';
            });

            wordashi.addEventListener(Event.TOUCH_START, function(e) {
 		wordashi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordashi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'あし';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'あし';
            });

            wordhiza.addEventListener(Event.TOUCH_START, function(e) {
 		wordhiza.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhiza.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひざ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ひざ';
            });

            worddochirademoii.addEventListener(Event.TOUCH_START, function(e) {
 		worddochirademoii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddochirademoii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'どちらでもいいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'どちらでもいいです';
            });

            wordme.addEventListener(Event.TOUCH_START, function(e) {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'め';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'め';
            });

            wordhoppe.addEventListener(Event.TOUCH_START, function(e) {
 		wordhoppe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhoppe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ほっぺ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ほっぺ';
            });

            wordyubi.addEventListener(Event.TOUCH_START, function(e) {
 		wordyubi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyubi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ゆび';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ゆび';
            });

            wordhara.addEventListener(Event.TOUCH_START, function(e) {
 		wordhara.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhara.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はら';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はら';
            });

            worddochirademonai.addEventListener(Event.TOUCH_START, function(e) {
 		worddochirademonai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddochirademonai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'どちらでもありません';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'どちらでもありません';
            });

            wordkuchi.addEventListener(Event.TOUCH_START, function(e) {
 		wordkuchi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkuchi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'くち';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'くち';
            });

            wordkubi.addEventListener(Event.TOUCH_START, function(e) {
 		wordkubi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkubi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'くび';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'くび';
            });

            wordmune.addEventListener(Event.TOUCH_START, function(e) {
 		wordmune.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmune.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'むね';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'むね';
            });

            wordsenaka.addEventListener(Event.TOUCH_START, function(e) {
 		wordsenaka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsenaka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'せなか';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'せなか';
            });

            wordmouichido2.addEventListener(Event.TOUCH_START, function(e) {
 		wordmouichido2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmouichido2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'もういちどおねがいします';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'もういちどおねがいします';
            });

            wordhana.addEventListener(Event.TOUCH_START, function(e) {
 		wordhana.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhana.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はな';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はな';
            });

            wordkata.addEventListener(Event.TOUCH_START, function(e) {
 		wordkata.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkata.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'かた';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'かた';
            });

            wordkoshi.addEventListener(Event.TOUCH_START, function(e) {
 		wordkoshi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkoshi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'こし';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'こし';
            });

            wordosiri.addEventListener(Event.TOUCH_START, function(e) {
 		wordosiri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordosiri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'おしり';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'おしり';
            });

    // 右部分
            wordmachigaemasita2.addEventListener(Event.TOUCH_START, function(e) {
 		wordmachigaemasita2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmachigaemasita2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まちがえました';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'まちがえました';
            });

            wordhidari.addEventListener(Event.TOUCH_START, function(e) {
 		wordhidari.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhidari.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ひだり';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ひだり';
            });

            wordue.addEventListener(Event.TOUCH_START, function(e) {
 		wordue.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordue.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'うえ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'うえ';
            });

            wordtaihen.addEventListener(Event.TOUCH_START, function(e) {
 		wordtaihen.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtaihen.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'たいへん';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'たいへん';
            });

            wordga.addEventListener(Event.TOUCH_START, function(e) {
 		wordga.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordga.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'が';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'が';
            });

            wordkurusii.addEventListener(Event.TOUCH_START, function(e) {
 		wordkurusii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkurusii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'くるしいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'くるしいです';
            });

            wordmigi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmigi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmigi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'みぎ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'みぎ';
            });

            wordnaka.addEventListener(Event.TOUCH_START, function(e) {
 		wordnaka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnaka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'なか';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'なか';
            });

            wordfutuu.addEventListener(Event.TOUCH_START, function(e) {
 		wordfutuu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordfutuu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'ふつう';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'ふつう';
            });

            wordni.addEventListener(Event.TOUCH_START, function(e) {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'に';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'に';
            });

            worditai.addEventListener(Event.TOUCH_START, function(e) {
 		worditai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worditai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'いたいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'いたいです';
            });

            wordmae.addEventListener(Event.TOUCH_START, function(e) {
 		wordmae.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmae.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'まえ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'まえ';
            });

            wordsita.addEventListener(Event.TOUCH_START, function(e) {
 		wordsita.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsita.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'した';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'した';
            });

            wordsukosi.addEventListener(Event.TOUCH_START, function(e) {
 		wordsukosi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsukosi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'すこし';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'すこし';
            });

            wordwo.addEventListener(Event.TOUCH_START, function(e) {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'を';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'を';
            });

            wordkayui.addEventListener(Event.TOUCH_START, function(e) {
 		wordkayui.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkayui.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'かゆいです';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'かゆいです';
            });

            wordusiro.addEventListener(Event.TOUCH_START, function(e) {
 		wordusiro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordusiro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'うしろ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'うしろ';
            });

            wordtukeru.addEventListener(Event.TOUCH_START, function(e) {
 		wordtukeru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtukeru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'つける';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'つける';
            });

            wordtudukeru.addEventListener(Event.TOUCH_START, function(e) {
 		wordtudukeru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtudukeru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'つづける';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'つづける';
            });

            wordhawa.addEventListener(Event.TOUCH_START, function(e) {
 		wordhawa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhawa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'わ';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'は';
            });

            wordnodokawaku.addEventListener(Event.TOUCH_START, function(e) {
 		wordnodokawaku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnodokawaku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'のどがかわきました';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'のどがかわきました';
            });

            wordhantai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhantai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhantai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'はんたい';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'はんたい';
            });

            wordtoru.addEventListener(Event.TOUCH_START, function(e) {
 		wordtoru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtoru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'とる';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'とる';
            });

            wordyameru.addEventListener(Event.TOUCH_START, function(e) {
 		wordyameru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyameru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'やめる';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'やめる';
            });

            wordde.addEventListener(Event.TOUCH_START, function(e) {
 		wordde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                synthes.text = 'で';
                speechSynthesis.speak(synthes);
                title.text = title.text + 'で';
            });


           return scene;
       };

            // ひらがな画面にもどります
            game_.replaceScene(createHiraScene());
 
    }
    game_.start(); // スタート
};
