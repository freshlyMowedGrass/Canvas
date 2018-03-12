window.onload = function()
{
    var canvas  = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var xcoord  = 100;

    setInterval(function() {

        context.clearRect ( 0 , 0 , canvas.width, canvas.height );

        context.fillStyle = "green";

        context.fillRect(xcoord, 100, 50, 50);

        context.stroke();

        xcoord = xcoord+1;

    }, 100);

}
