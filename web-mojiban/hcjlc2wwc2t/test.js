   var SERVICE_NAME0 = 'SERVICE_NAME0';
   var storage00;
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
   var SERVICE_NAME11 = 'SERVICE_NAME11';
   var storage11 = null;
   var SERVICE_NAME12 = 'SERVICE_NAME12';
   var storage12 = null;
   var SERVICE_NAME13 = 'SERVICE_NAME13';
   var storage13 = null;
   var SERVICE_NAME14 = 'SERVICE_NAME14';
   var storage14 = null;
   var SERVICE_NAME15 = 'SERVICE_NAME15';
   var storage15 = null;
   var SERVICE_NAME16 = 'SERVICE_NAME16';
   var storage16 = null;
   var SERVICE_NAME17 = 'SERVICE_NAME17';
   var storage17 = null;
   var SERVICE_NAME18 = 'SERVICE_NAME18';
   var storage18 = null;
   var SERVICE_NAME19 = 'SERVICE_NAME19';
   var storage19 = null;
   var SERVICE_NAME20 = 'SERVICE_NAME20';
   var storage20 = null;

document.addEventListener("DOMContentLoaded", function(){ // htmlを読み込み終わってから以下を実行せよ
//画面大きさ表示部分　テスト用
  //読み込み時の表示
   window_load();
  //ウィンドウサイズ変更時に更新
   window.onresize = window_load;
  //画面サイズの表示 
   function window_load() {
	var sW,sH,s;
	sW = window.innerWidth;
	sH = window.innerHeight;
	s = 'windows size 巾 ' + sW + ' 高 ' + sH;
	//document.getElementById("winsize2").innerHTML = s;
   }

//文書ファイル保存機能
  //local storage 関係宣言 グローバル変数化のため、文頭へ移動した
/*   var SERVICE_NAME0 = 'SERVICE_NAME0';
   var storage00;
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
*/
  //開始時　local storage  から読み込み
/*        storage00 = localStorage.getItem('SERVICE_NAME0');

            if (storage00 == 1 ){  //初回起動時にstrage0=nullとなるのを1にして不具合を回避している
               storage0 =  1;
            } else if (storage00 == 2 ) {
               storage0 =  2;
            } else if (storage00 == 3 ) {
               storage0 =  3;
            } else if (storage00 == 4 ) {
               storage0 =  4;
            } else if (storage00 == 5 ) {
               storage0 =  5;
            } else if (storage00 == 6 ) {
               storage0 =  6;
            } else if (storage00 == 7 ) {
               storage0 =  7;
            } else if (storage00 == 8 ) {
               storage0 =  8;
            } else if (storage00 == 9 ) {
               storage0 =  9;
            } else if (storage00 == 10 ) {
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
*/

// フォーカス時にローカルストレージを読み込みなおす　　マルチWeb文字盤機能
   window.onload = window.onfocus = function() {

        storage00 = localStorage.getItem('SERVICE_NAME0');

            if (storage00 == 1 ){  //初回起動時にstrage0=nullとなるのを1にして不具合を回避している
               storage0 =  1;
            } else if (storage00 == 2 ) {
               storage0 =  2;
            } else if (storage00 == 3 ) {
               storage0 =  3;
            } else if (storage00 == 4 ) {
               storage0 =  4;
            } else if (storage00 == 5 ) {
               storage0 =  5;
            } else if (storage00 == 6 ) {
               storage0 =  6;
            } else if (storage00 == 7 ) {
               storage0 =  7;
            } else if (storage00 == 8 ) {
               storage0 =  8;
            } else if (storage00 == 9 ) {
               storage0 =  9;
            } else if (storage00 == 10 ) {
               storage0 =  10;
            } else if (storage00 == 11 ) {
               storage0 =  11;
            } else if (storage00 == 12 ) {
               storage0 =  12;
            } else if (storage00 == 13 ) {
               storage0 =  13;
            } else if (storage00 == 14 ) {
               storage0 =  14;
            } else if (storage00 == 15 ) {
               storage0 =  15;
            } else if (storage00 == 16 ) {
               storage0 =  16;
            } else if (storage00 == 17 ) {
               storage0 =  17;
            } else if (storage00 == 18 ) {
               storage0 =  18;
            } else if (storage00 == 19 ) {
               storage0 =  19;
            } else if (storage00 == 20 ) {
               storage0 =  20;
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
    try {
        storage11 = JSON.parse(localStorage[SERVICE_NAME11] || '');
    } catch(e) {
        storage11 = '';
    }
    try {
        storage12 = JSON.parse(localStorage[SERVICE_NAME12] || '');
    } catch(e) {
        storage12 = '';
    }
    try {
        storage13 = JSON.parse(localStorage[SERVICE_NAME13] || '');
    } catch(e) {
        storage13 = '';
    }
    try {
        storage14 = JSON.parse(localStorage[SERVICE_NAME14] || '');
    } catch(e) {
        storage14 = '';
    }
    try {
        storage15 = JSON.parse(localStorage[SERVICE_NAME15] || '');
    } catch(e) {
        storage15 = '';
    }
    try {
        storage16 = JSON.parse(localStorage[SERVICE_NAME16] || '');
    } catch(e) {
        storage16 = '';
    }
    try {
        storage17 = JSON.parse(localStorage[SERVICE_NAME17] || '');
    } catch(e) {
        storage17 = '';
    }
    try {
        storage18 = JSON.parse(localStorage[SERVICE_NAME18] || '');
    } catch(e) {
        storage18 = '';
    }
    try {
        storage19 = JSON.parse(localStorage[SERVICE_NAME19] || '');
    } catch(e) {
        storage19 = '';
    }
    try {
        storage20 = JSON.parse(localStorage[SERVICE_NAME20] || '');
    } catch(e) {
        storage20 = '';
    }

//テキストボックスへの初期文字列の書き込み部
     var text1 = document.getElementById("text1");

            if (storage0 == 1 ){       // 文書番号storage0に指定された番号の文書をtext1に読み込んで表示する
               text1.value = storage1;
            } else if (storage0 == 2 ){
               text1.value = storage2;
            } else if (storage0 == 3 ){
               text1.value = storage3;
            } else if (storage0 == 4 ){
               text1.value = storage4;
            } else if (storage0 == 5 ){
               text1.value = storage5;
            } else if (storage0 == 6 ){
               text1.value = storage6;
            } else if (storage0 == 7 ){
               text1.value = storage7;
            } else if (storage0 == 8 ){
               text1.value = storage8;
            } else if (storage0 == 9 ){
               text1.value = storage9;
            } else if (storage0 == 10 ){
               text1.value = storage10;
            } else if (storage0 == 11 ){
               text1.value = storage11;
            } else if (storage0 == 12 ){
               text1.value = storage12;
            } else if (storage0 == 13 ){
               text1.value = storage13;
            } else if (storage0 == 14 ){
               text1.value = storage14;
            } else if (storage0 == 15 ){
               text1.value = storage15;
            } else if (storage0 == 16 ){
               text1.value = storage16;
            } else if (storage0 == 17 ){
               text1.value = storage17;
            } else if (storage0 == 18 ){
               text1.value = storage18;
            } else if (storage0 == 19 ){
               text1.value = storage19;
            } else if (storage0 == 20 ){
               text1.value = storage20;
            }
               setCursorend();
      Bunnum(storage0);

   }


  //終了時　local storage  へ保存//localstorage対策３2020/02/19　入力後カーソル移動ファンクション部分へ移動
/*   window.onunload = window.onbeforeunload = function() {
            if (storage0 == 1 ){
               storage1 = text1.value;
            } else if (storage0 == 2 ) {
               storage2 = text1.value;
            } else if (storage0 == 3 ) {
               storage3 = text1.value;
            } else if (storage0 == 4 ) {
               storage4 = text1.value;
            } else if (storage0 == 5 ) {
               storage5 = text1.value;
            } else if (storage0 == 6 ) {
               storage6 = text1.value;
            } else if (storage0 == 7 ) {
               storage7 = text1.value;
            } else if (storage0 == 8 ) {
               storage8 = text1.value;
            } else if (storage0 == 9 ) {
               storage9 = text1.value;
            } else if (storage0 == 10 ) {
               storage10 = text1.value;
            } else {
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
   }  */
//文書ファイル保存機能ここまで

//文字盤判別番号
   var CBoard0 = 0;  // 0=> hiragana 1=> katakana

      location.href = '#text1';

//テキストボックスへの初期文字列の書き込み部
/*     var text1 = document.getElementById("text1");

            if (storage0 == 1 ){       // 文書番号storage0に指定された番号の文書をtext1に読み込んで表示する
               text1.value = storage1;
            } else if (storage0 == 2 ){
               text1.value = storage2;
            } else if (storage0 == 3 ){
               text1.value = storage3;
            } else if (storage0 == 4 ){
               text1.value = storage4;
            } else if (storage0 == 5 ){
               text1.value = storage5;
            } else if (storage0 == 6 ){
               text1.value = storage6;
            } else if (storage0 == 7 ){
               text1.value = storage7;
            } else if (storage0 == 8 ){
               text1.value = storage8;
            } else if (storage0 == 9 ){
               text1.value = storage9;
            } else if (storage0 == 10 ){
               text1.value = storage10;
            }
               setCursorend();
*/
//文書切り替えボタンを表示文番号にあわせて変更する
    Bunnum(storage0);
//テキストボックスクリック時のカーソル出現＞Androidでのキーボード出現防止
//これでもクリック後KBが表示される。解決できない＞出なくなった
     var obj = document.getElementById('text1');
	 obj.addEventListener("click", function() {
               setCursorend();
     }, false);

  //web speech api tts 音声の設定と起動時の音声発声設定　ユーザの操作なしには許可されない場合がこれから増える
            var synthes = new SpeechSynthesisUtterance();
               synthes.voiceURI = 'Google 日本人';//'native';
               synthes.volume = 1;
               synthes.rate = 0.9;// ややゆっくり　一文字の発話はっきりする
               synthes.pitch = 1;
               synthes.lang = 'ja-JP';
               synthes.text = '準備出来ました';
               //synthes.lang = 'en-US';//米語の例
               //synthes.text = 'hello, Now, We start the enchant.js';
               speechSynthesis.speak(synthes);


//ボタンクリック時の動作
//ひらがな文字盤
   // 一列目
     //文書読み上げ部分
     var obj = document.getElementById('000');
	 obj.addEventListener("click", function() {
                synthes.text = text1.value;
                speechSynthesis.speak(synthes);
     }, false);
     //文書切り替え部分
     var obj = document.getElementById('bun');
	 obj.addEventListener("click", async function() {
     // web audio API によるサウンド出力
        const audioctx = new AudioContext();
        const sound = await LoadSample(audioctx, "./snd/se3.wav");
        const src = new AudioBufferSourceNode(audioctx, {buffer:sound});
        src.connect(audioctx.destination);
        src.start();

      function LoadSample(actx, url) {
        return new Promise((resolv)=>{
            fetch(url).then((response)=>{
                return response.arrayBuffer();
            }).then((arraybuf)=>{
                return actx.decodeAudioData(arraybuf);
            }).then((buf)=>{
                resolv(buf);
            })
        });
      }

            if (storage0 == 1 ){
               storage1 = text1.value;
               text1.value = storage2;
               storage0 = 2;
            } else if (storage0 == 2 ){
               storage2 = text1.value;
               text1.value = storage3;
               storage0 = 3;
            } else if (storage0 == 3 ){
               storage3 = text1.value;
               text1.value = storage4;
               storage0 = 4;
            } else if (storage0 == 4 ){
               storage4 = text1.value;
               text1.value = storage5;
               storage0 = 5;
            } else if (storage0 == 5 ){
               storage5 = text1.value;
               text1.value = storage6;
               storage0 = 6;
            } else if (storage0 == 6 ){
               storage6 = text1.value;
               text1.value = storage7;
               storage0 = 7;
            } else if (storage0 == 7 ){
               storage7 = text1.value;
               text1.value = storage8;
               storage0 = 8;
            } else if (storage0 == 8 ){
               storage8 = text1.value;
               text1.value = storage9;
               storage0 = 9;
            } else if (storage0 == 9 ){
               storage9 = text1.value;
               text1.value = storage10;
               storage0 = 10;
            } else if (storage0 == 10 ){
               storage10 = text1.value;
               text1.value = storage11;
               storage0 = 11;
            } else if (storage0 == 11 ){
               storage11 = text1.value;
               text1.value = storage12;
               storage0 = 12;
            } else if (storage0 == 12 ){
               storage12 = text1.value;
               text1.value = storage13;
               storage0 = 13;
            } else if (storage0 == 13 ){
               storage13 = text1.value;
               text1.value = storage14;
               storage0 = 14;
            } else if (storage0 == 14 ){
               storage14 = text1.value;
               text1.value = storage15;
               storage0 = 15;
            } else if (storage0 == 15 ){
               storage15 = text1.value;
               text1.value = storage16;
               storage0 = 16;
            } else if (storage0 == 16 ){
               storage16 = text1.value;
               text1.value = storage17;
               storage0 = 17;
            } else if (storage0 == 17 ){
               storage17 = text1.value;
               text1.value = storage18;
               storage0 = 18;
            } else if (storage0 == 18 ){
               storage18 = text1.value;
               text1.value = storage19;
               storage0 = 19;
            } else if (storage0 == 19 ){
               storage19 = text1.value;
               text1.value = storage20;
               storage0 = 20;
            } else if (storage0 == 20 ){
               storage20 = text1.value;
               text1.value = storage1;
               storage0 = 1;
            }
       localStorage.setItem('SERVICE_NAME0', storage0 ); //localstorage対策３2020/02/19　文番号の保存
      Bunnum(storage0);
      setCursorend();
     }, false);
     var obj = document.getElementById('hai');
	 obj.addEventListener("click", function() {
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
     }, false);
     var obj = document.getElementById('ten');
	 obj.addEventListener("click", function() {
        synthes.text = 'てん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "、";
      setCursorend();
     }, false);
     var obj = document.getElementById('zenbukesu');
	 obj.addEventListener("click", function() {

    var result = window.confirm('ほんとうにぜんぶけしていいですか？');

    if( result ) {
        synthes.text = 'ぜんぶけす';
        speechSynthesis.speak(synthes);
        text1.value = "";
        setCursorend();
    }
    else {
    }

// firefox の場合次の2行を使わないと正常に消せない　　原因不明
        //text1.value = "";
        //setCursorend();

     }, false);
   // 二列目
     var obj = document.getElementById('00');
	 obj.addEventListener("click", function() {
        synthes.text = 'スペース';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "　";
      setCursorend();
     }, false);
     var obj = document.getElementById('mojiban');
	 obj.addEventListener("click", async function() {
     // web audio API によるサウンド出力
        const audioctx = new AudioContext();
        const sound = await LoadSample(audioctx, "./snd/se2.wav");
        const src = new AudioBufferSourceNode(audioctx, {buffer:sound});
        src.connect(audioctx.destination);
        src.start();

       function LoadSample(actx, url) {
        return new Promise((resolv)=>{
            fetch(url).then((response)=>{
                return response.arrayBuffer();
            }).then((arraybuf)=>{
                return actx.decodeAudioData(arraybuf);
            }).then((buf)=>{
                resolv(buf);
            })
        });
       }

      CBoardChange(CBoard0);
             if (CBoard0 == 0 ){
               CBoard0 = 1;
            } else if (CBoard0 == 1 ){
               CBoard0 = 2;
            } else if (CBoard0 == 2 ){
               CBoard0 = 3;
            } else if (CBoard0 == 3 ){
               CBoard0 = 0;
            }
     }, false);
     var obj = document.getElementById('iie');
	 obj.addEventListener("click", function() {
        synthes.text = 'いいえ';
        speechSynthesis.speak(synthes);
     }, false);
     var obj = document.getElementById('maru');
	 obj.addEventListener("click", function() {
        synthes.text = 'まる';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "。";
      setCursorend();
     }, false);
     var obj = document.getElementById('kesu');
	 obj.addEventListener("click", function() {
        synthes.text = 'ひとつけす';
        speechSynthesis.speak(synthes);
      text1.value = text1.value.substring(0, text1.value.length -1 );
      setCursorend();
     }, false);

   // 三列目
     var obj = document.getElementById('1');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ありがとう';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ありがとう";
      } else if (CBoard0 == 1 ){
        synthes.text = 'あけて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あけて";
      } else if (CBoard0 == 2 ){
        synthes.text = '衣替え';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "衣替え";
      } else if (CBoard0 == 3 ){
        synthes.text = '暑いです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "暑いです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('2');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'こんにちは';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "こんにちは";
      } else if (CBoard0 == 1 ){
        synthes.text = '通して';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "通して";
      } else if (CBoard0 == 2 ){
        synthes.text = '遠慮';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "遠慮";
      } else if (CBoard0 == 3 ){
        synthes.text = '楽しいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "楽しいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('3');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'どちらでもいいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもいいです";
      } else if (CBoard0 == 1 ){
        synthes.text = 'すてて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "すてて";
      } else if (CBoard0 == 2 ){
        synthes.text = '反省';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "反省";
      } else if (CBoard0 == 3 ){
        synthes.text = 'どちらでもいいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもいいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('4');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'おはようございます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おはようございます";
      } else if (CBoard0 == 1 ){
        synthes.text = '充電';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "充電";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '苦しいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "苦しいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('5');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ようこそ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ようこそ";
      } else if (CBoard0 == 1 ){
        synthes.text = '電池交換';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "電池交換";
      } else if (CBoard0 == 2 ){
        synthes.text = '成功';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "成功";
      } else if (CBoard0 == 3 ){
        synthes.text = '元気です';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "元気です";
      }
      setCursorend();
     }, false);
   // 四列目
     var obj = document.getElementById('6');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'お願いします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お願いします";
      } else if (CBoard0 == 1 ){
        synthes.text = 'しめて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しめて";
      } else if (CBoard0 == 2 ){
        synthes.text = '訓練';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "訓練";
      } else if (CBoard0 == 3 ){
        synthes.text = '寒いです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "寒いです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('7');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'さようなら';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "さようなら";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ひろって';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ひろって";
      } else if (CBoard0 == 2 ){
        synthes.text = 'メール';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "メール";
      } else if (CBoard0 == 3 ){
        synthes.text = 'うれしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うれしいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('8');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'どちらでもありません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもありません";
      } else if (CBoard0 == 1 ){
        synthes.text = '入れて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "入れて";
      } else if (CBoard0 == 2 ){
        synthes.text = '友人';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "友人";
      } else if (CBoard0 == 3 ){
        synthes.text = 'どちらでもありません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもありません";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('9');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'おやすみなさい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おやすみなさい";
      } else if (CBoard0 == 1 ){
        synthes.text = '出して';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "出して";
      } else if (CBoard0 == 2 ){
        synthes.text = '知人';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "知人";
      } else if (CBoard0 == 3 ){
        synthes.text = '疲れました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "疲れました";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('0');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'またきてね';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "またきてね";
      } else if (CBoard0 == 1 ){
        synthes.text = '取って';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "取って";
      } else if (CBoard0 == 2 ){
        synthes.text = '失敗';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "失敗";
      } else if (CBoard0 == 3 ){
        synthes.text = '調子いいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "調子いいです";
      }
      setCursorend();
     }, false);
   // 五列目
     var obj = document.getElementById('a');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'もういいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "もういいです";
      } else if (CBoard0 == 1 ){
        synthes.text = '早くして';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "早くして";
      } else if (CBoard0 == 2 ){
        synthes.text = '移送サービス';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "移送サービス";
      } else if (CBoard0 == 3 ){
        synthes.text = '好きです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "好きです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('i');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'はじめまして';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はじめまして";
      } else if (CBoard0 == 1 ){
        synthes.text = '伝えて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "伝えて";
      } else if (CBoard0 == 2 ){
        synthes.text = '過食';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "過食";
      } else if (CBoard0 == 3 ){
        synthes.text = '悲しいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "悲しいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('u');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'もう一度お願いします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "もう一度お願いします";
      } else if (CBoard0 == 1 ){
        synthes.text = '介助';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "介助";
      } else if (CBoard0 == 2 ){
        synthes.text = 'テレビ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "テレビ";
      } else if (CBoard0 == 3 ){
        synthes.text = '知っています';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "知っています";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('e');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'こんばんは';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "こんばんは";
      } else if (CBoard0 == 1 ){
        synthes.text = '一緒に来て';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "一緒に来て";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ストレス';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ストレス";
      } else if (CBoard0 == 3 ){
        synthes.text = '眠いです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "眠いです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('o');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'よかったです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "よかったです";
      } else if (CBoard0 == 1 ){
        synthes.text = '手伝って';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "手伝って";
      } else if (CBoard0 == 2 ){
        synthes.text = '外泊';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "外泊";
      } else if (CBoard0 == 3 ){
        synthes.text = '変わりありません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "変わりありません";
      }
      setCursorend();
     }, false);
   // 六列目
     var obj = document.getElementById('ka');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ごめんなさい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ごめんなさい";
      } else if (CBoard0 == 1 ){
        synthes.text = '貼って';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "貼って";
      } else if (CBoard0 == 2 ){
        synthes.text = '休み';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "休み";
      } else if (CBoard0 == 3 ){
        synthes.text = 'きらいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "きらいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ki');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'よろしく';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "よろしく";
      } else if (CBoard0 == 1 ){
        synthes.text = '電話';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "電話";
      } else if (CBoard0 == 2 ){
        synthes.text = '後悔';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "後悔";
      } else if (CBoard0 == 3 ){
        synthes.text = 'くやしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くやしいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ku');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'お先にどうぞ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お先にどうぞ";
      } else if (CBoard0 == 1 ){
        synthes.text = '直して';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "直して";
      } else if (CBoard0 == 2 ){
        synthes.text = '安心';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "安心";
      } else if (CBoard0 == 3 ){
        synthes.text = '知りません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "知りません";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ke');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '修理';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "修理";
      } else if (CBoard0 == 2 ){
        synthes.text = '悩み';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "悩み";
      } else if (CBoard0 == 3 ){
        synthes.text = '心配です';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "心配です";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ko');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'うれしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うれしいです";
      } else if (CBoard0 == 1 ){
        synthes.text = 'やめて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "やめて";
      } else if (CBoard0 == 2 ){
        synthes.text = 'お話';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お話";
      } else if (CBoard0 == 3 ){
        synthes.text = 'まあまあです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まあまあです";
      }
      setCursorend();
     }, false);
   // 七列目
     var obj = document.getElementById('sa');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '行ってきます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "行ってきます";
      } else if (CBoard0 == 1 ){
        synthes.text = '教えて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "教えて";
      } else if (CBoard0 == 2 ){
        synthes.text = '残します';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "残します";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('si');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'お帰りなさい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お帰りなさい";
      } else if (CBoard0 == 1 ){
        synthes.text = '書いて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "書いて";
      } else if (CBoard0 == 2 ){
        synthes.text = '片付け';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "片付け";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('su');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'いただきます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "いただきます";
      } else if (CBoard0 == 1 ){
        synthes.text = '合図';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "合図";
      } else if (CBoard0 == 2 ){
        synthes.text = '相談';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "相談";
      } else if (CBoard0 == 3 ){
        synthes.text = 'わかりました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "わかりました";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('se');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'おいしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おいしいです";
      } else if (CBoard0 == 1 ){
        synthes.text = '預かって';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "預かって";
      } else if (CBoard0 == 2 ){
        synthes.text = '支度';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "支度";
      } else if (CBoard0 == 3 ){
        synthes.text = '不安です';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "不安です";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('so');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '大丈夫ですか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "大丈夫ですか";
      } else if (CBoard0 == 1 ){
        synthes.text = 'もらって';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "もらって";
      } else if (CBoard0 == 2 ){
        synthes.text = 'なくなった';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "なくなった";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 八列目
     var obj = document.getElementById('ta');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ただいま';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ただいま";
      } else if (CBoard0 == 1 ){
        synthes.text = '連絡';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "連絡";
      } else if (CBoard0 == 2 ){
        synthes.text = '返事';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "返事";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ti');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '行ってらっしゃい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "行ってらっしゃい";
      } else if (CBoard0 == 1 ){
        synthes.text = '投函';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "投函";
      } else if (CBoard0 == 2 ){
        synthes.text = '掃除';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "掃除";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('tu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ごちそうさま';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ごちそうさま";
      } else if (CBoard0 == 1 ){
        synthes.text = '都合を聞いて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "都合を聞いて";
      } else if (CBoard0 == 2 ){
        synthes.text = '切手';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "切手";
      } else if (CBoard0 == 3 ){
        synthes.text = 'わかりません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "わかりません";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('te');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = 'はさんで';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はさんで";
      } else if (CBoard0 == 2 ){
        synthes.text = '作って';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "作って";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('to');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '会いたいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "会いたいです";
      } else if (CBoard0 == 1 ){
        synthes.text = '後ろにかけて';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "後ろにかけて";
      } else if (CBoard0 == 2 ){
        synthes.text = '使って';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "使って";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 九列目
     var obj = document.getElementById('na');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'すみません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "すみません";
      } else if (CBoard0 == 1 ){
        synthes.text = '支払い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "支払い";
      } else if (CBoard0 == 2 ){
        synthes.text = '持って';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "持って";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ni');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '連れていって';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "連れていって";
      } else if (CBoard0 == 2 ){
        synthes.text = '許可';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "許可";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ご無沙汰しています';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ご無沙汰しています";
      } else if (CBoard0 == 1 ){
        synthes.text = '頼んで';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "頼んで";
      } else if (CBoard0 == 2 ){
        synthes.text = '注文';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "注文";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ne');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'お久しぶりです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おひさしぶりです";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '延長';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "延長";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('no');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '注意';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "注意";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 十列目
     var obj = document.getElementById('ha');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '天気';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "天気";
      } else if (CBoard0 == 1 ){
        synthes.text = '受付';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "受付";
      } else if (CBoard0 == 2 ){
        synthes.text = '愚痴';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "愚痴";
      } else if (CBoard0 == 3 ){
        synthes.text = 'これにします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "これにします";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hi');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '晴';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "晴";
      } else if (CBoard0 == 1 ){
        synthes.text = '県信さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "県信さん";
      } else if (CBoard0 == 2 ){
        synthes.text = '段差';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "段差";
      } else if (CBoard0 == 3 ){
        synthes.text = '選びます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "選びます";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '曇';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "曇";
      } else if (CBoard0 == 1 ){
        synthes.text = '電動';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "電動";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = 'あきらめます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あきらめます";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('he');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '雨';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "雨";
      } else if (CBoard0 == 1 ){
        synthes.text = '手動';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "手動";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ho');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '雪';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "雪";
      } else if (CBoard0 == 1 ){
        synthes.text = '事務所';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "事務所";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 十一列目
     var obj = document.getElementById('ma');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '春';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "春";
      } else if (CBoard0 == 1 ){
        synthes.text = '買い物';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "買い物";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おはし';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おはし";
      } else if (CBoard0 == 3 ){
        synthes.text = '頑張ります';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "頑張ります";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mi');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '夏';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "夏";
      } else if (CBoard0 == 1 ){
        synthes.text = '届けを出して';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "届けを出して";
      } else if (CBoard0 == 2 ){
        synthes.text = 'フォーク';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "フォーク";
      } else if (CBoard0 == 3 ){
        synthes.text = '感謝';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "感謝";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '秋';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "秋";
      } else if (CBoard0 == 1 ){
        synthes.text = '冷蔵庫';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "冷蔵庫";
      } else if (CBoard0 == 2 ){
        synthes.text = 'スプーン';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "スプーン";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('me');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '冬';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "冬";
      } else if (CBoard0 == 1 ){
        synthes.text = '冷凍庫';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "冷凍庫";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ストロー';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ストロー";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mo');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '安心';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "安心";
      } else if (CBoard0 == 1 ){
        synthes.text = '蛍光とう';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "蛍光とう";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 十二列目
     var obj = document.getElementById('ya');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '朝';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "朝";
      } else if (CBoard0 == 1 ){
        synthes.text = '洗濯';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "洗濯";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('yu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '昼';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "昼";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('yo');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ) {
        synthes.text = '夕';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "夕";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('gb');
	 obj.addEventListener("click", async function() {
      if (CBoard0 == 0 ) {
        synthes.text = '夜中';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "夜中";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('gc');
	 obj.addEventListener("click", async function() {

      if (CBoard0 == 0 ) {
        synthes.text = '安全';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "安全";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 十三列目
     var obj = document.getElementById('ra');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '重い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "重い";
      } else if (CBoard0 == 1 ){
        synthes.text = '聞きたい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "聞きたい";
      } else if (CBoard0 == 2 ){
        synthes.text = 'します';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "します";
      } else if (CBoard0 == 3 ){
        synthes.text = '外出';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "外出";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ri');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '高い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "高い";
      } else if (CBoard0 == 1 ){
        synthes.text = '見たい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "見たい";
      } else if (CBoard0 == 2 ){
        synthes.text = 'しました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しました";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ru');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '手頃';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "手ごろ";
      } else if (CBoard0 == 1 ){
        synthes.text = '休みたい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "休みたい";
      } else if (CBoard0 == 2 ){
        synthes.text = 'したいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "したいです";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('re');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '明るい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "明るい";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = 'して';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "して";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ro');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '十分';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "十分";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ほしい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ほしい";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ください';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ください";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 十四列目
     var obj = document.getElementById('wa');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '軽い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "軽い";
      } else if (CBoard0 == 1 ){
        synthes.text = 'して';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "して";
      } else if (CBoard0 == 2 ){
        synthes.text = '探しています';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "探しています";
      } else if (CBoard0 == 3 ){
        synthes.text = 'します';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "します";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('wo');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '低い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "低い";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ください';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ください";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ありますか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ありますか";
      } else if (CBoard0 == 3 ){
        synthes.text = 'したいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "したいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nn');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '安い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "安い";
      } else if (CBoard0 == 1 ){
        synthes.text = 'お願いします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お願いします";
      } else if (CBoard0 == 2 ){
        synthes.text = 'お願いします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お願いします";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('bar');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '暗い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "暗い";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('0000');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'たりない';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "たりない";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ありがとう';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ありがとう";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
}, false);




function setCursorend() {
   var len = text1.value.length;
      text1.focus();
      text1.setSelectionRange(len, len);
document.activeElement.blur();//Androidでキーボード出現を止めるためフォーカスを外す
//localstorage対策３2020/02/19　文の保存
            if (storage0 == 1 ){
               storage1 = text1.value;
               localStorage[SERVICE_NAME1] = JSON.stringify(storage1);
            } else if (storage0 == 2 ){
               storage2 = text1.value;
               localStorage[SERVICE_NAME2] = JSON.stringify(storage2);
            } else if (storage0 == 3 ){
               storage3 = text1.value;
               localStorage[SERVICE_NAME3] = JSON.stringify(storage3);
            } else if (storage0 == 4 ){
               storage4 = text1.value;
               localStorage[SERVICE_NAME4] = JSON.stringify(storage4);
            } else if (storage0 == 5 ){
               storage5 = text1.value;
               localStorage[SERVICE_NAME5] = JSON.stringify(storage5);
            } else if (storage0 == 6 ){
               storage6 = text1.value;
               localStorage[SERVICE_NAME6] = JSON.stringify(storage6);
            } else if (storage0 == 7 ){
               storage7 = text1.value;
               localStorage[SERVICE_NAME7] = JSON.stringify(storage7);
            } else if (storage0 == 8 ){
               storage8 = text1.value;
               localStorage[SERVICE_NAME8] = JSON.stringify(storage8);
            } else if (storage0 == 9 ){
               storage9 = text1.value;
               localStorage[SERVICE_NAME9] = JSON.stringify(storage9);
            } else if (storage0 == 10 ){
               storage10 = text1.value;
               localStorage[SERVICE_NAME10] = JSON.stringify(storage10);
            } else if (storage0 == 11 ){
               storage11 = text1.value;
               localStorage[SERVICE_NAME11] = JSON.stringify(storage11);
            } else if (storage0 == 12 ){
               storage12 = text1.value;
               localStorage[SERVICE_NAME12] = JSON.stringify(storage12);
            } else if (storage0 == 13 ){
               storage13 = text1.value;
               localStorage[SERVICE_NAME13] = JSON.stringify(storage13);
            } else if (storage0 == 14 ){
               storage14 = text1.value;
               localStorage[SERVICE_NAME14] = JSON.stringify(storage14);
            } else if (storage0 == 15 ){
               storage15 = text1.value;
               localStorage[SERVICE_NAME15] = JSON.stringify(storage15);
            } else if (storage0 == 16 ){
               storage16 = text1.value;
               localStorage[SERVICE_NAME16] = JSON.stringify(storage16);
            } else if (storage0 == 17 ){
               storage17 = text1.value;
               localStorage[SERVICE_NAME17] = JSON.stringify(storage17);
            } else if (storage0 == 18 ){
               storage18 = text1.value;
               localStorage[SERVICE_NAME18] = JSON.stringify(storage18);
            } else if (storage0 == 19 ){
               storage19 = text1.value;
               localStorage[SERVICE_NAME19] = JSON.stringify(storage19);
            } else if (storage0 == 20 ){
               storage20 = text1.value;
               localStorage[SERVICE_NAME20] = JSON.stringify(storage20);
            }
}

function Bunnum(param) {
      var elem = document.getElementById("bun");

      switch (param) {
        case 1:
          elem.src = "./img/bun01.png";
          break;
        case 2:
          elem.src = "./img/bun02.png";
          break;
        case 3:
          elem.src = "./img/bun03.png";
          break;
        case 4:
          elem.src = "./img/bun04.png";
          break;
        case 5:
          elem.src = "./img/bun05.png";
          break;
        case 6:
          elem.src = "./img/bun06.png";
          break;
        case 7:
          elem.src = "./img/bun07.png";
          break;
        case 8:
          elem.src = "./img/bun08.png";
          break;
        case 9:
          elem.src = "./img/bun09.png";
          break;
        case 10:
          elem.src = "./img/bun10.png";
          break;
        case 11:
          elem.src = "./img/bun11.png";
          break;
        case 12:
          elem.src = "./img/bun12.png";
          break;
        case 13:
          elem.src = "./img/bun13.png";
          break;
        case 14:
          elem.src = "./img/bun14.png";
          break;
        case 15:
          elem.src = "./img/bun15.png";
          break;
        case 16:
          elem.src = "./img/bun16.png";
          break;
        case 17:
          elem.src = "./img/bun17.png";
          break;
        case 18:
          elem.src = "./img/bun18.png";
          break;
        case 19:
          elem.src = "./img/bun19.png";
          break;
        case 20:
          elem.src = "./img/bun20.png";
          break;
        default:
          elem.src = "./img/bun01.png";
          break;
      }
    }

function CBoardChange(param1){
      var elem = document.getElementById("mojiban");
      var elem1 = document.getElementById("1");
      var elem2 = document.getElementById("2");
      var elem3 = document.getElementById("3");
      var elem4 = document.getElementById("4");
      var elem5 = document.getElementById("5");
      var elem6 = document.getElementById("6");
      var elem7 = document.getElementById("7");
      var elem8 = document.getElementById("8");
      var elem9 = document.getElementById("9");
      var elem0 = document.getElementById("0");
      var elema = document.getElementById("a");
      var elemi = document.getElementById("i");
      var elemu = document.getElementById("u");
      var eleme = document.getElementById("e");
      var elemo = document.getElementById("o");
      var elemka = document.getElementById("ka");
      var elemki = document.getElementById("ki");
      var elemku = document.getElementById("ku");
      var elemke = document.getElementById("ke");
      var elemko = document.getElementById("ko");
      var elemsa = document.getElementById("sa");
      var elemsi = document.getElementById("si");
      var elemsu = document.getElementById("su");
      var elemse = document.getElementById("se");
      var elemso = document.getElementById("so");
      var elemta = document.getElementById("ta");
      var elemti = document.getElementById("ti");
      var elemtu = document.getElementById("tu");
      var elemte = document.getElementById("te");
      var elemto = document.getElementById("to");
      var elemna = document.getElementById("na");
      var elemni = document.getElementById("ni");
      var elemnu = document.getElementById("nu");
      var elemne = document.getElementById("ne");
      var elemno = document.getElementById("no");
      var elemha = document.getElementById("ha");
      var elemhi = document.getElementById("hi");
      var elemhu = document.getElementById("hu");
      var elemhe = document.getElementById("he");
      var elemho = document.getElementById("ho");
      var elemma = document.getElementById("ma");
      var elemmi = document.getElementById("mi");
      var elemmu = document.getElementById("mu");
      var elemme = document.getElementById("me");
      var elemmo = document.getElementById("mo");
      var elemya = document.getElementById("ya");
      var elemyu = document.getElementById("yu");
      var elemyo = document.getElementById("yo");
      var elemyo2 = document.getElementById("gb");
      var elemyo3 = document.getElementById("gc");
      var elemra = document.getElementById("ra");
      var elemri = document.getElementById("ri");
      var elemru = document.getElementById("ru");
      var elemre = document.getElementById("re");
      var elemro = document.getElementById("ro");
      var elemwa = document.getElementById("wa");
      var elemwo = document.getElementById("wo");
      var elemnn = document.getElementById("nn");
      var elemnn2 = document.getElementById("bar");
      var elemnn3 = document.getElementById("0000");

      switch (param1) {
        case 0:
          elem.src = "./img/mononamae.png";
          elem1.src = "./img5/akete.png";
          elem2.src = "./img5/toosite.png";
          elem3.src = "./img5/sutete.png";
          elem4.src = "./img5/juuden.png";
          elem5.src = "./img5/dennchikoukan.png";
          elem6.src = "./img5/simete.png";
          elem7.src = "./img5/hirotte.png";
          elem8.src = "./img5/irete.png";
          elem9.src = "./img5/dasite.png";
          elem0.src = "./img5/totte.png";
          elema.src = "./img5/hayakusite.png";
          elemi.src = "./img5/tutaete.png";
          elemu.src = "./img5/kaijo.png";
          eleme.src = "./img5/issyonikite.png";
          elemo.src = "./img5/tetudatte.png";
          elemka.src = "./img5/hatte.png";
          elemki.src = "./img5/denwa.png";
          elemku.src = "./img5/naosite.png";
          elemke.src = "./img5/syuuri.png";
          elemko.src = "./img5/yamete.png";
          elemsa.src = "./img5/osiete.png";
          elemsi.src = "./img5/kaite.png";
          elemsu.src = "./img5/aizu.png";
          elemse.src = "./img5/azukatte.png";
          elemso.src = "./img5/moratte.png";
          elemta.src = "./img5/renraku.png";
          elemti.src = "./img5/toukan.png";
          elemtu.src = "./img5/tugouwokiite.png";
          elemte.src = "./img5/hasande.png";
          elemto.src = "./img5/usironikakete.png";
          elemna.src = "./img5/siharai.png";
          elemni.src = "./img5/tureteitte.png";
          elemnu.src = "./img5/tanonde.png";
          elemne.src = "./img/00.png";
          elemno.src = "./img/00.png";
          elemha.src = "./img5/uketuke.png";
          elemhi.src = "./img5/kensinsan.png";
          elemhu.src = "./img5/dendou.png";
          elemhe.src = "./img5/syudou.png";
          elemho.src = "./img5/jimusyo.png";
          elemma.src = "./img5/kaimono.png";
          elemmi.src = "./img5/todokewodasite.png";
          elemmu.src = "./img5/reizouko.png";
          elemme.src = "./img5/reitouko.png";
          elemmo.src = "./img5/keikoutou.png";
          elemya.src = "./img5/sentaku.png";
          elemyu.src = "./img/00.png";
          elemyo.src = "./img/00.png";
          elemyo2.src = "./img/00.png";
          elemyo3.src = "./img/00.png";
          elemra.src = "./img5/kikitai.png";
          elemri.src = "./img5/mitai.png";
          elemru.src = "./img5/yasumitai.png";
          elemre.src = "./img/00.png";
          elemro.src = "./img5/hosii.png";
          elemwa.src = "./img5/site.png";
          elemwo.src = "./img5/kudasai.png";
          elemnn.src = "./img5/onegaisimasu.png";
          elemnn2.src = "./img/00.png";
          elemnn3.src = "./img5/arigatou.png";
          break;
        case 1:
          elem.src = "./img/jibun.png";
          elem1.src = "./img6/koromogae.png";
          elem2.src = "./img6/enryo.png";
          elem3.src = "./img6/hansei.png";
          elem4.src = "./img6/00.png";
          elem5.src = "./img6/seikou.png";
          elem6.src = "./img6/kunren.png";
          elem7.src = "./img6/me-ru.png";
          elem8.src = "./img6/yuujin.png";
          elem9.src = "./img6/chijin.png";
          elem0.src = "./img6/sippai.png";
          elema.src = "./img6/isousa-bisu.png";
          elemi.src = "./img6/kasyoku.png";
          elemu.src = "./img6/terebi.png";
          eleme.src = "./img6/sutoresu.png";
          elemo.src = "./img6/gaihaku.png";
          elemka.src = "./img6/yasumi.png";
          elemki.src = "./img6/koukai.png";
          elemku.src = "./img6/ansin.png";
          elemke.src = "./img6/nayami.png";
          elemko.src = "./img6/ohanasi.png";
          elemsa.src = "./img6/nokosimasu.png";
          elemsi.src = "./img6/kataduke.png";
          elemsu.src = "./img6/soudan.png";
          elemse.src = "./img6/sitaku.png";
          elemso.src = "./img6/nakunatta.png";
          elemta.src = "./img6/henji.png";
          elemti.src = "./img6/souji.png";
          elemtu.src = "./img6/kitte.png";
          elemte.src = "./img6/tukutte.png";
          elemto.src = "./img6/tukatte.png";
          elemna.src = "./img6/motte.png";
          elemni.src = "./img6/kyoka.png";
          elemnu.src = "./img6/cyuumon.png";
          elemne.src = "./img6/encyou.png";
          elemno.src = "./img6/cyuui.png";
          elemha.src = "./img6/guchi.png";
          elemhi.src = "./img6/dansa.png";
          elemhu.src = "./img6/00.png";
          elemhe.src = "./img6/00.png";
          elemho.src = "./img6/00.png";
          elemma.src = "./img6/ohasi.png";
          elemmi.src = "./img6/fo-ku.png";
          elemmu.src = "./img6/supu-nn.png";
          elemme.src = "./img6/sutoro-.png";
          elemmo.src = "./img6/00.png";
          elemya.src = "./img6/00.png";
          elemyu.src = "./img6/00.png";
          elemyo.src = "./img6/00.png";
          elemyo2.src = "./img6/00.png";
          elemyo3.src = "./img6/00.png";
          elemra.src = "./img6/simasu.png";
          elemri.src = "./img6/simasita.png";
          elemru.src = "./img6/sitaidesu.png";
          elemre.src = "./img6/site.png";
          elemro.src = "./img6/kudasai.png";
          elemwa.src = "./img6/sagasiteimasu.png";
          elemwo.src = "./img6/arimasuka.png";
          elemnn.src = "./img6/onegaisimasu.png";
          elemnn2.src = "./img6/00.png";
          elemnn3.src = "./img6/00.png";
          break;
        case 2:
          elem.src = "./img/aisatu.png";
          elem1.src = "./img7/atui.png";
          elem2.src = "./img7/tanosii.png";
          elem3.src = "./img7/dochirademoii.png";
          elem4.src = "./img7/kurusii.png";
          elem5.src = "./img7/genki.png";
          elem6.src = "./img7/samui.png";
          elem7.src = "./img7/uresii.png";
          elem8.src = "./img7/dochirademonai.png";
          elem9.src = "./img7/tukareta.png";
          elem0.src = "./img7/cyousiii.png";
          elema.src = "./img7/suki.png";
          elemi.src = "./img7/kanasii.png";
          elemu.src = "./img7/sitteiru.png";
          eleme.src = "./img7/nemui.png";
          elemo.src = "./img7/kawarinasi.png";
          elemka.src = "./img7/kirai.png";
          elemki.src = "./img7/kuyasii.png";
          elemku.src = "./img7/sirimasen.png";
          elemke.src = "./img7/sinnpaidesu.png";
          elemko.src = "./img7/maamaa.png";
          elemsa.src = "./img7/00.png";
          elemsi.src = "./img7/00.png";
          elemsu.src = "./img7/wakarimasita.png";
          elemse.src = "./img7/fuandesu.png";
          elemso.src = "./img7/00.png";
          elemta.src = "./img7/00.png";
          elemti.src = "./img7/00.png";
          elemtu.src = "./img7/wakarimasen.png";
          elemte.src = "./img7/00.png";
          elemto.src = "./img7/00.png";
          elemna.src = "./img7/00.png";
          elemni.src = "./img7/00.png";
          elemnu.src = "./img7/00.png";
          elemne.src = "./img7/00.png";
          elemno.src = "./img7/00.png";
          elemha.src = "./img7/korenisimasu.png";
          elemhi.src = "./img7/erabimasu.png";
          elemhu.src = "./img7/akiramemasu.png";
          elemhe.src = "./img7/00.png";
          elemho.src = "./img7/00.png";
          elemma.src = "./img7/ganbarimasu.png";
          elemmi.src = "./img7/kannsya.png";
          elemmu.src = "./img7/00.png";
          elemme.src = "./img7/00.png";
          elemmo.src = "./img7/00.png";
          elemya.src = "./img7/00.png";
          elemyu.src = "./img7/00.png";
          elemyo.src = "./img7/00.png";
          elemyo2.src = "./img7/00.png";
          elemyo3.src = "./img7/00.png";
          elemra.src = "./img7/gaisyutu.png";
          elemri.src = "./img7/00.png";
          elemru.src = "./img7/00.png";
          elemre.src = "./img7/00.png";
          elemro.src = "./img7/00.png";
          elemwa.src = "./img7/simasu.png";
          elemwo.src = "./img7/sitaidesu.png";
          elemnn.src = "./img7/00.png";
          elemnn2.src = "./img7/00.png";
          elemnn3.src = "./img7/00.png";
          break;
        case 3:
          elem.src = "./img/onegai.png";
          elem1.src = "./img2/arigatou.png";
          elem2.src = "./img2/konnichiha.png";
          elem3.src = "./img2/dochirademoii.png";
          elem4.src = "./img2/ohayou.png";
          elem5.src = "./img2/youkoso.png";
          elem6.src = "./img2/onegaisimasu2.png";
          elem7.src = "./img2/sayounara.png";
          elem8.src = "./img2/dochirademonai.png";
          elem9.src = "./img2/oyasumi.png";
          elem0.src = "./img2/matakitene.png";
          elema.src = "./img2/mouiidesu.png";
          elemi.src = "./img2/hajimemasite.png";
          elemu.src = "./img2/mouichido2.png";
          eleme.src = "./img2/konbanha.png";
          elemo.src = "./img2/yokatta.png";
          elemka.src = "./img2/gomennnasai.png";
          elemki.src = "./img2/yorosiku.png";
          elemku.src = "./img2/osakinidouzo.png";
          elemke.src = "./img2/00.png";
          elemko.src = "./img2/uresii.png";
          elemsa.src = "./img2/ittekimasu.png";
          elemsi.src = "./img2/okaerinasai.png";
          elemsu.src = "./img2/itadakimasu.png";
          elemse.src = "./img2/oisiidesu.png";
          elemso.src = "./img2/daijoubu.png";
          elemta.src = "./img2/tadaima.png";
          elemti.src = "./img2/itterassyai.png";
          elemtu.src = "./img2/gochisousama.png";
          elemte.src = "./img2/00.png";
          elemto.src = "./img2/aitai.png";
          elemna.src = "./img2/sumimasenn.png";
          elemni.src = "./img2/00.png";
          elemnu.src = "./img2/gobusata.png";
          elemne.src = "./img2/ohisasiburi.png";
          elemno.src = "./img2/00.png";
          elemha.src = "./img2/tennki.png";
          elemhi.src = "./img2/hare.png";
          elemhu.src = "./img2/kumori.png";
          elemhe.src = "./img2/ame.png";
          elemho.src = "./img2/yuki.png";
          elemma.src = "./img2/haru.png";
          elemmi.src = "./img2/natu.png";
          elemmu.src = "./img2/aki.png";
          elemme.src = "./img2/fuyu.png";
          elemmo.src = "./img2/ansin.png";
          elemya.src = "./img2/asa.png";
          elemyu.src = "./img2/hiru.png";
          elemyo.src = "./img2/yuu.png";
          elemyo2.src = "./img2/yonaka.png";
          elemyo3.src = "./img2/anzen.png";
          elemra.src = "./img2/omoi.png";
          elemri.src = "./img2/takai.png";
          elemru.src = "./img2/tegoro.png";
          elemre.src = "./img2/akarui.png";
          elemro.src = "./img2/juubun.png";
          elemwa.src = "./img2/karui.png";
          elemwo.src = "./img2/hikui.png";
          elemnn.src = "./img2/yasui.png";
          elemnn2.src = "./img2/kurai.png";
          elemnn3.src = "./img2/tarinai.png";
          break;
      }
    }

// 参考url
// ref. https://gist.github.com/roundrop/6504455
//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714

