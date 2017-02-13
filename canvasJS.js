var b = document.getElementById("b");
b.addEventListener("click", f);
var ctx=c.getContext('2d');

var f = function(){
	ctx.clearRect(0,0,500,300);
}
