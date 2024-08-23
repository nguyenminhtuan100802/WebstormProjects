class Human{
    constructor(name, gender, weight, apple){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.apple = apple;
    }
    setGender(gender){
        this.gender = gender;
    }
    setWeight(weight){
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    getWeight(){
        return this.weight;
    }

    isMale(){
        if (this.gender === "male" || this.gender === "Male")
            return true;
        return false;
    }
    setApple(apple){
       this.apple = apple;
    }
    eatApple(){
        this.apple.decrease();
        this.weight = this.weight + 1;
        if (this.apple.getWeight() > 0){
            console.log("Vừa ăn táo:");
            console.log("Khối lượng người: " + this.weight);
            console.log("Khối lượng táo: " + this.apple.getWeight());
        }else {
            console.log("Hết táo rồi, không ăn đc nữa!!!!")
        }
    }
}