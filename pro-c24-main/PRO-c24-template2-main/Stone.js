class Stone {
constructor(x,y){
    var options={
     resttution:0.8,
     density:12,
    friction:0.9, 
    } 
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,80,80,options);
    World.add(world,this.body);  
}
    display()
    {
     var stonePos=this.body.position;
    push();
    translate(stonePos.x,stonePos.y)
    strokeWeight(2)
    stroke("blagk")
    fill("grey")
    rect(0,0,w,h)
    pop();
    }            
    }
    