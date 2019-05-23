document.addEventListener("DOMContentLoaded", function(){ // htmlを読み込み終わってから以下を実行せよ

   let button1 = document.getElementById('button1'); //idが「button」の要素を取得
   let button2 = document.getElementById('button2'); //idが「button」の要素を取得
   let button3 = document.getElementById('button3'); //idが「button」の要素を取得
   let button4 = document.getElementById('button4'); //idが「button」の要素を取得

   let box = document.getElementById('box'); //idが「box」の要素を取得

   //idが「button」の要素がクリックされたら実行
   button1.addEventListener("click", function() {
      new Audio('kotoba1.mp3').play(); // 再生される
      //changecolor('#0cc'); //関数「changecolor」に引数を指定
   }, false);

   button2.addEventListener("click", function() {
      new Audio('kotoba2.mp3').play(); // 再生される
      //changecolor('#c00'); //関数「changecolor」に引数を指定
   }, false);

   button3.addEventListener("click", function() {
      new Audio('kotoba3.mp3').play(); // 再生される
      //changecolor('#0cc'); //関数「changecolor」に引数を指定
   }, false);

   button4.addEventListener("click", function() {
      new Audio('kotoba4.mp3').play(); // 再生される
      //changecolor('#c00'); //関数「changecolor」に引数を指定
   }, false);


}, false);


function changecolor(code) {
 box.style.backgroundColor = code; //引数のカラーコードを背景色に指定
}

//ref.

//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714

