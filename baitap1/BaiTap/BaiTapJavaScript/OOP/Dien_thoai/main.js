let nokia = new Mobile("Nokia");
let samsung = new Mobile("Samsung");

nokia.SendMessage("hello tuan", samsung);
nokia.SendMessage("how are you", samsung);
samsung.CheckIncomingMessage();
nokia.CheckAllSentMessage();

//
samsung.SendMessage("i am fine", nokia);
samsung.SendMessage("the weather here is good", nokia);
samsung.SendMessage("you must go here", nokia);
samsung.SendMessage("" , nokia);
nokia.CheckIncomingMessage();
samsung.CheckAllSentMessage();