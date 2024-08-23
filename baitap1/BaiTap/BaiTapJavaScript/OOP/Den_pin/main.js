class Battery{
    energy;
    constructor(energy){
        this.energy = energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        this.energy = this.energy - 1;
    }
}
class FlashLamp{

    constructor(status, battery){
        this.status = status;
        this.battery = battery;
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBattery(){
        return this.battery.getEnergy();
    }
    light(){
        console.log("On lighting")
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}


let battery = new Battery();
battery.setEnergy(50);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
console.log(flashLamp.getBattery());
flashLamp.turnOn()
console.log(flashLamp.status);