let dusts = [];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  createDusts(50);
} 

function draw() { 
  background(color('rgba(8, 26, 46, 0.8)'));

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