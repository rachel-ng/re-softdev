var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var animate = document.getElementById("circle");
var stop = document.getElementById("stop");

var requestID;
var radiusID = 50;
var growing = true;


var drawDot = function() {
    if (growing) {
	radiusID += 1; 
    }
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radiusID, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}



cancelAnimationFrame(requestID)

stop.addEventListener("click", function(e){growing = false;});
animate.addEventListener("click", function(e) {requestID = requestAnimationFrame(drawDot);
});//growing = true);
