const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var hammer;
var rubber;
var iron;
var stone;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   rubber = new Rubber(600,590,50)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron   = new Iron(590,590);
   stone   =  new Stone(580,590);
}
function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display(); 
}