
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dub1, dub2, dub3, ball, ground, track, truck;

function preload()
{
	track = loadImage("track.png");
	
}
function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;	
	
ground = new Ground(800, 700, 1600, 50 );
dub1 = new Dustbin(1000 +150, 625, 30, 110);
dub3 = new Dustbin(1200 +150, 625, 30, 110);
dub2 = new Dustbin(1100 +150, 665,200, 20);
	

ball = new Paper(200, 50,50, 50);
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(track, -displayWidth*4,0, displayWidth*5, displayHeight);
 
  drawSprites();
  dub1.display();
  dub2.display();
  dub3.display();
 ground.display();
ball.display();
keypressed();
end();
}
function keypressed(){
	if(keyCode === UP_ARROW){
 Matter.Body.applyForce(ball.body, ball.body.position,{x:65,y: -115});
	}
}

function end(){
	if(ball.body.position.x>1150 && ball.body.position.y>600  && ball.body.position.y<650 && ball.body.position.x<1350){
		textSize(16*2);
text("YOU WIN!!!", camera.x, 350);
	}
}