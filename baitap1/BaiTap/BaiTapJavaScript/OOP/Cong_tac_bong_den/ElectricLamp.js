class ElectricLamp{
    constructor(){
        this.status = false;
    }
    getStatus(){
        return this.status;
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}