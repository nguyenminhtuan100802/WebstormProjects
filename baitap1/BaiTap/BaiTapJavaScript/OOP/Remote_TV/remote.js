class Remote{
    constructor(){
    }
    switchChannel(tv, channelSwitch){
        tv.channel = channelSwitch;
    }
    onTV(tv){
       tv.isOn = true;
    }
    offTV(tv){
        tv.isOn = false;
    }
    changeVolume(tv, newVolume){
        tv.volume = newVolume;
    }
    getVolume(tv){
        return tv.volume;
    }
    getChannel(tv){
        return tv.channel;
    }
}