var ball,img,paddle;
function preload() {
  ball1= loadImage("ball.png");
  paddle1= loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200);
  paddle = createSprite(380,200);
  ball.addImage(ball1);
  paddle.addImage(paddle1);
  
ball.velocityX=2;
  ball.velocityY=2;
}

function draw() {
  background(205,153,0);
 edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  text("Press the arrow keys to move the paddle.",50,50);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  ball.bounceOff(paddle);

  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY=-3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.veloctiyY=3;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

