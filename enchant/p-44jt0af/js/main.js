enchant(); // おまじない  enchant.js を利用したコミュニケーションエイド

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

    var game_ = new Game(window.innerWidth  , window.innerHeight  );// 表示領域の設定
    var wiw = window.innerWidth;
    var wih = window.innerHeight;
    var scx = wiw * 2.0 / 1280;// 文字キー幅の係数
    var scy = wih * 2.0 / 1024;// 文字キー高さ係数

            /*var title1 = new Label('');
            title1.x = 0;
            title1.y = 10;
            scene.addChild(title1);
            title1.text = window.innerWidth;*/

    game_.fps = 10; // frames per second: 進行スピード設定

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
      var imggb = './img/gb.png';
      var imggc = './img/gc.png';
      //var imglya = './img/lya.png';
      //var imglyu = './img/lyu.png';
      //var imglyo = './img/lyo.png';
      //var imgltu = './img/ltu.png';
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

      var imgblue = './img/blue.png';
      var imgred = './img/red.png';
      var imghai2 = './img/hai2.png';
      var imgiie2 = './img/iie2.png';
      var imgdochirademoii = './img/dochirademoii.png';
      var imgdochirademonai = './img/dochirademonai.png';
      var imgmouichido = './img/mouichido.png';
      var imgmatte = './img/matte.png';
      var imgarigatou = './img/arigatou.png';
      var imgonegai = './img/onegai.png';
      var imgkonnichiwa = './img/konnichiwa.png';
      var imgsayounara = './img/sayounara.png';
      var imgohayou = './img/ohayou.png';
      var imgoyasumi = './img/oyasumi.png';
      var imgkyuuin = './img/kyuuin.png';


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
      var sndhai2 = './snd/hai2.mp3';
      var sndiie2 = './snd/iie2.mp3';
      var snddochirademoii = './snd/dochirademoii.mp3';
      var snddochirademonai = './snd/dochirademonai.mp3';
      var sndmouichido = './snd/mouichido.mp3';
      var sndmatte = './snd/matte.mp3';
      var sndarigatou = './snd/arigatou.mp3';
      var sndonegai = './snd/onegai.mp3';
      var sndkonnichiwa = './snd/konnichiwa.mp3';
      var sndsayounara = './snd/sayounara.mp3';
      var sndohayou = './snd/ohayou.mp3';
      var sndoyasumi = './snd/oyasumi.mp3';
      var sndkyuuin = './snd/kyuuin.mp3';

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
          imggb,
          imggc,
          //imglya,
          //imglyu,
          //imglyo,
          //imgltu,
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
          imgblue,
          imgred,
          imghai2,
          imgiie2,
          imgdochirademoii,
          imgdochirademonai,
          imgmouichido,
          imgmatte,
          imgarigatou,
          imgonegai,
          imgkonnichiwa,
          imgsayounara,
          imgohayou,
          imgoyasumi,
          imgkyuuin,

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
          sndhai2,
          sndiie2,
          snddochirademoii,
          snddochirademonai,
          sndmouichido,
          sndmatte,
          sndarigatou,
          sndonegai,
          sndkonnichiwa,
          sndsayounara,
          sndohayou,
          sndoyasumi,
          sndkyuuin,
          ];

    game_.preload(ASSETS);

    game_.onload = function() { // メイン処理実行
        game_.assets['./snd/gameover.mp3'].play();

      // 画面１
          var create1stScene = function() {
                var scene = new Scene();
                //var label = new Label('画面1');
                //scene.addChild(label);
                scene.backgroundColor = '#ffffff'; // 背景色設定

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
        //var wordltu = new Sprite(50, 50);
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
        //var wordlya = new Sprite(50, 50);
        var wordyu = new Sprite(50, 50);
        //var wordlyu = new Sprite(50, 50);
        var wordyo = new Sprite(50, 50);
        //var wordlyo = new Sprite(50, 50);
        var wordra = new Sprite(50, 50);
        var wordri = new Sprite(50, 50);
        var wordru = new Sprite(50, 50);
        var wordre = new Sprite(50, 50);
        var wordro = new Sprite(50, 50);
        var wordwa = new Sprite(50, 50);
        var wordwo = new Sprite(50, 50);
        var wordnn = new Sprite(50, 50);
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
        var wordblue = new Sprite(50, 50);

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
        //wordlya.image = game_.assets[imglya];
        wordyu.image = game_.assets[imgyu];
        //wordlyu.image = game_.assets[imglyu];
        wordyo.image = game_.assets[imgyo];
        //wordlyo.image = game_.assets[imglyo];
        wordra.image = game_.assets[imgra];
        wordri.image = game_.assets[imgri];
        wordru.image = game_.assets[imgru];
        wordre.image = game_.assets[imgre];
        wordro.image = game_.assets[imgro];
        wordwa.image = game_.assets[imgwa];
        wordwo.image = game_.assets[imgwo];
        wordnn.image = game_.assets[imgnn];
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
        wordblue.image = game_.assets[imgblue];

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
	/*wordlya.x = wiw * 0.25;
        wordlya.y = wih * 0.4;
	wordlya.scaleX = scx;
	wordlya.scaleY = scy;*/
	wordyu.x = wiw * 0.25;
        wordyu.y = wih * 0.5;
	wordyu.scaleX = scx;
	wordyu.scaleY = scy;
	/*wordlyu.x = wiw * 0.25;
        wordlyu.y = wih * 0.6;
	wordlyu.scaleX = scx;
	wordlyu.scaleY = scy;*/
	wordyo.x = wiw * 0.25;
        wordyo.y = wih * 0.7;
	wordyo.scaleX = scx;
	wordyo.scaleY = scy;
	/*wordlyo.x = wiw * 0.25;
        wordlyo.y = wih * 0.8;
	wordlyo.scaleX = scx;
	wordlyo.scaleY = scy;*/
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
	wordiie.x = wiw * 0.16;
        wordiie.y = wih * 0.8;
	wordiie.scaleX = scx;
	wordiie.scaleY = scy;
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
	wordhai.x = wiw * 0.07;
        wordhai.y = wih * 0.8;
	wordhai.scaleX = scx;
	wordhai.scaleY = scy;
	word0.x = wiw * 0.07;
        word0.y = wih * 0.9;
	word0.scaleX = scx;
	word0.scaleY = scy;

	wordblue.x = wiw * 0.0;
        wordblue.y = wih * 0.3;
	wordblue.scaleX = scx/2;
	wordblue.scaleY = scy;

        scene.addChild(worda); // シーン文字表示
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
        //scene.addChild(wordlya);
        scene.addChild(wordyu);
        //scene.addChild(wordlyu);
        scene.addChild(wordyo);
        //scene.addChild(wordlyo);
        scene.addChild(word2);

        scene.addChild(wordra); // ら行
        scene.addChild(wordri);
        scene.addChild(wordru);
        scene.addChild(wordre);
        scene.addChild(wordro);
        scene.addChild(wordiie);
        scene.addChild(word1);

        scene.addChild(wordwa); // わ行
        scene.addChild(wordwo);
        scene.addChild(wordnn);
        scene.addChild(wordgb);
        scene.addChild(wordgc);
        scene.addChild(wordhai);
        scene.addChild(word0);

        scene.addChild(wordblue);

        //scene.backgroundColor  = '#d3d3d3'; // 背景色設定
        //scene.backgroundColor  = '#ffffff'; // 背景色設定

            var title = new Label('');         //文字列の表示
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
            scene.addChild(title);    // シーンに追加

             // 文字にタッチイベントを設定する
            worda.addEventListener(Event.TOUCH_START, function(e) {  // wordaをタッチしたら
 		worda.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worda.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snda].clone().play(); //言葉を発声する
                title.text = title.text + 'あ';    //文字を追加する

         var title1 = new Label('');//テスト文字列の文字数を検出し表示する
            title1.x = 0;
            title1.y = 10;
            scene.addChild(title1);
            //title1.text = title.text.length -1;//文字数を表示する
            //title1.text = title.text.charAt(title.text.length -1);//最後の文字を表示する
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

            word9.addEventListener(Event.TOUCH_START, function(e) {
 		word9.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word9.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd9].clone().play();
                title.text = title.text + '９';
            });

            wordka.addEventListener(Event.TOUCH_START, function(e) {  // か行
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

            word8.addEventListener(Event.TOUCH_START, function(e) {
 		word8.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word8.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd8].clone().play();
                title.text = title.text + '８';
            });

            wordsa.addEventListener(Event.TOUCH_START, function(e) {  // さ行
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

            word7.addEventListener(Event.TOUCH_START, function(e) {
 		word7.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word7.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd7].clone().play();
                title.text = title.text + '７';
            });

            wordta.addEventListener(Event.TOUCH_START, function(e) {  // た行
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

            word00.addEventListener(Event.TOUCH_START, function(e) {
 		word00.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word00.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd00].clone().play();
                title.text = title.text + '　';
            });

            word6.addEventListener(Event.TOUCH_START, function(e) {
 		word6.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word6.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd6].clone().play();
                title.text = title.text + '６';
            });

            wordna.addEventListener(Event.TOUCH_START, function(e) {  // な行
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

            wordbar.addEventListener(Event.TOUCH_START, function(e) {
 		wordbar.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordbar.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndbar].clone().play();
                title.text = title.text + 'ー';
            });

            word5.addEventListener(Event.TOUCH_START, function(e) {
 		word5.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word5.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd5].clone().play();
                title.text = title.text + '５';
            });

            wordha.addEventListener(Event.TOUCH_START, function(e) {  // は行
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

            wordmaru.addEventListener(Event.TOUCH_START, function(e) {
 		wordmaru.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmaru.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndmaru].clone().play();
                title.text = title.text + '。';
            });

            word4.addEventListener(Event.TOUCH_START, function(e) {
 		word4.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word4.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd4].clone().play();
                title.text = title.text + '４';
            });

            wordma.addEventListener(Event.TOUCH_START, function(e) {  // ま行
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

            wordten.addEventListener(Event.TOUCH_START, function(e) {
 		wordten.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordten.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndten].clone().play();
                title.text = title.text + '、';
            });

            word3.addEventListener(Event.TOUCH_START, function(e) {
 		word3.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word3.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd3].clone().play();
                title.text = title.text + '３';
            });

            wordya.addEventListener(Event.TOUCH_START, function(e) {  // や行
 		wordya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndya].clone().play();
                title.text = title.text + 'や';
            });

            /*wordlya.addEventListener(Event.TOUCH_START, function(e) {
 		wordlya.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordlya.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndya].clone().play();
                title.text = title.text + 'ゃ';
            });*/

            wordyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndyu].clone().play();
                title.text = title.text + 'ゆ';
            });

            /*wordlyu.addEventListener(Event.TOUCH_START, function(e) {
 		wordlyu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordlyu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndyu].clone().play();
                title.text = title.text + 'ゅ';
            });*/

            wordyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndyo].clone().play();
                title.text = title.text + 'よ';
            });

            /*wordlyo.addEventListener(Event.TOUCH_START, function(e) {
 		wordlyo.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordlyo.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndyo].clone().play();
                title.text = title.text + 'ょ';
            });*/

            word2.addEventListener(Event.TOUCH_START, function(e) {
 		word2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd2].clone().play();
                title.text = title.text + '２';
            });

            wordra.addEventListener(Event.TOUCH_START, function(e) {  // ら行
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

            wordiie.addEventListener(Event.TOUCH_START, function(e) {
 		wordiie.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndiie].clone().play();
                //title.text = title.text + 'いいえ';
            });

            word1.addEventListener(Event.TOUCH_START, function(e) {
 		word1.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word1.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd1].clone().play();
                title.text = title.text + '１';
            });

            wordwa.addEventListener(Event.TOUCH_START, function(e) {  // わ行
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

            wordhai.addEventListener(Event.TOUCH_START, function(e) {
 		wordhai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndhai].clone().play();
                //title.text = title.text + 'はい';
            });

            word0.addEventListener(Event.TOUCH_START, function(e) {
 		word0.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                word0.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[snd0].clone().play();
                title.text = title.text + '０';
            });

            wordkesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordkesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndkesu].clone().play();
                title.text = title.text.substring(0, title.text.length -1 );
            });

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.assets[sndzenbukesu].clone().play();
                title.text = '';
            });

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
                   game_.assets[sndga].clone().play();
                 } else if (lastletter == 'き') {
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぎ';
                   game_.assets[sndgi].clone().play();
                 } else if (lastletter == 'く'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぐ';
                   game_.assets[sndgu].clone().play();
                 } else if (lastletter == 'け'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'げ';
                   game_.assets[sndge].clone().play();
                 } else if (lastletter == 'こ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ご';
                   game_.assets[sndgo].clone().play();
                 } else if (lastletter == 'さ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ざ';
                   game_.assets[sndza].clone().play();
                 } else if (lastletter == 'し'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'じ';
                   game_.assets[sndzi].clone().play();
                 } else if (lastletter == 'す'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ず';
                   game_.assets[sndzu].clone().play();
                 } else if (lastletter == 'せ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぜ';
                   game_.assets[sndze].clone().play();
                 } else if (lastletter == 'そ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぞ';
                   game_.assets[sndzo].clone().play();
                 } else if (lastletter == 'た'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'だ';
                   game_.assets[sndda].clone().play();
                 } else if (lastletter == 'ち'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぢ';
                   game_.assets[snddi].clone().play();
                 } else if (lastletter == 'つ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'づ';
                   game_.assets[snddu].clone().play();
                 } else if (lastletter == 'て'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'で';
                   game_.assets[sndde].clone().play();
                 } else if (lastletter == 'と'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ど';
                   game_.assets[snddo].clone().play();
                 } else if (lastletter == 'は'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ば';
                   game_.assets[sndba].clone().play();
                 } else if (lastletter == 'ひ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'び';
                   game_.assets[sndbi].clone().play();
                 } else if (lastletter == 'ふ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぶ';
                   game_.assets[sndbu].clone().play();
                 } else if (lastletter == 'へ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'べ';
                   game_.assets[sndbe].clone().play();
                 } else if (lastletter == 'ほ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぼ';
                   game_.assets[sndbo].clone().play();
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
            });

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
                   game_.assets[sndpa].clone().play();
                 } else if (lastletter == 'ひ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぴ';
                   game_.assets[sndpi].clone().play();
                 } else if (lastletter == 'ふ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぷ';
                   game_.assets[sndpu].clone().play();
                 } else if (lastletter == 'へ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぺ';
                   game_.assets[sndpe].clone().play();
                 } else if (lastletter == 'ほ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぽ';
                   game_.assets[sndpo].clone().play();
                 } else if (lastletter == 'あ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぁ';
                   game_.assets[snda].clone().play();
                 } else if (lastletter == 'い'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぃ';
                   game_.assets[sndi].clone().play();
                 } else if (lastletter == 'う'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぅ';
                   game_.assets[sndu].clone().play();
                 } else if (lastletter == 'え'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぇ';
                   game_.assets[snde].clone().play();
                 } else if (lastletter == 'お'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ぉ';
                   game_.assets[sndo].clone().play();
                 } else if (lastletter == 'や'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゃ';
                   game_.assets[sndya].clone().play();
                 } else if (lastletter == 'ゆ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ゅ';
                   game_.assets[sndyu].clone().play();
                 } else if (lastletter == 'よ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'ょ';
                   game_.assets[sndyo].clone().play();
                 } else if (lastletter == 'つ'){
                   title.text = title.text.substring(0, title.text.length -1 );
                   title.text = title.text + 'っ';
                   game_.assets[sndtu].clone().play();
                 } else {
                   game_.assets[sndbuz].clone().play();
                 } 
            });

            wordblue.addEventListener(Event.TOUCH_START, function(e) {
		wordblue.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordblue.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.pushScene(create2ndScene()); // 画面２に切り替え
            });

           return scene;
       };

    	// 画面２
            var create2ndScene = function() {
                var scene = new Scene();                // 新しいシーン
                //var label = new Label('画面２');        // 新しいラベル(文字)を作る
                //scene.addChild(label);                  // シーンにラベルに追加
                scene.backgroundColor = '#ffffff'; // 背景色設定

	//表示する画像の設定
        var wordred = new Sprite(50, 50);
        var wordhai2 = new Sprite(200, 50);
        var wordiie2 = new Sprite(200, 50);
        var worddochirademoii = new Sprite(200, 50);
        var worddochirademonai = new Sprite(200, 50);
        var wordmouichido = new Sprite(200, 50);
        var wordmatte = new Sprite(200, 50);
        var wordarigatou = new Sprite(200, 50);
        var wordonegai = new Sprite(200, 50);
        var wordkonnichiwa = new Sprite(200, 50);
        var wordsayounara = new Sprite(200, 50);
        var wordohayou = new Sprite(200, 50);
        var wordoyasumi = new Sprite(200, 50);
        var wordkyuuin = new Sprite(200, 50);

        var wordzenbukesu = new Sprite(50, 50);

        wordred.image = game_.assets[imgred];
        wordhai2.image = game_.assets[imghai2];
        wordiie2.image = game_.assets[imgiie2];
        worddochirademoii.image = game_.assets[imgdochirademoii];
        worddochirademonai.image = game_.assets[imgdochirademonai];
        wordmouichido.image = game_.assets[imgmouichido];
        wordmatte.image = game_.assets[imgmatte];
        wordarigatou.image = game_.assets[imgarigatou];
        wordonegai.image = game_.assets[imgonegai];
        wordkonnichiwa.image = game_.assets[imgkonnichiwa];
        wordsayounara.image = game_.assets[imgsayounara];
        wordohayou.image = game_.assets[imgohayou];
        wordoyasumi.image = game_.assets[imgoyasumi];
        wordzenbukesu.image = game_.assets[imgzenbukesu];
        wordkyuuin.image = game_.assets[imgkyuuin];

	wordred.x = wiw * 0.0;
        wordred.y = wih * 0.3;
	wordred.scaleX = scx/2;
	wordred.scaleY = scy;
	wordhai2.x = wiw * 0.12;
        wordhai2.y = wih * 0.3;
	wordhai2.scaleX = scx;
	wordhai2.scaleY = scy;
	wordiie2.x = wiw * 0.12;
        wordiie2.y = wih * 0.4;
	wordiie2.scaleX = scx;
	wordiie2.scaleY = scy;
	worddochirademoii.x = wiw * 0.12;
        worddochirademoii.y = wih * 0.5;
	worddochirademoii.scaleX = scx;
	worddochirademoii.scaleY = scy;
	worddochirademonai.x = wiw * 0.12;
        worddochirademonai.y = wih * 0.6;
	worddochirademonai.scaleX = scx;
	worddochirademonai.scaleY = scy;
	wordkyuuin.x = wiw * 0.12;
        wordkyuuin.y = wih * 0.7;
	wordkyuuin.scaleX = scx;
	wordkyuuin.scaleY = scy;

	wordmouichido.x = wiw * 0.43;
        wordmouichido.y = wih * 0.3;
	wordmouichido.scaleX = scx;
	wordmouichido.scaleY = scy;
	wordmatte.x = wiw * 0.43;
        wordmatte.y = wih * 0.4;
	wordmatte.scaleX = scx;
	wordmatte.scaleY = scy;
	wordarigatou.x = wiw * 0.43;
        wordarigatou.y = wih * 0.5;
	wordarigatou.scaleX = scx;
	wordarigatou.scaleY = scy;
	wordonegai.x = wiw * 0.43;
        wordonegai.y = wih * 0.6;
	wordonegai.scaleX = scx;
	wordonegai.scaleY = scy;

	wordkonnichiwa.x = wiw * 0.74;
        wordkonnichiwa.y = wih * 0.3;
	wordkonnichiwa.scaleX = scx;
	wordkonnichiwa.scaleY = scy;
	wordsayounara.x = wiw * 0.74;
        wordsayounara.y = wih * 0.4;
	wordsayounara.scaleX = scx;
	wordsayounara.scaleY = scy;
	wordohayou.x = wiw * 0.74;
        wordohayou.y = wih * 0.5;
	wordohayou.scaleX = scx;
	wordohayou.scaleY = scy;
	wordoyasumi.x = wiw * 0.74;
        wordoyasumi.y = wih * 0.6;
	wordoyasumi.scaleX = scx;
	wordoyasumi.scaleY = scy;

	wordzenbukesu.x = wiw * 0.07;
        wordzenbukesu.y = wih * 0.8;
	wordzenbukesu.scaleX = scx;
	wordzenbukesu.scaleY = scy;

        scene.addChild(wordred);
        scene.addChild(wordhai2);
        scene.addChild(wordiie2);
        scene.addChild(worddochirademoii);
        scene.addChild(worddochirademonai);
        scene.addChild(wordmouichido);
        scene.addChild(wordmatte);
        scene.addChild(wordarigatou);
        scene.addChild(wordonegai);
        scene.addChild(wordkonnichiwa);
        scene.addChild(wordsayounara);
        scene.addChild(wordohayou);
        scene.addChild(wordoyasumi);
        scene.addChild(wordkyuuin);

        scene.addChild(wordzenbukesu);

        // 発声部分
            wordhai2.addEventListener(Event.TOUCH_START, function(e) {
		wordhai2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordhai2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'はい';
                game_.assets[sndhai2].clone().play();
            });     
            wordiie2.addEventListener(Event.TOUCH_START, function(e) {
		wordiie2.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordiie2.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'いいえ';
                game_.assets[sndiie2].clone().play();
            });     
            worddochirademoii.addEventListener(Event.TOUCH_START, function(e) {
		worddochirademoii.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddochirademoii.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'どちらでもいいです';
                game_.assets[snddochirademoii].clone().play();
            });     
            worddochirademonai.addEventListener(Event.TOUCH_START, function(e) {
		worddochirademonai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                worddochirademonai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'どちらでもありません';
                game_.assets[snddochirademonai].clone().play();
            });     
            wordkyuuin.addEventListener(Event.TOUCH_START, function(e) {
		wordkyuuin.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkyuuin.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + '吸引！';
                game_.assets[sndkyuuin].clone().play();
            });     

            wordmouichido.addEventListener(Event.TOUCH_START, function(e) {
		wordmouichido.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmouichido.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'もういちどおねがいします';
                game_.assets[sndmouichido].clone().play();
            });     
            wordmatte.addEventListener(Event.TOUCH_START, function(e) {
		wordmatte.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordmatte.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'まってください';
                game_.assets[sndmatte].clone().play();
            });     
            wordarigatou.addEventListener(Event.TOUCH_START, function(e) {
		wordarigatou.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordarigatou.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'ありがとう';
                game_.assets[sndarigatou].clone().play();
            });     
            wordonegai.addEventListener(Event.TOUCH_START, function(e) {
		wordonegai.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordonegai.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'おねがいします';
                game_.assets[sndonegai].clone().play();
            });     

            wordkonnichiwa.addEventListener(Event.TOUCH_START, function(e) {
		wordkonnichiwa.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordkonnichiwa.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'こんにちは';
                game_.assets[sndkonnichiwa].clone().play();
            });     
            wordsayounara.addEventListener(Event.TOUCH_START, function(e) {
		wordsayounara.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordsayounara.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'さようなら';
                game_.assets[sndsayounara].clone().play();
            });     
            wordohayou.addEventListener(Event.TOUCH_START, function(e) {
		wordohayou.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordohayou.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'おはよう';
                game_.assets[sndohayou].clone().play();
            });     
            wordoyasumi.addEventListener(Event.TOUCH_START, function(e) {
		wordoyasumi.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordoyasumi.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                title.text = title.text + 'おやすみ';
                game_.assets[sndoyasumi].clone().play();
            });     

            wordzenbukesu.addEventListener(Event.TOUCH_START, function(e) {
 		wordzenbukesu.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordzenbukesu.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                //game_.assets[sndzenbukesu].clone().play();
                title.text = '';
            });

            wordred.addEventListener(Event.TOUCH_START, function(e) {
		wordred.tl.scaleBy( 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                wordred.tl.scaleBy( 1 / 0.9, 3, enchant.Easing.ELASTIC_EASEINOUT);
                game_.popScene(); // 画面１へ
            });



            var title = new Label('');         //文字列の表示
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
            scene.addChild(title);    // シーンに追加


                return scene;
            };

            // ゲームの_rootScene置き換えます
            game_.replaceScene(create1stScene());


    }
    game_.start(); // スタート
};
