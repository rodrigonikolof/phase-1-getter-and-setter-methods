// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
       return this.radius * 2;
    }
    get circumference(){
       return Math.PI * this.diameter
    }
    get area(){
        return Math.PI * (this.radius**2)
    }
    set diameter(newRadius){
        this.radius = newRadius / 2
    }
    set circumference(newCircumference){
        this.diameter = newCircumference / Math.PI;
    }
    set area(newRadius){
        this.radius = Math.sqrt(newRadius / Math.PI)
    }

}

let circle = new Circle(6)

console.log(circle.diameter)

circle.radius = 10;

console.log(circle.diameter)