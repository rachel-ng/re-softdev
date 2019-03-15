var svg = document.getElementById("vimage");
var rect = svg.getBoundingClientRect();

var clear_button = document.getElementById("but_clear");

clear_button.addEventListener("click", function(e) {
    svg.innerHTML = "";
    circle = true;
    console.log("cleared");
});

var p_x, p_y;
var circle = true;

svg.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.offsetX,  e.offsetY);
    if (circle) {
	e.preventDefault();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", e.offsetX);
	c.setAttribute("cy", e.offsetY);
	c.setAttribute("r", 10);
	c.setAttribute("fill", "red");
	c.setAttribute("stroke", "black");
	c.style.pointerEvents = "none";
	svg.appendChild(c);
	circle = false;
    }
    else if (!circle) {
	e.preventDefault();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", e.offsetX);
	c.setAttribute("cy", e.offsetY);
	c.setAttribute("r", 10);
	c.setAttribute("fill", "red");
	c.setAttribute("stroke", "black");
	c.style.pointerEvents = "none";
	svg.appendChild(c);

	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", p_x);
	l.setAttribute("y1", p_y);
	l.setAttribute("x2", e.offsetX);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("stroke", "black");
	svg.appendChild(l);
    }

    p_x = e.offsetX;
    p_y = e.offsetY;
    console.log(p_x,p_y);
});
