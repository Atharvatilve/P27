
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var world, engine;
var bob, roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,400,20,20);
	bob2 = new Bob(250,400,20,20);
	bob3 = new Bob(300,400,20,20);
	bob4 = new Bob(350,400,20,20);
	bob5 = new Bob(400,400,20,20);
	
	roof = new Roof(400,200,1,50);
	World.add(world,roof);

	rope1 = new Rope(bob1.body,roof.body,-100*2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
 
}



