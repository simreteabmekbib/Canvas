var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width-30;
var y = canvas.height/2;
var dx = 2;
var dy = -2;
var ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawLine();
    if(x + dx > canvas.width || x + dx < 0) {
        dx = -dx;
    }
    
    if(y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

function drawLine(){
    ctx.beginPath();
ctx.moveTo(canvas.width/2, 0);
ctx.lineTo(canvas.width/2, 320);
ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
ctx.stroke();
}

setInterval(draw, 10);