document.addEventListener("DOMContentLoaded", function(){ // html��ǂݍ��ݏI����Ă���ȉ������s����

   let button1 = document.getElementById('button1'); //id���ubutton�v�̗v�f���擾
   let button2 = document.getElementById('button2');
   let button3 = document.getElementById('button3');
   let button4 = document.getElementById('button4');


   //id���ubutton�v�̗v�f���N���b�N���ꂽ����s
   button1.addEventListener("click", function() {
      new Audio('kotoba1.mp3').play(); // �Đ������
   }, false);

   button2.addEventListener("click", function() {
      new Audio('kotoba2.mp3').play();
   }, false);

   button3.addEventListener("click", function() {
      new Audio('kotoba3.mp3').play();
   }, false);

   button4.addEventListener("click", function() {
      new Audio('kotoba4.mp3').play();
   }, false);
}, false);

//ref.
//https://www.imamura.biz/blog/27539
//https://teratail.com/questions/24714
