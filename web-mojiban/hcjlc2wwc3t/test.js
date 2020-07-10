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
/*        const audioctx = new AudioContext();
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
*/
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
        setTimeout( 'text1.value = ""; setCursorend();', 500 );
        synthes.text = 'ぜんぶけす';
        speechSynthesis.speak(synthes);
    }
    else {
    }

// firefox の場合上の、setTimeoutを使わないと正常に消せない　　原因不明

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
/*        const audioctx = new AudioContext();
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
*/
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
        synthes.text = '井波所長さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "井波所長さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '診察';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "診察";
      } else if (CBoard0 == 2 ){
        synthes.text = 'カレーライス';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "カレーライス";
      } else if (CBoard0 == 3 ){
        synthes.text = '部屋';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "部屋";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('2');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '才崎さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "才崎さん";
      } else if (CBoard0 == 1 ){
        synthes.text = 'リハビリ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "リハビリ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'うどん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うどん";
      } else if (CBoard0 == 3 ){
        synthes.text = '食堂';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "食堂";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('3');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'たか原さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "たか原さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '内科';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "内科";
      } else if (CBoard0 == 2 ){
        synthes.text = 'オムライス';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "オムライス";
      } else if (CBoard0 == 3 ){
        synthes.text = 'トイレ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "トイレ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('4');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '黒田先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "黒田先生";
      } else if (CBoard0 == 1 ){
        synthes.text = '心理';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "心理";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ハンバーガー';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ハンバーガー";
      } else if (CBoard0 == 3 ){
        synthes.text = '洗面じょ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "洗面じょ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('5');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '谷川さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "谷川さん";
      } else if (CBoard0 == 1 ){
        synthes.text = 'くすり';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くすり";
      } else if (CBoard0 == 2 ){
        synthes.text = 'チャーハン';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "チャーハン";
      } else if (CBoard0 == 3 ){
        synthes.text = 'おふろ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おふろ";
      }
      setCursorend();
     }, false);
   // 四列目
     var obj = document.getElementById('6');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '後藤さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "後藤さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '予約';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "予約";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ラーメン';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ラーメン";
      } else if (CBoard0 == 3 ){
        synthes.text = '病院';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "病院";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('7');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '田伏さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "田伏さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '整形';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "整形";
      } else if (CBoard0 == 2 ){
        synthes.text = 'そば';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "そば";
      } else if (CBoard0 == 3 ){
        synthes.text = '売店';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "売店";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('8');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '山守さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "山守さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '精神科';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "神経科";
      } else if (CBoard0 == 2 ){
        synthes.text = 'たいやき';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "たいやき";
      } else if (CBoard0 == 3 ){
        synthes.text = 'キャッシュコーナー';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "キャッシュコーナー";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('9');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '岩崎さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "岩崎さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '注射';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "注射";
      } else if (CBoard0 == 2 ){
        synthes.text = 'トースト';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "トースト";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ポスト';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ポスト";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('0');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '泉さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "泉さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '副作用';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "副作用";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ギョーザ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ギョーザ";
      } else if (CBoard0 == 3 ){
        synthes.text = '床屋';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "床屋";
      }
      setCursorend();
     }, false);
   // 五列目
     var obj = document.getElementById('a');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '山形さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "山形さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '頭痛';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "頭痛";
      } else if (CBoard0 == 2 ){
        synthes.text = '焼きそば';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "焼きそば";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ギプス室';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ギプス室";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('i');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '曲尾さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "曲尾さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '便秘';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "便秘";
      } else if (CBoard0 == 2 ){
        synthes.text = 'お好み焼き';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お好み焼き";
      } else if (CBoard0 == 3 ){
        synthes.text = '談話室';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "談話室";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('u');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '純子さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "純子さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '熱';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "熱";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おにぎり';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おにぎり";
      } else if (CBoard0 == 3 ){
        synthes.text = '玄関';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "玄関";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('e');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '浅野さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "浅野さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '吐き気';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "吐き気";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おすし';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おすし";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('o');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '大島さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "大島さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '風邪';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "風邪";
      } else if (CBoard0 == 2 ){
        synthes.text = 'シューマイ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "シューマイ";
      } else if (CBoard0 == 3 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      }
      setCursorend();
     }, false);
   // 六列目
     var obj = document.getElementById('ka');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '南さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "南さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '歯が痛い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "歯が痛い";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ピザ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ピザ";
      } else if (CBoard0 == 3 ){
        synthes.text = '富山駅前';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "富山駅前";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ki');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '米沢さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "米沢さん";
      } else if (CBoard0 == 1 ){
        synthes.text = '下痢';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "下痢";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ごはん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ごはん";
      } else if (CBoard0 == 3 ){
        synthes.text = '総が輪';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "総が輪";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ku');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '保要さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "保要さん";
      } else if (CBoard0 == 1 ){
        synthes.text = 'かぶれた';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かぶれた";
      } else if (CBoard0 == 2 ){
        synthes.text = 'パン';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "パン";
      } else if (CBoard0 == 3 ){
        synthes.text = '市役所';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "市役所";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ke');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'まさみさん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まさみさん";
      } else if (CBoard0 == 1 ){
        synthes.text = 'のどが痛い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "のどが痛い";
      } else if (CBoard0 == 2 ){
        synthes.text = 'サンドイッチ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "サンドイッチ";
      } else if (CBoard0 == 3 ){
        synthes.text = '銀行';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "銀行";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ko');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = 'せき';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "せき";
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
   // 七列目
     var obj = document.getElementById('sa');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '高田先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "高田先生";
      } else if (CBoard0 == 1 ){
        synthes.text = 'しびれ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しびれ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おかし';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おかし";
      } else if (CBoard0 == 3 ){
        synthes.text = 'しまむら';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しまむら";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('si');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '木倉先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "木倉先生";
      } else if (CBoard0 == 1 ){
        synthes.text = '手洗い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "手洗い";
      } else if (CBoard0 == 2 ){
        synthes.text = 'お餅';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お餅";
      } else if (CBoard0 == 3 ){
        synthes.text = 'アルプラザ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "アルプラザ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('su');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '大村先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "大村先生";
      } else if (CBoard0 == 1 ){
        synthes.text = 'おふろ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おふろ";
      } else if (CBoard0 == 2 ){
        synthes.text = '団子';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "団子";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ファボーレ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ファボーレ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('se');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '看護師さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "看護師さん";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ねちがえ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ねちがえ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'アイス';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "アイス";
      } else if (CBoard0 == 3 ){
        synthes.text = 'アピタ東';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "アピタ東";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('so');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = 'アピア';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "アピア";
      }
      setCursorend();
     }, false);
   // 八列目
     var obj = document.getElementById('ta');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '野村先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "野村先生";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ふるえ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ふるえ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'りんご';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "りんご";
      } else if (CBoard0 == 3 ){
        synthes.text = 'au';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "au";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ti');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '橋本先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "橋本先生";
      } else if (CBoard0 == 1 ){
        synthes.text = 'うがい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うがい";
      } else if (CBoard0 == 2 ){
        synthes.text = 'バナナ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "バナナ";
      } else if (CBoard0 == 3 ){
        synthes.text = 'cic';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "cic";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('tu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '麻生先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "麻生先生";
      } else if (CBoard0 == 1 ){
        synthes.text = '困る';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "困る";
      } else if (CBoard0 == 2 ){
        synthes.text = '柿';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "柿";
      } else if (CBoard0 == 3 ){
        synthes.text = 'マリエ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "マリエ";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '梨';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "梨";
      } else if (CBoard0 == 3 ){
        synthes.text = '無印';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "無印";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('to');
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
        synthes.text = 'スイカ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "スイカ";
      } else if (CBoard0 == 3 ){
        synthes.text = 'マツキヨ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "マツキヨ";
      }
      setCursorend();
     }, false);
   // 九列目
     var obj = document.getElementById('na');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '本屋';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "本屋";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = 'CDショップ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "CDショップ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nu');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '手芸店';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "手芸店";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ne');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = 'コンビニ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "コンビニ";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '100円ショップ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "100円ショップ";
      }
      setCursorend();
     }, false);
   // 十列目
     var obj = document.getElementById('ha');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '散歩';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "散歩";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hi');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '車いすOKですか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "車いすOKですか";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hu');
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
     var obj = document.getElementById('he');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
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
   // 十一列目
     var obj = document.getElementById('ma');
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
        synthes.text = 'お願いします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お願いします";
      } else if (CBoard0 == 3 ){
        synthes.text = '行きたいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "行きたいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mi');
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
        synthes.text = 'ありますか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ありますか";
      } else if (CBoard0 == 3 ){
        synthes.text = '行ってきます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "行ってきます";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mu');
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
        synthes.text = 'ほしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ほしいです";
      } else if (CBoard0 == 3 ){
        synthes.text = '行ってきました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "行ってきました";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('me');
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
        synthes.text = 'いくらですか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "いくらですか";
      } else if (CBoard0 == 3 ){
        synthes.text = 'どこですか？';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どこですか？";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mo');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '元気です';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "元気です";
      } else if (CBoard0 == 2 ){
        synthes.text = 'いただきます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "いただきます";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '調子いいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "調子いいです";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ごちそうさま';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ごちそうさま";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '変わりありません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "変わりありません";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '頑張ります';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "頑張ります";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ありがとうございます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ありがとうございます";
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = 'からい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "からい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'バス';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "バス";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ri');
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
        synthes.text = '甘い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "甘い";
      } else if (CBoard0 == 3 ){
        synthes.text = 'タクシー';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "タクシー";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ru');
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
        synthes.text = 'おいしい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おいしい";
      } else if (CBoard0 == 3 ){
        synthes.text = '市電';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "市電";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('re');
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
        synthes.text = 'おなかぺこぺこ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おなかぺこぺこ";
      } else if (CBoard0 == 3 ){
        synthes.text = '電車';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "電車";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ro');
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
        synthes.text = 'おなかいっぱい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おなかいっぱい";
      } else if (CBoard0 == 3 ){
        synthes.text = '乗ります';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "乗ります";
      }
      setCursorend();
     }, false);
   // 十四列目
     var obj = document.getElementById('wa');
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
        synthes.text = '恥ずかしい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "恥ずかしい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'エレベーター';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "エレベーター";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('wo');
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
        synthes.text = '好き';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "好き";
      } else if (CBoard0 == 3 ){
        synthes.text = '延長';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "延長";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nn');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = '何階';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "何階";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('bar');
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
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = 'です';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "です";
      } else if (CBoard0 == 3 ){
        synthes.text = '降ります';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "降ります";
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
          elem.src = "./img/tabemono.png";
          elem1.src = "./img8/sinsatu.png";
          elem2.src = "./img8/rihabiri.png";
          elem3.src = "./img8/naika.png";
          elem4.src = "./img8/sinri.png";
          elem5.src = "./img8/kusuri.png";
          elem6.src = "./img8/yoyaku.png";
          elem7.src = "./img8/seikei.png";
          elem8.src = "./img8/seisinka.png";
          elem9.src = "./img8/cyuusya.png";
          elem0.src = "./img8/fukusayou.png";
          elema.src = "./img8/dutuu.png";
          elemi.src = "./img8/benpi.png";
          elemu.src = "./img8/netu.png";
          eleme.src = "./img8/hakike.png";
          elemo.src = "./img8/kaze.png";
          elemka.src = "./img8/haita.png";
          elemki.src = "./img8/geri.png";
          elemku.src = "./img8/kabureta.png";
          elemke.src = "./img8/nodoitai.png";
          elemko.src = "./img8/seki.png";
          elemsa.src = "./img8/sibire.png";
          elemsi.src = "./img8/tearai.png";
          elemsu.src = "./img8/ofuro.png";
          elemse.src = "./img8/nechigae.png";
          elemso.src = "./img8/00.png";
          elemta.src = "./img8/furue.png";
          elemti.src = "./img8/ugai.png";
          elemtu.src = "./img8/komaru.png";
          elemte.src = "./img8/00.png";
          elemto.src = "./img8/00.png";
          elemna.src = "./img8/00.png";
          elemni.src = "./img8/00.png";
          elemnu.src = "./img8/00.png";
          elemne.src = "./img8/00.png";
          elemno.src = "./img8/00.png";
          elemha.src = "./img8/00.png";
          elemhi.src = "./img8/00.png";
          elemhu.src = "./img8/00.png";
          elemhe.src = "./img8/00.png";
          elemho.src = "./img8/00.png";
          elemma.src = "./img8/00.png";
          elemmi.src = "./img8/00.png";
          elemmu.src = "./img8/00.png";
          elemme.src = "./img8/00.png";
          elemmo.src = "./img8/00.png";
          elemya.src = "./img8/genki.png";
          elemyu.src = "./img8/cyousiii.png";
          elemyo.src = "./img8/kawarinasi.png";
          elemyo2.src = "./img8/ganbarimasu.png";
          elemyo3.src = "./img8/arigatou.png";
          elemra.src = "./img8/00.png";
          elemri.src = "./img8/00.png";
          elemru.src = "./img8/00.png";
          elemre.src = "./img8/00.png";
          elemro.src = "./img8/00.png";
          elemwa.src = "./img8/00.png";
          elemwo.src = "./img8/00.png";
          elemnn.src = "./img8/00.png";
          elemnn2.src = "./img8/00.png";
          elemnn3.src = "./img8/00.png";
          break;
        case 1:
          elem.src = "./img/basyo.png";
          elem1.src = "./img9/kare-raisu.png";
          elem2.src = "./img9/udon.png";
          elem3.src = "./img9/omuraisu.png";
          elem4.src = "./img9/hanba-ga-.png";
          elem5.src = "./img9/cya-han.png";
          elem6.src = "./img9/ra-men.png";
          elem7.src = "./img9/soba.png";
          elem8.src = "./img9/taiyaki.png";
          elem9.src = "./img9/to-suto.png";
          elem0.src = "./img9/gyo-za.png";
          elema.src = "./img9/yakisoba.png";
          elemi.src = "./img9/okonomiyaki.png";
          elemu.src = "./img9/onigiri.png";
          eleme.src = "./img9/osusi.png";
          elemo.src = "./img9/syu-mai.png";
          elemka.src = "./img9/piza.png";
          elemki.src = "./img9/gohan.png";
          elemku.src = "./img9/pan.png";
          elemke.src = "./img9/sandoicchi.png";
          elemko.src = "./img9/00.png";
          elemsa.src = "./img9/okasi.png";
          elemsi.src = "./img9/omochi.png";
          elemsu.src = "./img9/dango.png";
          elemse.src = "./img9/aisu.png";
          elemso.src = "./img9/00.png";
          elemta.src = "./img9/ringo.png";
          elemti.src = "./img9/banana.png";
          elemtu.src = "./img9/kaki.png";
          elemte.src = "./img9/nasi.png";
          elemto.src = "./img9/suika.png";
          elemna.src = "./img9/00.png";
          elemni.src = "./img9/00.png";
          elemnu.src = "./img9/00.png";
          elemne.src = "./img9/00.png";
          elemno.src = "./img9/00.png";
          elemha.src = "./img9/00.png";
          elemhi.src = "./img9/00.png";
          elemhu.src = "./img9/00.png";
          elemhe.src = "./img9/00.png";
          elemho.src = "./img9/00.png";
          elemma.src = "./img9/onegaisimau.png";
          elemmi.src = "./img9/arimasuka.png";
          elemmu.src = "./img9/hosiidesu.png";
          elemme.src = "./img9/ikuradesuka.png";
          elemmo.src = "./img9/00.png";
          elemya.src = "./img9/itadakimasu.png";
          elemyu.src = "./img9/gochisousama.png";
          elemyo.src = "./img9/00.png";
          elemyo2.src = "./img9/00.png";
          elemyo3.src = "./img9/00.png";
          elemra.src = "./img9/karai.png";
          elemri.src = "./img9/amai.png";
          elemru.src = "./img9/oisii.png";
          elemre.src = "./img9/kuufuku.png";
          elemro.src = "./img9/manpuku.png";
          elemwa.src = "./img9/hazukasii.png";
          elemwo.src = "./img9/suki.png";
          elemnn.src = "./img9/00.png";
          elemnn2.src = "./img9/00.png";
          elemnn3.src = "./img9/desu.png";
          break;
        case 2:
          elem.src = "./img/hitonamae.png";
          elem1.src = "./img9/heya.png";
          elem2.src = "./img9/syokudou.png";
          elem3.src = "./img9/toire.png";
          elem4.src = "./img9/senmenjo.png";
          elem5.src = "./img9/ofuro.png";
          elem6.src = "./img9/byouin.png";
          elem7.src = "./img9/baiten.png";
          elem8.src = "./img9/kyassyuko-na-.png";
          elem9.src = "./img9/posuto.png";
          elem0.src = "./img9/tokoya.png";
          elema.src = "./img9/gipususitu.png";
          elemi.src = "./img9/dannwasitu.png";
          elemu.src = "./img9/genkan.png";
          eleme.src = "./img9/00.png";
          elemo.src = "./img9/00.png";
          elemka.src = "./img9/toyamaekimae.png";
          elemki.src = "./img9/sougawa.png";
          elemku.src = "./img9/siyakusyo.png";
          elemke.src = "./img9/ginkou.png";
          elemko.src = "./img9/00.png";
          elemsa.src = "./img9/simamura.png";
          elemsi.src = "./img9/arupuraza.png";
          elemsu.src = "./img9/fabo-re.png";
          elemse.src = "./img9/apitahigasi.png";
          elemso.src = "./img9/apia.png";
          elemta.src = "./img9/au.png";
          elemti.src = "./img9/cic.png";
          elemtu.src = "./img9/marie.png";
          elemte.src = "./img9/mujirusi.png";
          elemto.src = "./img9/matukiyo.png";
          elemna.src = "./img9/honya.png";
          elemni.src = "./img9/cdsyoppu.png";
          elemnu.src = "./img9/syugeiten.png";
          elemne.src = "./img9/konbini.png";
          elemno.src = "./img9/100kin.png";
          elemha.src = "./img9/sanpo.png";
          elemhi.src = "./img9/kurumaisuok.png";
          elemhu.src = "./img9/00.png";
          elemhe.src = "./img9/00.png";
          elemho.src = "./img9/00.png";
          elemma.src = "./img9/ikitaidesu.png";
          elemmi.src = "./img9/ittekiumasu.png";
          elemmu.src = "./img9/ittekimasita.png";
          elemme.src = "./img9/dokodesuka.png";
          elemmo.src = "./img9/00.png";
          elemya.src = "./img9/00.png";
          elemyu.src = "./img9/00.png";
          elemyo.src = "./img9/00.png";
          elemyo2.src = "./img9/00.png";
          elemyo3.src = "./img9/00.png";
          elemra.src = "./img9/basu.png";
          elemri.src = "./img9/takusi-.png";
          elemru.src = "./img9/siden.png";
          elemre.src = "./img9/densya.png";
          elemro.src = "./img9/norimasu.png";
          elemwa.src = "./img9/erebe-ta.png";
          elemwo.src = "./img9/encyou.png";
          elemnn.src = "./img9/nankai.png";
          elemnn2.src = "./img9/00.png";
          elemnn3.src = "./img9/orimasu.png";
          break;
        case 3:
          elem.src = "./img/byouin.png";
          elem1.src = "./img8/inami.png";
          elem2.src = "./img8/saizaki.png";
          elem3.src = "./img8/takahara.png";
          elem4.src = "./img8/kuroda.png";
          elem5.src = "./img8/tanigawa.png";
          elem6.src = "./img8/gotou.png";
          elem7.src = "./img8/tabuse.png";
          elem8.src = "./img8/yamamori.png";
          elem9.src = "./img8/iwasaki.png";
          elem0.src = "./img8/izumi.png";
          elema.src = "./img8/yamagata.png";
          elemi.src = "./img8/magario.png";
          elemu.src = "./img8/junnkosan.png";
          eleme.src = "./img8/asano.png";
          elemo.src = "./img8/oosima.png";
          elemka.src = "./img8/minami.png";
          elemki.src = "./img8/yonezawasan.png";
          elemku.src = "./img8/hoyousan.png";
          elemke.src = "./img8/masami.png";
          elemko.src = "./img8/00.png";
          elemsa.src = "./img8/takata.png";
          elemsi.src = "./img8/kikura.png";
          elemsu.src = "./img8/oomura.png";
          elemse.src = "./img8/kanngosisan.png";
          elemso.src = "./img8/00.png";
          elemta.src = "./img8/nomura.png";
          elemti.src = "./img8/hasimotosennsei.png";
          elemtu.src = "./img8/asou.png";
          elemte.src = "./img8/00.png";
          elemto.src = "./img8/00.png";
          elemna.src = "./img8/00.png";
          elemni.src = "./img8/00.png";
          elemnu.src = "./img8/00.png";
          elemne.src = "./img8/00.png";
          elemno.src = "./img8/00.png";
          elemha.src = "./img8/00.png";
          elemhi.src = "./img8/00.png";
          elemhu.src = "./img8/00.png";
          elemhe.src = "./img8/00.png";
          elemho.src = "./img8/00.png";
          elemma.src = "./img8/00.png";
          elemmi.src = "./img8/00.png";
          elemmu.src = "./img8/00.png";
          elemme.src = "./img8/00.png";
          elemmo.src = "./img8/00.png";
          elemya.src = "./img8/00.png";
          elemyu.src = "./img8/00.png";
          elemyo.src = "./img8/00.png";
          elemyo2.src = "./img8/00.png";
          elemyo3.src = "./img8/00.png";
          elemra.src = "./img8/00.png";
          elemri.src = "./img8/00.png";
          elemru.src = "./img8/00.png";
          elemre.src = "./img8/00.png";
          elemro.src = "./img8/00.png";
          elemwa.src = "./img8/00.png";
          elemwo.src = "./img8/00.png";
          elemnn.src = "./img8/00.png";
          elemnn2.src = "./img8/00.png";
          elemnn3.src = "./img8/00.png";
          break;
      }
    }

// 参考url
// ref. https://gist.github.com/roundrop/6504455
//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714

