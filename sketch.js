 const Engine=Matter.Engine
 const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,contract,ground
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var name={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,name) 
  contract=Bodies.rectangle(400,200,50,50,{restitution:1.0})
  World.add(world,contract)
  World.add(world,ground)
}

function draw() {
  background(0,0,0);
  Engine.update(engine)
  rectMode(CENTER)  
  rect(contract.position.x,contract.position.y,50,50)
  rect(ground.position.x,ground.position.y,800,20)
}