var helicopterIMG , packageSprite,packageIMG;
var helicopterSprite , packageSprite;
var packageBody , ground;
var box1 , box2 , box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine  , world;

function preload(){

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2 , 80 , 10 , 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2 , 200 , 10 , 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2 , 690 , width , 10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5 , isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2 , 655 , width , 20 , {isStatic:true} );
	World.add(world, ground);


	box1 = new box(width/2-90,635,20,100);

	box2 = new box(width/2,675,200,20);

	box3 = new box(width/2+90,635,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  keyPressed()

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
}

function keyPressed() {

	if(keyDown("LEFT_ARROW")){
		helicopterSprite.x=helicopterSprite.x-10;
		packageBody.position.x=packageBody.position.x-10;
	  }
	  if(keyDown("RIGHT_ARROW")){
		helicopterSprite.x=helicopterSprite.x+10;
		packageBody.position.x=packageBody.position.x+10;
	  }

	  if(keyDown("DOWN_ARROW")){
		  Matter.Body.setStatic(packageBody , false);
	  }
	  
}







  

 





