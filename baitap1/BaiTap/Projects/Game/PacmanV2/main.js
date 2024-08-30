let score = document.querySelector(".score");
let grid = document.querySelector(".grid");
let html = "";
let delayForMovement = 150;
let pacman = new Pacman(5);
let ghostRed = new Ghost(10);
let ghostOrange = new Ghost(11);
let ghostPink = new Ghost(12);
let ghostBlue = new Ghost(13);
let count = 0;
let audioStartGame = document.querySelector(".myAudioStartGame");
setInterval(function () {
    console.log("test");
    audioStartGame.play();
}, 1000);


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
    PACMAN_PLAYER: pacman,
    GHOST_RED: ghostRed,
    GHOST_ORANGE: ghostOrange,
    GHOST_PINK: ghostPink,
    GHOST_BLUE: ghostBlue
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
ghostAutoMove(objectInGamePacman.GHOST_RED, delayForMovement);
ghostAutoMove(objectInGamePacman.GHOST_ORANGE, delayForMovement);
ghostAutoMove(objectInGamePacman.GHOST_PINK, delayForMovement);
ghostAutoMove(objectInGamePacman.GHOST_BLUE, delayForMovement);

window.addEventListener("keyup", function (e) {
    // console.log(e.key);
    if (objectInGamePacman.PACMAN_PLAYER.flagLose === false){
        if (e.key === "d") {
            objectInGamePacman.PACMAN_PLAYER.moveRight(layout, objectInGamePacman);
        }
        else if (e.key === "w") {
            objectInGamePacman.PACMAN_PLAYER.moveUp(layout, objectInGamePacman);
        }
        else if (e.key === "a") {
            objectInGamePacman.PACMAN_PLAYER.moveLeft(layout, objectInGamePacman);
        }
        else if (e.key === "s") {
            objectInGamePacman.PACMAN_PLAYER.moveDown(layout, objectInGamePacman);
        }
        drawMap();
        score.innerHTML = objectInGamePacman.PACMAN_PLAYER.score;
    }
});


function drawMap() {
    html = "";
    for (let i = 0; i < layout.length; i++) {
        if (count === 0){
            html += "<tr>"
        }
        count++;
        if (layout[i] === objectInGamePacman.DOT){
            html += "<td><div class='pac_dot'></div></td>";
        }
        else if (layout[i] === objectInGamePacman.WALL){
            html += "<td><div class='wall'></div></td>";
        }
        else if (layout[i] === ghostRed.ID){
            html += "<td><div class='ghost_red'></div></td>";
        }
        else if (layout[i] === ghostOrange.ID){
            html += "<td><div class='ghost_orange'></div></td>";
        }
        else if (layout[i] === ghostPink.ID){
            html += "<td><div class='ghost_pink'></div></td>";
        }
        else if (layout[i] === ghostBlue.ID){
            html += "<td><div class='ghost_blue'></div></td>";
        }
        else if (layout[i] === objectInGamePacman.POWER){
            html += "<td><div class='power-pellet'></div></td>";
        }
        else if (layout[i] === objectInGamePacman.ROAD){
            html += "<td><div class='road'></div></td>";
        }
        else if (layout[i] === pacman.ID){
            html += "<td><div class='pacman'></div></td>";
        }
        if (count === 28){
            count = 0;
            html += "</tr>"
        }
    }
    // console.log(html)
    grid.innerHTML = html;
}

function ghostAutoMove(ghost, timerDelayForMovement){
    let x = setInterval(function (){
        // console.log("lose: " + objectInGamePacman.PACMAN_PLAYER.flagLose);
        if (objectInGamePacman.PACMAN_PLAYER.flagLose === true){
            clearInterval(x);
        }
        ghost.autoMove(layout, objectInGamePacman);
        drawMap();
    }, timerDelayForMovement);
}
