class Rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA = pointA
this.pointB = pointB

var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.pointA,y:this.pointB}
}
	//create rope constraint here
this.body = Constraint.create(options)
	}


    //create display() here 
	display(){
		
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;
	
	strokeWeight(2);
	stroke(0);
	line(pointB.x, pointB.y, pointA.x, pointA.y);
	
	}

}
