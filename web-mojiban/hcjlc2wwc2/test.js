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
        synthes.text = 'ぜんぶけす';
        speechSynthesis.speak(synthes);
      text1.value = "";
      setCursorend();
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
     //   const audioctx = new AudioContext();
     //   const sound = await LoadSample(audioctx, "./snd/se2.wav");
     //   const src = new AudioBufferSourceNode(audioctx, {buffer:sound});
     //   src.connect(audioctx.destination);
     //   src.start();

     //  function LoadSample(actx, url) {
     //   return new Promise((resolv)=>{
     //       fetch(url).then((response)=>{
     //           return response.arrayBuffer();
     //       }).then((arraybuf)=>{
     //           return actx.decodeAudioData(arraybuf);
     //       }).then((buf)=>{
     //           resolv(buf);
     //       })
     //   });
     //  }

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
        synthes.text = '１';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "１";
      } else if (CBoard0 == 1 ){
        synthes.text = '井波所長さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "井波所長さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('2');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '２';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "２";
      } else if (CBoard0 == 1 ){
        synthes.text = '才崎さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "才崎さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('3');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '３';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "３";
      } else if (CBoard0 == 1 ){
        synthes.text = 'たかはらさん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "たかはらさん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('4');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '４';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "４";
      } else if (CBoard0 == 1 ){
        synthes.text = '黒田先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "黒田先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('5');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '５';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "５";
      } else if (CBoard0 == 1 ){
        synthes.text = '谷川さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "谷川さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
   // 四列目
     var obj = document.getElementById('6');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '６';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "６";
      } else if (CBoard0 == 1 ){
        synthes.text = '米沢課長さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "米沢課長さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('7');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '７';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "７";
      } else if (CBoard0 == 1 ){
        synthes.text = '後藤さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "後藤さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('8');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '８';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "８";
      } else if (CBoard0 == 1 ){
        synthes.text = '中野さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "中野さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('9');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '９';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "９";
      } else if (CBoard0 == 1 ){
        synthes.text = '塚本さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "塚本さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('0');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = '０';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "０";
      } else if (CBoard0 == 1 ){
        synthes.text = '岩崎さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "岩崎さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
   // 五行目
     var obj = document.getElementById('a');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'あ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あ";
      } else if (CBoard0 == 1 ){
        synthes.text = '山形さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "山形さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('i');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "い";
      } else if (CBoard0 == 1 ){
        synthes.text = '田伏さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "田伏さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ありがとう';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ありがとう";
      } else if (CBoard0 == 3 ){
        synthes.text = 'あたま';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あたま";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('u');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'う';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "う";
      } else if (CBoard0 == 1 ){
        synthes.text = '古岡さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "古岡さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'こんにちは';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "こんにちは";
      } else if (CBoard0 == 3 ){
        synthes.text = 'みみ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "みみ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('e');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'え';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "え";
      } else if (CBoard0 == 1 ){
        synthes.text = '山守さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "山守さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'たのしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "たのしいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'て';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "て";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('o');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'お';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "お";
      } else if (CBoard0 == 1 ){
        synthes.text = '浅野さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "浅野さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おはようございます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おはようございます";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ひじ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ひじ";
      }
      setCursorend();
     }, false);
   // 六行目
     var obj = document.getElementById('ka');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'か';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "か";
      } else if (CBoard0 == 1 ){
        synthes.text = '曲尾さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "曲尾さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'いいえ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "いいえ";
      } else if (CBoard0 == 3 ){
        synthes.text = 'いいえ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "いいえ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ki');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'き';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "き";
      } else if (CBoard0 == 1 ){
        synthes.text = '藤井さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "藤井さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おねがいします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おねがいします";
      } else if (CBoard0 == 3 ){
        synthes.text = 'かお';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かお";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ku');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'く';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "く";
      } else if (CBoard0 == 1 ){
        synthes.text = '南さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "南さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'さようなら';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "さようなら";
      } else if (CBoard0 == 3 ){
        synthes.text = 'まゆ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まゆ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ke');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'け';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "け";
      } else if (CBoard0 == 1 ){
        synthes.text = '米田さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "米田さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'うれしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うれしいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'あし';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あし";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ko');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'こ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "こ";
      } else if (CBoard0 == 1 ){
        synthes.text = '泉さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "泉さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おやすみなさい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おやすみなさい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ひざ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ひざ";
      }
      setCursorend();
     }, false);
   // 七行目
     var obj = document.getElementById('sa');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'さ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "さ";
      } else if (CBoard0 == 1 ){
        synthes.text = '高田先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "高田先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'どちらでもいいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもいいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'どちらでもいいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもいいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('si');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'し';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "し";
      } else if (CBoard0 == 1 ){
        synthes.text = '木倉先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "木倉先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'もういいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "もういいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'め';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "め";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('su');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'す';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "す";
      } else if (CBoard0 == 1 ){
        synthes.text = '大村先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "大村先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'はじめまして';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はじめまして";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ほっぺ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ほっぺ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('se');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'せ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "せ";
      } else if (CBoard0 == 1 ){
        synthes.text = '看護師さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "看護師さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'さびしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "さびしいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ゆび';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ゆび";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('so');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'そ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "そ";
      } else if (CBoard0 == 1 ){
        synthes.text = '大島さん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "大島さん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'よろしく';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "よろしく";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はら';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はら";
      }
      setCursorend();
     }, false);
   // 八行目
     var obj = document.getElementById('ta');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'た';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "た";
      } else if (CBoard0 == 1 ){
        synthes.text = '野村先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "野村先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'どちらでもありません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもありません";
      } else if (CBoard0 == 3 ){
        synthes.text = 'どちらでもありません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どちらでもありません";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ti');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ち';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ち";
      } else if (CBoard0 == 1 ){
        synthes.text = '麻生先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "麻生先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ごめんなさい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ごめんなさい";
      } else if (CBoard0 == 3 ){
        synthes.text = 'くち';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くち";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('tu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'つ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "つ";
      } else if (CBoard0 == 1 ){
        synthes.text = 'まさみさん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まさみさん";
      } else if (CBoard0 == 2 ){
        synthes.text = 'あついです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あついです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'くび';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くび";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('te');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'て';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "て";
      } else if (CBoard0 == 1 ){
        synthes.text = '先生';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "先生";
      } else if (CBoard0 == 2 ){
        synthes.text = 'かなしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かなしいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'むね';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "むね";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('to');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'と';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "と";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ねむたいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ねむたいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'せなか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "せなか";
      }
      setCursorend();
     }, false);
   // 九行目
     var obj = document.getElementById('na');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'な';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "な";
      } else if (CBoard0 == 1 ){
        synthes.text = '診察';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "診察";
      } else if (CBoard0 == 2 ){
        synthes.text = 'もういちどおねがいします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "もういちどおねがいします";
      } else if (CBoard0 == 3 ){
        synthes.text = 'もういちどおねがいします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "もういちど";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ni');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'に';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "に";
      } else if (CBoard0 == 1 ){
        synthes.text = 'リハビリ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "リハビリ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'すこしまってください';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "すこしまってください";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はな';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はな";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ぬ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ぬ";
      } else if (CBoard0 == 1 ){
        synthes.text = '内科';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "内科";
      } else if (CBoard0 == 2 ){
        synthes.text = 'さむいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "さむいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'かた';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かた";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ne');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ね';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ね";
      } else if (CBoard0 == 1 ){
        synthes.text = '心理';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "心理";
      } else if (CBoard0 == 2 ){
        synthes.text = 'くやしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くやしいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'こし';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "こし";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('no');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'の';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "の";
      } else if (CBoard0 == 1 ){
        synthes.text = 'くすり';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くすり";
      } else if (CBoard0 == 2 ){
        synthes.text = 'おきています';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おきています";
      } else if (CBoard0 == 3 ){
        synthes.text = 'おしり';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おしり";
      }
      setCursorend();
     }, false);
   // 十行目
     var obj = document.getElementById('ha');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'は';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "は";
      } else if (CBoard0 == 1 ){
        synthes.text = '予約';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "予約";
      } else if (CBoard0 == 2 ){
        synthes.text = 'まちがえました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まちがえました";
      } else if (CBoard0 == 3 ){
        synthes.text = 'まちがえました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まちがえました";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hi');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ひ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ひ";
      } else if (CBoard0 == 1 ){
        synthes.text = '整形';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "整形";
      } else if (CBoard0 == 2 ){
        synthes.text = 'すきです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "すきです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ひだり';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ひだり";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ふ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ふ";
      } else if (CBoard0 == 1 ){
        synthes.text = '精神科';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "精神科";
      } else if (CBoard0 == 2 ){
        synthes.text = 'げんきです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "げんきです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'うえ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うえ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('he');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'へ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "へ";
      } else if (CBoard0 == 1 ){
        synthes.text = '注射';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "注射";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ようこそ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ようこそ";
      } else if (CBoard0 == 3 ){
        synthes.text = 'たいへん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "たいへん";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ho');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ほ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ほ";
      } else if (CBoard0 == 1 ){
        synthes.text = '副作用';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "副作用";
      } else if (CBoard0 == 2 ){
        synthes.text = 'まあまあです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まあまあです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'が';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "が";
      }
      setCursorend();
     }, false);
   // 十一行目
     var obj = document.getElementById('ma');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ま';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ま";
      } else if (CBoard0 == 1 ){
        synthes.text = '頭痛';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "頭痛";
      } else if (CBoard0 == 2 ){
        synthes.text = 'わかりました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "わかりました";
      } else if (CBoard0 == 3 ){
        synthes.text = 'くるしいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "くるしいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mi');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'み';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "み";
      } else if (CBoard0 == 1 ){
        synthes.text = '便秘';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "便秘";
      } else if (CBoard0 == 2 ){
        synthes.text = 'きらいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "きらいです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'みぎ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "みぎ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'む';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "む";
      } else if (CBoard0 == 1 ){
        synthes.text = '熱';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "熱";
      } else if (CBoard0 == 2 ){
        synthes.text = 'つかれました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "つかれました";
      } else if (CBoard0 == 3 ){
        synthes.text = 'なか';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "なか";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('me');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'め';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "め";
      } else if (CBoard0 == 1 ){
        synthes.text = '吐き気';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "吐き気";
      } else if (CBoard0 == 2 ){
        synthes.text = 'またきてね';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "またきてね";
      } else if (CBoard0 == 3 ){
        synthes.text = 'ふつう';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ふつう";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mo');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'も';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "も";
      } else if (CBoard0 == 1 ){
        synthes.text = 'かぜ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かぜ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'でかけます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "でかけます";
      } else if (CBoard0 == 3 ){
        synthes.text = 'に';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "に";
      }
      setCursorend();
     }, false);
   // 十二行目
     var obj = document.getElementById('ya');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'や';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "や";
      } else if (CBoard0 == 1 ){
        synthes.text = '歯痛';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "歯痛";
      } else if (CBoard0 == 2 ){
        synthes.text = 'わかりません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "わかりません";
      } else if (CBoard0 == 3 ){
        synthes.text = 'いたいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "いたいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('yu');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ゆ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ゆ";
      } else if (CBoard0 == 1 ){
        synthes.text = '下痢';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "下痢";
      } else if (CBoard0 == 2 ){
        synthes.text = 'しっています';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しっています";
      } else if (CBoard0 == 3 ){
        synthes.text = 'まえ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "まえ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('yo');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ) {
        synthes.text = 'よ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "よ";
      } else if (CBoard0 == 1 ){
        synthes.text = 'かぶれました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かぶれました";
      } else if (CBoard0 == 2 ){
        synthes.text = 'わたし';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "わたし";
      } else if (CBoard0 == 3 ){
        synthes.text = 'した';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "した";
      }
      setCursorend();
     }, false);
   //濁音処理部分
     var obj = document.getElementById('gb');
	 obj.addEventListener("click", async function() {
      if (CBoard0 == 0 ) {
                lastletter = text1.value.charAt(text1.value.length -1);
                 if (lastletter == 'か') {
                   synthes.text = 'が';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'が';
                 } else if (lastletter == 'き') {
                   synthes.text = 'ぎ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぎ';
                 } else if (lastletter == 'く'){
                   synthes.text = 'ぐ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぐ';
                 } else if (lastletter == 'け'){
                   synthes.text = 'げ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'げ';
                 } else if (lastletter == 'こ'){
                   synthes.text = 'ご';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ご';
                 } else if (lastletter == 'さ'){
                   synthes.text = 'ざ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ざ';
                 } else if (lastletter == 'し'){
                   synthes.text = 'じ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'じ';
                 } else if (lastletter == 'す'){
                   synthes.text = 'ず';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ず';
                 } else if (lastletter == 'せ'){
                   synthes.text = 'ぜ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぜ';
                 } else if (lastletter == 'そ'){
                   synthes.text = 'ぞ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぞ';
                 } else if (lastletter == 'た'){
                   synthes.text = 'だ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'だ';
                 } else if (lastletter == 'ち'){
                   synthes.text = 'ぢ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぢ';
                 } else if (lastletter == 'つ'){
                   synthes.text = 'づ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'づ';
                 } else if (lastletter == 'て'){
                   synthes.text = 'で';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'で';
                 } else if (lastletter == 'と'){
                   synthes.text = 'ど';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ど';
                 } else if (lastletter == 'は'){
                   synthes.text = 'ば';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ば';
                 } else if (lastletter == 'ひ'){
                   synthes.text = 'び';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'び';
                 } else if (lastletter == 'ふ'){
                   synthes.text = 'ぶ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぶ';
                 } else if (lastletter == 'へ'){
                   synthes.text = 'べ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'べ';
                 } else if (lastletter == 'ほ'){
                   synthes.text = 'ぼ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぼ';

                 } else if (lastletter == 'カ'){
                   synthes.text = 'が';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ガ';
                 } else if (lastletter == 'キ') {
                   synthes.text = 'ぎ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ギ';
                 } else if (lastletter == 'ク'){
                   synthes.text = 'ぐ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'グ';
                 } else if (lastletter == 'ケ'){
                   synthes.text = 'げ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゲ';
                 } else if (lastletter == 'コ'){
                   synthes.text = 'ご';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゴ';
                 } else if (lastletter == 'サ'){
                   synthes.text = 'ざ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ザ';
                 } else if (lastletter == 'シ'){
                   synthes.text = 'じ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ジ';
                 } else if (lastletter == 'ス'){
                   synthes.text = 'ず';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ズ';
                 } else if (lastletter == 'セ'){
                   synthes.text = 'ぜ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゼ';
                 } else if (lastletter == 'ソ'){
                   synthes.text = 'ぞ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゾ';
                 } else if (lastletter == 'タ'){
                   synthes.text = 'だ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ダ';
                 } else if (lastletter == 'チ'){
                   synthes.text = 'ぢ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ヂ';
                 } else if (lastletter == 'ツ'){
                   synthes.text = 'づ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ヅ';
                 } else if (lastletter == 'テ'){
                   synthes.text = 'で';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'デ';
                 } else if (lastletter == 'ト'){
                   synthes.text = 'ど';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ド';
                 } else if (lastletter == 'ハ'){
                   synthes.text = 'ば';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'バ';
                 } else if (lastletter == 'ヒ'){
                   synthes.text = 'び';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ビ';
                 } else if (lastletter == 'フ'){
                   synthes.text = 'ぶ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ブ';
                 } else if (lastletter == 'ヘ'){
                   synthes.text = 'べ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ベ';
                 } else if (lastletter == 'ホ'){
                   synthes.text = 'ぼ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ボ';
                 } else {
     // web audio API によるサウンド出力
        const audioctx = new AudioContext();
        const sound = await LoadSample(audioctx, "./snd/incorrect2.wav");
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


                } 
      } else if (CBoard0 == 1 ){
                   synthes.text = 'のどが痛いです';
                   speechSynthesis.speak(synthes);
      text1.value = text1.value + "のどが痛いです";
      } else if (CBoard0 == 2 ){
                   synthes.text = 'のどが痛いです';
                   speechSynthesis.speak(synthes);
      text1.value = text1.value + "のどが痛いです";
      } else if (CBoard0 == 3 ){
                   synthes.text = 'すこし';
                   speechSynthesis.speak(synthes);
      text1.value = text1.value + "すこし";
      }

      setCursorend();
     }, false);
    //半濁音　小文字処理部分
     var obj = document.getElementById('gc');
	 obj.addEventListener("click", async function() {

      if (CBoard0 == 0 ) {
                lastletter = text1.value.charAt(text1.value.length -1);
                 if (lastletter == 'は') {
                   synthes.text = 'ぱ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぱ';
                 } else if (lastletter == 'ひ') {
                   synthes.text = 'ぴ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぴ';
                 } else if (lastletter == 'ふ'){
                   synthes.text = 'ぷ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぷ';
                 } else if (lastletter == 'へ'){
                   synthes.text = 'ぺ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぺ';
                 } else if (lastletter == 'ほ'){
                   synthes.text = 'ぽ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぽ';
                 } else if (lastletter == 'あ'){
                   synthes.text = 'あ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぁ';
                 } else if (lastletter == 'い'){
                   synthes.text = 'い';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぃ';
                 } else if (lastletter == 'う'){
                   synthes.text = 'う';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぅ';
                 } else if (lastletter == 'え'){
                   synthes.text = 'え';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぇ';
                 } else if (lastletter == 'お'){
                   synthes.text = 'お';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぉ';
                 } else if (lastletter == 'や'){
                   synthes.text = 'や';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゃ';
                 } else if (lastletter == 'ゆ'){
                   synthes.text = 'ゆ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゅ';
                 } else if (lastletter == 'よ'){
                   synthes.text = 'よ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ょ';
                 } else if (lastletter == 'つ'){
                   synthes.text = 'つ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'っ';

                 } else if (lastletter == 'ハ'){
                 //if (lastletter == 'ハ') {
                   synthes.text = 'ぱ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'パ';
                 } else if (lastletter == 'ヒ') {
                   synthes.text = 'ぴ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ピ';
                 } else if (lastletter == 'フ'){
                   synthes.text = 'ぷ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'プ';
                 } else if (lastletter == 'ヘ'){
                   synthes.text = 'ぺ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ペ';
                 } else if (lastletter == 'ホ'){
                   synthes.text = 'ぽ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ポ';
                 } else if (lastletter == 'ア'){
                   synthes.text = 'あ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ァ';
                 } else if (lastletter == 'イ'){
                   synthes.text = 'い';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ィ';
                 } else if (lastletter == 'ウ'){
                   synthes.text = 'う';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゥ';
                 } else if (lastletter == 'エ'){
                   synthes.text = 'え';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ェ';
                 } else if (lastletter == 'オ'){
                   synthes.text = 'お';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ォ';
                 } else if (lastletter == 'ヤ'){
                   synthes.text = 'や';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ャ';
                 } else if (lastletter == 'ユ'){
                   synthes.text = 'ゆ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ュ';
                 } else if (lastletter == 'ヨ'){
                   synthes.text = 'よ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ョ';
                 } else if (lastletter == 'ツ'){
                   synthes.text = 'つ';
                   speechSynthesis.speak(synthes);
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ッ';
                 } else {
                   //document.getElementById("sound3").play();
     // web audio API によるサウンド出力
        const audioctx = new AudioContext();
        const sound = await LoadSample(audioctx, "./snd/incorrect2.wav");
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

                 } 
      } else if (CBoard0 == 1 ){
                   synthes.text = 'せきがでます';
                   speechSynthesis.speak(synthes);
      text1.value = text1.value + "せきがでます";
      } else if (CBoard0 == 2 ){
                   synthes.text = 'せきがでます';
                   speechSynthesis.speak(synthes);
      text1.value = text1.value + "せきがでます";
      } else if (CBoard0 == 3 ){
                   synthes.text = 'を';
                   speechSynthesis.speak(synthes);
      text1.value = text1.value + "を";
      }

      setCursorend();
     }, false);
   // 十三行目
     var obj = document.getElementById('ra');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ら';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ら";
      } else if (CBoard0 == 1 ){
        synthes.text = 'しびれます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しびれます";
      } else if (CBoard0 == 2 ){
        synthes.text = 'どういたしまして';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "どういたしまして";
      } else if (CBoard0 == 3 ){
        synthes.text = 'かゆいです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "かゆいです";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ri');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'り';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "り";
      } else if (CBoard0 == 1 ){
        synthes.text = '手洗い';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "手洗い";
      } else if (CBoard0 == 2 ){
        synthes.text = 'しりません';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "しりません";
      } else if (CBoard0 == 3 ){
        synthes.text = 'うしろ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うしろ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ru');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'る';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "る";
      } else if (CBoard0 == 1 ){
        synthes.text = 'おふろ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "おふろ";
      } else if (CBoard0 == 2 ){
        synthes.text = 'あなた';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "あなた";
      } else if (CBoard0 == 3 ){
        synthes.text = 'つける';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "つける";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('re');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'れ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "れ";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = 'さあ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "さあ";
      } else if (CBoard0 == 3 ){
        synthes.text = 'つづけます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "つづけます";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ro');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'ろ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ろ";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = 'うんうん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うんうん";
      } else if (CBoard0 == 3 ){
        synthes.text = 'は';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "は";
      }
      setCursorend();
     }, false);
   // 十四行目
     var obj = document.getElementById('wa');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'わ';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "わ";
      } else if (CBoard0 == 1 ){
        synthes.text = 'ふるえます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ふるえます";
      } else if (CBoard0 == 2 ){
        synthes.text = 'ちがいます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ちがいます";
      } else if (CBoard0 == 3 ){
        synthes.text = 'のどがかわきました';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "のどがかわきました";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('wo');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'を';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "を";
      } else if (CBoard0 == 1 ){
        synthes.text = 'うがいをします';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "うがいをします";
      } else if (CBoard0 == 2 ){
        synthes.text = 'よかったです';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "よかったです";
      } else if (CBoard0 == 3 ){
        synthes.text = 'はんたい';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "はんたい";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nn');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'んん';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ん";
      } else if (CBoard0 == 1 ){
        synthes.text = '困ります';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "困ります";
      } else if (CBoard0 == 2 ){
        synthes.text = 'みんな';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "みんな";
      } else if (CBoard0 == 3 ){
        synthes.text = 'とる';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "とる";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('bar');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
        synthes.text = 'のばす';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "ー";
      } else if (CBoard0 == 1 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = 'やめます';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "やめます";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('0000');
	 obj.addEventListener("click", function() {
      if (CBoard0 == 0 ){
      } else if (CBoard0 == 1 ){
      } else if (CBoard0 == 2 ){
        synthes.text = '';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "";
      } else if (CBoard0 == 3 ){
        synthes.text = 'で';
        speechSynthesis.speak(synthes);
      text1.value = text1.value + "で";
      }
      setCursorend();
     }, false);
}, false);




