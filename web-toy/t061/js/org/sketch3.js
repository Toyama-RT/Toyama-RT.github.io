console.log("Hello Box2dWeb!!  sketch3.js");

const WaitForClick = () => new Promise(resolve => document.body.addEventListener("click", resolve));

async function WaitSample() {
var img = document.getElementById("image_place");
    //document.getElementById("image_place").style.display="none";

  console.log("waiting for click");
  await WaitForClick();
  //console.log("この行は、クリックされた後に実行されます。");
      audioElem = new Audio();
      audioElem.src = "./bat1.wav";
      audioElem.play();
      document.getElementById("image_place").style.display="none";
	abc();
}

const TAG_REMOVER = "remover";

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


// radius of balls and the dimension for wall and image  

if (canvas.height <= 525 ) {
   var radiusball = 30;
   var ch2 = 450;
} else if (canvas.height <= 600 ) {
   var radiusball = 35;
   var ch2 = 525;
} else if (canvas.height <= 675 ) {
   var radiusball = 40;
   var ch2 = 600;
} else if (canvas.height <= 750 ) {
   var radiusball = 45;
   var ch2 = 675;
} else if (canvas.height <= 825 ) {
   var radiusball = 50;
   var ch2 = 750;
} else if (canvas.height <= 900 ) {
   var radiusball = 55;
   var ch2 = 825;
} else if (canvas.height <= 1050 ) {
   var radiusball = 60;
   var ch2 = 900;
} else if (canvas.height <= 1200 ) {
   var radiusball = 70;
   var ch2 = 1050;
} else if (canvas.height <= 1500 ) {
   var radiusball = 80;
   var ch2 = 1200;
} else if (canvas.height <= 1800 ) {
   var radiusball = 100;
   var ch2 = 1500;
} else if (canvas.height <= 2250 ) {
   var radiusball = 120;
   var ch2 = 1800;
} else {
   var radiusball = 150;
   var ch2 = 2250;
}

  console.log("radius of balls" + " %d", radiusball);


    var audioElem;

      audioElem = new Audio();
      audioElem.src = "./bat1.wav";
      audioElem.play();

/*			let boxImga = new Image();
			boxImga.src = "red.png";
			let boxImgb = new Image();
			boxImgb.src = "blue.png";
			let boxImgc = new Image();
			boxImgc.src = "yellow.png";

			let triImga = new Image();
			triImga.src = "red3.png";
			let triImgb = new Image();
			triImgb.src = "blue3.png";
			let triImgc = new Image();
			triImgc.src = "yellow3.png";
*/
			let CirImga = new Image();
			CirImga.src = "redc"+String(radiusball)+".png";
			let CirImgb = new Image();
			CirImgb.src = "bluec"+String(radiusball)+".png";
			let CirImgc = new Image();
			CirImgc.src = "yellowc"+String(radiusball)+".png";

	
	// World
	world = new b2World(new b2Vec2(0, 10), true);

	// Manager
	manager = new b2Manager(world);


	createFrame();



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


	let type = b2Body.b2_dynamicBody;
	manager.createCircle(type, canvas.width * 25 / 100, canvas.height * 10 / 100, CirImga, radiusball, 0, null, null, null);
	manager.createCircle(type, canvas.width * 50 / 100, canvas.height * 10 / 100, CirImgc, radiusball, 0, null, null, null);
	manager.createCircle(type, canvas.width * 75 / 100, canvas.height * 10 / 100, CirImgb, radiusball, 0, null, null, null);
	//manager.createCircle(type, canvas.width * 50 / 100, canvas.height * 20 / 100, CirImgb, 50, 0, null, null, null);
	//manager.createCircle(type, canvas.width * 80 / 100, canvas.height * 20 / 100, CirImgc, 50, 0, null, null, null);

	//manager.createCircleImage(type, canvas.width * 20 / 100, canvas.height * 20 / 100, CirImga, 0, null, null, null);
	//manager.createCircleImage(type, canvas.width * 50 / 100, canvas.height * 20 / 100, CirImgb, 0, null, null, null);
	//manager.createCircleImage(type, canvas.width * 80 / 100, canvas.height * 20 / 100, CirImgc, 0, null, null, null);

	// Functions
	function createFrame(){

		let type = b2Body.b2_staticBody;
                let div = (ch2 / 15 + 5) * Math.sqrt(2)
		// Remover
		let remover1 = manager.createBody(type, canvas.width /2 - div, ch2 /4 + 10, ch2 /4, 10, 45);
		remover1.SetUserData({tag: TAG_REMOVER});
		let remover2 = manager.createBody(type, canvas.width /2 + div, ch2 /4 + 10, ch2 /4, 10, 45);
		remover2.SetUserData({tag: TAG_REMOVER});

		let remover3 = manager.createBody(type, canvas.width /2 - div, ch2 /2, ch2 /4, 10, -45);
		remover3.SetUserData({tag: TAG_REMOVER});
		let remover4 = manager.createBody(type, canvas.width /2 + div, ch2 /2, ch2 /4, 10, -45);
		remover4.SetUserData({tag: TAG_REMOVER});

		let remover5 = manager.createBody(type, canvas.width /2 - div, ch2 *3/4 -10, ch2 /4, 10, 45);
		remover5.SetUserData({tag: TAG_REMOVER});
		let remover6 = manager.createBody(type, canvas.width /2 + div, ch2 *3/4 -10, ch2 /4, 10, 45);
		remover6.SetUserData({tag: TAG_REMOVER});

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
			let boxImga = new Image();
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


	// Contact
	let listener = new b2ContactListener;
	listener.BeginContact = function(contact){



		let userDataA = contact.GetFixtureA().GetBody().GetUserData();
		let userDataB = contact.GetFixtureB().GetBody().GetUserData();
		if(userDataA && userDataA.tag == TAG_REMOVER){

console.log("Hello Contact");

			manager.pushDestroys(contact.GetFixtureB().GetBody());

		}
		if(userDataB && userDataB.tag == TAG_REMOVER){
			manager.pushDestroys(contact.GetFixtureA().GetBody());
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
            //game.assets['./water-drop1.wav'].play();  //お礼　効果音ラボ様

console.log("Hello Click!");

    var audioElem;

      //audioElem = new Audio();
      //audioElem.src = "./water-drop1.wav";
  //    audioElem.play();


        });

};


