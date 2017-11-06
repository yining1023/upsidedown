var dusts = [];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 50; i++) {
    dusts.push(new Dust());
  }
} 

function draw() { 
  background(color('rgba(8, 26, 46, 0.8)'));

  for (let j = 0; j < dusts.length; j++) {
    dusts[j].render();
    dusts[j].update();
  }
}