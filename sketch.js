
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var Roof1;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Roof1 = new Roof(500,100,700,20);

	 Bob1 = new Bob(200,600,50,50);
	 Bob2 = new Bob(350,600,50,50);
	 Bob3 = new Bob(500,600,50,50);
	 Bob4 = new Bob(650,600,50,50);
	 Bob5 = new Bob(800,600,50,50);
	
	rope1 = new Rope(Bob1.body,Roof1.body,-100,0);
	rope2 = new Rope(Bob2.body,Roof1.body,-50,0);
	rope3 = new Rope(Bob3.body,Roof1.body,0,0);
	rope4 = new Rope(Bob4.body,Roof1.body,50,0);
	rope5 = new Rope(Bob5.body,Roof1.body,100,0);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}


function keyPressed()
{
	Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-730,y:0})
}
