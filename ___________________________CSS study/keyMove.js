window.onload = function () {

  var canvas  = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var xcoord  = 0;
  var ycoord  = 0;

  window.addEventListener('keydown', whatKey, true);

  function whatKey(evt) {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(evt.keyCode, 50, 50);

    switch (evt.keyCode) {

      case 39:   // right arrow key
        xcoord = xcoord + 10;
        if (xcoord > 750) {
          xcoord = 750;
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

        break;

      case 37:   // left arrow key
        xcoord = xcoord - 10;
        if (xcoord < 0) {
          xcoord = 0;
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

        break;

      case 38:   // up arrow key
        ycoord = ycoord - 10;
        if (ycoord < 0) {
          ycoord = 0;
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

        break;

        case 40:   // down arrow key
        ycoord = ycoord + 10;
        if (ycoord > 350) {
          ycoord = 350;
        }

        context.fillRect(xcoord, ycoord, 50, 50);
        context.stroke;

    }

  }

}