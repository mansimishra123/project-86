var mouseEvent="empty"
var last_postion_x,last_postion_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=3;

        console.log("Last position of x and y coordinates =");
        console.log("x="+last_postion_x+"y="+last_postion_y);
ctx.moveTo(last_postion_x,last_postion_y);

console.log("current position of x and y coordinates =");
console.log("x="+current_position_of_x+"y="+current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);

ctx.stroke();
    }

last_postion_x=current_position_of_x;
last_postion_y=current_position_of_y;

