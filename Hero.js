class Hero{
    constructor(x, y, width, height) {
      var options = { 
        density: 1, 
        restitution: 1,
        frictionAir: 0.005};
  
      this.width = width;
      this.height = height;
      this.image = loadImage("Superhero-02.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height,this.image);
      pop();
    }
  }
  