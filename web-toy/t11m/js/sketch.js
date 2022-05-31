console.log("Hello Box2dWeb!!  sketchguru.js");

const WaitForClick = () => new Promise(resolve => document.body.addEventListener("click", resolve));

async function WaitSample() {
var img = document.getElementById("image_place");
    //document.getElementById("image_place").style.display="none";

  console.log("waiting for click");
  await WaitForClick();
  //console.log("この行は、クリックされた後に実行されます。");
      //audioElem = new Audio();
      //audioElem.src = "./bat1.mp3";
      //audioElem.play();
      document.getElementById("image_place").style.display="none";
	abc();
}

const TAG_REMOVER = "remover";
const TAG_REMOVERB = "removerb";
const TAG_REMOVERC = "removerc";

// Global
let world = null;
let manager = null;


// Main
window.onload = function(){

WaitSample();

}

function abc(){
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  console.log("canvas.width" + " %d", canvas.width);
  console.log("canvas.height" + " %d", canvas.height);

if (canvas.height <= 525 ) {
   var figwidth = 100;
   var ch2 = 450;
} else if (canvas.height <= 600 ) {
   var figwidth = 100;
   var ch2 = 525;
} else if (canvas.height <= 675 ) {
   var figwidth = 150;
   var ch2 = 600;
} else if (canvas.height <= 750 ) {
   var figwidth = 150;
   var ch2 = 675;
} else if (canvas.height <= 825 ) {
   var figwidth = 150;
   var ch2 = 750;
} else if (canvas.height <= 900 ) {
   var figwidth = 150;
   var ch2 = 825;
} else if (canvas.height <= 1050 ) {
   var figwidth = 250;
   var ch2 = 900;
} else if (canvas.height <= 1200 ) {
   var figwidth = 250;
   var ch2 = 1050;
} else if (canvas.height <= 1500 ) {
   var figwidth = 250;
   var ch2 = 1200;
} else if (canvas.height <= 1800 ) {
   var figwidth = 250;
   var ch2 = 1500;
} else if (canvas.height <= 2250 ) {
   var figwidth = 512;
   var ch2 = 1800;
} else {
   var figwidth = 512;
   var ch2 = 2250;
}

  console.log("figwidth" + " %d", figwidth);

    var audioElem;

      //audioElem = new Audio();
      //audioElem.src = "./bat1.mp3";
      //audioElem.play();

			let boxImga = new Image();
			boxImga.src = "arrow"+String(figwidth)+".png";
			let boxImg1 = new Image();
			boxImg1.src = "d1"+String(figwidth)+".png";
			let boxImg2 = new Image();
			boxImg2.src = "d2"+String(figwidth)+".png";
			let boxImg3 = new Image();
			boxImg3.src = "d3"+String(figwidth)+".png";
			let boxImg4 = new Image();
			boxImg4.src = "d4"+String(figwidth)+".png";
			let boxImg5 = new Image();
			boxImg5.src = "d5"+String(figwidth)+".png";
			let boxImg6 = new Image();
			boxImg6.src = "d6"+String(figwidth)+".png";
			/*let boxImgb = new Image();
			boxImgb.src = "blue.png";
			let boxImgc = new Image();
			boxImgc.src = "yellow.png";

			let triImga = new Image();
			triImga.src = "red3.png";
			let triImgb = new Image();
			triImgb.src = "blue3.png";
			let triImgc = new Image();
			triImgc.src = "yellow3.png";

			let CirImga = new Image();
			CirImga.src = "happy"+String(figwidth)+".png";
			let CirImgb = new Image();
			CirImgb.src = "bluec"+String(radiusball)+".png";
			let CirImgc = new Image();
			CirImgc.src = "yellowc"+String(radiusball)+".png";*/

	
	// World
	world = new b2World(new b2Vec2(0, 1), true); //重力加速度設定

	// Manager
	manager = new b2Manager(world);


	createFrame();

		let cBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 5, 5);
		//let rBody = manager.createBody(b2Body.b2_dynamicBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 100, 100);
		let rBody = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 90, 90, figwidth, 0, boxImga);
		let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 1);//0.5, 0);

		let c1Body = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100, canvas.height * 15 / 100, 5, 5);
		let r1Body = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 50 / 100, canvas.height * 15 / 100, 90, 90, figwidth, 0, boxImg1);
		let r1jRot = manager.createTorqueJoint(c1Body, r1Body, canvas.width * 50 / 100, canvas.height * 15 / 100, 1000, 0);

		let c2Body = manager.createBody(b2Body.b2_staticBody, canvas.width * 80 / 100, canvas.height * 70 / 100, 5, 5);
		let r2Body = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 80 / 100, canvas.height * 70 / 100, 90, 90, figwidth, 0, boxImg2);
		let r2jRot = manager.createTorqueJoint(c2Body, r2Body, canvas.width * 80 / 100, canvas.height * 70 / 100, 1000, 0);

		let c3Body = manager.createBody(b2Body.b2_staticBody, canvas.width * 20 / 100, canvas.height * 70 / 100, 5, 5);
		let r3Body = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 20 / 100, canvas.height * 70 / 100, 90, 90, figwidth, 0, boxImg3);
		let r3jRot = manager.createTorqueJoint(c3Body, r3Body, canvas.width * 20 / 100, canvas.height * 70 / 100, 1000, 0);

		let c4Body = manager.createBody(b2Body.b2_staticBody, canvas.width * 80 / 100, canvas.height * 30 / 100, 5, 5);
		let r4Body = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 80 / 100, canvas.height * 30 / 100, 90, 90, figwidth, 0, boxImg4);
		let r4jRot = manager.createTorqueJoint(c4Body, r4Body, canvas.width * 80 / 100, canvas.height * 30 / 100, 1000, 0);

		let c5Body = manager.createBody(b2Body.b2_staticBody, canvas.width * 20 / 100, canvas.height * 30 / 100, 5, 5);
		let r5Body = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 20 / 100, canvas.height * 30 / 100, 90, 90, figwidth, 0, boxImg5);
		let r5jRot = manager.createTorqueJoint(c5Body, r5Body, canvas.width * 20 / 100, canvas.height * 30 / 100, 1000, 0);

		let c6Body = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100, canvas.height * 85 / 100, 5, 5);
		let r6Body = manager.createBody3(b2Body.b2_dynamicBody, canvas.width * 50 / 100, canvas.height * 85 / 100, 90, 90, figwidth, 0, boxImg6);
		let r6jRot = manager.createTorqueJoint(c6Body, r6Body, canvas.width * 50 / 100, canvas.height * 85 / 100, 1000, 0);

		let caBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100 + figwidth*Math.cos(Math.PI/3), canvas.height * 50 / 100 - figwidth*Math.sin(Math.PI/3), 5, 5);
		let cbBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100 + figwidth, canvas.height * 50 / 100, 5, 5);
		let ccBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100 + figwidth*Math.cos(Math.PI/3), canvas.height * 50 / 100 + figwidth*Math.sin(Math.PI/3), 5, 5);
		let cdBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100 - figwidth*Math.cos(Math.PI/3), canvas.height * 50 / 100 + figwidth*Math.sin(Math.PI/3), 5, 5);
		let ceBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100 - figwidth, canvas.height * 50 / 100, 5, 5);
		let cfBody = manager.createBody(b2Body.b2_staticBody, canvas.width * 50 / 100 - figwidth*Math.cos(Math.PI/3), canvas.height * 50 / 100 - figwidth*Math.sin(Math.PI/3), 5, 5);



	//createRotater(150, 210, 80, +3);
	//createRotater(330, 210, 80, -3);
	//createSeesaw(100, 150, 80, -45, +45);
	//createSeesaw(240, 200, 80, -45, +45);
	//createSeesaw(380, 150, 80, -45, +45);
	//createDaruma(240, 190);

	//createBox();
	//createBox2(160, 100, 25, 25, 15);

	//createBox3( 50, 100, 50, 50, 30, boxImga);
	//createBox3(160,  80, 50, 50, 60, boxImgb);
	//createBox3(270, 100, 50, 50, 90, boxImgc);

	//createBox3( canvas.width * 20 / 100, canvas.height * 10 / 100, 100, 100, 30, boxImga);
	//createBox3( canvas.width * 50 / 100, canvas.height * 20 / 100, 100, 100, 60, boxImgb);
	//createBox3( canvas.width * 80 / 100, canvas.height * 30 / 100, 100, 100, 90, boxImgc);


	//createBox();

	//createTriangle( canvas.width * 20 / 100, canvas.height * 20 / 100, -45, triImga);
	//createTriangle( canvas.width * 50 / 100, canvas.height * 30 / 100, -45, triImgb);
	//createTriangle( canvas.width * 80 / 100, canvas.height * 40 / 100, -45, triImgc);


	//let type = b2Body.b2_dynamicBody;
	//manager.createCircle(type, canvas.width * 50 / 100, canvas.height * 50 / 100, CirImga, radiusball, 0, null, null, null);

