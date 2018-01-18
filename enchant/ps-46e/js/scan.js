// enchant.js用スキャンライブラリ


var SpriteScanner = enchant.Class.create(enchant.Sprite, {
    //初期化処理
    initialize: function(_game) {
        this.game = _game || game;
        enchant.Sprite.call(this, this.game.width, this.game.height);
        // プロパティ
        this.scanTargets = [];	// スキャン対象配列
        this.horizonGroups = [];
        this.verticalGroups = [];
        this.scanTargetsNum = 0  // スキャン対象数
        this.horizonGroupsNum = 0  // スキャン対象数
        this.verticalGroupsNum = 0  // スキャン対象数
        this.scanTargetsIndex = -1; // スキャン対象配列の現在値インデックス(初期値-1)
        this.horizonGroupsIndex = -1; // スキャン対象配列グループの現在値インデックス(初期値-1)
        this.verticalGroupsIndex = -1; // スキャン対象配列グループの現在値インデックス(初期値-1)
        this.timeCount = 0; // 何フレームたったかカウント
        this.repeatCount = 0; // スキャンの周回数をカウント
        this.state = 'stop'; // スキャンの状態（scan:スキャン, stop:停止, pause:一時停止, select:選択中, wait:開始待ち）
		this.ev = new Event('scanselect'); // touchイベント発火用

        // スキャンの設定
        this.scanType = 'auto';
        this.scanSE = 1; // スキャン時のSE（0:OFF、1:ON）
        this.selectSE = 1; // 決定時のSE（0:OFF、1:ON）
        this.scanVoice = 0; // scan時のスキャン対象の音声読み上げ（0:OFF、1:ON）
        this.firstWait = 1; // 最初のスキャンまでの待ち時間[秒]
        this.scanInterval = 1.0; // オートスキャンの間隔[秒]
        this.selectWait = 1.0; // 選択後の待ち時間[秒]
        this.frameWidth = 5;  // スキャン枠の太さ[px]
        this.selectFrameWidth = 7;  // スキャン枠の選択時の太さ[px]
        this.scanPattern = 'linear';    // スキャンパターン（horizon:水平グループ、vertical:垂直グループ、linear:単体）
        this.scanRepaet = -1;    // 何週スキャンして停止するか（-1で無限リピート）
        // フォーカスの設定
        this.focusType = 'frame'; // フォーカスの種類（frame:枠線、background:背景色変更）
        this.focusColor = '#ff0000'; // フォーカスの色
        // this.backgroundWidth = null;
        // this.backgroundHeight = null;

        // スキャン設定ファイルがあるときはそれを読み込む
        this.SetScanSettingData();

        // SEの設定
        this.scan_se = 'js/sounds/cursor8.mp3';
        this.select_se = 'js/sounds/decision1.mp3';
        var ASSETS = [
        	this.scan_se,
        	this.select_se
        ];
        this.game.preload(ASSETS);

        // Surfaceオブジェクトの作成
        this.surface = new Surface(this.width, this.height);
        this.image = this.surface;
        this.context = this.surface.context;

        //キーバインドの設定
        this.game.keybind(49, 'a');
        this.game.keybind(51, 'a');
        this.game.keybind(32, 'a');
        this.game.keybind(10, 'a');
        this.game.keybind(13, 'a');
        // スイッチ入力対応
        var obj = this;
        this.game.addEventListener('abuttondown', function(){obj.keyDown();});

        // canvas外のタッチにも対応する
        this.touchEnabled = false; // htmlのクリックイベントとspriteのタッチイベントが重複するのでspriteのタッチイベントはOFFにしておく
        var _touch = ('ontouchstart' in document) ? 'touchstart' : 'click';
        $('html').on(_touch, function(){obj.ontouchstart();});

        // 最初の1項目を選択可能にする
        this.timeCount = (this.scanInterval * this.game.fps);
        this.firstScanFlag = true;
    },
    ontouchstart: function(){
        // console.log('click or touch');
        this.dispatchTouchEvent();
    },
    onenterframe: function() {
        switch(this.state) {
            case 'scan': this.timeCount++; this.scan(); break;
            case 'stop': break;
            case 'pause': break;
            case 'select': this.select();break;
            case 'wait': break;
            default: break;
        }
    },
    keyDown: function() {
        // console.log('key down');
    	this.dispatchTouchEvent();
    },
    dispatchTouchEvent: function() {
    	switch(this.state) {
            case 'scan':
                // なにもスキャンしていないときはbreak
                if(this.scanTargetsIndex == -1) {
                    break;
                }
                // 決定時のSE再生
                if(this.selectSE === 1) {
                    this.game.assets[this.select_se].clone().play();
                }
                // select状態にしつつ、待ち時間の後、スキャン中のターゲットのタッチイベント発火
                this.scanSelect();
                var obj = this;
                this.game.currentScene.tl.delay(this.selectWait*this.game.fps)
                 .then(function(){
                    var scanTargetsIndex = obj.scanTargetsIndex;
                    obj.scanStop();
                    obj.scanTargets[scanTargetsIndex].dispatchEvent(obj.ev);
                });
                break;
            case 'stop': break;
            case 'pause': break;
            case 'select': break;
            case 'wait': this.scanStart(); break;
            default: break;
        }
    },
/* 毎フレーム呼び出される各状態ごとのメソッド */
    scan: function() {
        // 指定時間経過した場合にスキャンを進める
        if(this.scanInterval <= this.timeCount/this.game.fps) {
            // スキャン対象があるときのみスキャン実行
            if(this.scanTargetsNum != 0 && this.scanContinueCheck()) {
                // スキャン対象を更新
                this.scanTargetsIndex = (this.scanTargetsIndex+1) % this.scanTargetsNum;

                // スキャン対象の各パラメータを取得
                var t = this.scanTargets[this.scanTargetsIndex];
                var x = this.realCordinateX(t);
                var y = this.realCordinateY(t);
                var width = t.width*t.scaleX;
                var height = t.height*t.scaleY;
                var lineWidth = this.frameWidth
                // spriteそのものではなく一定範囲をスキャンする場合の値更新
                /*
                if(this.backgroundWidth != null) {
                    x -= (this.backgroundWidth - width)/2;
                    width = this.backgroundWidth;
                }
                if(this.backgroundHeight != null) {
                    y -= (this.backgroundHeight - height)/2;
                    height = this.backgroundHeight;
                }
                */
                // スキャン時のSE
                if(this.scanSE === 1) {
                    this.game.assets[this.scan_se].clone().play();
                }
                // スキャン時の音声読み上げ
                if(this.scanVoice === 1) {
                    this.scanTargets[this.scanTargetsIndex].voice.clone().play();
                }
                // フォーカスタイプごとのフォーカスを当てる
                switch(this.focusType) {
                    case 'frame':
                        this.createFrame(x, y, width, height, lineWidth);
                        break;
                    case 'background':
                        this.createRectangle(x, y, width, height);
                        break;
                    default: break;
                }
            }
            // フレーム数のカウントを初期化
            this.timeCount = 0;
            // 最初のスキャンのときのみ待ち時間を長くとる
            if(this.firstScanFlag) {
                this.timeCount = -( (this.firstWait-this.scanInterval) * this.game.fps);
                this.firstScanFlag =false;
            }
        }
    },
    stop: function() {

    },
    pause: function() {

    },
    select: function() {
        var t = this.scanTargets[this.scanTargetsIndex];
        var x = this.realCordinateX(t);
        var y = this.realCordinateY(t);
        var width = t.width*t.scaleX;
        var height = t.height*t.scaleY;
        var lineWidth = this.selectFrameWidth
        // spriteそのものではなく一定範囲をスキャンする場合の値更新
        /*
        if(this.backgroundWidth != null) {
            x -= (this.backgroundWidth - width)/2;
            width = this.backgroundWidth;
        }
        if(this.backgroundHeight != null) {
            y -= (this.backgroundHeight - height)/2;
            height = this.backgroundHeight;
        }
        */
        this.createFrame(x, y, width, height, lineWidth);
    },
    wait: function() {

    },
/* スキャン対象の制御メソッド */
    setScanTargets: function(scanTargets) {
        // 引数が配列かどうか判定
        if(Array.isArray(scanTargets)) {
            // 配列の場合は代入
            this.scanTargets = scanTargets;
        } else {
            // 変数の場合は再定義
            this.scanTargets = [scanTargets];
        }
        // スキャン対象数を更新
        this.scanTargetsNum = this.scanTargets.length;
    },
    addScanTargets: function(scanTargets) {
    	// 引数が配列かどうか判定
    	if(Array.isArray(scanTargets)) {
            // 配列の場合は連結
    		Array.prototype.push.apply(this.scanTargets, scanTargets);
    	} else {
            // 変数の場合はプッシュ
    		this.scanTargets.push(scanTargets);
    	}
        // スキャン対象数を更新
        this.scanTargetsNum = this.scanTargets.length;
    },
    removeScanTarget: function(scanTarget) {
        for (var i=0; i < this.scanTargetsNum; i++) {
            if(this.scanTargets[i] == scanTarget) {
                this.scanTargets.splice(i, 1);
                // フレームが残ってしまうので消しておく
                this.context.clearRect(0, 0, this.width, this.height);
            }
        }
        // スキャン対象数を更新
        this.scanTargetsNum = this.scanTargets.length;
        // スキャン対象が0になった場合はスキャンを停止
        if(this.scanTargetsNum == 0) {
            this.scanStop();
        }
    },
    resetScanTarget: function() {
        this.scanTargets = [];
        this.scanTargetsNum = 0;
        //this.state = 'stop';
    },
    setHorizonGroups : function() {
/*****  今はIndexを使っているがNumを使うべきかもしれん  ****/
        var groupY = [];
        for (var i=0; i < this.scanTargetsNum; i++) {
            var flag = 0;

            for(var j=0; j < this.horizonGroupsIndex+1; j++) {
                // 既存のグループに属せる場合は追加
                if(groupY[j] == this.scanTargets[i].y) {
                    this.horizonGroups[j].push(this.scanTargets[i]);
                    // グループのプロパティ更新
                    var t = this.scanTargets[i];
                    var x = t.x+((t.width-t.width*t.scaleX)/2);
                    var width = t.width*t.scaleX;
                    this.horizonGroups[j].width = x + width - this.horizonGroups[j].x;
                    flag = 1;
                    j = this.horizonGroupsIndex+1;
                }
            }
            if(flag == 0) {
                // 新しいグループを作成
                this.horizonGroupsIndex++;
                groupY[this.horizonGroupsIndex] = this.scanTargets[i].y;
                this.horizonGroups[this.horizonGroupsIndex] = [];   // 二次元配列の宣言
                this.horizonGroups[this.horizonGroupsIndex].push(this.scanTargets[i]);
                // グループのプロパティ設定
                var t = this.scanTargets[i];
                var x = t.x+((t.width-t.width*t.scaleX)/2);
                var y = t.y+((t.height-t.height*t.scaleY)/2);
                var height = t.height*t.scaleY;
                this.horizonGroups[this.horizonGroupsIndex].x = x;
                this.horizonGroups[this.horizonGroupsIndex].y = y;
                this.horizonGroups[this.horizonGroupsIndex].height = height;
            }
        }
    },
    setVerticalGroups : function() {

    },
/* スキャンの制御メソッド */
    scanStart: function(_delay) {
        var delay = _delay || 0;
        var obj = this;
        setTimeout(function(){
            obj.state = 'scan';
        },delay*1000);
        // this.game.currentScene.tl.delay(delay*this.game.fps)
        //  .then(function(){
        //     obj.state = 'scan';
        // });
    },
    scanStop: function() {
        this.state = 'stop';
        this.scanTargetsIndex = -1;
        this.timeCount = 0;
        this.repeatCount = 0;
        this.context.clearRect(0, 0, this.width, this.height);
    },
    scanPause: function() {
        this.state = 'pause';
    },
    scanSelect: function() {
        this.state = 'select';
    },
    scanWait: function() {
        this.state = 'wait';
        this.scanTargetsIndex = -1;
        this.timeCount = 0;
        this.repeatCount = 0;
        this.context.clearRect(0, 0, this.width, this.height);
    },
/* モードの変更メソッド */
    // フォーカスタイプをframeに変更
    focusFrame: function() {
        this.focusType = 'frame';
    },
    // フォーカスタイプをbackgroundに変更
    focusBackground: function() {
        this.focusType = 'background';
    },
    /* 一定のフォーカス範囲をスキャンするスキャンする際のフォーカスサイズを設定 */
    /*
    setBackgroundSize: function(width, height) {
        this.backgroundWidth = width;
        this.backgroundHeight = height;
    },
    resetBackgroundSize: function() {
        this.backgroundWidth = null;
        this.backgroundHeight = null;
    },
    */
/* スキャンの設定変数セッタ */
    setScanInterval: function(scanInterval) {
        this.scanInterval = scanInterval;
    },
    setSelectWait: function(selectWait) {
        this.selectWait = selectWait;
    },
    setFrameWidth: function(frameWidth) {
        this.frameWidth = frameWidth;
    },
/* 関数 */
    // スキャンが続行可能か確認する
    scanContinueCheck: function() {
        // 周回数をカウントし、以降スキャンしない場合はfalseを返す
        if(this.scanTargetsIndex+1 == this.scanTargetsNum) {
            // 1周した
            this.repeatCount++;
            if(this.repeatCount == this.scanRepaet) {
                this.scanWait();
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    },
    createFrame: function(x, y, width, height, _lineWidth) {
        // var lineWidth = _lineWidth; // もとのgameサイズに依存する値
        var lineWidth = _lineWidth * (width/150); // スキャン動作確認画面の「スキャン対象」と「フォーカスの幅」の比率を維持する値
        // var lineWidth = _lineWidth / this.game.scale; // 絶対値　どんなに拡大縮小してもその幅で表示される

    	this.context.clearRect(0, 0, this.width, this.height);

        var frameX = x - lineWidth;
        var frameY = y - lineWidth;
    	var frameWidth = width + (lineWidth*2);
    	var frameHeight = height + (lineWidth*2);

    	this.context.fillStyle = this.focusColor;
    	this.context.fillRect( frameX, frameY, frameWidth, frameHeight);
    	this.context.clearRect(frameX+lineWidth, frameY+lineWidth, width, height);
    },
    createRectangle: function(x, y, width, height) {
        this.context.clearRect(0, 0, this.width, this.height);

        var frameX = x;
        var frameY = y;
        var frameWidth = width;
        var frameHeight = height;

        this.context.fillStyle = this.focusColor;
        this.context.fillRect( frameX, frameY, frameWidth, frameHeight);
    },
    // 実際に見たときのSpriteのx座標の取得
    realCordinateX: function(sprite) {
        var x = sprite.x;
        var w = sprite.width;
        var scaleX = sprite.scaleX;
        var originX = sprite.originX;
        if(originX != null) {
            return x + (w-w*scaleX)*(originX/w);
        } else {
            return x + (w-w*scaleX)/2;
        }
    },
    // 実際に見たときのSpriteのy座標の取得
    realCordinateY: function(sprite) {
        var y = sprite.y;
        var h = sprite.height;
        var scaleY = sprite.scaleY;
        var originY = sprite.originY;
        if(originY != null) {
            return y + (h-h*scaleY)*(originY/h);
        } else {
            return y + (h-h*scaleY)/2;
        }
    },
/* 外部ファイルからデータ読み込み */
    SetScanSettingData: function() {
        if(typeof getScanSettingData == 'function') {
            var settingData = getScanSettingData(); // 変数受け渡し用のグローバル関数
            if(Object.keys(settingData).length > 0) {
                if(settingData["scan_interval"] !== void 0) {
                    this.scanInterval = Number(settingData["scan_interval"]);
                }
                if(settingData["select_wait"] !== void 0) {
                    this.selectWait = Number(settingData["select_wait"]);
                }
                if(settingData["scan_repaet"] !== void 0) {
                    this.scanRepaet = Number(settingData["scan_repaet"]);
                }
                if(settingData["scan_se"] !== void 0) {
                    this.scanSE = Number(settingData["scan_se"]);
                }
                if(settingData["select_se"] !== void 0) {
                    this.selectSE = Number(settingData["select_se"]);
                }
                if(settingData["focus_type"] !== void 0) {
                    this.focusType = settingData["focus_type"];
                }
                if(settingData["frame_width"] !== void 0) {
                    this.frameWidth = Number(settingData["frame_width"]);
                }
                if(settingData["select_frame_width"] !== void 0) {
                    this.selectFrameWidth = Number(settingData["select_frame_width"]);
                }
                if(settingData["focus_color"] !== void 0) {
                    this.focusColor = settingData["focus_color"];
                }

                // this.scanVoice = Number(settingData["scan_voice"]);
            }
        }
    }
});