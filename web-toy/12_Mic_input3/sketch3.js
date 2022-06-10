// 繝槭う繧ｯ縺九ｉ縺ｮ蜈･蜉帙ｒ蜿門ｾ励＠縲∵険蟷?､(髻ｳ螢ｰ繝ｬ繝吶Ν)繧剃ｽｿ縺｣縺ｦ蜀?ｒ荳贋ｸ九↓蜍輔°縺?

let mic;
let isGetting = false;
let h;

function setup() {
  const canvas = createCanvas(300, 200);
  canvas.parent('sketch-holder');
  // AudioIn繧ｪ繝悶ず繧ｧ繧ｯ繝医ｒ菴懈?
  mic = new p5.AudioIn();
  // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ繧ｯ繝ｪ繝?け縺ｧ縲√?繧､繧ｯ蜈･蜉帛叙蠕励?繧ｪ繝ｳ/繧ｪ繝輔ｒ蛻?ｊ譖ｿ縺医ｋ
  canvas.mouseClicked(toggleMic);
  h = height;
  textSize(20);
}

function draw() {
  background(200);
  if (isGetting) {
    // 蜈ｨ菴薙?髻ｳ驥上ｒ蠕励ｋ(0??1.0縺ｮ髢?)
    const vol = mic.getLevel();
    // 髻ｳ驥上↓繧ゅ→縺･縺城ｫ倥＆縺ｧ蜀?ｒ謠上￥
    h = map(vol, 0, 1, height, 0);
    // 蜿門ｾ励＠縺滄浹驥上Ξ繝吶Ν繧偵げ繝ｩ繝輔〒陦ｨ遉ｺ
    plot(frameCount, vol);
  }
  // 蜀?ｒ(h-25)縺ｮ鬮倥＆縺ｧ謠冗判
  fill(127);
  stroke(0);
  ellipse(width / 2, h - 25, 50, 50);

  // 譁?ｭ励ｒ謠冗判
  fill(255, 0, 0);
  noStroke();
  text('click to play/pause', 4, 20);
}

// 繝槭う繧ｯ蜈･蜉帛叙蠕励?繧ｪ繝ｳ/繧ｪ繝輔ｒ蛻?ｊ譖ｿ縺医ｋ
function toggleMic() {
  if (isGetting) {
    // AudioIn繧ｪ繝悶ず繧ｧ繧ｯ繝医ｒ繧ｪ繝輔↓縺吶ｋ
    mic.stop();
    isGetting = false;
  }
  else {
    // AudioIn繧ｪ繝悶ず繧ｧ繧ｯ繝医ｒ繧ｪ繝ｳ縺ｫ縺吶ｋ
    // 繝?ヵ繧ｩ繝ｫ繝医〒縺ｯ縲?.connect()縺励↑縺?(繧ｳ繝ｳ繝斐Η繝ｼ繧ｿ縺ｮ繧ｹ繝斐?繧ｫ繝ｼ縺ｫ)
    // => 繧ｹ繝斐?繧ｫ繝ｼ縺九ｉ髻ｳ螢ｰ縺ｯ閨槭％縺医↑縺?
    mic.start();
    isGetting = true;
  }
}

function touchStarted() {
  // 繝ｦ繝ｼ繧ｶ繝ｼ繧ｸ繧ｧ繧ｹ繝√Ε縺ｧ繧ｪ繝ｼ繝?ぅ繧ｪ繧ｳ繝ｳ繝?く繧ｹ繝医ｒ髢句ｧ九☆繧?
  userStartAudio();
}


