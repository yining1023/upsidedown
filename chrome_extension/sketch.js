let dusts = [];
let flash;

// function preload() {
//   flash = loadImage("blur_circle.png");
// }

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
  // image(flash, mouseX, mouseY, 250, 250);
  
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

// Dust
function Dust() {
    this.pos = createVector(random(width), random(height));
    this.r = random(2, 15);

    this.opacity = random(0.1, 0.4);
    this.color = color('rgba(225, 225, 255, '+ this.opacity + ')');

    this.vel = createVector(random(-0.25, 0.25), random(-0.25, 0.25));

    this.total = floor(random(50, 100));
    this.offset = [];
    for (let i = 0; i < this.total; i++) {
        this.offset[i] = random(-this.r * 0.1, this.r * 0.1);
    }

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        noStroke();
        fill(this.color);
        translate(this.pos.x, this.pos.y);
        beginShape();
        for (let l = 0; l < this.total; l++) {
            let angle = map(l, 0, this.total, 0, TWO_PI);
            let r = this.r + this.offset[l];
            let x = r * cos(angle);
            let y = r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }

    this.checkEdges = function() {
        if (this.pos.x > width || this.pos.x < 0 || this.pos.y < 0 || this.pos.y > height) {
            return true;
        } else {
            return false;
        }
    }
}