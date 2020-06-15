const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var house,houseImg,slingShot,friend1;

function preload(){
	houseImg = loadImage("house.png")	
}

function setup() {
	createCanvas(1400, 600);

    engine = Engine.create();
	world = engine.world;

	house = Bodies.rectangle(1140, 350, 500, 600, {isStatic : true} )
	World.add(world, house)
	
	friend1 = new Friend1(1000,500)
	me = new Me(300,300)
	slingShot = new SlingShot(me.body,{x : 300, y : 300})
}


function draw() {
	Engine.update(engine)
	background(0);

	imageMode(CENTER)
	image(houseImg, house.position.x, house.position.y, 500, 600)
  
	friend1.display();
	me.display();
	slingShot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(me.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
	slingShot.fly()
}

