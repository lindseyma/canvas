var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var b = document.getElementById("b");
ctx.beginPath();

b.addEventListener("click", function(e){
    console.log("clear button");
    ctx.clearRect(0,0,300,500);
});


var dots = function(e){
    mousex=e.offsetX;
    mousey= e.offsetY;
    ctx.moveTo(mousex+10,mousey);
    ctx.arc(mousex, mousey, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="green";
    ctx.fill();
}

var rect = function(e){
    mousex = e.offsetX;
    mousey = e.offsetY;
    ctx.fillStyle="#002366";
    ctx.fillRect(mousex, mousey, 50, 100);
};

canvas.addEventListener("click", dots);
