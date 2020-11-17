class Particle {
    constructor(x, y, r) {
        var options = {
            density: 0.8,
            friction: 0,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(this.color);
        ellipse(0, 0, this.r + 7, this.r + 7);
        pop();
    }
    destroy() {
        World.remove(world, this.body);
        console.log("destroyed")
    }
}