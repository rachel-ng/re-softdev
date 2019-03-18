// Rachel Ng
// SoftDev2 pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-14


var svg = document.getElementById("vimage");
var requestID;

var clear_button = document.getElementById("but_clear");
var move_button = document.getElementById("but_move");
var rand_button = document.getElementById("but_rand");

var h = 500;
var w = 500;

svg.addEventListener("click", function(e) {drawCircle(e);});


clear_button.addEventListener("click", function(e) {
  svg.innerHTML = "";
  console.log("cleared");
});

move_button.addEventListener("click", function(e) {
  moving(e)
});






draw = true;

var circle = function(cx, cy, r, fill, elem_node) {
  elem_node.setAttribute("cx", cx);
  elem_node.setAttribute("cy", cy);
  elem_node.setAttribute("r", r);
  elem_node.setAttribute("fill", fill);
  elem_node.setAttribute("xVel", 1);
  elem_node.setAttribute("yVel", 1);
  svg.appendChild(elem_node);
}


var drawCircle = function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.addEventListener("click", function(evt) {c_clicked(evt)})

  if (draw) {
    circle(e.offsetX, e.offsetY, 10, "#8a99aa", c);
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
  }
}


var moving = function(e) {
  window.cancelAnimationFrame(requestID);

  var elems = svg.children;

  for (var i = 0; i < elems.length; i++) {
    window.cancelAnimationFrame(requestID);

    console.log(elems[i])

    var cx = parseInt( elems[i].getAttribute("cx") );
    var cy = parseInt( elems[i].getAttribute("cy") );

    var xVel = parseInt( elems[i].getAttribute("xVel") );
    var yVel = parseInt( elems[i].getAttribute("yVel") );
    if (cx >= w || cx <= 0) {
      xVel *= 1;
      elems[i].setAttribute( "cx", cx );
    }
    if (cy == 0 || cy == h) {
      yVel *= -1;
      elems[i].setAttribute( "cy", cy );
    }

    cx += xVel;
    cy += yVel;

    elems[i].setAttribute( "cx", cx );
    elems[i].setAttribute( "cy", cy );

    requestID = requestAnimationFrame(moving);
  }
};
