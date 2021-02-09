var movingRect,fixedRect;

function setup() {
  createCanvas(400,400);
  movingRect = createSprite(200, 200, 80, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100,200,50,80);
  fixedRect.shapeColor = "green";
}
/*
movingRect.width/2 + fixedRect.width/2 === movingRect.x - fixedRect.x
80/2 + 50/2 = 40+25=65


*/
function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  
if(movingRect.x - fixedRect.x < (movingRect.width/2)+(fixedRect.width/2)  &&
fixedRect.x - movingRect.x < (movingRect.width/2)+(fixedRect.width/2)  &&
movingRect.y - fixedRect.y < (movingRect.height/2)+(fixedRect.height/2)  &&
fixedRect.y - movingRect.y < (movingRect.height/2)+(fixedRect.height/2)  )
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else
{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  drawSprites();
}