console.log("Hello WhiteDog!");

//let countup = 0;
let dir1 = 0;  //direction state 　 lefy canter -4, left trot -3, left walk -2, left stay -1, center stay 0,  right staye 1, right walk 2, right trot 3, right canter 4
let limitX =50;//不感帯の設定
	let startX = null;
	let endX = null;
	let startY = null;
	let endY = null;

// Main
window.onload = function(){
	//var mouseX, mouseY, isMouseDown;
	function handleMouseDown(e){//マウス押下、タッチ開始時の処理
		//isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true);
		document.addEventListener("touchmove", handleMouseMove, true);
		console.log("MouseDown");

		var clientX, clientY;
		if(e.clientX){
			startX = e.clientX; startY = e.clientY;
		}else if(e.changedTouches && e.changedTouches.length > 0){
			var touch = e.changedTouches[e.changedTouches.length - 1];
			startX = touch.clientX; startY = touch.clientY;
		}else{
		   return;
		}

		console.log("start =", startX, startY);

	}
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	
	function handleMouseUp(){//マウス開放、タッチ終了時の処理
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
		console.log("MouseUp");

		console.log("start =", startX, startY);
		console.log("end   =", endX, endY);

		if ((startX - endX) > limitX){
		console.log("left");
		console.log("dir1 =", dir1);
                        if (dir1 == -3){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./canter-left.gif";
			dir1 = -4;
			} else if (dir1 == -2){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./trot-left.gif";
			dir1 = -3;
			} else if (dir1 == -1){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./walk-left2.gif";
			dir1 = -2;
			} else if (dir1 == 0){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./turnctol.gif";
			dir1 = -1;
			} else if (dir1 == 1){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./turnrtoc.gif";
			dir1 = 0;
                          setTimeout(function(){
                          elemdog.src = "./dogcentail.gif";
                          },2000);

			} else if (dir1 == 2){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./dogar.gif";
			dir1 = 1;
			} else if (dir1 == 3){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./walk-right.gif";
			dir1 = 2;
			} else if (dir1 == 4){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./trot-right.gif";
			dir1 = 3;
			}

		}else if ((endX - startX) > limitX) {
		console.log("right");
			if (dir1 == 3){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./canter-right.gif";
			dir1 = 4;
			} else if (dir1 == 2){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./trot-right.gif";
			dir1 = 3;
			} else if (dir1 == 1){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./walk-right.gif";
			dir1 = 2;
			} else if (dir1 == 0){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./turnctor.gif";
			dir1 = 1;
			} else if (dir1 == -1){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./turnltoc.gif";
			dir1 = 0;
                       setTimeout(function(){
                       elemdog.src = "./dogcentail.gif";
                       },2000);

			} else if (dir1 == -2){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./doga.gif";
			dir1 = -1;
			} else if (dir1 == -3){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./walk-left2.gif";
			dir1 = -2;
			} else if (dir1 == -4){
      			var elemdog = document.getElementById("image_dog");
          			elemdog.src = "./trot-left.gif";
			dir1 = -3;
			}
		} else {
      		audioElem = new Audio();
      		audioElem.src = "./dog2.mp3";
      		audioElem.play();
		}

		//isMouseDown = false;
		//mouseX = undefined;
		//mouseY = undefined;
	}
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);

	function handleMouseMove(e){//マウス移動、タッチスライド時の処理
		var clientX, clientY;
		if(e.clientX){
			endX = e.clientX; endY = e.clientY;
		}else if(e.changedTouches && e.changedTouches.length > 0){
			var touch = e.changedTouches[e.changedTouches.length - 1];
			endX = touch.clientX; endY = touch.clientY;
		}else{
		   return;
		}

	};
};
