canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var last_position_x,last_position_y;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown") {
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(current_position_x,current_position_y,40,0,2*Math.PI);
ctx.stroke();

}
last_position_x=current_position_x;
last_position_y=current_position_y;
}
