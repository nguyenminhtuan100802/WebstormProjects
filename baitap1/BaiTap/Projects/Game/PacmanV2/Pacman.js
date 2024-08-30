class Pacman{
    constructor(ID){
        this._ID = ID;
        this._score = 0;
        this._flagLose = false;
        this._eatingSound =  document.querySelector(".myAudioPacmanEating");
        this._eatingPowerSound =  document.querySelector(".myAudioPacmanEatingPower");
        this._bommanChuiSound =  document.querySelector(".myAudioBommanChui");
        this._bommanGaySound =  document.querySelector(".myAudioBommanGay");
    }

    get ID() {
        return this._ID;
    }
    set ID(value) {
        this._ID = value;
    }
    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }
    get flagLose() {
        return this._flagLose;
    }

    set flagLose(value) {
        this._flagLose = value;
    }

    moveRight(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex + 1] !== objectArray.WALL){
            // bị bắt
            if (mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_BLUE.ID){
                this.playBommanChuiSound();
                this._flagLose = true;
            }
            if (mapLayout[pacmanCurrentIndex + 1] === objectArray.DOT){
                this.increaseScore();
                this.playEatingSound();
            }
            else if (mapLayout[pacmanCurrentIndex + 1] === objectArray.POWER){
                this.increasePowerScore();
                this.playEatingPowerSound();
            }
            if (this._flagLose === false) {
                let temp = mapLayout[pacmanCurrentIndex];
                mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
                mapLayout[pacmanCurrentIndex + 1] = temp;
            }
        }
    }
    moveLeft(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex - 1] !== objectArray.WALL){
            // bị bắt
            if (mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_BLUE.ID){
                this.playBommanChuiSound();
                this._flagLose = true;
            }
            if (mapLayout[pacmanCurrentIndex - 1] === objectArray.DOT){
                this.increaseScore();
                this.playEatingSound();
            }
            else if (mapLayout[pacmanCurrentIndex - 1] === objectArray.POWER){
                this.increasePowerScore();
                this.playEatingPowerSound();
            }
            if (this._flagLose === false) {
                let temp = mapLayout[pacmanCurrentIndex];
                mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
                mapLayout[pacmanCurrentIndex - 1] = temp;
            }
        }
    }
    moveUp(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex - 28] !== objectArray.WALL){
            // bị bắt
            if (mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_BLUE.ID){
                this.playBommanChuiSound();
                this._flagLose = true;
            }
            if (mapLayout[pacmanCurrentIndex - 28] === objectArray.DOT){
                this.increaseScore();
                this.playEatingSound();
            }
            else if (mapLayout[pacmanCurrentIndex - 28] === objectArray.POWER){
                this.increasePowerScore();
                this.playEatingPowerSound();
            }
            if (this._flagLose === false) {
                let temp = mapLayout[pacmanCurrentIndex];
                mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
                mapLayout[pacmanCurrentIndex - 28] = temp;
            }
        }
    }
    moveDown(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex + 28] !== objectArray.WALL){
            // bị bắt
            if (mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_BLUE.ID){
                this.playBommanChuiSound();
                this._flagLose = true;
            }
            if (mapLayout[pacmanCurrentIndex + 28] === objectArray.DOT){
                this.increaseScore();
                this.playEatingSound();
            }
            else if (mapLayout[pacmanCurrentIndex + 28] === objectArray.POWER){
                this.increasePowerScore();
                this.playEatingPowerSound();
            }
            if (this._flagLose === false) {
                let temp = mapLayout[pacmanCurrentIndex];
                mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
                mapLayout[pacmanCurrentIndex + 28] = temp;
            }
        }
    }
    increaseScore(){
        this._score += 1;
        document.querySelector(".blink_plus_score_1").style.opacity = "1";
        setTimeout(()=>{
            document.querySelector(".blink_plus_score_1").style.opacity = "0";
        }, 500);
    }
    increasePowerScore(){
        this._score += 20;
        document.querySelector(".blink_plus_score_20").style.opacity = "1";
        setTimeout(()=>{
            document.querySelector(".blink_plus_score_20").style.opacity = "0";
        }, 500);
    }
    playEatingSound(){
        this._eatingSound.play();
    }
    playEatingPowerSound(){
        this._eatingPowerSound.play();
    }
    playBommanChuiSound(){
        this._bommanChuiSound.play();
    }
    playBommanGaySound(){
        this._bommanGaySound.play();
    }
}