var c = document.getElementById("slate");
var ctx = c.getContext("2d");



var voodoo_mouse_stuff = (canvas, evt) => {
  var bounds = canvas.getBoundingClientRect();
  console.log("x: " + (evt.clientX - bounds.left) + "    y: " + (evt.clientY - bounds.top));
  return { x: evt.clientX - bounds.left, y: evt.clientY - bounds.top };
}



var clear_canv = () => {
  ctx.fillStyle = "#123411"
  ctx.clearRect(0, 0, c.width, c.height) // top left corner
  console.log("cleared");
}

var clear_button = document.getElementById("clear");
clear_button.addEventListener("click", clear_canv);



var toggle_button = document.getElementById("toggle");

var toggle_shape = () => {
  if (toggle_button.innerHTML == "Toggle Dot") {
    toggle_button.innerHTML = "Toggle Box";
  }
  else if (toggle_button.innerHTML == "Toggle Box") {
    toggle_button.innerHTML = "Toggle Dot";
  }
}

toggle_button.addEventListener("click", toggle_shape);



var current_shape = () => {
  if (toggle_button.innerHTML == "Toggle Dot") {
    return("box");
  }
  else if (toggle_button.innerHTML == "Toggle Box") {
    return("dot");
  }
}



var draw_stuff = (mouse_coords, current_shape) => {
  ctx.fillStyle = "#8a99aa";
  if (current_shape == "box") {
    ctx.fillRect(mouse_coords.x - 10, mouse_coords.y - 10, 20, 20);
  }
  else {
    ctx.beginPath();
    ctx.arc(mouse_coords.x, mouse_coords.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

c.addEventListener("click", function(evt) { draw_stuff(voodoo_mouse_stuff(c, evt), current_shape()); });
