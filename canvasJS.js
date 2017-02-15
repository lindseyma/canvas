var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var b = document.getElementById("b");

b.addEventListener("click", function(e){
    console.log("clear button");
    ctx.clearRect(0,0,300,500);
});



/*
canvas.addEventListener("click", function(e) {
    mousex = e.clientX;
    mousey = e.clientY;
    ctx.fillStyle="#002366";
    ctx.fillRect(mousex, mousey, 50, 100);
});				
*/
