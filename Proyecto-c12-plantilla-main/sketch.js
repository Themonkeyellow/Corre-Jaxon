

var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");

}

function setup(){

  createCanvas(400,400);
 path = createSprite(160,340,20,20);
 path.addImage(pathImg);
 path.velocityY= 2;
 path.scale=1.2;

 boy = createSprite(300,400,0,0);
 boy.addAnimation("running", boyImg);
 boy.scale=0.8;
   
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
//establecer visibilidad como false (falso) para límite izquierdo
}






function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
console.log(draw);