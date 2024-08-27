const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 200;
let radius = 40;
let flatIsTop;
let flatIsSide;
ctx.beginPath();
ctx.arc(x,y,radius, 0,2*Math.PI);
ctx.stroke();

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,radius, 0,2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    if (y - radius === 0){
        flatIsTop = true;
    }else if (y + radius === canvas.width){
        flatIsTop = false;
    }
    if (flatIsTop){
        y++;
    }else {
        y--;
    }
}, 1);
