let dusts = [];
let flash;

function preload() {
  flash = loadImage("img/blur_circle.png");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  createDusts(50);
  imageMode(CENTER);
} 

function draw() { 
  background(color('rgba(8, 26, 46, 0.8)'));

  // flash light
  fill('rgba(255, 255, 255, 0.8)');
  ellipse(mouseX, mouseY, 150, 150);
  image(flash, mouseX, mouseY, 250, 250);
  
  // Dusts
  for (let j = dusts.length - 1; j >= 0; j--) {
    dusts[j].render();
    dusts[j].update();
    if (dusts[j].checkEdges()) {
      dusts.splice(j, 1);
      dusts.push(new Dust());
    }
  }
}

function createDusts(num) {
  for (let i = 0; i < num; i++) {
    dusts.push(new Dust());
  }
}