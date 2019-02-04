var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var animate = document.getElementById("circle");
var stop = document.getElementById("stop");

var requestID;
var radiusID = 0;
var growing = true;



var drawDot = function() {
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

  requestID = requestAnimationFrame(drawDot);
}



stop.addEventListener("click", function(e) {cancelAnimationFrame(requestID);});
animate.addEventListener("click", drawDot);
