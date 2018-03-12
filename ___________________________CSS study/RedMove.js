window.onload = function () {

  var snd = new Audio("click.wav");

  var canvas  = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var xcoord  = 0;
  var ycoord  = 0;

  window.addEventListener('keydown', whatKey, true);

  context.fillStyle = "yellow";

  context.fillRect(xcoord, ycoord, 50, 50);

  context.fillStyle = "red";

  context.fillRect(200, 200, 50, 50);

  context.stroke;

  function whatKey(evt) {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(evt.keyCode, 50, 50);

    context.fillStyle = "red";

    context.fillRect(200, 200, 50, 50);

    context.stroke;

    context.fillStyle = "yellow";

    switch (evt.keyCode) {

      case 220: 
      console.log("x" + xcoord);
      console.log("y" + ycoord);
      break;

      case 39:   // right arrow key
        xcoord = xcoord + 10;
        if (xcoord > 750) {
          xcoord = 750;
        }
        if (xcoord > 150 && 
            xcoord < 250 && 
            ycoord > 150 && 
            ycoord < 250) {
          xcoord = xcoord - 10;
          snd.play();
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

        break;

      case 37:   // left arrow key
        xcoord = xcoord - 10;
        if (xcoord < 0) {
          xcoord = 0;
          snd.play();
        }
        if (xcoord < 250 && 
            xcoord > 150 && 
            ycoord > 150 && 
            ycoord < 250) {
          xcoord = xcoord + 10;
          snd.play();
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

        break;
//_______________________________________________________________________^^^vvvv

      case 38:   // up arrow key
        ycoord = ycoord - 10;
        if (ycoord < 0) {
          ycoord = 0;
          snd.play();
        }
        if (ycoord < 250 && 
            ycoord > 150 && 
            xcoord > 150 &&
            xcoord < 250) {
        ycoord = ycoord + 10;
          snd.play();
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

        break;

      case 40:   // down arrow key
        ycoord = ycoord + 10;
        if (ycoord > 350) {
          ycoord = 350;
          snd.play();
        }
        if (ycoord > 150 && 
            ycoord < 250 && 
            xcoord > 150 && 
            xcoord < 250) {
          ycoord = ycoord - 10;
          snd.play();
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

    }

  }

}

