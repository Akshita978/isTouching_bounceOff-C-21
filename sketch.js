var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(0, 100, 20, 20);
  car. velocityX = 5;
  car.shapeColor = "white";

  wall = createSprite(1000, 100, 30, 100);

}

function draw() {
  background(0,0,0);  
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;

  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if (isTouching(car, wall)){
     car.shapeColor = "blue";
  }
  
  bounceOff(car, wall);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
