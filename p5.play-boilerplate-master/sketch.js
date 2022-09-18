var monstUp1, monstUp2, monstRight1, monstRight2, monstLeft1, monstLeft2, monstDown1, monstDown2;
var monstUp1G, monstUp2G, monstRight1G, monstRight2G, monstLeft1G, monstLeft2G, monstDown1G, monstDown2G;
var wall1, wall2, wall3, wall4;
var wallImg, wallImg2, wallImg3, wallImg4;
var m1img, m2img, m3img;
var gameState = 0;
var edges;
var ball;
var lives = 3;

function preload() {

  ground = loadImage("Ground.png");
  wallImg = loadImage("pixilart-drawing.png");
  wallImg2 = loadImage("pixilart-drawing2.png");
  wallImg3 = loadImage("pixilart-drawing3.png");
  wallImg4 = loadImage("pixilart-drawing4.png");
  m1img = loadImage("3.png");
  m2img = loadImage ("2.png");


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(width/2,height/2,40,40);
  player.shapeColor = "black";
  
  wall1 = createSprite(width-1250,height-550,300,300);
  wall1.addImage("w1", wallImg3);
 
  wall2 = createSprite(width-150,height-550,300,300);
  wall2.addImage("w2", wallImg4);

  wall3 = createSprite(width-1250,height-50,300,300);
  wall3.addImage("w3", wallImg);

  wall4 = createSprite(width-150,height-50,300,300);
  wall4.addImage("w4", wallImg2);
  edges = createEdgeSprites();

  monstUp1G = new Group();
  monstUp2G = new Group();
  monstRight1G = new Group();
  monstRight2G = new Group();
  monstLeft1G = new Group();
  monstLeft1G = new Group();
  monstLeft2G = new Group();
  monstDown1G = new Group();
  monstDown2G = new Group();

}

function draw() {
  background(ground);
  
  createMonstUp();
  createMonstDown();
  createMonstLeft();
  createMonstRight();
  playerMoving();
  sprtLives();

  player.bounceOff(edges);
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  
  drawSprites();
}

function createMonstUp() {
  if (frameCount % 200 == 0) {
  monstUp1 = createSprite(random(width-900,width-300),height-600,40,40);
  monstUp1.velocityY = 5;
  monstUp1.addImage(m1img);
  monstUp1.scale = 0.5;
  monstUp1G.add(monstUp1);
}
  if (frameCount %  100 == 0) {
    fill('blue');
    monstUp2 = createSprite(random(width-900,width-300),height-600,40,40);
    monstUp2.addImage(m2img);
    monstUp2.scale = 0.5;
    monstUp2G.add(monstUp2);
  }
}

function createMonstDown() {
  if (frameCount % 230 == 0) {
    monstDown1 = createSprite(random(width-900,width-300),height-50,40,40);
    monstDown1.velocityY = -5;
    monstDown1.addImage(m1img);
    monstDown1.scale = 0.5;
    monstDown1G.add(monstDown1);
}
  if (frameCount % 400 == 0) {
    monstDown2 = createSprite(random(width-900,width-300),height-50,40,40);
    monstDown2.addImage(m2img);
    monstDown2.scale = 0.5;
    monstDown2G.add(monstDown2);
}
}

function createMonstLeft() {
  if (frameCount % 150 == 0) {
    monstLeft1 = createSprite(width-1300,random(height-200,height-400),40,40);
    monstLeft1.velocityX = 5;
    monstLeft1.addImage(m1img);
    monstLeft1.scale = 0.5;
    monstLeft1G.add(monstLeft1);
  }
  if (frameCount %  300 == 0) {
    monstLeft2 = createSprite(width-1300,random(height-230,height-280),40,40);
    monstLeft2.addImage(m2img);
    monstLeft2.scale = 0.5;
    monstLeft2G.add(monstLeft2);
  }
}

function createMonstRight() {
  if (frameCount % 340 == 0) {
    monstRight1 = createSprite(width-80,random(height-230,height-280),40,40);
    monstRight1.velocityX = -5;
    monstRight1.addImage(m1img);
    monstRight1.scale = 0.5;
    monstRight1G.add(monstRight1);
  }
  if (frameCount %  250 == 0) {
    monstRight2 = createSprite(width-80,random(height-230,height-280),40,40);
    monstRight2.addImage(m2img);
    monstRight2.scale = 0.5;
    monstRight2G.add(monstRight2);
  }
}

