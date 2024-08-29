class Player{
    constructor(x, y, radius, speed) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._speed = speed;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    draw(){
        c.beginPath();
        c.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        c.fillStyle = "yellow";
        c.fill();
        c.closePath();
    }
    moveRight(){
        this._x += this._speed;
        this.draw();
    }
    moveLeft(){
        this._x -= this._speed;
        this.draw();
    }
    moveUp(){
        this._y -= this._speed;
        this.draw();
    }
    moveDown(){
        this._y += this._speed;
        this.draw();
    }
}