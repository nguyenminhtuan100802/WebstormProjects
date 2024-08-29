class Boundary{
    static width = 40;
    static height = 40;
    constructor(x, y){
        this._width = 40;
        this._height = 40;
        this._x = x;
        this._y = y;
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

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    draw(){
        c.fillStyle = "blue"
        c.fillRect(this._x, this._y, this._width, this._height);
    }
}