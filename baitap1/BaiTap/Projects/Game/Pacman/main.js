let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let player = new Player(60, 60, 20, 2);
const map = [
    ["-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", " ", "-", "-", " ", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", " ", "-", "-", " ", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-"]
]
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawBoundary();
player.draw();


window.addEventListener("keypress", (e) => {
    let flagCollisionRight = false;
    let flagCollisionLeft = false;
    let flagCollisionUp = false;
    let flagCollisionDown = false;
    console.log(e.key);
    if (e.key === "d") {
        // let intervalMoveRight = setInterval(function (){
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[0].length; j++) {
                    if (map[i][j] === "-") {
                        let boundary = new Boundary(j * 40, i * 40);
                        if (checkPacmanAtRectangleEdge(player, boundary))
                        {
                            console.log("đụng phải");
                            flagCollisionRight = true;
                            // clearInterval(intervalMoveRight);
                        }
                    }
                }
            }
            if (!flagCollisionRight) {
                clearScreen();
                drawBoundary();
                player.moveRight();
            }
        // }, 10);
    }
    else if (e.key === "w"){
        // let intervalMoveUp = setInterval(function (){
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[0].length; j++) {
                    if (map[i][j] === "-") {
                        let boundary = new Boundary(j * 40, i * 40);
                        if (checkPacmanAtRectangleEdge(player, boundary))
                        {
                            console.log("đụng trên");
                            flagCollisionUp = true;
                            // clearInterval(intervalMoveUp);
                        }
                    }
                }
            }
            if (!flagCollisionUp) {
                clearScreen();
                drawBoundary();
                player.moveUp();
            }
        // }, 10);
    }
    else if (e.key === "a"){
        // let intervalMoveLeft = setInterval(function (){
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[0].length; j++) {
                    if (map[i][j] === "-") {
                        let boundary = new Boundary(j * 40, i * 40);
                        if (checkPacmanAtRectangleEdge(player, boundary))
                        {
                            console.log(player.x + player.radius + "-" + boundary.x + "-" + player.y + "-" + (boundary.y + boundary.height / 2));
                            console.log("đụng trái");
                            flagCollisionLeft = true;
                            // clearInterval(intervalMoveLeft);
                        }
                    }
                }
            }
            if (!flagCollisionLeft) {
                clearScreen();
                drawBoundary();
                player.moveLeft();
            }
        // }, 10);
    }
    else if (e.key === "s"){
        // let intervalMoveDown = setInterval(function (){
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[0].length; j++) {
                    if (map[i][j] === "-") {
                        let boundary = new Boundary(j * 40, i * 40);
                        if (checkPacmanAtRectangleEdge(player, boundary))
                        {

                            // console.log(player.x + player.radius + "-" + boundary.x + "-" + player.y + "-" + (boundary.y + boundary.height / 2));
                            console.log("đụng dưới");
                            flagCollisionDown = true;
                            // clearInterval(intervalMoveDown);
                        }
                    }
                }
            }
            if (!flagCollisionDown) {
                clearScreen();
                drawBoundary();
                player.moveDown();
            }
        // }, 10);
    }
    // console.log(flagCollision);
});
function drawBoundary() {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] === "-") {
                let boundary = new Boundary(j*40, i*40);
                boundary.draw();
            }
        }
    }
}



function clearScreen() {
    c.clearRect(0, 0, canvas.width, canvas.height);
}
// console.log(map.length)
// console.log(map[0].length)
function checkPacmanAtRectangleEdge(pacman, rectangle) {
    // Calculate the distance between Pacman's center and the rectangle's edges
    const dx1 = pacman.x - rectangle.x;
    const dy1 = pacman.y - rectangle.y;
    const dx2 = pacman.x - (rectangle.x + rectangle.width);
    const dy2 = pacman.y - (rectangle.y + rectangle.height);

    // Check if Pacman is within the rectangle's boundaries
    const isInsideX = dx1 * dx2 <= 0;
    const isInsideY = dy1 * dy2 <= 0;

    // Check if Pacman is touching the edge
    const isTouchingEdge = (Math.abs(dx1) <= pacman.radius || Math.abs(dx2) <= pacman.radius) &&
        (Math.abs(dy1) <= pacman.radius || Math.abs(dy2) <= pacman.radius);

    return isInsideX && isInsideY && isTouchingEdge;
}
