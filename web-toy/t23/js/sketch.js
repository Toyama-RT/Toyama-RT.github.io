console.log("Hello WhiteDog!");

const A_RATIO  = 30.0;
const C_NAME   = "canvas";

let countup = 0;
// Main
window.onload = function(){
	// Update
/*	function update(){

		if(isMouseDown && (!mouseJoint)){
			var body = getBodyAtMouse();
			if(body){
				var md = new b2MouseJointDef();
				md.bodyA = world.GetGroundBody();
				md.bodyB = body;
				md.target.Set(mouseX, mouseY);
				md.collideConnected = true;
				md.maxForce = 300.0 * body.GetMass();
				mouseJoint = world.CreateJoint(md);
				body.SetAwake(true);
		   }
		}
		
		if(mouseJoint){
			if(isMouseDown){
				mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
			}else{
				world.DestroyJoint(mouseJoint);
				mouseJoint = null;
			}
		}

		// Step
		world.Step(1 / 60, 10, 10);
		world.DrawDebugData();
		world.ClearForces();
	};
*/


	// Random 1秒間隔の仕組み
	window.setInterval(()=>{
	document.addEventListener("mousemove", handleMouseMove, true);
        console.log("Hello");
	}, 1000 * 1);


	//==========
	// Mouse
	var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
	//var canvasPosition = getElementPosition(document.getElementById(C_NAME));

	function handleMouseDown(e){
		isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true);
		document.addEventListener("touchmove", handleMouseMove, true);

console.log("MouseDown");
      //var elemdog = document.getElementById("image_dog");
          //elemdog.src = "./dogf.gif";

      audioElem = new Audio();
      audioElem.src = "./dog0.mp3";
      audioElem.play();

	}
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	
	function handleMouseUp(){
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
console.log("MouseUp");
      //var elemdog = document.getElementById("image_dog");
        //  elemdog.src = "./dogd2.gif";

          countup++;
          console.log(countup);
		if(countup > 10){
		      countup =0;
                      var elemdog = document.getElementById("image_dog");
                          elemdog.src = "./dogdt.gif";
                       setTimeout(function(){
                       console.log("舌をだしました")
                       elemdog.src = "./dogd2.gif";
                       },1000);
		}

		isMouseDown = false;
		mouseX = undefined;
		mouseY = undefined;
	}
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);

	function handleMouseMove(e){
		var clientX, clientY;
		if(e.clientX){
			clientX = e.clientX; clientY = e.clientY;

console.log("clientX Y =", clientX, clientY);
C_WIDTH2  = window.innerWidth;

		}else if(e.changedTouches && e.changedTouches.length > 0){
			var touch = e.changedTouches[e.changedTouches.length - 1];
			clientX = touch.clientX; clientY = touch.clientY;
		}else{
		   return;
		}
		//mouseX = (clientX - canvasPosition.x) / A_RATIO;
		//mouseY = (clientY - canvasPosition.y) / A_RATIO;
		//e.preventDefault();

//if(clientX > 500 && clientX <560 && clientY >230 && clientY < 250){
if(clientX > (C_WIDTH2/2-512/2)+460 && clientX <(C_WIDTH2/2-512/2)+510 && clientY >220 && clientY < 260){
//(C_WIDTH/2-512/2)+170

console.log("clientX hit", clientX, clientY);
      var elemdog = document.getElementById("image_dog");
          elemdog.src = "./dogf.gif";
      audioElem = new Audio();
      audioElem.src = "./dog2.mp3";
      audioElem.play();

setTimeout(function(){
console.log("いやがっています")
elemdog.src = "./dogd2.gif";

},1000);
}


if((clientX > (C_WIDTH2/2-512/2)+260 && clientX <(C_WIDTH2/2-512/2)+263 && clientY >150 && clientY < 210) || 
(clientX > (C_WIDTH2/2-512/2)+130 && clientX <(C_WIDTH2/2-512/2)+133 && clientY >80 && clientY < 100)){

console.log("clientX back", clientX, clientY);
      var elemdog = document.getElementById("image_dog");
          elemdog.src = "./dogde.gif";
      audioElem = new Audio();
      audioElem.src = "./dog4.mp3";
      audioElem.play();
setTimeout(function(){
console.log("なでてもらってよろこんでいます")
elemdog.src = "./dogd2.gif";

},1000);
}


	};
	// Utility
/*	function getElementPosition(element){
		let elem = element;
		let tagName = "", x = 0, y = 0;
		while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")){
			y += elem.offsetTop; x += elem.offsetLeft;
			tagName = elem.tagName.toUpperCase();
			if(tagName == "BODY") elem=0;
			if(typeof(elem) == "object"){
				if(typeof(elem.offsetParent) == "object") elem = elem.offsetParent;
			}
		}
		return {x: x, y: y};
	 } */
};
