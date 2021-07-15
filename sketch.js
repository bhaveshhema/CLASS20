var moving_object;
var fixed_object;

function setup() {
  createCanvas(800,400);
  moving_object = createSprite(400, 400, 50, 50);
  moving_object.shapeColor = "blue";
  moving_object.velocityY = -4;

  fixed_object = createSprite(400, 100, 50, 50);
  fixed_object.shapeColor = "blue";
  fixed_object.velocityY = 4;
}

function draw() {
  background(0,0,0);  
  moving_object.x = mouseX;
  moving_object.y = mouseY;
  
  if (moving_object.x-fixed_object.x < fixed_object.width/2+moving_object.width/2 && 
    fixed_object.x-moving_object.x < fixed_object.width/2+moving_object.width/2 && 
    moving_object.y-fixed_object.y < fixed_object.height/2+moving_object.height/2 && 
    fixed_object.y-moving_object.y < fixed_object.height/2+moving_object.height/2) {
      moving_object.shapeColor = "lightblue";
    fixed_object.shapeColor = "lightgreen";
  }
  else {
    moving_object.shapeColor = "blue";
    fixed_object.shapeColor = "blue";
  }

  if (moving_object.x-fixed_object.x < fixed_object.width/2+moving_object.width/2 && 
    fixed_object.x-moving_object.x < fixed_object.width/2+moving_object.width/2) {
      moving_object.velocityX = moving_object.velocityX*(-1);
      fixed_object.velocityX = fixed_object.velocityX*(-1);
    }

  if (moving_object.y-fixed_object.y < fixed_object.height/2+moving_object.height/2 && 
    fixed_object.y-moving_object.y < fixed_object.height/2+moving_object.height/2) {
      moving_object.velocityY = moving_object.velocityY*(-1);
      fixed_object.velocityY = fixed_object.velocityY*(-1);
    }

  drawSprites();
}