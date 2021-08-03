
var last_xposition, last_yposition;
var color = "lime";
var width_line = 10;
var canvas = document.getElementById("mycanvas");
var screen_width = screen.width;
var new_width =  screen.width - 70; 
var new_height = screen.height - 300;
ctx = canvas.getContext("2d");
if (screen_width<992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow = "hidden";
}

myCanvas.addEventListner("touchstart", my_touchstart)
function my_touchstart(e){
    color = document.getElementById("colour_input").value;
    width = document.getElementById("width_input");
    

}

myCanvas.addEventListner("touchmove", my_touchmove)
function my_touchmove (e){
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width;
            console.log("last position of x and y");
            console.log(last_xposition+","+last_yposition);
            ctx.moveTo(last_xposition, last_yposition);

            console.log("current position of x and y position");
            console.log(current_position_of_mouse_x+","+current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();        
        last_xposition = current_position_of_mouse_x; 
        last_yposition = current_position_of_mouse_y;
    }

