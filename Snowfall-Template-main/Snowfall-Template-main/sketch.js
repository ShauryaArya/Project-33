
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;

var maxSnow=100;
var snows = [];
var rand;

function preload(){
bg=loadImage("snow3.jpg");
}

function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(800,400);
    

}

function draw(){
Engine.update(engine);
background(bg); 
rand = Math.round(random(1,4));

if(frameCount%5===0) {
    baraf = new Snow(random(50,750) , 0 , 20)
    snows.push(baraf)
}
  //write the for() to display multiple objects of snow in snows[]
    for(var i = 0 ; i < snows.length ; i++){
      snows[i].display()
    }


drawSprites();
}   

