class snow {
    constructor(x, y) {
        var options = {
            restitution: 0.04,
            friction: 0,
            gravity:12
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow5.webp")
        World.add(world, this.body);
    }
    display() {
        var pos=this.body.position
        var angle=this.body.angle

         push();
         translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};