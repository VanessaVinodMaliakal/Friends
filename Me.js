class Me extends BaseClass{
    constructor(x, y){
    super(x, y, 40, 40)
    this.image = loadImage("smoke.png")
    this.arrays = []
    }
    display(){
        super.display()
        if (this.body.position.x > 200){
            var positions = [this.body.position.x, this.body.position.y]
            this.arrays.push(positions)
        }
        for (var i = 0; i < this.arrays.length; i = i++){
           image(this.image, this.arrays[i][0],this.arrays[i][1]) 
        }
    }
}