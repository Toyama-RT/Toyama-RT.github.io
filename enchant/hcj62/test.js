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
	document.getElementById("winsize2").innerHTML = s;
}

//テキストボックスへの初期文字列の書き込み部
     var text1 = document.getElementById("text1");
     text1.value = "あいう";

//ボタンクリック時の動作
     var obj = document.getElementById('0');
	 obj.addEventListener("click", function() {
      new Audio('./snd/0.mp3').play();
      text1.value = text1.value + "０";
     }, false);

     var obj = document.getElementById('1');
	 obj.addEventListener("click", function() {
      new Audio('./snd/1.mp3').play();
      text1.value = text1.value + "１";
     }, false);

     var obj = document.getElementById('2');
	 obj.addEventListener("click", function() {
      new Audio('./snd/2.mp3').play();
      text1.value = text1.value + "２";
     }, false);

     var obj = document.getElementById('3');
	 obj.addEventListener("click", function() {
      new Audio('./snd/3.mp3').play();
      text1.value = text1.value + "３";
     }, false);

     var obj = document.getElementById('4');
	 obj.addEventListener("click", function() {
      new Audio('./snd/4.mp3').play();
      text1.value = text1.value + "４";
     }, false);

     var obj = document.getElementById('5');
	 obj.addEventListener("click", function() {
      new Audio('./snd/5.mp3').play();
      text1.value = text1.value + "５";
     }, false);

     var obj = document.getElementById('6');
	 obj.addEventListener("click", function() {
      new Audio('./snd/6.mp3').play();
      text1.value = text1.value + "６";
     }, false);

     var obj = document.getElementById('7');
	 obj.addEventListener("click", function() {
      new Audio('./snd/7.mp3').play();
      text1.value = text1.value + "７";
     }, false);

     var obj = document.getElementById('8');
	 obj.addEventListener("click", function() {
      new Audio('./snd/8.mp3').play();
      text1.value = text1.value + "８";
     }, false);

     var obj = document.getElementById('9');
	 obj.addEventListener("click", function() {
      new Audio('./snd/9.mp3').play();
      text1.value = text1.value + "９";
     }, false);




}, false);


//ref.

//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714

