let personagem
let grama
let tesouro 

let restart 

let tamanho = 64
let andarX = 0
let andarY = 0
let velocidade = 64
function setup() {
  createCanvas(576, 576);
  
  tesouro = loadImage('tesouro.png')
  personagem = loadImage('hero.png')
  grama = loadImage('grama.png')
}

function draw() {
  if (andarX < 0){
    andarX = 0
  }
  if (andarY < 0) {
    andarY = 0  
  }
  if (andarY > tamanho*8) {
    andarY = tamanho*8
  }
  if (andarX > tamanho*8) {
    andarX = tamanho*8 
  }
  background(220);
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++) {
      image(grama, tamanho*i, tamanho*j, tamanho, tamanho)
    }
  }
  image(tesouro, 504, 504, tamanho, tamanho)
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === tamanho*8 && andarY === tamanho*8) {
    rect(160, 160, 256, 256)
    textSize(36)
    text('GanhoU!!', 220, 300)
    
    restart = createButton('reiniciar')
    restart.mousePressed(reset)
    noLoop()
  }
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed() {
  if(keyIsDown(UP_ARROW)) {
    andarY -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    andarY += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    andarX -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)) {
    andarX += velocidade
  }
}