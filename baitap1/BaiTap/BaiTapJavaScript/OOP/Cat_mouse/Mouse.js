class Mouse {
    constructor(name, speed, weight) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        this.isAlive = true;
    }
    Sound(){
        console.log(this.name + ": chít chít");
    }
}