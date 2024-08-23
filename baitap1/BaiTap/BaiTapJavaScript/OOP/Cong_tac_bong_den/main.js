let electricLamp = new ElectricLamp();
console.log(electricLamp.getStatus());
let switchButton = new SwitchButton(electricLamp);
switchButton.showStatus();
switchButton.switchOn();
switchButton.showStatus();
switchButton.switchOff();
switchButton.showStatus();