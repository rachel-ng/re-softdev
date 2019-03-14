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



var drawCircle = function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.addEventListener("click", function(evt) {c_clicked(evt)})

  if (draw) {
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "#8a99aa");
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
    c.setAttribute("cx", Math.floor(Math.random() * 500));
    c.setAttribute("cy", Math.floor(Math.random() * 500));
    c.setAttribute("r", 10);
    c.setAttribute("fill", "#8a99aa");
    svg.appendChild(c);
  }
}
