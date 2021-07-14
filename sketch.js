var brush,bath,drink,eat,gym,iss,move,sleep,astronout,bg,a,b,c,d;

function preload(){
iss=loadImage("iss.png");
bath=loadAnimation("bath1.png","bath2.png");
brush=loadAnimation("brush.png");
drink=loadAnimation("drink1.png","drink2.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
move=loadAnimation("delete.png","del.png");
sleep=loadAnimation("sleep.png");



}
function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200);
  bg.addImage("images",iss);
  astronout=createSprite(300,230);
  astronout.addAnimation("images",sleep);
  astronout.scale=0.1;
  

}

function draw() {
  
  background(255,255,255);  
  drawSprites();
  text("press up to bath",100,20);
  text("press down to drink",100,40);
  text("press right to gym",100,60);
  text("press left to brush",100,80);
  text("press m to move",100,100)
  
  if(keyDown(UP_ARROW)){
    up();
  }
  if(keyDown(DOWN_ARROW)){
    down();
  }
  if(keyDown(LEFT_ARROW)){
    left();
  }
  if(keyDown(RIGHT_ARROW)){
    right();
  }
  if(keyDown("m")){
    jsdeep();
  }

}
function up(){
 astronout.addAnimation("images",bath)
    astronout.changeAnimation("running");
    //astronout.y=450;
    astronout.velocityX=0;
    astronout.velocityY=0;
 
}

function down(){
 
  astronout.addAnimation("images",drink)
    astronout.changeAnimation("running");
  //astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}
function right(){
 
  astronout.addAnimation("images",gym)
    astronout.changeAnimation("running");
  //astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}
function jsdeep(){
  astronout.addAnimation("images",move);
  astronout.changeAnimation("images");
  //astronout.y=450;
  astronout.velocityX=2;
  astronout.velocityY=2;
  //astronout.bounceOff(b)

}
function left(){
 
  astronout.addAnimation("images",brush)
    astronout.changeAnimation("running");
  //astronout.y=450;
  astronout.velocityX=0;
  astronout.velocityY=0;

}

