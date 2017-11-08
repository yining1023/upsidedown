function Dust(pos, r) {
    this.pos = createVector(random(width), random(height));
    this.r = random(2, 15);

    this.opacity = random(0.1, 0.4);
    this.color = color('rgba(225, 225, 255, '+ this.opacity + ')');

    this.vel = p5.Vector.random2D().div(4);
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