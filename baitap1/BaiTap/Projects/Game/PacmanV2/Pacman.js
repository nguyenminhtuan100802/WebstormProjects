class Pacman{
    constructor(ID){
        this._ID = ID;
    }

    get ID() {
        return this._ID;
    }

    set ID(value) {
        this._ID = value;
    }
    moveRight(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex + 1] !== objectArray.WALL){
            if (mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex + 1] === objectArray.GHOST_BLUE.ID){
                alert("bi bat");
            }
            let temp = mapLayout[pacmanCurrentIndex];
            mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
            mapLayout[pacmanCurrentIndex + 1] = temp;
        }
    }
    moveLeft(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex - 1] !== objectArray.WALL){
            if (mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex - 1] === objectArray.GHOST_BLUE.ID){
                alert("bi bat");
            }
            let temp = mapLayout[pacmanCurrentIndex];
            mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
            mapLayout[pacmanCurrentIndex - 1] = temp;
        }
    }
    moveUp(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex - 28] !== objectArray.WALL){
            if (mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex - 28] === objectArray.GHOST_BLUE.ID){
                alert("bi bat");
            }
            let temp = mapLayout[pacmanCurrentIndex];
            mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
            mapLayout[pacmanCurrentIndex - 28] = temp;
        }
    }
    moveDown(mapLayout, objectArray){
        let pacmanCurrentIndex = mapLayout.indexOf(this._ID);
        // console.log(pacmanCurrentIndex);
        if (mapLayout[pacmanCurrentIndex + 28] !== objectArray.WALL){
            if (mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_RED.ID ||
                mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_ORANGE.ID ||
                mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_PINK.ID ||
                mapLayout[pacmanCurrentIndex + 28] === objectArray.GHOST_BLUE.ID){
                alert("bi bat");
            }
            let temp = mapLayout[pacmanCurrentIndex];
            mapLayout[pacmanCurrentIndex] = objectArray.ROAD;
            mapLayout[pacmanCurrentIndex + 28] = temp;
        }
    }
}