var iss,spacecraft,hasDocked = false;
var issImg,spaceImg,spacecraft1,spacecraft2,spacecraft3,spacecraft4

function preload()
{
   issImg = loadImage("images/iss.png")
   spaceImg = loadImage("images/spacebg.jpg")
   spacecraft1 = loadImage("images/spacecraft1.png")
   spacecraft2 = loadImage("images/spacecraft2.png")
   spacecraft3 = loadImage("images/spacecraft3.png")
   spacecraft4 = loadImage("images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)

  spacecraft = createSprite(350,350,50,50)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.2
}

function draw() {
  background(spaceImg);

  if(!hasDocked)
  {
     spacecraft.x = spacecraft.x + random(-1,1);

     if(keyDown("UP_ARROW"))
     {
      spacecraft.y = spacecraft.y -2 
     }

     if(keyDown("LEFT_ARROW"))
     {
       spacecraft.addImage(spacecraft3)
       spacecraft.x = spacecraft.x - 1
     }

     if(keyDown("RIGHT_ARROW"))
     {
       spacecraft.addImage(spacecraft2)
       spacecraft.x = spacecraft.x + 2
     }

     if(keyDown("DOWN_ARROW"))
     {
       spacecraft.addImage(spacecraft1)
     }
  }
  
     if(spacecraft.y <= (iss.y+70) && spacecraft.x <= 10*(iss.x-10))
     {
       hasDocked = true;
       textSize(25)
       fill("white")
       text("Docking Successful!",200,300)
     }
  
  drawSprites();
}