
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(100,200,50)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  bob1.display();
  drawSprites();
 
}



