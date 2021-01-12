
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db1,db2,db3;
var ground1,ball;
var dbimg,ballimg;

function preload() {
	dbimg= loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1400,400);


	engine = Engine.create();
	world = engine.world;

    ball = new paper(80,150);
	ground1 = new ground(600,335,12000,20);
	db2=new dustbin(1052,260,10,159);
	db3=new dustbin(948,260,10,159);
	db1=new dustbin(1000,320,110,15);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  ball.display();
  db2.display();
  db3.display();
  db1.display();
  ground1.display();
  image(dbimg,925,175,150,150);
  drawSprites();
 
}
function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:87.5,y:-85});
	}
	}
	


