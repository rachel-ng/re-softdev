// set variables
var c = document.getElementById("slate");
var current_shape = "box";

// acknowledge buttons
var clear_button = document.getElementById("clear");
var toggle_button = document.getElementById("toggle");

// instantiate context
var ctx = c.getContext("2d");



// clear button
clear_button.addEventListener("click", function(e) {
  ctx.clearRect(0, 0, c.width, c.height)
  console.log("cleared");
});



// toggle button
toggle_button.addEventListener("click", function(e) {
  if (current_shape == "box") {
    toggle_button.innerHTML = "Toggle Box"; // changes button text
    current_shape = "dot";
  }
  else if (current_shape == "dot") {
    toggle_button.innerHTML = "Toggle Dot"; // changes button text
    current_shape = "box";
  }
});



// event listener so it actually draws
c.addEventListener("click", function(e) {
  ctx.fillStyle = "#8a99aa";
  if (current_shape == "box") {
    ctx.fillRect(e.offsetX, e.offsetY, 20, 20);
    // offsetX and offsetY are the coordinates of your mouse relative to the thing being spied on
  }
  else if (current_shape == "dot") {
    ctx.beginPath(); // empties list of paths and creates a new one
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
});
