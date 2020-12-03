var snake;
var food;

function preload(){
}

function setup (){
  createCanvas(600,500);
  frameRate(3);
  snake = new Snake();
}

function draw(){
  background("gray");

snake.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode === (UP_ARROW)){
    snake.XDirection = 0;
    snake.YDirection = -1;
  }
  if (keyCode === (DOWN_ARROW)){
    snake.XDirection = 0;
    snake.YDirection = 1;
  }
  if (keyCode === (LEFT_ARROW)){
    snake.XDirection = -1;
    snake.YDirection = 0;
  }
  if (keyCode === (RIGHT_ARROW)){
    snake.XDirection = 1;
    snake.YDirection = 0;
  }
}

//function snakeUpdate(){}