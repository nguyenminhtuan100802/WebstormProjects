let score = document.querySelector(".score");
let grid = document.querySelector(".grid");
let html = "";
let count = 0;
let delayForGhost = 100;
/*
* 0: pacman dot
* 1: wall
* 2: ghost
* 3: power
* 4: road
* 5: pacman player
* */
const objectInGamePacman = {
    DOT: 0,
    WALL: 1,
    POWER: 3,
    ROAD: 4,
    PACMAN_PLAYER: 5,
    GHOST_RED: 10,
    GHOST_ORANGE: 11,
    GHOST_PINK: 12,
    GHOST_BLUE: 13
};
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 12, 13, 10, 11, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]



drawMap();
ghostAutoMove(objectInGamePacman.GHOST_RED, delayForGhost);
ghostAutoMove(objectInGamePacman.GHOST_ORANGE, delayForGhost);
ghostAutoMove(objectInGamePacman.GHOST_PINK, delayForGhost);
ghostAutoMove(objectInGamePacman.GHOST_BLUE, delayForGhost);
window.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (e.key === "d") {
        moveRight();
    }
    else if (e.key === "w") {
        moveUp();
    }
    else if (e.key === "a") {
        moveLeft();
    }
    else if (e.key === "s") {
        moveDown();
    }
});


function drawMap() {
    html = "";
    for (let i = 0; i < layout.length; i++) {
        if (layout[i] === objectInGamePacman.DOT){
            html += "<div class='pac_dot'></div>";
        }
        else if (layout[i] === objectInGamePacman.WALL){
            html += "<div class='wall'></div>";
        }
        else if (layout[i] === objectInGamePacman.GHOST_RED){
            html += "<div class='ghost_red'></div>";
        }
        else if (layout[i] === objectInGamePacman.GHOST_ORANGE){
            html += "<div class='ghost_orange'></div>";
        }
        else if (layout[i] === objectInGamePacman.GHOST_PINK){
            html += "<div class='ghost_pink'></div>";
        }
        else if (layout[i] === objectInGamePacman.GHOST_BLUE){
            html += "<div class='ghost_blue'></div>";
        }
        else if (layout[i] === objectInGamePacman.POWER){
            html += "<div class='power-pellet'></div>";
        }
        else if (layout[i] === objectInGamePacman.ROAD){
            html += "<div class='road'></div>";
        }
        else if (layout[i] === objectInGamePacman.PACMAN_PLAYER){
            html += "<div class='pacman'></div>";
        }
    }
    grid.innerHTML = html;
}



