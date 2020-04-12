var fixedRect, movingRect;
var box1,box2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

   box1 = createSprite(600,400,50,80);
   box2 = createSprite(900,400,80,30);

   box1.shapeColor = "yellow";
   box2.shapeColor = "yellow";
  
   box1.debug = true;
   box2.debug = true;

  box1.velocityX = 2;
  box2.velocityX = -2;
}

function draw() {
  background(0,0,0);  

  if (isTouching(box1, box2)) {

    box1.shapeColor = "red";
    box2.shapeColor = "red";

   box1.velocityX = box1.velocityX  * (-1);
   box2.velocityX = box2.velocityX  * (-1);

   /* movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);*/
 
  }
  else{
    box1.shapeColor = "yellow";
    box2.shapeColor = "yellow";
  }


  drawSprites();
}



