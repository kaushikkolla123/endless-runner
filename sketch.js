var PLAY = 1;
var END = 0 ;
var gamestate = PLAY;
var CityScene;
var Player1;
var Nightscene;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var Coin;
var coin_img;
var car_img;
var car;
var cityscene_img;
var nightscene_img;
var obstacle1_img;
var obstacle2_img;
var obstacle3_img;
var obstacle4_img;
var player1_img;
var lifeline1,lifeline2,lifeline3;
var lifeline_img;
var sneaker;
var sneaker_img;
var score = 0;
var invisibleGround;
var gameover;
var gameover_img;

function preload(){
CityScene = loadImage("cityscene.png");
Nightscene = loadImage("nightscene.png");
player1_img = loadImage("ghost.png");
obstacle1_img = loadImage("car.png");
obstacle2_img = loadImage("boxes.png");
obstacle3_img = loadImage("dustbin.png");
coin_img = loadImage("Coinflip.png");
player1_img = loadImage("ghost.png");
lifeline1_img = loadImage("lifeline.png");
sneaker_img = loadImage("sneaker.png");
gameover_img = loadImage("gameover.png");
}
function setup() {
  createCanvas(1200,600);

player1 = createSprite(30,545,30,10);
player1.addImage("player1",player1_img);
player1.scale = 0.2;
player1.velocityX = 3;


lifeline1= createSprite(1020,30,30,10);
lifeline1.addImage("lifeline1",lifeline1_img);
lifeline1.scale =0.12;

lifeline2= createSprite(1070,30,30,10);
lifeline2.addImage("lifeline2",lifeline1_img);
lifeline2.scale =0.12;

lifeline3= createSprite(1120,30,30,10);
lifeline3.addImage("lifeline3",lifeline1_img);
lifeline3.scale =0.12;

invisibleGround = createSprite(0,565,1300,10);
//invisibleGround .visible = false;

gameover = createSprite(600,300,30,10);
gameover.addImage("gameover",gameover_img);
gameover.scale =0.5;
gameover.visible = false;

 Coin = createSprite(150,220,30,10);
 Coin.addImage("Coin",coin_img);
 Coin.scale = 0.15;

   obstacle1 = createSprite(530,530,30,10);
obstacle1.addImage(obstacle1_img);
obstacle1.scale = 0.35;
obstacle1.debug = false;

  obstacle2 = createSprite(500,505,150,10);
obstacle2.addImage(obstacle2_img);
obstacle2.scale = 0.35;

obstacle3 = createSprite(1100,505,150,10);
obstacle3.addImage(obstacle3_img);
obstacle3.scale = 0.35;

player1.setCollider("rectangle");
}
function draw() {
  background(Nightscene);  

obstacle1.depth = player1.depth;
player1.depth = player1.depth+1;

player1.collide(invisibleGround);  
 obstacle1.collide(invisibleGround);
obstacle3.collide(invisibleGround);
obstacle2.collide(invisibleGround);

  if(keyDown("space")){
  	player1.velocityY = -10;
  }
 
  if(gamestate === PLAY){
  	invisibleGround.velocityX = -3;
     obstacle1.velocityX = 0; 
  }
  if(invisibleGround.x < 0 ){
  	invisibleGround.x = invisibleGround.width/2;
  }
  if(keyCode ===  LEFT_ARROW){
  	player1.velocityY = 8;
  }
  if(obstacle1.x < 0){
obstacle1.x  = 1200
  }
  if(obstacle2.x < 0){
    obstacle2.x = 1200;
  }
if(obstacle3.x < 0){
  obstacle3.x = 1200;
}
  if(player1.collide(obstacle1)){
    lifeline3.destroy();
    gamestate = END;
  }
  drawSprites();
  }

