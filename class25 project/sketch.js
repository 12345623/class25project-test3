const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var paper;
var dustbin;


function preload(){
    paperimage=loadImage("paper.png")
    dustbinimage=loadImage("dustbin.png")
}

function setup(){
   createCanvas(800,800)
   engine = Engine.create();
   world = engine.world;

   paper=createSprite(200,350,100,100);
   paper.addImage("paper.png")

   dustbin=createSprite(100,320,100,100);
   dustbin.addImage("dustbin.png")
}

function draw(){
    background(0)
    Engine.update(engine);

    drawSprites()
}   

