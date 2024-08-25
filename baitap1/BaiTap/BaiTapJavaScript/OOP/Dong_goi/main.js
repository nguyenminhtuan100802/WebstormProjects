class Wallet{
    constructor(bankName, pin){
        this.bankName = bankName;
        this.pin = pin;
        this.balance = 0;
    }
    // gui tien
    deposit(valueOfMoney){
        this.balance = this.balance + valueOfMoney;
    }
    // rut tien
    withdraw(valueOfMoney){
        this.balance = this.balance - valueOfMoney;
    }
}
const wallet = new Wallet("MB Bank", "123456");
console.log(wallet.balance);
wallet.deposit(10000);
console.log(wallet.balance);