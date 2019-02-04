var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var clear_button = document.getElementById("clear");



clear_button.addEventListener("click", function(e) {
  ctx.clearRect(0, 0, c.width, c.height)
  console.log("cleared");
});



var p_x = -1000
var p_y = -1000;
var circle = true;

c.addEventListener("click", function(e) {
  ctx.fillStyle = "#8a99aa";
  if (circle) {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    circle = false;
  }
  else if (!circle) {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(p_x, p_y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
  p_x = e.offsetX;
  p_y = e.offsetY;
});
