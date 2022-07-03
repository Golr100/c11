var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;



function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createsprite(0, 0, 1000, 1000);



//Criando menino que corre 

boy = createsprite(0, 0, 10, 10)



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(0,100.100,800);
rightBoundary.visible = false;


function draw() {
background(0);
path.velocityY = 4;
}

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.x = mouse.x


 //Reiniciar o fundo
 

if(path.y=100){
    path.y=0
}

 drawSprites();

 }




