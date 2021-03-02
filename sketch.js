const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse

var player;
var enemy1,enemy2;
var ground;
var slingshot;
var stone;

function setup() {
  createCanvas(1600,1000);


  engine = Engine.create();
    world = engine.world;

  ground = new Ground(1000,1000,1600,20);
   player = new Player(700,800,200,200);
   enemy1 = new Enemy(500,1000, 70, 70);
   enemy2 = new Enemy(900,1000, 70, 70);
  // stone = new Stone(700,890);
   //slingshot = new Slingshot(stone.body, {x:700, y:890});
}

function draw() {
  background(355,355,355);
  Engine.update(engine);
  ground.display();
  player.display();
  enemy1.display();
  enemy2.display();
  //slingshot.display();
  //stone.display();
  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(player.body, {x:mouseX, y:mouseY});
}

/*function mouseReleased() {
  slingShot.fly();
}*/