class Log {
    constructor(x, y,length,angle) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.3
      }
      this.body = Bodies.rectangle(x, y, 20, length, options);
      this.width = 20;
      this.height = length;
      Matter.Body.setAngle(this.body, angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5)
      stroke("brown")
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };