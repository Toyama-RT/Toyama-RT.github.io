enchant(); // おまじない  enchant.js を利用したコミュニケーションエイドの試み

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
    var game_ = new Game(window.innerWidth  , window.innerHeight  ); // 本体を準備すると同時に、表示される領域の大きさを設定しています。
    var wiw = window.innerWidth;
    var wih = window.innerHeight;
    var scx = wiw * 1.8 / 1280; // 文字キー幅の係数
    var scy = wih * 1.8 / 1024;　// 文字キー高さ係数

/*　　　　　　　　var title1 = new Label('');
            title1.x = 0;
            title1.y = 10;
            game_.rootScene.addChild(title1);
            title1.text = window.innerWidth;*/

    game_.fps = 10; // frames(フレーム) per(毎) second(秒): 進行スピードを設定しています。

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
      var imgzenbukesu = './img/zenbukesu.png';

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
      var sndzenbukesu = './snd/zenbukesu.mp3';

      var sndend = './snd/gameover.mp3';

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
          imgki,
          imgyu,
          imgke,
          imgyo,
          imgra,
          imgri,
          imgru,
          imgre,
          imgro,
          imgwa,
          imgwo,
          imgnn,
          imgzenbukesu,
          
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
          sndzenbukesu,
          sndend,
          ];

    game_.preload(ASSETS);

    game_.onload = function() { // 準備が整ったらメインの処理を実行します。
        game_.assets['./snd/gameover.mp3'].play();
	//画像の設定
        var worda = new Sprite(50, 50);  // word*というスプライト(操作可能な画像)を準備し大きさを設定しています。
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
        var wordzenbukesu = new Sprite(50, 50);

        worda.image = game_.assets[imga];  // word*にあらかじめロードしておいた画像を適用します。
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
        wordzenbukesu.image = game_.assets[imgzenbukesu];

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
	wordzenbukesu.x = wiw * 0.88;
        wordzenbukesu.y = wih * 0.8;
	wordzenbukesu.scaleX = scx;
	wordzenbukesu.scaleY = scy;

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

        game_.rootScene.addChild(worda); // シーンに文字を表示させます。
        game_.rootScene.addChild(wordi);
        game_.rootScene.addChild(wordu);
        game_.rootScene.addChild(worde);
        game_.rootScene.addChild(wordo);
        game_.rootScene.addChild(wordzenbukesu);

        game_.rootScene.addChild(wordka); // か行
        game_.rootScene.addChild(wordki);
        game_.rootScene.addChild(wordku);
        game_.rootScene.addChild(wordke);
        game_.rootScene.addChild(wordko);

        game_.rootScene.addChild(wordsa); // さ行
        game_.rootScene.addChild(wordsi);
        game_.rootScene.addChild(wordsu);
        game_.rootScene.addChild(wordse);
        game_.rootScene.addChild(wordso);

        game_.rootScene.addChild(wordta); // た行
        game_.rootScene.addChild(wordti);
        game_.rootScene.addChild(wordtu);
        game_.rootScene.addChild(wordte);
        game_.rootScene.addChild(wordto);

        game_.rootScene.addChild(wordna); // な行
        game_.rootScene.addChild(wordni);
        game_.rootScene.addChild(wordnu);
        game_.rootScene.addChild(wordne);
        game_.rootScene.addChild(wordno);

        game_.rootScene.addChild(wordha); // は行
        game_.rootScene.addChild(wordhi);
        game_.rootScene.addChild(wordhu);
        game_.rootScene.addChild(wordhe);
        game_.rootScene.addChild(wordho);

        game_.rootScene.addChild(wordma); // ま行
        game_.rootScene.addChild(wordmi);
        game_.rootScene.addChild(wordmu);
        game_.rootScene.addChild(wordme);
        game_.rootScene.addChild(wordmo);

        game_.rootScene.addChild(wordya); // や行
        game_.rootScene.addChild(wordyu);
        game_.rootScene.addChild(wordyo);

        game_.rootScene.addChild(wordra); // ら行
        game_.rootScene.addChild(wordri);
        game_.rootScene.addChild(wordru);
        game_.rootScene.addChild(wordre);
        game_.rootScene.addChild(wordro);

        game_.rootScene.addChild(wordwa); // わ行
        game_.rootScene.addChild(wordwo);
        game_.rootScene.addChild(wordnn);

        game_.rootScene.backgroundColor  = '#d3d3d3'; // 動作部分の背景色を設定しています(16進数)。

　　　　　　　　var title = new Label('');         //文字列の表示
            title.color = '#000000';                   // 文字色
		if (window.innerWidth > 1000){  //画面の大きさでフォントを大きさを変更する
		title.font = '60px sans-serif';            // 37pxのゴシック体にする
		} else if (window.innerWidth < 500){
		title.font = '30px sans-serif';            // 30pxのゴシック体にする
		} else {
		title.font = '35px sans-serif';            // 33pxのゴシック体にする
		}
            title.textAlign = 'left';                // 中央揃えにする
            title.width = wiw * 0.8;                       // 自動改行の指定
            title.x = wiw * 0.1;                               // 横位置調整
            title.y = wih * 0.05;                             // 縦位置調整
            game_.rootScene.addChild(title);                     // シーンに追加

        // シーンに「毎フレーム実行イベント」を追加します。

            // 文字にタッチイベントを設定する
            worda.addEventListener(Event.TOUCH_START, function(e) {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snda].clone().play(); //言葉を発声する
                title.text = title.text + 'あ';    //文字を追加する
            });

            wordi.addEventListener(Event.TOUCH_START, function(e) {
 		wordi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndi].clone().play();
                title.text = title.text + 'い';
            });

            wordu.addEventListener(Event.TOUCH_START, function(e) {
 		wordu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndu].clone().play();
                title.text = title.text + 'う';
            });

            worde.addEventListener(Event.TOUCH_START, function(e) {
 		worde.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worde.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snde].clone().play();
                title.text = title.text + 'え';
            });

            wordo.addEventListener(Event.TOUCH_START, function(e) {
 		wordo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndo].clone().play();
                title.text = title.text + 'お';
            });

            wordka.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// か行
 		wordka.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordka.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndka].clone().play();
                title.text = title.text + 'か';
            });

            wordki.addEventListener(Event.TOUCH_START, function(e) {
 		wordki.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordki.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndki].clone().play();
                title.text = title.text + 'き';
            });

            wordku.addEventListener(Event.TOUCH_START, function(e) {
 		wordku.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordku.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndku].clone().play();
                title.text = title.text + 'く';
            });

            wordke.addEventListener(Event.TOUCH_START, function(e) {
 		wordke.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordke.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndke].clone().play();
                title.text = title.text + 'け';
            });

            wordko.addEventListener(Event.TOUCH_START, function(e) {
 		wordko.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordko.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndko].clone().play();
                title.text = title.text + 'こ';
            });

            wordsa.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// さ行
 		wordsa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndsa].clone().play();
                title.text = title.text + 'さ';
            });

            wordsi.addEventListener(Event.TOUCH_START, function(e) {
 		wordsi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndsi].clone().play();
                title.text = title.text + 'し';
            });

            wordsu.addEventListener(Event.TOUCH_START, function(e) {
 		wordsu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndsu].clone().play();
                title.text = title.text + 'す';
            });

            wordse.addEventListener(Event.TOUCH_START, function(e) {
 		wordse.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordse.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndse].clone().play();
                title.text = title.text + 'せ';
            });

            wordso.addEventListener(Event.TOUCH_START, function(e) {
 		wordso.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordso.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndso].clone().play();
                title.text = title.text + 'そ';
            });

            wordta.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// た行
 		wordta.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordta.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndta].clone().play();
                title.text = title.text + 'た';
            });

            wordti.addEventListener(Event.TOUCH_START, function(e) {
 		wordti.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordti.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndti].clone().play();
                title.text = title.text + 'ち';
            });

            wordtu.addEventListener(Event.TOUCH_START, function(e) {
 		wordtu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordtu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndtu].clone().play();
                title.text = title.text + 'つ';
            });

            wordte.addEventListener(Event.TOUCH_START, function(e) {
 		wordte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndte].clone().play();
                title.text = title.text + 'て';
            });

            wordto.addEventListener(Event.TOUCH_START, function(e) {
 		wordto.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordto.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndto].clone().play();
                title.text = title.text + 'と';
            });

            wordna.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// な行
 		wordna.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordna.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndna].clone().play();
                title.text = title.text + 'な';
            });

            wordni.addEventListener(Event.TOUCH_START, function(e) {
 		wordni.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordni.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndni].clone().play();
                title.text = title.text + 'に';
            });

            wordnu.addEventListener(Event.TOUCH_START, function(e) {
 		wordnu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndnu].clone().play();
                title.text = title.text + 'ぬ';
            });

            wordne.addEventListener(Event.TOUCH_START, function(e) {
 		wordne.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordne.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndne].clone().play();
                title.text = title.text + 'ね';
            });

            wordno.addEventListener(Event.TOUCH_START, function(e) {
 		wordno.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordno.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndno].clone().play();
                title.text = title.text + 'の';
            });
            wordha.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// は行
 		wordha.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordha.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndha].clone().play();
                title.text = title.text + 'は';
            });

            wordhi.addEventListener(Event.TOUCH_START, function(e) {
 		wordhi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndhi].clone().play();
                title.text = title.text + 'ひ';
            });

            wordhu.addEventListener(Event.TOUCH_START, function(e) {
 		wordhu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndhu].clone().play();
                title.text = title.text + 'ふ';
            });

            wordhe.addEventListener(Event.TOUCH_START, function(e) {
 		wordhe.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhe.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndhe].clone().play();
                title.text = title.text + 'へ';
            });

            wordho.addEventListener(Event.TOUCH_START, function(e) {
 		wordho.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordho.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndho].clone().play();
                title.text = title.text + 'ほ';
            });

            wordma.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// ま行
 		wordma.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordma.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndma].clone().play();
                title.text = title.text + 'ま';
            });

            wordmi.addEventListener(Event.TOUCH_START, function(e) {
 		wordmi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndmi].clone().play();
                title.text = title.text + 'み';
            });

            wordmu.addEventListener(Event.TOUCH_START, function(e) {
 		wordmu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndmu].clone().play();
                title.text = title.text + 'む';
            });

            wordme.addEventListener(Event.TOUCH_START, function(e) {
 		wordme.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordme.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndme].clone().play();
                title.text = title.text + 'め';
            });

            wordmo.addEventListener(Event.TOUCH_START, function(e) {
 		wordmo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndmo].clone().play();
                title.text = title.text + 'も';
            });
            
            wordya.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndya].clone().play();
                title.text = title.text + 'や';
            });

            wordyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndyu].clone().play();
                title.text = title.text + 'ゆ';
            });

            wordyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndyo].clone().play();
                title.text = title.text + 'よ';
            });

            wordra.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// ら行
 		wordra.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordra.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndra].clone().play();
                title.text = title.text + 'ら';
            });

            wordri.addEventListener(Event.TOUCH_START, function(e) {
 		wordri.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordri.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndri].clone().play();
                title.text = title.text + 'り';
            });

            wordru.addEventListener(Event.TOUCH_START, function(e) {
 		wordru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndru].clone().play();
                title.text = title.text + 'る';
            });

            wordre.addEventListener(Event.TOUCH_START, function(e) {
 		wordre.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordre.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndre].clone().play();
                title.text = title.text + 'れ';
            });

            wordro.addEventListener(Event.TOUCH_START, function(e) {
 		wordro.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordro.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndro].clone().play();
                title.text = title.text + 'ろ';
            });
            wordwa.addEventListener(Event.TOUCH_START, function(e) {  　　　　　　　　// わ行
 		wordwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndwa].clone().play();
                title.text = title.text + 'わ';
            });

            wordwo.addEventListener(Event.TOUCH_START, function(e) {
 		wordwo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordwo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndwo].clone().play();
                title.text = title.text + 'を';
            });

            wordnn.addEventListener(Event.TOUCH_START, function(e) {
 		wordnn.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordnn.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndnn].clone().play();
                title.text = title.text + 'ん';
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndzenbukesu].clone().play();
                title.text = '';
            });


    }
    game_.start(); // スタート
};
