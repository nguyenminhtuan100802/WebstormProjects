class Ghost {
    constructor(ID) {
        this._ID = ID;
        this._bommanChuiSound =  document.querySelector(".myAudioBommanChui");
    }

    get ID() {
        return this._ID;
    }

    set ID(value) {
        this._ID = value;
    }

    moveRight(mapLayout, objectArray) {
        let ghostCurrentIndex = mapLayout.indexOf(this._ID);
        if (mapLayout[ghostCurrentIndex + 1] !== objectArray.WALL &&
            mapLayout[ghostCurrentIndex + 1] !== objectArray.GHOST_RED.ID &&
            mapLayout[ghostCurrentIndex + 1] !== objectArray.GHOST_ORANGE.ID &&
            mapLayout[ghostCurrentIndex + 1] !== objectArray.GHOST_PINK.ID &&
            mapLayout[ghostCurrentIndex + 1] !== objectArray.GHOST_BLUE.ID){
            if (mapLayout[ghostCurrentIndex + 1] === objectArray.PACMAN_PLAYER.ID){
                this.playBommanChuiSound();
                objectArray.PACMAN_PLAYER.flagLose = true;
            }
            let temp = mapLayout[ghostCurrentIndex];
            mapLayout[ghostCurrentIndex] = mapLayout[ghostCurrentIndex + 1];
            mapLayout[ghostCurrentIndex + 1] = temp;
        }
    }

    moveLeft(mapLayout, objectArray) {
        let ghostCurrentIndex = mapLayout.indexOf(this._ID);
        if (mapLayout[ghostCurrentIndex - 1] !== objectArray.WALL&&
            mapLayout[ghostCurrentIndex - 1] !== objectArray.GHOST_RED.ID &&
            mapLayout[ghostCurrentIndex - 1] !== objectArray.GHOST_ORANGE.ID &&
            mapLayout[ghostCurrentIndex - 1] !== objectArray.GHOST_PINK.ID &&
            mapLayout[ghostCurrentIndex - 1] !== objectArray.GHOST_BLUE.ID){
            if (mapLayout[ghostCurrentIndex - 1] === objectArray.PACMAN_PLAYER.ID){
                this.playBommanChuiSound();
                objectArray.PACMAN_PLAYER.flagLose = true;
            }
            let temp = mapLayout[ghostCurrentIndex];
            mapLayout[ghostCurrentIndex] = mapLayout[ghostCurrentIndex - 1];
            mapLayout[ghostCurrentIndex - 1] = temp;
        }
    }

    moveUp(mapLayout, objectArray) {
        let ghostCurrentIndex = mapLayout.indexOf(this._ID);
        if (mapLayout[ghostCurrentIndex - 28] !== objectArray.WALL&&
            mapLayout[ghostCurrentIndex - 28] !== objectArray.GHOST_RED.ID &&
            mapLayout[ghostCurrentIndex - 28] !== objectArray.GHOST_ORANGE.ID &&
            mapLayout[ghostCurrentIndex - 28] !== objectArray.GHOST_PINK.ID &&
            mapLayout[ghostCurrentIndex - 28] !== objectArray.GHOST_BLUE.ID){
            if (mapLayout[ghostCurrentIndex - 28] === objectArray.PACMAN_PLAYER.ID){
                this.playBommanChuiSound();
                objectArray.PACMAN_PLAYER.flagLose = true;
            }
            let temp = mapLayout[ghostCurrentIndex];
            mapLayout[ghostCurrentIndex] = mapLayout[ghostCurrentIndex - 28];
            mapLayout[ghostCurrentIndex - 28] = temp;
        }
    }

    moveDown(mapLayout, objectArray) {
        let ghostCurrentIndex = mapLayout.indexOf(this._ID);
        if (mapLayout[ghostCurrentIndex + 28] !== objectArray.WALL&&
            mapLayout[ghostCurrentIndex + 28] !== objectArray.GHOST_RED.ID &&
            mapLayout[ghostCurrentIndex + 28] !== objectArray.GHOST_ORANGE.ID &&
            mapLayout[ghostCurrentIndex + 28] !== objectArray.GHOST_PINK.ID &&
            mapLayout[ghostCurrentIndex + 28] !== objectArray.GHOST_BLUE.ID){
            if (mapLayout[ghostCurrentIndex + 28] === objectArray.PACMAN_PLAYER.ID){
                this.playBommanChuiSound();
                objectArray.PACMAN_PLAYER.flagLose = true;

            }
            let temp = mapLayout[ghostCurrentIndex];
            mapLayout[ghostCurrentIndex] = mapLayout[ghostCurrentIndex + 28];
            mapLayout[ghostCurrentIndex + 28] = temp;
        }
    }
    autoMove(mapLayout, objectArray){
        let ghostDecision = Math.floor(Math.random() * 4);
        if (ghostDecision === 0){
            this.moveRight(mapLayout, objectArray);
        }
        else if (ghostDecision === 1){
            this.moveLeft(mapLayout, objectArray);
        }
        else if (ghostDecision === 2){
            this.moveUp(mapLayout, objectArray);
        }
        else if (ghostDecision === 3){
            this.moveDown(mapLayout, objectArray);
        }
    }
    playBommanChuiSound(){
        this._bommanChuiSound.play();
    }
}