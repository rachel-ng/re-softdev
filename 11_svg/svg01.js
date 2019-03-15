// Rachel Ng
// SoftDev2 pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-14


var svg = document.getElementById("vimage");
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var clear_button = document.getElementById("but_clear");
var move_button = document.getElementById("but_clear");
var rand_button = document.getElementById("but_rand");

var requestID;

// location
var rectX = Math.floor(Math.random() * (c.width - rectWidth));
var rectY = Math.floor(Math.random() * (c.height - rectHeight));

// direction movement
var xVel = 1;
var yVel = 1;

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
      circle(e.offsetX, e.offsetY, 10, "#8a99aa", c);
  }

  draw = true;
}

var circle = function(cx, cy, r, fill, elem_node) {
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill", fill);
    svg.appendChild(elem_node);
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
    c.setAttibute("cx", );
    c.setAttribute("cy", Math.floor(Math.random() * 500));
    c.setAttribute("r", 10);
    c.setAttribute("fill", "#8a99aa");
    svg.appendChild(c);
  }
}

var moving = function() {
  window.cancelAnimationFrame(requestID);

  var dvdLogo = function() {
    ctx.clearRect(0, 0, c.width, c.height);

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

    rectX += xVel;
    rectY += yVel;

    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    requestID = window.requestAnimationFrame(dvdLogoSetup);
  }

  dvdLogo();
}
