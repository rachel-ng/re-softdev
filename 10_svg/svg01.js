// Rachel Ng
// SoftDev2 pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-14


var svg = document.getElementById("vimage");
var clear_button = document.getElementById("but_clear");

clear_button.addEventListener("click", function(e) {
  svg.innerHTML = "";
  console.log("cleared");
});

svg.addEventListener("click", function(e) {drawCircle(e);});

draw = true;

var circle = function(cx, cy, r, fill, elem_node) {
  elem_node.setAttribute("cx", cx);
  elem_node.setAttribute("cy", cy);
  elem_node.setAttribute("r", r);
  elem_node.setAttribute("fill", fill);
}

var drawCircle = function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.addEventListener("click", function(evt) {c_clicked(evt)})

  if (draw) {
    circle(e.offsetX, e.offsetY, 10, "#8a99aa", c);
    svg.appendChild(c);
  }

  draw = true;
}

var c_clicked = function(e) {
  draw = false;

  if (e.target.getAttribute("fill") == "#8a99aa") {
    e.target.setAttribute("fill","#8aa9aa")
  }
  else {
    svg.removeChild(e.target)
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.addEventListener("click", function(evt){c_clicked(evt)});
    circle(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), 10, "#8a99aa", c);
    svg.appendChild(c);
  }
}
