console.log("Hello Box2dWeb!!");

const WaitForClick = () => new Promise(resolve => document.body.addEventListener("click", resolve));

async function WaitSample() {
var img = document.getElementById("image_place");

  console.log("waiting for click");
  await WaitForClick();
  //console.log("この行は、クリックされた後に実行されます。");
      audioElem = new Audio();
      audioElem.src = "./bat1.mp3";
      //audioElem.play();
    document.getElementById("image_place").style.display="none";
	abc();
}

const TAG_REMOVER = "remover";

// Global
let world = null;
let manager = null;


// Main
window.onload = function(){

//WaitSample();

//}

//function abc(){
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth /2;
canvas.height = window.innerHeight /10;

    //var audioElem;
      //audioElem = new Audio();
      //audioElem.src = "./bat1.mp3";
      //audioElem.play();

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
	
	// World
	world = new b2World(new b2Vec2(0, 10), true);

	// Manager
	manager = new b2Manager(world);


	//createFrame();
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

	// Functions
/*	function createFrame(){

		let type = b2Body.b2_staticBody;

		// Remover
		let remover = manager.createBody(type, canvas.width /2, canvas.height, canvas.width, 50);
		remover.SetUserData({tag: TAG_REMOVER});

		//manager.createBody(type, 100, 240, 220, 5, +15);
		//manager.createBody(type, 30,  200, 70,  5, +45);
		//manager.createBody(type, 380, 240, 220, 5, -15);
		//manager.createBody(type, 450, 200, 70,  5, -45);
	}
*/
/*	function createDoll(cX, cY){

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
*/
/*	function createDaruma(cX, cY){

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
*/
/*	function createRotater(cX, cY, w, speed){

		let cBody = manager.createBody(b2Body.b2_staticBody, cX, cY, 5, 5);
		let rBody = manager.createBody(b2Body.b2_dynamicBody, cX, cY, w, 5);
		let rjRot = manager.createTorqueJoint(cBody, rBody, cX, cY, 1100, speed);
	}
*/
/*	function createSeesaw(cX, cY, w, lowerAngle, upperAngle){

		let cBody = manager.createBody(b2Body.b2_staticBody, cX, cY, 5, 5);
		let rBody = manager.createBody(b2Body.b2_dynamicBody, cX, cY, w, 5);
		let rjRot = manager.createRevoluteJoint(cBody, rBody, cX, cY, lowerAngle, upperAngle);
	}
*/
/*	function createPiston(cX, cY, offsetX, offsetY, lowerAngle, upperAngle){

		let lBody1 = manager.createBody(b2Body.b2_staticBody, cX, cY, 5, 5);
		let lBody2 = manager.createBody(b2Body.b2_dynamicBody, cX, cY, 10, 10);
		let pjPris = manager.createPrismaticJoint(lBody1, lBody2, cX, cY, -10.0, +10.0);

		let rBody1 = manager.createBody(b2Body.b2_staticBody, cX+offsetX, cY+offsetY, 5, 5);
		let rBody2 = manager.createBody(b2Body.b2_dynamicBody, cX+offsetX, cY+offsetY, 60, 5);
		let rjRot  = manager.createRevoluteJoint(rBody1, rBody2, cX+offsetX, cY+offsetY, lowerAngle, upperAngle);

		let gjPis  = manager.createGearJoint(lBody2, rBody2, pjPris, rjRot);
	}
*/
/*	function createBox(){
		let type = b2Body.b2_dynamicBody;
		let x = 60;//Math.random() * 480;
		let body = manager.createBody(type, x, 10, 25, 25);
	}
*/
/*	function createBox2(x, y, w, h, deg){
		let type = b2Body.b2_dynamicBody;
		//let x = 160;//Math.random() * 480;
			let boxImga = new Image();
			boxImga.src = "red.png";
		let body = manager.createBody2(type, x, y, w, h, deg);//, boxImga);
	}
*/
/*	function createBox3(x, y, w, h, deg, boxImg){
		let type = b2Body.b2_dynamicBody;
		//let x = 160;//Math.random() * 480;
		let body = manager.createBody3(type, x, y, w, h, deg, boxImg);
	}
*/
	//body.ontouchstart = function(){
	//};
/*
	function createTriangle(x,y, deg, Img){
		let type = b2Body.b2_dynamicBody;
		let body = manager.createTri(type, x, y, deg, Img);




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

}
*/
/*
	// Contact 衝突判定
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
*/

	// Keyboard
	window.document.onkeydown = (e)=>{
		console.log(e.key);
		if(e.key === "ArrowUp"){
			let vec = new b2Vec2(0.0, -30.0);
			bBody.ApplyImpulse(vec, bBody.GetPosition());
console.log("ArrowUp");
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
/*
	// Update
	window.setInterval(update, 1000 / 30);
	function update(){

		// Box2dManager
		manager.update();
	};
*/
	// Random 1秒間隔で一個づつ落とす仕組み
	window.setInterval(()=>{
		// Create
		//let type = b2Body.b2_dynamicBody;
		//let x = 160;//Math.random() * 480;
		//let body = manager.createBody(type, x, 10, 25, 25);

	document.addEventListener("mousemove", handleMouseMove, true);
console.log("Hello");

	}, 1000 * 1);


/*        window.addEventListener(Event.TOUCH_START, function() {
            //addBall();
            //game.assets['./water-drop1.mp3'].play();  //お礼　効果音ラボ様

console.log("TOUCH_START");

    //var audioElem;
      //audioElem = new Audio();
      //audioElem.src = "./water-drop1.mp3";
  //    audioElem.play();


        });
*/
};
