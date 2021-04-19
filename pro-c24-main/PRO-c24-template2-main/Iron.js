class Iron {
constructor(x,y){
var options={
 resttution:0.8,
 density:30,
friction:3, 
} 
this.x=x;
this.y=y;
this.width=80;
this.height=80;
this.body=Bodies.rectangle(x,y,80,80,options);
World.add(world,this.body);
}
 display()
{
ironPos=this.body.position;
push();
translate(ironPos.x,ironPos.y)
strokeWeight(2)
stroke("blue")
fill("black")
rect(0,0,80,80)
pop();
}
}
