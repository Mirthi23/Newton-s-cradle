class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      ellipseMode(RADIUS);
      push();
   //translate(pos.x,pos.y);
     // rotate(angle);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius,this.radius);
      pop();
    }
  };