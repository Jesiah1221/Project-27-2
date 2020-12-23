
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1
var ball2
var ball3
var ball4
var ball5

var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof = createSprite(400,300,200,10);
	roof.shapeColor = "grey"

	ball1 = new ball(400,350,40,40);
	ball2 = new ball(360,350,40,40);
	ball3 = new ball(440,350,40,40);
	ball4 = new ball(320,350,40,40);
	ball5 = new ball(480,350,40,40);





	//Create the Bodies Here.
	World.add(world, this.bodies);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  
  drawSprites();
 
}



