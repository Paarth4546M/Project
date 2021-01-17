
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground2,paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.rectangle(400,690,800,5,{isStatic:true})
World.add(world,ground)

//ground2 = Bodies.rectangle(790,400,5,800,{isStatic:true})
//World.add(world,ground2)

paper = new Ball(90,400,10,10);

Engine.run(engine);
}
function draw() {
	Engine.update(engine);
	background(0);

	rectMode(CENTER);
   fill("green")
	rect(ground.position.x,ground.position.y,800,5)
	//rect(ground2.position.x,ground2.position.y,5,800)


paper.display()
keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}
