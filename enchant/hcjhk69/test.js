document.addEventListener("DOMContentLoaded", function(){ // htmlを読み込み終わってから以下を実行せよ
//画面大きさ表示部分
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
   }
//文書ファイル保存機能ここまで

//文字盤判別番号
   var CBoard0 = 0;  // 0=> hiragana 1=> katakana

      location.href = '#text1';

//テキストボックスへの初期文字列の書き込み部
     var text1 = document.getElementById("text1");
     //var text2 = document.getElementById("text2");


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

//文書切り替えボタンを表示文番号にあわせて変更する
    Bunnum(storage0);
//テキストボックスクリック時のカーソル出現＞Androidでのキーボード出現防止
     var obj = document.getElementById('text1');
	 obj.addEventListener("click", function() {
               setCursorend();
     }, false);

//ボタンクリック時の動作
//ひらがな文字盤
   // 一列目
     var obj = document.getElementById('000');
	 obj.addEventListener("click", function() {
      //new Audio('./snd/1.mp3').play();
      //text1.value = text1.value + "１";
     }, false);
     var obj = document.getElementById('bun');
	 obj.addEventListener("click", function() {
      new Audio('./snd/se3.mp3').play();

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
      Bunnum(storage0);
      setCursorend();
     }, false);
     var obj = document.getElementById('hai');
	 obj.addEventListener("click", function() {
      new Audio('./snd/hai.mp3').play();
     }, false);
     var obj = document.getElementById('ten');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ten.mp3').play();
      text1.value = text1.value + "、";
      setCursorend();
     }, false);
     var obj = document.getElementById('zenbukesu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/zenbukesu.mp3').play();
      text1.value = "";
      setCursorend();
     }, false);
   // 二列目
     var obj = document.getElementById('00');
	 obj.addEventListener("click", function() {
      new Audio('./snd/space.mp3').play();
      text1.value = text1.value + "　";
      setCursorend();
     }, false);
     var obj = document.getElementById('mojiban');
	 obj.addEventListener("click", function() {
      new Audio('./snd/se2.mp3').play();
      //location.href = '#text2';
      //setCursorend2();
      //ref https://www.sejuku.net/blog/64379
      CBoardChange(CBoard0);
             if (CBoard0 == 0 ){
               CBoard0 = 1;
            } else if (CBoard0 == 1 ){
               CBoard0 = 0;
            }
     }, false);
     var obj = document.getElementById('iie');
	 obj.addEventListener("click", function() {
      new Audio('./snd/iie.mp3').play();
     }, false);
     var obj = document.getElementById('maru');
	 obj.addEventListener("click", function() {
      new Audio('./snd/maru.mp3').play();
      text1.value = text1.value + "。";
      setCursorend();
     }, false);
     var obj = document.getElementById('kesu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/kesu.mp3').play();
      text1.value = text1.value.substring(0, text1.value.length -1 );
      setCursorend();
     }, false);

   // 数字
     var obj = document.getElementById('1');
	 obj.addEventListener("click", function() {
      new Audio('./snd/1.mp3').play();
      text1.value = text1.value + "１";
      setCursorend();
     }, false);
     var obj = document.getElementById('2');
	 obj.addEventListener("click", function() {
      new Audio('./snd/2.mp3').play();
      text1.value = text1.value + "２";
      setCursorend();
     }, false);
     var obj = document.getElementById('3');
	 obj.addEventListener("click", function() {
      new Audio('./snd/3.mp3').play();
      text1.value = text1.value + "３";
      setCursorend();
     }, false);
     var obj = document.getElementById('4');
	 obj.addEventListener("click", function() {
      new Audio('./snd/4.mp3').play();
      text1.value = text1.value + "４";
      setCursorend();
     }, false);
     var obj = document.getElementById('5');
	 obj.addEventListener("click", function() {
      new Audio('./snd/5.mp3').play();
      text1.value = text1.value + "５";
      setCursorend();
     }, false);
     var obj = document.getElementById('6');
	 obj.addEventListener("click", function() {
      new Audio('./snd/6.mp3').play();
      text1.value = text1.value + "６";
      setCursorend();
     }, false);
     var obj = document.getElementById('7');
	 obj.addEventListener("click", function() {
      new Audio('./snd/7.mp3').play();
      text1.value = text1.value + "７";
      setCursorend();
     }, false);
     var obj = document.getElementById('8');
	 obj.addEventListener("click", function() {
      new Audio('./snd/8.mp3').play();
      text1.value = text1.value + "８";
      setCursorend();
     }, false);
     var obj = document.getElementById('9');
	 obj.addEventListener("click", function() {
      new Audio('./snd/9.mp3').play();
      text1.value = text1.value + "９";
      setCursorend();
     }, false);
     var obj = document.getElementById('0');
	 obj.addEventListener("click", function() {
      new Audio('./snd/0.mp3').play();
      text1.value = text1.value + "０";
      setCursorend();
     }, false);
   // あ行
     var obj = document.getElementById('a');
	 obj.addEventListener("click", function() {
      new Audio('./snd/a.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "あ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ア";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('i');
	 obj.addEventListener("click", function() {
      new Audio('./snd/i.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "い";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "イ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('u');
	 obj.addEventListener("click", function() {
      new Audio('./snd/u.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "う";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ウ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('e');
	 obj.addEventListener("click", function() {
      new Audio('./snd/e.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "え";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "エ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('o');
	 obj.addEventListener("click", function() {
      new Audio('./snd/o.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "お";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "オ";
      }
      setCursorend();
     }, false);
   // か行
     var obj = document.getElementById('ka');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ka.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "か";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "カ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ki');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ki.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "き";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "キ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ku');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ku.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "く";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ク";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ke');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ke.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "け";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ケ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ko');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ko.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "こ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "コ";
      }
      setCursorend();
     }, false);
   // さ行
     var obj = document.getElementById('sa');
	 obj.addEventListener("click", function() {
      new Audio('./snd/sa.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "さ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "サ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('si');
	 obj.addEventListener("click", function() {
      new Audio('./snd/si.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "し";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "シ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('su');
	 obj.addEventListener("click", function() {
      new Audio('./snd/su.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "す";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ス";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('se');
	 obj.addEventListener("click", function() {
      new Audio('./snd/se.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "せ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "セ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('so');
	 obj.addEventListener("click", function() {
      new Audio('./snd/so.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "そ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ソ";
      }
      setCursorend();
     }, false);
   // た行
     var obj = document.getElementById('ta');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ta.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "た";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "タ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ti');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ti.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ち";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "チ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('tu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/tu.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "つ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ツ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('te');
	 obj.addEventListener("click", function() {
      new Audio('./snd/te.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "て";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "テ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('to');
	 obj.addEventListener("click", function() {
      new Audio('./snd/to.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "と";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ト";
      }
      setCursorend();
     }, false);
   // な行
     var obj = document.getElementById('na');
	 obj.addEventListener("click", function() {
      new Audio('./snd/na.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "な";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ナ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ni');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ni.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "に";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ニ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/nu.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ぬ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ヌ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ne');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ne.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ね";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ネ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('no');
	 obj.addEventListener("click", function() {
      new Audio('./snd/no.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "の";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ノ";
      }
      setCursorend();
     }, false);
   // は行
     var obj = document.getElementById('ha');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ha.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "は";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ハ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hi');
	 obj.addEventListener("click", function() {
      new Audio('./snd/hi.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ひ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ヒ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('hu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/hu.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ふ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "フ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('he');
	 obj.addEventListener("click", function() {
      new Audio('./snd/he.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "へ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ヘ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ho');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ho.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ほ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ホ";
      }
      setCursorend();
     }, false);
   // ま行
     var obj = document.getElementById('ma');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ma.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ま";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "マ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mi');
	 obj.addEventListener("click", function() {
      new Audio('./snd/mi.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "み";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ミ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/mu.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "む";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ム";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('me');
	 obj.addEventListener("click", function() {
      new Audio('./snd/me.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "め";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "メ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('mo');
	 obj.addEventListener("click", function() {
      new Audio('./snd/mo.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "も";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "モ";
      }
      setCursorend();
     }, false);
   // や行
     var obj = document.getElementById('ya');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ya.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "や";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ヤ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('yu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/yu.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ゆ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ユ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('yo');
	 obj.addEventListener("click", function() {
      new Audio('./snd/yo.mp3').play();
      if (CBoard0 == 0 || CBoard0 == 1 ) {
      text1.value = text1.value + "よ";
      } else if (CBoard0 == 2 ){
      text1.value = text1.value + "ヨ";
      }
      setCursorend();
     }, false);
   //濁音処理部分
     var obj = document.getElementById('gb');
	 obj.addEventListener("click", function() {

      if (CBoard0 == 0 || CBoard0 == 1 ) {
                lastletter = text1.value.charAt(text1.value.length -1);
                 if (lastletter == 'か') {
                   new Audio('./snd/ga.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'が';
                 } else if (lastletter == 'き') {
                   new Audio('./snd/gi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぎ';
                 } else if (lastletter == 'く'){
                   new Audio('./snd/gu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぐ';
                 } else if (lastletter == 'け'){
                   new Audio('./snd/ge.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'げ';
                 } else if (lastletter == 'こ'){
                   new Audio('./snd/go.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ご';
                 } else if (lastletter == 'さ'){
                   new Audio('./snd/za.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ざ';
                 } else if (lastletter == 'し'){
                   new Audio('./snd/zi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'じ';
                 } else if (lastletter == 'す'){
                   new Audio('./snd/zu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ず';
                 } else if (lastletter == 'せ'){
                   new Audio('./snd/ze.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぜ';
                 } else if (lastletter == 'そ'){
                   new Audio('./snd/zo.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぞ';
                 } else if (lastletter == 'た'){
                   new Audio('./snd/da.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'だ';
                 } else if (lastletter == 'ち'){
                   new Audio('./snd/di.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぢ';
                 } else if (lastletter == 'つ'){
                   new Audio('./snd/du.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'づ';
                 } else if (lastletter == 'て'){
                   new Audio('./snd/de.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'で';
                 } else if (lastletter == 'と'){
                   new Audio('./snd/do.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ど';
                 } else if (lastletter == 'は'){
                   new Audio('./snd/ba.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ば';
                 } else if (lastletter == 'ひ'){
                   new Audio('./snd/bi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'び';
                 } else if (lastletter == 'ふ'){
                   new Audio('./snd/bu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぶ';
                 } else if (lastletter == 'へ'){
                   new Audio('./snd/be.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'べ';
                 } else if (lastletter == 'ほ'){
                   new Audio('./snd/bo.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぼ';

                 } else if (lastletter == 'カ'){
                   new Audio('./snd/ga.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ガ';
                 } else if (lastletter == 'キ') {
                   new Audio('./snd/gi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ギ';
                 } else if (lastletter == 'ク'){
                   new Audio('./snd/gu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'グ';
                 } else if (lastletter == 'ケ'){
                   new Audio('./snd/ge.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゲ';
                 } else if (lastletter == 'コ'){
                   new Audio('./snd/go.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゴ';
                 } else if (lastletter == 'サ'){
                   new Audio('./snd/za.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ザ';
                 } else if (lastletter == 'シ'){
                   new Audio('./snd/zi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ジ';
                 } else if (lastletter == 'ス'){
                   new Audio('./snd/zu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ズ';
                 } else if (lastletter == 'セ'){
                   new Audio('./snd/ze.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゼ';
                 } else if (lastletter == 'ソ'){
                   new Audio('./snd/zo.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゾ';
                 } else if (lastletter == 'タ'){
                   new Audio('./snd/da.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ダ';
                 } else if (lastletter == 'チ'){
                   new Audio('./snd/di.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ヂ';
                 } else if (lastletter == 'ツ'){
                   new Audio('./snd/du.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ヅ';
                 } else if (lastletter == 'テ'){
                   new Audio('./snd/de.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'デ';
                 } else if (lastletter == 'ト'){
                   new Audio('./snd/do.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ド';
                 } else if (lastletter == 'ハ'){
                   new Audio('./snd/ba.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'バ';
                 } else if (lastletter == 'ヒ'){
                   new Audio('./snd/bi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ビ';
                 } else if (lastletter == 'フ'){
                   new Audio('./snd/bu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ブ';
                 } else if (lastletter == 'ヘ'){
                   new Audio('./snd/be.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ベ';
                 } else if (lastletter == 'ホ'){
                   new Audio('./snd/bo.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ボ';
                 } else {
                   new Audio('./snd/incorrect2.mp3').play();
                 } 
      } else if (CBoard0 == 2 ){
      text1.value = text1.value + "x";
      }

      setCursorend();
     }, false);
    //半濁音　小文字処理部分
     var obj = document.getElementById('gc');
	 obj.addEventListener("click", function() {

      if (CBoard0 == 0 || CBoard0 == 1 ) {
                lastletter = text1.value.charAt(text1.value.length -1);
                 if (lastletter == 'は') {
                   new Audio('./snd/pa.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぱ';
                 } else if (lastletter == 'ひ') {
                   new Audio('./snd/pi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぴ';
                 } else if (lastletter == 'ふ'){
                   new Audio('./snd/pu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぷ';
                 } else if (lastletter == 'へ'){
                   new Audio('./snd/pe.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぺ';
                 } else if (lastletter == 'ほ'){
                   new Audio('./snd/po.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぽ';
                 } else if (lastletter == 'あ'){
                   new Audio('./snd/a.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぁ';
                 } else if (lastletter == 'い'){
                   new Audio('./snd/i.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぃ';
                 } else if (lastletter == 'う'){
                   new Audio('./snd/u.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぅ';
                 } else if (lastletter == 'え'){
                   new Audio('./snd/e.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぇ';
                 } else if (lastletter == 'お'){
                   new Audio('./snd/o.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ぉ';
                 } else if (lastletter == 'や'){
                   new Audio('./snd/ya.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゃ';
                 } else if (lastletter == 'ゆ'){
                   new Audio('./snd/yu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゅ';
                 } else if (lastletter == 'よ'){
                   new Audio('./snd/yo.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ょ';
                 } else if (lastletter == 'つ'){
                   new Audio('./snd/tu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'っ';

                 } else if (lastletter == 'ハ'){
                 //if (lastletter == 'ハ') {
                   new Audio('./snd/pa.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'パ';
                 } else if (lastletter == 'ヒ') {
                   new Audio('./snd/pi.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ピ';
                 } else if (lastletter == 'フ'){
                   new Audio('./snd/pu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'プ';
                 } else if (lastletter == 'ヘ'){
                   new Audio('./snd/pe.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ペ';
                 } else if (lastletter == 'ホ'){
                   new Audio('./snd/po.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ポ';
                 } else if (lastletter == 'ア'){
                   new Audio('./snd/a.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ァ';
                 } else if (lastletter == 'イ'){
                   new Audio('./snd/i.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ィ';
                 } else if (lastletter == 'ウ'){
                   new Audio('./snd/u.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ゥ';
                 } else if (lastletter == 'エ'){
                   new Audio('./snd/e.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ェ';
                 } else if (lastletter == 'オ'){
                   new Audio('./snd/o.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ォ';
                 } else if (lastletter == 'ヤ'){
                   new Audio('./snd/ya.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ャ';
                 } else if (lastletter == 'ユ'){
                   new Audio('./snd/yu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ュ';
                 } else if (lastletter == 'ヨ'){
                   new Audio('./snd/yo.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ョ';
                 } else if (lastletter == 'ツ'){
                   new Audio('./snd/tu.mp3').play();
                   text1.value = text1.value.substring(0, text1.value.length -1 );
                   text1.value = text1.value + 'ッ';
                 } else {
                   new Audio('./snd/incorrect2.mp3').play();
                 } 
      } else if (CBoard0 == 2 ){
      text1.value = text1.value + "x";
      }

      setCursorend();
     }, false);
   // ら行
     var obj = document.getElementById('ra');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ra.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ら";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ラ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ri');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ri.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "り";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "リ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ru');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ru.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "る";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ル";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('re');
	 obj.addEventListener("click", function() {
      new Audio('./snd/re.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "れ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "レ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('ro');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ro.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ろ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ロ";
      }
      setCursorend();
     }, false);
   // わ行
     var obj = document.getElementById('wa');
	 obj.addEventListener("click", function() {
      new Audio('./snd/wa.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "わ";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ワ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('wo');
	 obj.addEventListener("click", function() {
      new Audio('./snd/wo.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "を";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ヲ";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('nn');
	 obj.addEventListener("click", function() {
      new Audio('./snd/nn.mp3').play();
      if (CBoard0 == 0 ){
      text1.value = text1.value + "ん";
      } else if (CBoard0 == 1 ){
      text1.value = text1.value + "ン";
      }
      setCursorend();
     }, false);
     var obj = document.getElementById('bar');
	 obj.addEventListener("click", function() {
      new Audio('./snd/nobasu.mp3').play();
      text1.value = text1.value + "－";
      setCursorend();
     }, false);
     var obj = document.getElementById('000');
	 obj.addEventListener("click", function() {
     }, false);
}, false);


function setCursorend() {
   //text2.value = text1.value;
   var len = text1.value.length;
      text1.focus();
      text1.setSelectionRange(len, len);
document.activeElement.blur();//Androidでキーボード出現を止めるためフォーカスを外す
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
      var elemra = document.getElementById("ra");
      var elemri = document.getElementById("ri");
      var elemru = document.getElementById("ru");
      var elemre = document.getElementById("re");
      var elemro = document.getElementById("ro");
      var elemwa = document.getElementById("wa");
      var elemwo = document.getElementById("wo");
      var elemnn = document.getElementById("nn");

      switch (param1) {
        case 0:
          elem.src = "./img/hiragana.png";
          elema.src = "./img/kta.png";
          elemi.src = "./img/kti.png";
          elemu.src = "./img/ktu.png";
          eleme.src = "./img/kte.png";
          elemo.src = "./img/kto.png";
          elemka.src = "./img/ktka.png";
          elemki.src = "./img/ktki.png";
          elemku.src = "./img/ktku.png";
          elemke.src = "./img/ktke.png";
          elemko.src = "./img/ktko.png";
          elemsa.src = "./img/ktsa.png";
          elemsi.src = "./img/ktsi.png";
          elemsu.src = "./img/ktsu.png";
          elemse.src = "./img/ktse.png";
          elemso.src = "./img/ktso.png";
          elemta.src = "./img/ktta.png";
          elemti.src = "./img/ktti.png";
          elemtu.src = "./img/kttu.png";
          elemte.src = "./img/ktte.png";
          elemto.src = "./img/ktto.png";
          elemna.src = "./img/ktna.png";
          elemni.src = "./img/ktni.png";
          elemnu.src = "./img/ktnu.png";
          elemne.src = "./img/ktne.png";
          elemno.src = "./img/ktno.png";
          elemha.src = "./img/ktha.png";
          elemhi.src = "./img/kthi.png";
          elemhu.src = "./img/kthu.png";
          elemhe.src = "./img/kthe.png";
          elemho.src = "./img/ktho.png";
          elemma.src = "./img/ktma.png";
          elemmi.src = "./img/ktmi.png";
          elemmu.src = "./img/ktmu.png";
          elemme.src = "./img/ktme.png";
          elemmo.src = "./img/ktmo.png";
          elemya.src = "./img/ktya.png";
          elemyu.src = "./img/ktyu.png";
          elemyo.src = "./img/ktyo.png";
          elemra.src = "./img/ktra.png";
          elemri.src = "./img/ktri.png";
          elemru.src = "./img/ktru.png";
          elemre.src = "./img/ktre.png";
          elemro.src = "./img/ktro.png";
          elemwa.src = "./img/ktwa.png";
          elemwo.src = "./img/ktwo.png";
          elemnn.src = "./img/ktnn.png";
          break;
        case 1:
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
          elemra.src = "./img/ra.png";
          elemri.src = "./img/ri.png";
          elemru.src = "./img/ru.png";
          elemre.src = "./img/re.png";
          elemro.src = "./img/ro.png";
          elemwa.src = "./img/wa.png";
          elemwo.src = "./img/wo.png";
          elemnn.src = "./img/nn.png";
          break;
      }
    }




// ref. https://gist.github.com/roundrop/6504455

//ref.

//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714

