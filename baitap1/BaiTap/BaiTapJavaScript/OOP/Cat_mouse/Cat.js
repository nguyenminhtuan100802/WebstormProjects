class Cat {
    constructor(name, speed, weight) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        this.canEatMouse = false;
    }
    Sound(){
        console.log(this.name + ": meo meo");
    }
    CatchMouse(mouse){
        if (this.speed >= mouse.speed) {
            console.log(this.name + " đã bắt đc " + mouse.name);
            this.canEatMouse = true;
        }else {
            console.log(this.name + " không bắt đc " + mouse.name + " do chạy chậm hơn")
        }
    }
    EatMouse(mouse){
        if (this.canEatMouse === true) {
            console.log("đã ăn " + mouse.name);
            this.weight += mouse.weight;
            console.log(this.name + " weight: " + this.weight);
        }
        else {
            console.log("có bắt đc đâu mà đòi ăn " + mouse.name);
        }
    }
}