class SlingShot{
    constructor(body1, point1) {

        var options ={
            bodyA : body1,
            pointB : point1,
            stiffness : 0.002,
            length : 20
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sling1.png")
        this.sling2 = loadImage("sling2.png")
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
        image(this.sling1, 300, 380, 50, 200)
        image(this.sling2, 270, 340, 45, 130)
        if (this.sling.bodyA != null){
            var bodyA = this.sling.bodyA.position
            var pointB = this.sling.pointB
            strokeWeight(3)
            line(bodyA.x, bodyA.y, pointB.x, pointB.y)
        }
    }
}