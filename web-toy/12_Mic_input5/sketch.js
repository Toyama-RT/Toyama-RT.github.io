// マイクからの入力を取得し、振幅値(音声レベル)を使って円を上下に動かす

let mic;
let isGetting = false;
let h;
let Lev0 = false;

let start;
let end;
let count = 0;

let hantei = function(){

console.log("3秒経過しました", count);

if(count == 1){
                      var elemdog = document.getElementById("image_dog");
                          elemdog.src = "./dogdt.gif";
                       setTimeout(function(){
                       //console.log("舌をだしました")
                       elemdog.src = "./dogde.gif";
                       },1000);

}else if(count == 2){
      audioElem = new Audio();
      audioElem.src = "./dog4.mp3";
      audioElem.play();

}else{
                      var elemdog = document.getElementById("image_dog");
                          elemdog.src = "./dogf.gif";
      audioElem = new Audio();
      audioElem.src = "./dog2.mp3";
      audioElem.play();

                       setTimeout(function(){
                       //console.log("舌をだしました")
                       elemdog.src = "./dogde.gif";
                       },1000);

}
count = 0;
};


function setup() {

    const fr = 10; // 毎秒30フレームを描画
    // const fr = 12;  // 毎秒12フレームを描画
    // const fr = 2;  // 毎秒2フレームを描画
    // const fr = 0.5;  // 毎秒30フレームを描画
    frameRate(fr);

    const canvas = createCanvas(300, 200);
    canvas.parent('sketch-holder');
    // AudioInオブジェクトを作成
    mic = new p5.AudioIn();
    // キャンバスのクリックで、マイク入力取得のオン/オフを切り替える
    canvas.mouseClicked(toggleMic);
    h = height;
    textSize(20);
}

function draw() {
    background(200);
    if (isGetting) {
        // 全体の音量を得る(0～1.0の間)
        const vol = mic.getLevel();

		//console.log("vol =", vol);

		if(vol > 0.03){
                     Lev = true;
                }else{
                     Lev = false;
                }
		//console.log("Lev =", Lev);
                if(Lev0 == false & Lev == true){
                     //console.time("func"); // 計測開始
		     //console.log("up =", Lev0, Lev);

start = performance.now();
                }else if(Lev0 == true & Lev == false){

                     //console.timeEnd("func"); // 計測終了
		     //console.log("down =", Lev0, Lev);
		     //console.timeLog("func"); // 必要に応じて
end = performance.now();
DuT = end - start;
//console.log("Time =", DuT);
    if(DuT > 500){
        //console.log("LONG");
    }else if(DuT < 500 & DuT >150){
count++;
console.log(count);
if(count == 1){
setTimeout(hantei,3000);
}
        //console.log("SHORT");
    }else{
    }



                }
		Lev0 = Lev;


/*

                      var elemdog = document.getElementById("image_dog");
                          elemdog.src = "./dogf.gif";
      audioElem = new Audio();
      audioElem.src = "./dog2.mp3";
      audioElem.play();

                       setTimeout(function(){
                       //console.log("舌をだしました")
                       elemdog.src = "./dogde.gif";
                       },1000);  
		}  */

        // 音量にもとづく高さで円を描く
        //h = map(vol, 0, 1, height, 0);
        // 取得した音量レベルをグラフで表示
        plot(frameCount, vol);
    }
    // 円を(h-25)の高さで描画
    fill(127);
    stroke(0);
    //ellipse(width / 2, h - 25, 50, 50);

    // 文字を描画
    fill(255, 0, 0);
    noStroke();
    text('click here to play/pause', 4, 20);


}

// マイク入力取得のオン/オフを切り替える
function toggleMic() {
    if (isGetting) {
        // AudioInオブジェクトをオフにする
        mic.stop();
        isGetting = false;
    }
    else {
        // AudioInオブジェクトをオンにする
        // デフォルトでは、.connect()しない(コンピュータのスピーカーに)
        // => スピーカーから音声は聞こえない
        mic.start();
        isGetting = true;
    }
}

function touchStarted() {
    // ユーザージェスチャでオーディオコンテキストを開始する
    userStartAudio();
}


