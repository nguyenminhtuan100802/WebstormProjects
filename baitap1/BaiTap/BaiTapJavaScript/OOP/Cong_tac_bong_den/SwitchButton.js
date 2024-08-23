class SwitchButton {
    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }
    showStatus(){
        console.log("Trạng thái switch: " + this.status);
        console.log("Trạng thái bóng đèn: " + this.lamp.getStatus());
    }
    connectToLamp(electricLamp){
        this.lamp = electricLamp;
    }
    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }
}