var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var b = document.getElementById("b");

b.addEventListener("click", f);

var f = function(){
    ctx.clearRect(0,0,500,300);
}

canvas.addEventListener("click", function(e) {
    mousex = e.clientX;
    mousey = e.clientY;
    ctx.fillStyle="#002366";
    ctx.fillRect(mousex, mousey, 50, 100);
});

