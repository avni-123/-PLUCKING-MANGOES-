class Tree{

    constructor(x, y, width, height){

        var options={

            isStatic:true

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("tree.png");

        World.add(world, this.body);

    }

display(){
   
    var treePos = this.body.position;	
		push();
		translate(treePos.x, treePos.y);
		 imageMode(CENTER);
		rotate(this.body.angle);
		fill(255, 0, 255);
		ellipseMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
		pop();

}

}
