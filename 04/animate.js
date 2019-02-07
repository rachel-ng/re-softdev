var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var animate = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");

var requestID;
var radiusID = 0;
var growing = true;

  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor(Math.random() * (c.width - rectWidth));
  var rectY = Math.floor(Math.random() * (c.height - rectHeight));

  var xVel = 1;
  var yVel = 1;


var drawDot = function() {
  window.cancelAnimationFrame(requestID);
  ctx.fillStyle = "#8a99aa";
  if (growing && radiusID + c.width / 2 < c.width) {
    radiusID += 1;
  }
  else if (radiusID + c.width / 2 == c.width){
    radiusID -= 1;
    growing = false;
  }
  else if (radiusID == 0) {
    growing = true;
  }
  else if (!growing) {
    ctx.clearRect(0, 0, c.width, c.height)
    radiusID -= 1;
  }

  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radiusID, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  requestID = window.requestAnimationFrame(drawDot);
}

var dvdLogoSetup = function() {
  window.cancelAnimationFrame(requestID);

  // dimensions
  // location
  // direction movement



  var logo = new Image();
  logo.src = "logo_dvd.jpg";


  var dvdLogo = function() {
    ctx.clearRect(0, 0, c.width, c.height);

    rectX += xVel;
    rectY += yVel;

    if (rectX == 0) {
      xVel = 1;
    }
    if (rectX == c.width - rectWidth) {
      xVel = -1;
    }
    if (rectY == 0) {
      yVel = 1;
    }
    if (rectY == c.height - rectHeight) {
      yVel = -1;
    }

    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    requestID = window.requestAnimationFrame(dvdLogoSetup);

  }

  dvdLogo();
}



stop.addEventListener("click", function(e) {cancelAnimationFrame(requestID);});
animate.addEventListener("click", drawDot);
dvd.addEventListener("click", dvdLogoSetup);
