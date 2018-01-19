enchant(); // タイマー7-10

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

    var wiw = window.innerWidth; //モニター表示幅
    var wih = window.innerHeight;//モニター表示高
    var scx = wiw * 5.5 / 1280;//画像幅係数
    var scy = wih * 2.5 / 1024;//画像高係数
    var tstart = 0;
    var Ptime = 3000;
    var Tadd = 0;
    var dps = 0;
     // モニタ寸法表示機能
/*            var title1 = new Label('');
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
            var title0 = new Label('１０分間タイマー');
		title0.color = '#000000';
		title0.font = '30px sans-serif';
		title0.textAlign = 'center';
          	title0.x = 40;
		title0.y = 10;
            game_.rootScene.addChild(title0);
            var title0e = new Label('10min Timer');
		title0e.color = '#000000';
		title0e.font = '30px sans-serif';
		title0e.textAlign = 'center';
          	title0e.x = 40;
		title0e.y = 40;
            game_.rootScene.addChild(title0e);

	dps = 0.1;

    game_.fps = 1; //進行スピード設定
    game_.preload('arm03.gif', 'arm04.gif', 'arm05.gif', 'sw1.gif', 'sw2.gif', 'sw3.gif', 'cursor1.mp3', 'decision2.mp3', 'decision5.mp3', 'jump.mp3', 'gameover.mp3');
// 感謝　効果音ラボ
    game_.onload = function() {
        game_.assets['gameover.mp3'].play();

	//表示する画像の設定
        var sw1 = new Sprite(60, 50);  //スプライト表示領域設定
        var sw2 = new Sprite(60, 50);
        var sw3 = new Sprite(60, 50);
        //var word4 = new Sprite(200, 50);
        var arm1 = new Sprite(150, 150);
        var arm2 = new Sprite(150, 150);
        var arm3 = new Sprite(160, 160);

        sw1.image = game_.assets['sw1.gif'];
        sw2.image = game_.assets['sw2.gif'];
        sw3.image = game_.assets['sw3.gif'];
        //word4.image = game_.assets['kotoba4.gif'];
        arm1.image = game_.assets['arm03.gif'];
        arm2.image = game_.assets['arm04.gif'];
        arm3.image = game_.assets['arm05.gif'];

	sw1.x =  wiw * 0.2 - 30;
        sw1.y =  wih * 0.85;
	sw1.scaleX = scx;
	sw1.scaleY = scy;
	sw2.x =  wiw * 0.5 - 30;
        sw2.y =  wih * 0.85;
	sw2.scaleX = scx;
	sw2.scaleY = scy;
	sw3.x =  wiw * 0.8 - 30;
        sw3.y =  wih * 0.85;
	sw3.scaleX = scx;
	sw3.scaleY = scy;
	//word4.x =  wiw * 0.5 - 100; // 横位置設定
        //word4.y =  wih * 0.6;  //縦位置設定
	//word4.scaleX = scx;// 幅
	//word4.scaleY = scy;// 高さ
	arm1.x =  wiw * 0.5 - 75;
        arm1.y =  wih * 0.4 - 75;
	arm1.scaleX = scy * 1.2;
	arm1.scaleY = scy * 1.2;
	arm2.x =  wiw * 0.5 - 75;
        arm2.y =  wih * 0.4 - 75;
	arm2.scaleX = scy * 1.2;
	arm2.scaleY = scy * 1.2;
	arm3.x =  wiw * 0.5 - 80;
        arm3.y =  wih * 0.4 - 80;
	arm3.scaleX = scy * 1.2;
	arm3.scaleY = scy * 1.2;

        game_.rootScene.addChild(sw1);
        game_.rootScene.addChild(sw2);
        game_.rootScene.addChild(sw3);
        
        game_.rootScene.addChild(arm1);
        game_.rootScene.addChild(arm2);

        game_.rootScene.backgroundColor  = '#ffffff'; //背景色

        // 「タッチイベント」
            sw1.addEventListener(Event.TOUCH_START, function(e) {
                game_.assets['decision2.mp3'].clone().play();
		if (Ptime * dps >= 180){
        	game_.rootScene.removeChild(arm3);
        	game_.rootScene.addChild(arm2);
		}
		Ptime = 3000-1;
		Tadd = 1;
            });     
            sw2.addEventListener(Event.TOUCH_START, function(e) {
		game_.assets['decision2.mp3'].clone().play();
		Tadd = 0;
            });
            sw3.addEventListener(Event.TOUCH_START, function(e) {
		game_.assets['decision2.mp3'].clone().play();
		Tadd = 1;
            });


            var titleT1 = new Label('');
            titleT1.x = 100;
            titleT1.y = 10;

            var titleM1 = new Label('');
		titleM1.font = '20px sans-serif';
            titleM1.x = 300;
            titleM1.y = 40;
            game_.rootScene.addChild(titleM1);
            var titleS1 = new Label('');
		titleS1.font = '20px sans-serif';
            titleS1.x = 330;
            titleS1.y = 40;
            game_.rootScene.addChild(titleS1);


        // 毎フレーム実行イベント
        game_.rootScene.addEventListener(Event.ENTER_FRAME, function() {
		if (Ptime * dps >= 361){
		Tadd =0;
        	game_.rootScene.removeChild(arm3);
        	game_.rootScene.addChild(arm2);
		arm1.rotation = 0;
		}
		Ptime = Ptime + Tadd;
            		titleT1.text = Ptime;
            		titleM1.text = Math.floor(Ptime / 60) - 50;
            		titleS1.text = Ptime % 60;
		if (Ptime * dps <= 360){
		arm1.rotation = Ptime * dps;
		}
		if (Ptime * dps == 90){
		game_.assets['cursor1.mp3'].clone().play();
		}
		if (Ptime * dps >= 180){
        	game_.rootScene.removeChild(arm2);
        	game_.rootScene.addChild(arm3);
		//game_.assets['cursor1.mp3'].clone().play();
		}
		if (Ptime * dps == 270){
		//game_.assets['cursor1.mp3'].clone().play();
		}
		if (Ptime * dps == 360){
		game_.assets['decision5.mp3'].clone().play();
		}
        });

    }
    game_.start();

};
