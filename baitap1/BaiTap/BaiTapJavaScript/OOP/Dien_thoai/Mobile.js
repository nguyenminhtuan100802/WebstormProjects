class Mobile{
    constructor(type){
        this.battery = 100;
        this.status = false;
        this.type = type;
        this.message = "";
        this.memoryMessage = [];
    }
    OnYourPhone(){
        this.status = true;
    }
    OffYourPhone(){
        this.status = false;
    }
    CheckYourPhoneStatus(){
        return this.status;
    }
    SendMessage(message, mobile){
        if (message !== ""){
            this.memoryMessage.push(message);
            mobile.message = message;
        }else {
            console.log("Thư gửi đang rỗng")
        }
    }
    CheckIncomingMessage(){
        console.log(this.type + " receive: " + this.message);
    }
    CheckAllSentMessage(){
        console.log("======== " + this.type + " all sent message: ========");
        for (let i = 0; i < this.memoryMessage.length; i++) {
            console.log(this.memoryMessage[i]);
        }
        console.log("=========================================");
    }
}