//	manager.createCircle(type, canvas.width * 50 / 100, canvas.height * 50 / 100, CirImgc, radiusball, 0, null, null, null);
//	manager.createCircle(type, canvas.width * 75 / 100, canvas.height * 10 / 100, CirImgb, radiusball, 0, null, null, null);
	//manager.createCircle(type, canvas.width * 50 / 100, canvas.height * 20 / 100, CirImgb, 50, 0, null, null, null);
	//manager.createCircle(type, canvas.width * 80 / 100, canvas.height * 20 / 100, CirImgc, 50, 0, null, null, null);

	//manager.createCircleImage(type, canvas.width * 20 / 100, canvas.height * 20 / 100, CirImga, 0, null, null, null);
	//manager.createCircleImage(type, canvas.width * 50 / 100, canvas.height * 20 / 100, CirImgb, 0, null, null, null);
	//manager.createCircleImage(type, canvas.width * 80 / 100, canvas.height * 20 / 100, CirImgc, 0, null, null, null);

	// Functions
	function createFrame(){

		let type = b2Body.b2_staticBody;
                let div = (ch2 / 15 + 5) * Math.sqrt(2) * 6;
		// Remover
		//let removerb1 = manager.createBody(type, canvas.width * 0.05, canvas.height /2 , canvas.height, 10, 90);
		//removerb1.SetUserData({tag: TAG_REMOVERB});
		//let removerb2 = manager.createBody(type, canvas.width * 0.95, canvas.height /2 , canvas.height, 10, 90);
		//removerb2.SetUserData({tag: TAG_REMOVERB});

		//let remover3 = manager.createBody(type, canvas.width /2 , canvas.height * 0.15, canvas.width * 0.9 -radiusball * 3.75, 10, 0);
		//remover3.SetUserData({tag: TAG_REMOVER});
		//let remover4 = manager.createBody(type, canvas.width /2 , canvas.height * 0.85, canvas.width * 0.9 -radiusball * 3.75, 10, 0);
		//remover4.SetUserData({tag: TAG_REMOVER});

		//let remover5 = manager.createBody(type, canvas.width /2 , canvas.height * 0.15, canvas.width * 0.9 -radiusball * 3.75, 10, 0);
		//let remover5 = manager.createCircle(type, canvas.width * 25 / 100, canvas.height * 50 / 100, CirImga, radiusball / 2, 0, null, null, null);
		//remover5.SetUserData({tag: TAG_REMOVERC});



	//	let remover5 = manager.createBody(type, canvas.width /2 - div, ch2 *3/4 -10, ch2 /4, 10, 45);
	//	remover5.SetUserData({tag: TAG_REMOVER});
	//	let remover6 = manager.createBody(type, canvas.width /2 + div, ch2 *3/4 -10, ch2 /4, 10, 45);
	//	remover6.SetUserData({tag: TAG_REMOVER});

		//manager.createBody(type, 100, 240, 220, 5, +15);
		//manager.createBody(type, 30,  200, 70,  5, +45);
		//manager.createBody(type, 380, 240, 220, 5, -15);
		//manager.createBody(type, 450, 200, 70,  5, -45);
	}

	function createDoll(cX, cY){

		let type = b2Body.b2_dynamicBody;

		let bHead = manager.createBody(type, cX,    cY,    32, 32);
		let bBody = manager.createBody(type, cX,    cY+45, 20, 50);
		let bArmL = manager.createBody(type, cX-20, cY+45, 10, 50);
		let bArmR = manager.createBody(type, cX+20, cY+45, 10, 50);
		let bLegL = manager.createBody(type, cX-8,  cY+98, 10, 45);
		let bLegR = manager.createBody(type, cX+8,  cY+98, 10, 45);

		// WeldJoint
		let weldJoint = manager.createWeldJoint(bHead, bBody, cX, cY);
		//world.DestroyJoint(weldJoint);

		// RevolteJoint
		let rjArmL = manager.createRevoluteJoint(bBody, bArmL, cX-20, cY+20, 0, 120);
		let rjArmR = manager.createRevoluteJoint(bBody, bArmR, cX+20, cY+20, -120, 0);
		let rjLegL = manager.createRevoluteJoint(bBody, bLegL, cX-8,  cY+80, 0, 120);
		let rjLegR = manager.createRevoluteJoint(bBody, bLegR, cX+8,  cY+80, -120, 0);
	}

	function createDaruma(cX, cY){

		let type = b2Body.b2_dynamicBody;
		let paddingY = 22;

		for(let i=0; i<8; i++){
			let img = new Image();
			img.src = "assets/do_box_" + i + ".png";
			img.onload = (e)=>{
				manager.createBodyImage(type, cX, cY-paddingY*i, e.target);
			}
		}
	}

	function createRotater(cX, cY, w, speed){

		let cBody = manager.createBody(b2Body.b2_staticBody, cX, cY, 5, 5);
		let rBody = manager.createBody(b2Body.b2_dynamicBody, cX, cY, w, 5);
		let rjRot = manager.createTorqueJoint(cBody, rBody, cX, cY, 1100, speed);
	}

	function createSeesaw(cX, cY, w, lowerAngle, upperAngle){

		let cBody = manager.createBody(b2Body.b2_staticBody, cX, cY, 5, 5);
		let rBody = manager.createBody(b2Body.b2_dynamicBody, cX, cY, w, 5);
		let rjRot = manager.createRevoluteJoint(cBody, rBody, cX, cY, lowerAngle, upperAngle);
	}

	function createPiston(cX, cY, offsetX, offsetY, lowerAngle, upperAngle){

		let lBody1 = manager.createBody(b2Body.b2_staticBody, cX, cY, 5, 5);
		let lBody2 = manager.createBody(b2Body.b2_dynamicBody, cX, cY, 10, 10);
		let pjPris = manager.createPrismaticJoint(lBody1, lBody2, cX, cY, -10.0, +10.0);

		let rBody1 = manager.createBody(b2Body.b2_staticBody, cX+offsetX, cY+offsetY, 5, 5);
		let rBody2 = manager.createBody(b2Body.b2_dynamicBody, cX+offsetX, cY+offsetY, 60, 5);
		let rjRot  = manager.createRevoluteJoint(rBody1, rBody2, cX+offsetX, cY+offsetY, lowerAngle, upperAngle);

		let gjPis  = manager.createGearJoint(lBody2, rBody2, pjPris, rjRot);
	}

	function createBox(){
		let type = b2Body.b2_dynamicBody;
		let x = 60;//Math.random() * 480;
		let body = manager.createBody(type, x, 10, 25, 25);
	}

	function createBox2(x, y, w, h, deg){
		let type = b2Body.b2_dynamicBody;
		//let x = 160;//Math.random() * 480;
			//let boxImga = new Image();
			//boxImga.src = "red.png";
		let body = manager.createBody2(type, x, y, w, h, deg);//, boxImga);
	}

	function createBox3(x, y, w, h, deg, boxImg){
		let type = b2Body.b2_dynamicBody;
		//let x = 160;//Math.random() * 480;
		let body = manager.createBody3(type, x, y, w, h, deg, boxImg);
	}

	//body.ontouchstart = function(){
	//};

	function createTriangle(x,y, deg, Img){
		let type = b2Body.b2_dynamicBody;
		let body = manager.createTri(type, x, y, deg, Img);

/*
// 多角形の試み
	var vertexArray=new Array();

	//Setting up Vertices in an Array   
	var ver1=new b2Vec2( -1, -1);
	var ver2=new b2Vec2( +1, -1);
	var ver3=new b2Vec2( +1, +1);
	//var ver4=new b2Vec2( -1, +1);

	//Push in order
	vertexArray.push(ver1, ver2, ver3);

	this.bodyDef.position.Set(80, 10);
	this.bodyDef.type=b2Body.b2_dynamicBody;
	//bodyDef.userData = null;
	this.bodyDef.userData = {shape_type: 'box', img: boxImg2, width: 60, height: 60};
	this.fixDef.shape = new b2PolygonShape;
	this.fixDef.shape.SetAsArray(vertexArray, vertexArray.length);
	let dHead3 = world.CreateBody(this.bodyDef);
	dHead3.CreateFixture(this.fixDef);
*/
}


	// Contact  衝突判定
	let listener = new b2ContactListener;
	listener.BeginContact = function(contact){


		let userDataA = contact.GetFixtureA().GetBody().GetUserData();
		let userDataB = contact.GetFixtureB().GetBody().GetUserData();
		//let userDataC = contact.GetFixtureC().GetBody().GetUserData();

		if(userDataA && userDataA.tag == TAG_REMOVER){
console.log("Hello Contact");
			manager.pushDestroys(contact.GetFixtureB().GetBody());

		}
		if(userDataB && userDataB.tag == TAG_REMOVER){
			manager.pushDestroys(contact.GetFixtureA().GetBody());
		}

		if(userDataA && userDataA.tag == TAG_REMOVERB){
console.log("Hello Contact2");
			manager.pushDestroys2(contact.GetFixtureB().GetBody());

		}
		if(userDataB && userDataB.tag == TAG_REMOVERB){
			manager.pushDestroys2(contact.GetFixtureA().GetBody());
		}

		if(userDataA && userDataA.tag == TAG_REMOVERC){
console.log("Hello Contact3");
			manager.pushDestroys3(contact.GetFixtureB().GetBody());

		}
		if(userDataB && userDataB.tag == TAG_REMOVERC){
			manager.pushDestroys3(contact.GetFixtureA().GetBody());
		}

	}
	listener.EndContact = function(contact){
		//console.log(contact.GetFixtureA().GetBody().GetUserData());
	}
	listener.PostSolve = function(contact, impulse){
		// Do nothing
	}
	listener.PreSolve = function(contact, oldManifold){
		// Do nothing
	}
	world.SetContactListener(listener);