function setCursorend() {
   //text2.value = text1.value;
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
          elem.src = "./img3/syokua.png";
          elem1.src = "./img3/inami.png";
          elem2.src = "./img3/saizaki.png";
          elem3.src = "./img3/takahara.png";
          elem4.src = "./img3/kuroda.png";
          elem5.src = "./img3/tanigawa.png";
          elem6.src = "./img3/yonezawa.png";
          elem7.src = "./img3/gotou.png";
          elem8.src = "./img3/nakano.png";
          elem9.src = "./img3/tukamoto.png";
          elem0.src = "./img3/iwasaki.png";
          elema.src = "./img3/yamagata.png";
          elemi.src = "./img3/tabuse.png";
          elemu.src = "./img3/furuoka.png";
          eleme.src = "./img3/yamamori.png";
          elemo.src = "./img3/asano.png";
          elemka.src = "./img3/magario.png";
          elemki.src = "./img3/fujii.png";
          elemku.src = "./img3/minami.png";
          elemke.src = "./img3/yoneda.png";
          elemko.src = "./img3/izumi.png";
          elemsa.src = "./img3/takata.png";
          elemsi.src = "./img3/kikura.png";
          elemsu.src = "./img3/oomura.png";
          elemse.src = "./img3/kangosi.png";
          elemso.src = "./img3/oosima.png";
          elemta.src = "./img3/nomura.png";
          elemti.src = "./img3/asou.png";
          elemtu.src = "./img3/masami.png";
          elemte.src = "./img3/sensei.png";
          elemto.src = "./img3/00.png";
          elemna.src = "./img3/sinsatu.png";
          elemni.src = "./img3/rihabiri.png";
          elemnu.src = "./img3/naika.png";
          elemne.src = "./img3/sinri.png";
          elemno.src = "./img3/kusuri.png";
          elemha.src = "./img3/yoyaku.png";
          elemhi.src = "./img3/seikei.png";
          elemhu.src = "./img3/seisinka.png";
          elemhe.src = "./img3/cyuusya.png";
          elemho.src = "./img3/fukusayou.png";
          elemma.src = "./img3/dutuu.png";
          elemmi.src = "./img3/benpi.png";
          elemmu.src = "./img3/netu.png";
          elemme.src = "./img3/hakike.png";
          elemmo.src = "./img3/kaze.png";
          elemya.src = "./img3/haita.png";
          elemyu.src = "./img3/geri.png";
          elemyo.src = "./img3/kabureta.png";
          elemyo2.src = "./img3/nodoitai.png";
          elemyo3.src = "./img3/seki.png";
          elemra.src = "./img3/sibire.png";
          elemri.src = "./img3/tearai.png";
          elemru.src = "./img3/ofuro.png";
          elemre.src = "./img3/00.png";
          elemro.src = "./img3/00.png";
          elemwa.src = "./img3/furue.png";
          elemwo.src = "./img3/ugai.png";
          elemnn.src = "./img3/komaru.png";
          elemnn2.src = "./img3/00.png";
          elemnn3.src = "./img3/00.png";
          break;
        case 1:
          elem.src = "./img4/00.png";
          elem1.src = "./img4/kare-raisu.png";
          elem2.src = "./img4/udon.png";
          elem3.src = "./img4/omuraisu.png";
          elem4.src = "./img4/hanba-ga-.png";
          elem5.src = "./img4/cya-han.png";
          elem6.src = "./img4/ra-men.png";
          elem7.src = "./img4/soba.png";
          elem8.src = "./img4/taiyaki.png";
          elem9.src = "./img4/to-suto.png";
          elem0.src = "./img4/gyo-za.png";
          elema.src = "./img4/piza.png";
          elemi.src = "./img4/gohan.png";
          elemu.src = "./img4/ohasi.png";
          eleme.src = "./img4/fo-ku.png";
          elemo.src = "./img4/00.png";
          elemka.src = "./img4/pan.png";
          elemki.src = "./img4/okasi.png";
          elemku.src = "./img4/supu-n.png";
          elemke.src = "./img4/sutoro-.png";
          elemko.src = "./img4/00.png";
          elemsa.src = "./img4/akete.png";
          elemsi.src = "./img4/toosite.png";
          elemsu.src = "./img4/sutete.png";
          elemse.src = "./img4/juuden.png";
          elemso.src = "./img4/onegai.png";
          elemta.src = "./img4/simete.png";
          elemti.src = "./img4/hirotte.png";
          elemtu.src = "./img4/irete.png";
          elemte.src = "./img4/dennchikoukan.png";
          elemto.src = "./img4/toiredoko.png";
          elemna.src = "./img4/ittekimasu.png";
          elemni.src = "./img4/okaeri.png";
          elemnu.src = "./img4/itadakimasu.png";
          elemne.src = "./img4/daijoubu.png";
          elemno.src = "./img4/00.png";
          elemha.src = "./img4/tadaima.png";
          elemhi.src = "./img4/itterassyai.png";
          elemhu.src = "./img4/gochisousama.png";
          elemhe.src = "./img4/konbanha.png";
          elemho.src = "./img4/apitahigasi.png";
          elemma.src = "./img4/toyama.png";
          elemmi.src = "./img4/toyamaekimae.png";
          elemmu.src = "./img4/sougawa.png";
          elemme.src = "./img4/simamura.png";
          elemmo.src = "./img4/arupuraza.png";
          elemya.src = "./img4/haru.png";
          elemyu.src = "./img4/natu.png";
          elemyo.src = "./img4/aki.png";
          elemyo2.src = "./img4/fuyu.png";
          elemyo3.src = "./img4/fabo-re.png";
          elemra.src = "./img4/asa.png";
          elemri.src = "./img4/hiru.png";
          elemru.src = "./img4/yuugata.png";
          elemre.src = "./img4/yoru.png";
          elemro.src = "./img4/norimasu.png";
          elemwa.src = "./img4/basu.png";
          elemwo.src = "./img4/takusi-.png";
          elemnn.src = "./img4/siden.png";
          elemnn2.src = "./img4/densya.png";
          elemnn3.src = "./img4/orimasu.png";
          break;
        case 2:
          elem.src = "./img/hiragana.png";
          elema.src = "./img2/hai.png";
          elemi.src = "./img2/atama.png";
          elemu.src = "./img2/mimi.png";
          eleme.src = "./img2/te.png";
          elemo.src = "./img2/hiji.png";
          elemka.src = "./img2/iie.png";
          elemki.src = "./img2/kao.png";
          elemku.src = "./img2/mayu.png";
          elemke.src = "./img2/ashi.png";
          elemko.src = "./img2/hiza.png";
          elemsa.src = "./img2/dochirademoii.png";
          elemsi.src = "./img2/me.png";
          elemsu.src = "./img2/hoppe.png";
          elemse.src = "./img2/yubi.png";
          elemso.src = "./img2/hara.png";
          elemta.src = "./img2/dochirademonai.png";
          elemti.src = "./img2/kuchi.png";
          elemtu.src = "./img2/kubi.png";
          elemte.src = "./img2/mune.png";
          elemto.src = "./img2/senaka.png";
          elemna.src = "./img2/mouichido2.png";
          elemni.src = "./img2/hana.png";
          elemnu.src = "./img2/kata.png";
          elemne.src = "./img2/koshi.png";
          elemno.src = "./img2/osiri.png";
          elemha.src = "./img2/machigaemasita2.png";
          elemhi.src = "./img2/hidari.png";
          elemhu.src = "./img2/ue.png";
          elemhe.src = "./img2/taihen.png";
          elemho.src = "./img2/ga.png";
          elemma.src = "./img2/kurusii.png";
          elemmi.src = "./img2/migi.png";
          elemmu.src = "./img2/naka.png";
          elemme.src = "./img2/futuu.png";
          elemmo.src = "./img2/ni.png";
          elemya.src = "./img2/itai.png";
          elemyu.src = "./img2/mae.png";
          elemyo.src = "./img2/sita.png";
          elemyo2.src = "./img2/sukosi.png";
          elemyo3.src = "./img2/wo.png";
          elemra.src = "./img2/kayui.png";
          elemri.src = "./img2/usiro.png";
          elemru.src = "./img2/tukeru.png";
          elemre.src = "./img2/tudukeru.png";
          elemro.src = "./img2/hawa.png";
          elemwa.src = "./img2/nodokawaku.png";
          elemwo.src = "./img2/hantai.png";
          elemnn.src = "./img2/toru.png";
          elemnn2.src = "./img2/yameru.png";
          elemnn3.src = "./img2/de.png";
          break;
        case 3:
          elem.src = "./img/katakana.png";
          elema.src = "./img/a.png";
          elemi.src = "./img/i.png";
          elemu.src = "./img/u.png";
          eleme.src = "./img/e.png";
          elemo.src = "./img/o.png";
          elemka.src = "./img/ka.png";
          elemki.src = "./img/ki.png";
          elemku.src = "./img/ku.png";
          elemke.src = "./img/ke.png";
          elemko.src = "./img/ko.png";
          elemsa.src = "./img/sa.png";
          elemsi.src = "./img/si.png";
          elemsu.src = "./img/su.png";
          elemse.src = "./img/se.png";
          elemso.src = "./img/so.png";
          elemta.src = "./img/ta.png";
          elemti.src = "./img/ti.png";
          elemtu.src = "./img/tu.png";
          elemte.src = "./img/te.png";
          elemto.src = "./img/to.png";
          elemna.src = "./img/na.png";
          elemni.src = "./img/ni.png";
          elemnu.src = "./img/nu.png";
          elemne.src = "./img/ne.png";
          elemno.src = "./img/no.png";
          elemha.src = "./img/ha.png";
          elemhi.src = "./img/hi.png";
          elemhu.src = "./img/hu.png";
          elemhe.src = "./img/he.png";
          elemho.src = "./img/ho.png";
          elemma.src = "./img/ma.png";
          elemmi.src = "./img/mi.png";
          elemmu.src = "./img/mu.png";
          elemme.src = "./img/me.png";
          elemmo.src = "./img/mo.png";
          elemya.src = "./img/ya.png";
          elemyu.src = "./img/yu.png";
          elemyo.src = "./img/yo.png";
          elemyo2.src = "./img/gb.png";
          elemyo3.src = "./img/gc.png";
          elemra.src = "./img/ra.png";
          elemri.src = "./img/ri.png";
          elemru.src = "./img/ru.png";
          elemre.src = "./img/re.png";
          elemro.src = "./img/ro.png";
          elemwa.src = "./img/wa.png";
          elemwo.src = "./img/wo.png";
          elemnn.src = "./img/nn.png";
          elemnn2.src = "./img/bar.png";
          elemnn3.src = "./img/000.png";
          break;
      }
    }

// 参考url
// ref. https://gist.github.com/roundrop/6504455
//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714