function moveRight() {
    let pacmanCurrentIndex = layout.indexOf(objectInGamePacman.PACMAN_PLAYER);
    console.log(pacmanCurrentIndex);
    if (layout[pacmanCurrentIndex + 1] !== objectInGamePacman.WALL){
        if (layout[pacmanCurrentIndex + 1] === objectInGamePacman.GHOST_RED ||
            layout[pacmanCurrentIndex + 1] === objectInGamePacman.GHOST_ORANGE ||
            layout[pacmanCurrentIndex + 1] === objectInGamePacman.GHOST_PINK ||
            layout[pacmanCurrentIndex + 1] === objectInGamePacman.GHOST_BLUE){
            alert("bi bat");
        }
        let temp = layout[pacmanCurrentIndex];
        layout[pacmanCurrentIndex] = objectInGamePacman.ROAD;
        layout[pacmanCurrentIndex + 1] = temp;
        drawMap();
    }
}
function moveLeft() {
    let pacmanCurrentIndex = layout.indexOf(objectInGamePacman.PACMAN_PLAYER);
    console.log(pacmanCurrentIndex);
    if (layout[pacmanCurrentIndex - 1] !== objectInGamePacman.WALL){
        if (layout[pacmanCurrentIndex - 1] === objectInGamePacman.GHOST_RED ||
            layout[pacmanCurrentIndex - 1] === objectInGamePacman.GHOST_ORANGE ||
            layout[pacmanCurrentIndex - 1] === objectInGamePacman.GHOST_PINK ||
            layout[pacmanCurrentIndex - 1] === objectInGamePacman.GHOST_BLUE){
            alert("bi bat");
        }
        let temp = layout[pacmanCurrentIndex];
        layout[pacmanCurrentIndex] = objectInGamePacman.ROAD;
        layout[pacmanCurrentIndex - 1] = temp;
        drawMap();
    }
}
function moveUp() {
    let pacmanCurrentIndex = layout.indexOf(objectInGamePacman.PACMAN_PLAYER);
    console.log(pacmanCurrentIndex);
    if (layout[pacmanCurrentIndex - 28] !== objectInGamePacman.WALL){
        if (layout[pacmanCurrentIndex - 28] === objectInGamePacman.GHOST_RED ||
            layout[pacmanCurrentIndex - 28] === objectInGamePacman.GHOST_ORANGE ||
            layout[pacmanCurrentIndex - 28] === objectInGamePacman.GHOST_PINK ||
            layout[pacmanCurrentIndex - 28] === objectInGamePacman.GHOST_BLUE){
            alert("bi bat");
        }
        let temp = layout[pacmanCurrentIndex];
        layout[pacmanCurrentIndex] = objectInGamePacman.ROAD;
        layout[pacmanCurrentIndex - 28] = temp;
        drawMap();
    }
}
function moveDown() {
    let pacmanCurrentIndex = layout.indexOf(objectInGamePacman.PACMAN_PLAYER);
    console.log(pacmanCurrentIndex);
    if (layout[pacmanCurrentIndex + 28] !== objectInGamePacman.WALL){
        if (layout[pacmanCurrentIndex + 28] === objectInGamePacman.GHOST_RED ||
            layout[pacmanCurrentIndex + 28] === objectInGamePacman.GHOST_ORANGE ||
            layout[pacmanCurrentIndex + 28] === objectInGamePacman.GHOST_PINK ||
            layout[pacmanCurrentIndex + 28] === objectInGamePacman.GHOST_BLUE){
            alert("bi bat");
        }
        let temp = layout[pacmanCurrentIndex];
        layout[pacmanCurrentIndex] = objectInGamePacman.ROAD;
        layout[pacmanCurrentIndex + 28] = temp;
        drawMap();
    }
}
function ghostMoveRight(ghost){
    let ghostCurrentIndex = layout.indexOf(ghost);
    if (layout[ghostCurrentIndex + 1] !== objectInGamePacman.WALL){
        if (layout[ghostCurrentIndex + 1] === objectInGamePacman.PACMAN_PLAYER){
            alert("bi bat");
        }
        let temp = layout[ghostCurrentIndex];
        layout[ghostCurrentIndex] = layout[ghostCurrentIndex + 1];
        layout[ghostCurrentIndex + 1] = temp;
        drawMap();
    }
}
function ghostMoveLeft(ghost){
    let ghostCurrentIndex = layout.indexOf(ghost);
    if (layout[ghostCurrentIndex - 1] !== objectInGamePacman.WALL){
        if (layout[ghostCurrentIndex - 1] === objectInGamePacman.PACMAN_PLAYER){
            alert("bi bat");
        }
        let temp = layout[ghostCurrentIndex];
        layout[ghostCurrentIndex] = layout[ghostCurrentIndex - 1];
        layout[ghostCurrentIndex - 1] = temp;
        drawMap();
    }
}
function ghostMoveUp(ghost){
    let ghostCurrentIndex = layout.indexOf(ghost);
    if (layout[ghostCurrentIndex - 28] !== objectInGamePacman.WALL){
        if (layout[ghostCurrentIndex - 28] === objectInGamePacman.PACMAN_PLAYER){
            alert("bi bat");
        }
        let temp = layout[ghostCurrentIndex];
        layout[ghostCurrentIndex] = layout[ghostCurrentIndex - 28];
        layout[ghostCurrentIndex - 28] = temp;
        drawMap();
    }
}
function ghostMoveDown(ghost){
    let ghostCurrentIndex = layout.indexOf(ghost);
    if (layout[ghostCurrentIndex + 28] !== objectInGamePacman.WALL){
        if (layout[ghostCurrentIndex + 28] === objectInGamePacman.PACMAN_PLAYER){
            alert("bi bat");
        }
        let temp = layout[ghostCurrentIndex];
        layout[ghostCurrentIndex] = layout[ghostCurrentIndex + 28];
        layout[ghostCurrentIndex + 28] = temp;
        drawMap();
    }
}
function ghostAutoMove(ghost, timerDelayForMovement){
    setInterval(function (){
        let ghostDecision = Math.floor(Math.random() * 4);
        if (ghostDecision === 0){
            ghostMoveRight(ghost);
        }
        else if (ghostDecision === 1){
            ghostMoveLeft(ghost);
        }
        else if (ghostDecision === 2){
            ghostMoveUp(ghost);
        }
        else if (ghostDecision === 3){
            ghostMoveDown(ghost);
        }
    }, timerDelayForMovement);
}
