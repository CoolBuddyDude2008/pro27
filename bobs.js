class bob{
    constructor(x,y,r){
        var options = {
        isStatic : false,
        restitution : 1,
        friction : 0,
        density: 0.8,
    }
    this.x = x;
    this.y = y;
    this.r = r;

    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r);
}
}   ` 
 
 
 
 
 




///`