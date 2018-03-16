enchant(); 
window.onload = function() {
    var game_ = new Game(320, 320); // 表示される領域の大きさを設定
    game_.fps = 10; // 進行スピードを設定
    game_.preload('gameover.mp3'); // 使う素材を予め読み込む

    game_.onload = function() { // 準備が整ったら処理を実行
        game_.assets['gameover.mp3'].play();
    }
    game_.start(); // スタートさせます
};
