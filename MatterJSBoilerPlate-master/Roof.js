class Roof{

    constructor(x,y,width,height){
    
        this.body=Bodies.rectangle(300,100,width,height,{isStatic:true});
      this.width=width;
      this.height=height;

        World.add(world,this.body);
    
       //console.log(this.body);
    }
    
    
    display(){
    push()
   // ellipseMode(RADIUS);
    rectMode(CENTER);
    fill(128,128,128);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop()
    }
    }