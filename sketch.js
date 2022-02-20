var corredor, corredor_animacao, edges;
var chao;
var fundo, fundo_imagem;
function preload(){
  //imagens pré-carregadas
  corredor_animacao = loadAnimation ("Runner-1.png", "Runner-2.png");
  fundo_imagem = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  edges = createEdgeSprites
  
  fundo = createSprite (200, 200, 400, 400)
  fundo.addImage (fundo_imagem)
  fundo.velocityY = 6

  corredor = createSprite (200, 340);
  corredor.addAnimation ("correndo", corredor_animacao);
  corredor.scale = 0.1

}

function draw() {
  background("blue");
  drawSprites()
  corredor.x = mouseX  ; 
  if (fundo.y > 400) {
    fundo.y = 0
  }
  if (mouseX > 280) {
    corredor.x = 280
  }
  if (mouseX < 120) {
    corredor.x = 120
  }
}
