console.log("Hello WhiteDog!");

//let countup = 0;
let dir1 = 0;  //�����@���� 0, �Eright 1, ��left -1
let limitX =50;//�s���т̐ݒ�
	let startX = null;
	let endX = null;
	let startY = null;
	let endY = null;

// Main
window.onload = function(){
	//var mouseX, mouseY, isMouseDown;
	function handleMouseDown(e){//�}�E�X�����A�^�b�`�J�n���̏���
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
	
	function handleMouseUp(){//�}�E�X�J���A�^�b�`�I�����̏���
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
		console.log("MouseUp");

		console.log("start =", startX, startY);
		console.log("end   =", endX, endY);

		if ((startX - endX) > limitX){
		console.log("left");
		console.log("dir1 =", dir1);

			if (dir1 == 0){
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

			} else {

			}

		}else if ((endX - startX) > limitX) {
		console.log("right");
			if (dir1 == 0){
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

			} else {
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

	function handleMouseMove(e){//�}�E�X�ړ��A�^�b�`�X���C�h���̏���
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