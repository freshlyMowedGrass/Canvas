window.onload = function ()

{

var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");

context.rect(20,20,150,100);
context.rect(100,100,150,100);


context.stroke();

}

