const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var walking;
var drops,ground,man;
var maxdrops=100;

function preload(){
    thunders1 = loadImage("images/thunderbolt/1.png");
    thunders2 = loadImage("images/thunderbolt/2.png");
    thunders3 = loadImage("images/thunderbolt/3.png");
    thunders4 = loadImage("images/thunderbolt/4.png");

    walking = loadAnimation("images/WalkingFrame/walking_8.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_5.png","/images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_1.png");
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;
    man = createSprite(500,800,20,50);
    man.addAnimation("man-walking",walking);
     // man = new Man(200,600,5);
    man.scale = 0.5;
}

function draw(){
   
    background("black"); 
    
    Engine.update(engine);
    for (var i=0; i<maxdrops; i++) {    
        drops=new Drops (random(0,1200),random(0,1200),2,2);

      
      // if(drops.body.position.y > height){
       // Matter.Body.setPosition(drops.body,{x: random(0, 400),y:random(0,400)});
       // }
    } 

    
    spawnthunders();
    drawSprites();
    man.display();
  
}   

function spawnthunders(){
    if (frameCount % 60 === 0){
      var thunders = createSprite(600,125,10,40);
     
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: thunders.addImage(thunders1);
                 break;
         case 2: thunders.addImage(thunders2);
                 break;
         case 3: thunders.addImage(thunders3);
                 break;
         case 4: thunders.addImage(thunders4);
                 break;
  
         default: break;
       }

       thunders.scale = 0.4;
       thunders.lifetime = 10;
    }
   }
