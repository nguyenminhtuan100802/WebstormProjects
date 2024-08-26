class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }
    fahrenheit(){
        return 9 / 5 * this.celsius + 32;
    }
    kelvins(){
        return this.celsius + 273.15;
    }
}

let temperature = new Temperature(25);
console.log("Nhiệt độ K: " + temperature.kelvins());
console.log("Nhiệt độ F: " + temperature.fahrenheit());