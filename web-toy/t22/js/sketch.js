console.log("Hello WhiteDog!");

//const A_RATIO  = 30.0;
//const C_NAME   = "canvas";

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
      var elemdog = document.getElementById("image_dog");
          elemdog.src = "./dogf.gif";

      audioElem = new Audio();
      audioElem.src = "./dog2.mp3";
      audioElem.play();

	}
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	
	function handleMouseUp(){
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
console.log("MouseUp");
      var elemdog = document.getElementById("image_dog");
          elemdog.src = "./dogde.gif";

          countup++;
          console.log(countup);
		if(countup > 10){
		      countup =0;
                      var elemdog = document.getElementById("image_dog");
                          elemdog.src = "./dogdt.gif";
                       setTimeout(function(){
                       console.log("舌をだしました")
                       elemdog.src = "./dogde.gif";
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
		}else if(e.changedTouches && e.changedTouches.length > 0){
			var touch = e.changedTouches[e.changedTouches.length - 1];
			clientX = touch.clientX; clientY = touch.clientY;
		}else{
		   return;
		}
		//mouseX = (clientX - canvasPosition.x) / A_RATIO;
		//mouseY = (clientY - canvasPosition.y) / A_RATIO;
		//e.preventDefault();
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
	 }*/
};
