var helicopterIMG, helicopterSprite, packageSprite,packageSprite1,packageSprite2;
var packageIMG,packageIMG1,packageIMG2;
var packageBody,packageBody2,packageBody3,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	packageIMG1=loadImage("package.png");
	packageIMG2=loadImage("package.png");
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite1=createSprite(480, 80, 10,10);
	packageSprite1.addImage(packageIMG1)
	packageSprite1.scale=0.2

	packageSprite2=createSprite(330, 80, 10,10);
	packageSprite2.addImage(packageIMG2)
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(55)

    box1 = createSprite(width/2,height-50,200,10);
	box1.shapeColor=color ("red");
	
	box2 = createSprite(510,610,20,100);
	box2.shapeColor=color ("red");

	box3 = createSprite(310,610,20,100);  
	box3.shapeColor=color ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 10 , {isStatic:true});
	World.add(world, packageBody);
	packageBody1 = Bodies.circle(width/2 , 200 , 10 , {isStatic:true});
	World.add(world, packageBody1);
	packageBody2 = Bodies.circle(width/2 , 200 , 15 , {isStatic:true});
	World.add(world, packageBody2);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y 

  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y   

 packageSprite.collide (box1);
 packageSprite.collide (box2);
 packageSprite.collide (box3);


 packageSprite1.collide (box1);
 packageSprite1.collide (box2);
 packageSprite1.collide (box3);


 packageSprite2.collide (box1);
 packageSprite2.collide (box2);
 packageSprite2.collide (box3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(packageBody1,false);
	Matter.Body.setStatic(packageBody2,false);
    
  }
}