function playerMoving() {
  if (keyDown(UP_ARROW)) {
    player.y -= 5;
    if (frameCount % 10 == 0) {
      ball = createSprite(player.x,player.y,10,10,10);
      ball.shapeColor = "yellow";
      ball.velocityY = +10;
      ball.depth = player.depth + 1;
    
    monstLeft1G.setVelocityYEach(-4);
    monstRight1G.setVelocityYEach(+4);
  }
  }
  if (keyDown(DOWN_ARROW)) {
    player.y += 5;
    if (frameCount % 10 == 0) {
      ball = createSprite(player.x,player.y,10,10,10);
      ball.shapeColor = "yellow";
      ball.velocityY = -10;
      ball.depth = player.depth + 1;
      monstLeft1G.setVelocityYEach(+4);
      monstRight1G.setVelocityYEach(-4);
    }
    
  }
  if (keyDown(LEFT_ARROW)) {
    player.x -= 5;
    if (frameCount % 10 == 0) {
      ball = createSprite(player.x,player.y,10,10,10);
      ball.shapeColor = "yellow";
      ball.velocityX = +10;
      ball.depth = player.depth + 1;
    }
    monstDown1G.setVelocityXEach(-4);
   monstUp1G.setVelocityXEach(+4);
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x += 5;
    if (frameCount % 10 == 0) {
      ball = createSprite(player.x,player.y,10,10,10);
      ball.shapeColor = "yellow";
      ball.velocityX = -10;
      ball.depth = player.depth + 1;
    }
    monstDown1G.setVelocityXEach(+4);
    monstUp1G.setVelocityXEach(-4);
  }
}
function sprtLives() {
  console.log(lives);

  if (monstUp1G.isTouching(player)) {
    monstUp1G.destroyEach();
    lives -= 1;
  }
  if (monstUp1G.isTouching(ball)) {
    monstUp1.destroy()
    ball.destroy();
  }
}
function gameOver() {
  swal({
    title: `Fim de Jogo`,
    text: "Oops você perdeu a corrida!",
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/5980/5980291.png",
    imageSize: "100x100",
    confirmButtonText: "Obrigado por jogar"
  });
}

/*ajuste de tela
colocar ponto e destruir quando o tiro acerta
colocar mensagem de fim de jogo (alerta suave) */

/* if (monstUp2G.isTouching(player)) {
    monstUp2.destroy();
    lives -= 1;
  }
  if (monstUp2G.collide(ball)) {
    mUL2 -= 1;
  }
  if (monstDown1G.isTouching(player)) {
    monstDown1.destroy();
    lives -= 1;
  }
  if (monstDown1G.collide(ball)) {
    mDL1 -= 1;
  }
  if (monstDown2G.isTouching(player)) {
    monstDown2.destroy();
    lives -= 1;
  }
  if (monstDown1G.collide(ball)) {
    mDL2 -= 1;
  }
  if (monstLeft1G.isTouching(player)) {
    monstLeft1.destroy();
    lives -= 1;
  }
  if (monstLeft1G.collide(ball)) {
    mLL1 -= 1;
  }
  if (monstLeft2G.isTouching(player)) {
    monstLeft2.destroy();
    lives -= 1;
  }
  if (monstLeft2G.collide(ball)) {
    mLL2 -= 1;
  }
  if (monstRight1G.isTouching(player)) {
    monstRight1.destroy();
    lives -= 1;
  }
  if (monstRight1G.collide(ball)) {
    mDL1 -= 1;
  }
  if (monstRight2G.isTouching(player)) {
    monstRight2.destroy();
    lives -= 1;
  }
  if (monstRight2G.collide(ball)) {
    mDL2 -= 1;
  } 

  if (lives == 0) {
    gameOver();
  }
  if (mUL1 == 0) {
   monstUp1.destroy
  }
  if (mUL2 == 0) {
    monstUp2.destroy
  }
  if (mDL1 == 0) {
    monstDown1.destroy
  }
  if (mDL2 == 0) {
    monstDown2.destroy
  }
  if (mLL1 == 0) {
    monstLeft1.destroy
  }
  if (mLL2 == 0) {
    monstLeft2.destroy
  }
  if (mRL1 == 0) {
    monstRight1.destroy
  }
  if (mRL2 == 0) {
    monstRight2.destroy
  } */