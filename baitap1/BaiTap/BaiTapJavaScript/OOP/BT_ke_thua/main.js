class Shape{
    constructor(){

    }
    calculateArea(){
        return 0;
    }
}
class Square extends Shape{
    constructor(side) {
        super();
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const square = new Square(4);
console.log(square.calculateArea());
const rectangle = new Rectangle(5, 9);
console.log(rectangle.calculateArea());