const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;



var snowFlakes = [];

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.World;


bgImg = loadImage("snow3.jpg")
}

function draw() {
  background(bgImg);  

  Engine.update(engine);
  
  
  if (frameCount%60===0){
   snowFlakes.push(new snow(random(width/2-10,width/2+10),10));
  }

  for (var a = 0; a < snowFlakes.length; a++) {
  snowFlakes[a].display();   
  }

  
  
}