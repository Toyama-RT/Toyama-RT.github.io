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

  //開始時　local storage  から読み込み
        storage0 = localStorage.getItem('SERVICE_NAME0');

            if (storage0 == 1 ){  //初回起動時にstrage0=nullとなるのを1にして不具合を回避している
               storage0 =  1;
            } else {
               storage0 =  1;
            }

    try {
        storage1 = JSON.parse(localStorage[SERVICE_NAME1] || '');
    } catch(e) {
        storage1 = '';
    }
  //終了時　local storage  へ保存
   window.onbeforeunload = function() {
            if (storage0 == 1 ){
               storage1 = text1.value;
            } else {
            }

       localStorage.setItem('SERVICE_NAME0', storage0 );

       localStorage[SERVICE_NAME1] = JSON.stringify(storage1);
}
//文書ファイル保存機能ここまで

//テキストボックスへの初期文字列の書き込み部
     var text1 = document.getElementById("text1");
      text1.value = storage1;
      setCursorend();

//ボタンクリック時の動作
   // 一列目
//     var obj = document.getElementById('talk');
//	 obj.addEventListener("click", function() {
//      new Audio('./snd/1.mp3').play();
//      text1.value = text1.value + "１";
//     }, false);
//     var obj = document.getElementById('bun');
//	 obj.addEventListener("click", function() {
//      new Audio('./snd/2.mp3').play();
//      text1.value = text1.value + "２";
//     }, false);
     var obj = document.getElementById('hai');
	 obj.addEventListener("click", function() {
      new Audio('./snd/hai.mp3').play();
      //text1.value = text1.value + "３";
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
//     var obj = document.getElementById('katakana');
//	 obj.addEventListener("click", function() {
//      new Audio('./snd/2.mp3').play();
//      text1.value = text1.value + "２";
//     }, false);
     var obj = document.getElementById('iie');
	 obj.addEventListener("click", function() {
      new Audio('./snd/iie.mp3').play();
      //text1.value = text1.value + "３";
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
      text1.value = text1.value + "あ";
      setCursorend();
     }, false);
     var obj = document.getElementById('i');
	 obj.addEventListener("click", function() {
      new Audio('./snd/i.mp3').play();
      text1.value = text1.value + "い";
      setCursorend();
     }, false);
     var obj = document.getElementById('u');
	 obj.addEventListener("click", function() {
      new Audio('./snd/u.mp3').play();
      text1.value = text1.value + "う";
      setCursorend();
     }, false);
     var obj = document.getElementById('e');
	 obj.addEventListener("click", function() {
      new Audio('./snd/e.mp3').play();
      text1.value = text1.value + "え";
      setCursorend();
     }, false);
     var obj = document.getElementById('o');
	 obj.addEventListener("click", function() {
      new Audio('./snd/o.mp3').play();
      text1.value = text1.value + "お";
      setCursorend();
     }, false);
   // か行
     var obj = document.getElementById('ka');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ka.mp3').play();
      text1.value = text1.value + "か";
      setCursorend();
     }, false);
     var obj = document.getElementById('ki');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ki.mp3').play();
      text1.value = text1.value + "き";
      setCursorend();
     }, false);
     var obj = document.getElementById('ku');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ku.mp3').play();
      text1.value = text1.value + "く";
      setCursorend();
     }, false);
     var obj = document.getElementById('ke');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ke.mp3').play();
      text1.value = text1.value + "け";
      setCursorend();
     }, false);
     var obj = document.getElementById('ko');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ko.mp3').play();
      text1.value = text1.value + "こ";
      setCursorend();
     }, false);
   // さ行
     var obj = document.getElementById('sa');
	 obj.addEventListener("click", function() {
      new Audio('./snd/sa.mp3').play();
      text1.value = text1.value + "さ";
      setCursorend();
     }, false);
     var obj = document.getElementById('si');
	 obj.addEventListener("click", function() {
      new Audio('./snd/si.mp3').play();
      text1.value = text1.value + "し";
      setCursorend();
     }, false);
     var obj = document.getElementById('su');
	 obj.addEventListener("click", function() {
      new Audio('./snd/su.mp3').play();
      text1.value = text1.value + "す";
      setCursorend();
     }, false);
     var obj = document.getElementById('se');
	 obj.addEventListener("click", function() {
      new Audio('./snd/se.mp3').play();
      text1.value = text1.value + "せ";
      setCursorend();
     }, false);
     var obj = document.getElementById('so');
	 obj.addEventListener("click", function() {
      new Audio('./snd/so.mp3').play();
      text1.value = text1.value + "そ";
      setCursorend();
     }, false);
   // た行
     var obj = document.getElementById('ta');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ta.mp3').play();
      text1.value = text1.value + "た";
      setCursorend();
     }, false);
     var obj = document.getElementById('ti');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ti.mp3').play();
      text1.value = text1.value + "ち";
      setCursorend();
     }, false);
     var obj = document.getElementById('tu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/tu.mp3').play();
      text1.value = text1.value + "つ";
      setCursorend();
     }, false);
     var obj = document.getElementById('te');
	 obj.addEventListener("click", function() {
      new Audio('./snd/te.mp3').play();
      text1.value = text1.value + "て";
      setCursorend();
     }, false);
     var obj = document.getElementById('to');
	 obj.addEventListener("click", function() {
      new Audio('./snd/to.mp3').play();
      text1.value = text1.value + "と";
      setCursorend();
     }, false);
   // な行
     var obj = document.getElementById('na');
	 obj.addEventListener("click", function() {
      new Audio('./snd/na.mp3').play();
      text1.value = text1.value + "な";
      setCursorend();
     }, false);
     var obj = document.getElementById('ni');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ni.mp3').play();
      text1.value = text1.value + "に";
      setCursorend();
     }, false);
     var obj = document.getElementById('nu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/nu.mp3').play();
      text1.value = text1.value + "ぬ";
      setCursorend();
     }, false);
     var obj = document.getElementById('ne');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ne.mp3').play();
      text1.value = text1.value + "ね";
      setCursorend();
     }, false);
     var obj = document.getElementById('no');
	 obj.addEventListener("click", function() {
      new Audio('./snd/no.mp3').play();
      text1.value = text1.value + "の";
      setCursorend();
     }, false);
   // は行
     var obj = document.getElementById('ha');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ha.mp3').play();
      text1.value = text1.value + "は";
      setCursorend();
     }, false);
     var obj = document.getElementById('hi');
	 obj.addEventListener("click", function() {
      new Audio('./snd/hi.mp3').play();
      text1.value = text1.value + "ひ";
      setCursorend();
     }, false);
     var obj = document.getElementById('hu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/hu.mp3').play();
      text1.value = text1.value + "ふ";
      setCursorend();
     }, false);
     var obj = document.getElementById('he');
	 obj.addEventListener("click", function() {
      new Audio('./snd/he.mp3').play();
      text1.value = text1.value + "へ";
      setCursorend();
     }, false);
     var obj = document.getElementById('ho');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ho.mp3').play();
      text1.value = text1.value + "ほ";
      setCursorend();
     }, false);
   // ま行
     var obj = document.getElementById('ma');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ma.mp3').play();
      text1.value = text1.value + "ま";
      setCursorend();
     }, false);
     var obj = document.getElementById('mi');
	 obj.addEventListener("click", function() {
      new Audio('./snd/mi.mp3').play();
      text1.value = text1.value + "み";
      setCursorend();
     }, false);
     var obj = document.getElementById('mu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/mu.mp3').play();
      text1.value = text1.value + "む";
      setCursorend();
     }, false);
     var obj = document.getElementById('me');
	 obj.addEventListener("click", function() {
      new Audio('./snd/me.mp3').play();
      text1.value = text1.value + "め";
      setCursorend();
     }, false);
     var obj = document.getElementById('mo');
	 obj.addEventListener("click", function() {
      new Audio('./snd/mo.mp3').play();
      text1.value = text1.value + "も";
      setCursorend();
     }, false);
   // や行
     var obj = document.getElementById('ya');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ya.mp3').play();
      text1.value = text1.value + "や";
      setCursorend();
     }, false);
     var obj = document.getElementById('yu');
	 obj.addEventListener("click", function() {
      new Audio('./snd/yu.mp3').play();
      text1.value = text1.value + "ゆ";
      setCursorend();
     }, false);
     var obj = document.getElementById('yo');
	 obj.addEventListener("click", function() {
      new Audio('./snd/yo.mp3').play();
      text1.value = text1.value + "よ";
      setCursorend();
     }, false);
   //濁音処理部分
     var obj = document.getElementById('gb');
	 obj.addEventListener("click", function() {
                lastletter = text1.value.charAt(text1.value.length -1);
                //title.text = lastletter
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
                 } else {
                   new Audio('./snd/incorrect2.mp3').play();
                 } 
      setCursorend();
     }, false);
    //半濁音　小文字処理部分
     var obj = document.getElementById('gc');
	 obj.addEventListener("click", function() {
                lastletter = text1.value.charAt(text1.value.length -1);
                //title.text = lastletter
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
                 } else {
                   new Audio('./snd/incorrect2.mp3').play();
                 } 
      setCursorend();
     }, false);
   // ら行
     var obj = document.getElementById('ra');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ra.mp3').play();
      text1.value = text1.value + "ら";
      setCursorend();
     }, false);
     var obj = document.getElementById('ri');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ri.mp3').play();
      text1.value = text1.value + "り";
      setCursorend();
     }, false);
     var obj = document.getElementById('ru');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ru.mp3').play();
      text1.value = text1.value + "る";
      setCursorend();
     }, false);
     var obj = document.getElementById('re');
	 obj.addEventListener("click", function() {
      new Audio('./snd/re.mp3').play();
      text1.value = text1.value + "れ";
      setCursorend();
     }, false);
     var obj = document.getElementById('ro');
	 obj.addEventListener("click", function() {
      new Audio('./snd/ro.mp3').play();
      text1.value = text1.value + "ろ";
      setCursorend();
     }, false);
   // わ行
     var obj = document.getElementById('wa');
	 obj.addEventListener("click", function() {
      new Audio('./snd/wa.mp3').play();
      text1.value = text1.value + "わ";
      setCursorend();
     }, false);
     var obj = document.getElementById('wo');
	 obj.addEventListener("click", function() {
      new Audio('./snd/wo.mp3').play();
      text1.value = text1.value + "を";
      setCursorend();
     }, false);
     var obj = document.getElementById('nn');
	 obj.addEventListener("click", function() {
      new Audio('./snd/nn.mp3').play();
      text1.value = text1.value + "ん";
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
      //new Audio('./snd/o.mp3').play();
      //text1.value = text1.value + "お";
     }, false);
}, false);

function setCursorend() {
   var len = text1.value.length;
   text1.focus();
   text1.setSelectionRange(len, len);
document.activeElement.blur();//Androidでキーボード出現を止めるためフォーカスを外す
}
// ref. https://gist.github.com/roundrop/6504455

//ref.

//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714