/*
	// Contact2
	let listener2 = new b2ContactListener;
	listener2.BeginContact = function(contact){

		let userDataA = contact.GetFixtureA().GetBody().GetUserData();
		let userDataB = contact.GetFixtureB().GetBody().GetUserData();
		if(userDataA && userDataA.tag == TAG_REMOVER2){

console.log("Hello Contact2");

			manager.pushDestroys2(contact.GetFixtureB().GetBody());

		}
		if(userDataB && userDataB.tag == TAG_REMOVER2){
			manager.pushDestroys2(contact.GetFixtureA().GetBody());
		}
	}
	listener2.EndContact = function(contact){
		//console.log(contact.GetFixtureA().GetBody().GetUserData());
	}
	listener2.PostSolve = function(contact, impulse){
		// Do nothing
	}
	listener2.PreSolve = function(contact, oldManifold){
		// Do nothing
	}
	world.SetContactListener(listener2);


*/

	//==========
	// Mouse
	let mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
	let canvasPosition = getElementPosition(document.getElementById(C_NAME));
        let countclick = 0;

	function handleMouseDown(e){

      if (event.button == 0) {
        //target.innerHTML = "左ボタンが押されました。";
                console.log("Hello Click!LEFT");
//console.count('countclick');
//console.log("%d", countclick);
                //countclick++;
            if (countclick > 1) {
                //rBody.SetAwake(true); // sleepstate  make awake here
		//let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 3);
		//let rjRot2 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 3);
		//let rjRot3 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 3);

		//let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 0);
		//let rjRot2 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 0);
            }
//            else if (countclick == 2){
//                rBody.SetAwake(true); // sleepstate  make awake here
//		let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 3);
//		let rjRot2 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 3);
//                countclick = 0;
//            }
      }
      else if (event.button == 1) {
                console.log("Hello Click!CENTER");

        //target.innerHTML = "中ボタンが押されました。";
      }
      else if (event.button == 2) {
                console.log("Hello Click!RIGHT");

//rBody.SetAwake(true); // sleepstate  make awake here
	//	let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 100, 5);
	//	let rjRot2 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 100, 5);

        //target.innerHTML = "右ボタンが押されました。";
      }

                console.log("Hello Click!");
console.log("%d", countclick);
            if (countclick > 0) {
                console.log("Hello GO!");

                rBody.SetAwake(true); // sleepstate  make awake here
		let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 1);
		let rjRot2 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 1);
            }
                countclick++;

		isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true);
		document.addEventListener("touchmove", handleMouseMove, true);


	}
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	
	function handleMouseUp(){

		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
		isMouseDown = false;
		mouseX = undefined;
		mouseY = undefined;

                console.log("Hello Click! UP");

		let rjRot = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 0);
		let rjRot2 = manager.createTorqueJoint(cBody, rBody, canvas.width * 50 / 100, canvas.height * 50 / 100, 1000, 0);

	}
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);

	function handleMouseMove(e){
		let clientX, clientY;
		if(e.clientX){
			clientX = e.clientX; clientY = e.clientY;
		}else if(e.changedTouches && e.changedTouches.length > 0){
			let touch = e.changedTouches[e.changedTouches.length - 1];
			clientX = touch.clientX; clientY = touch.clientY;
		}else{
		   return;
		}
		mouseX = (clientX - canvasPosition.x) / PTM_RATIO;
		mouseY = (clientY - canvasPosition.y) / PTM_RATIO;
		e.preventDefault();
	};





	// Keyboard
	window.document.onkeydown = (e)=>{
		console.log(e.key);
		if(e.key === "ArrowUp"){
			let vec = new b2Vec2(0.0, -30.0);
			bBody.ApplyImpulse(vec, bBody.GetPosition());
		}
		if(e.key === "ArrowDown"){
			let vec = new b2Vec2(0.0, +30.0);
			bBody.ApplyImpulse(vec, bBody.GetPosition());
		}
		if(e.key === "ArrowLeft"){
			let vec = new b2Vec2(-20.0, 0.0);
			bBody.ApplyImpulse(vec, bBody.GetPosition());
		}
		if(e.key === "ArrowRight"){
			let vec = new b2Vec2(+20.0, 0.0);
			bBody.ApplyImpulse(vec, bBody.GetPosition());
		}
	}

	// Update
	window.setInterval(update, 1000 / 30);
	function update(){

		// Box2dManager
		manager.update();
	};

	// Random 1秒間隔で一個づつ落とす仕組み
	window.setInterval(()=>{
		// Create
		let type = b2Body.b2_dynamicBody;
		let x = 160;//Math.random() * 480;
		//let body = manager.createBody(type, x, 10, 25, 25);

//console.log("Hello Click!");

	}, 1000 * 10);


        window.addEventListener(Event.TOUCH_START, function() {
            //addBall();
            //game.assets['./water-drop1.mp3'].play();  //お礼　効果音ラボ様

console.log("Hello Click!");

    var audioElem;

      //audioElem = new Audio();
      //audioElem.src = "./water-drop1.mp3";
  //    audioElem.play();


        });

};


