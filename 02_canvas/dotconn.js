// Team Existential Crisis -- Sajed Nahian and Rachel Ng
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31


// set variables
var c = document.getElementById("slate");

// acknowledge buttons
var clear_button = document.getElementById("clear");

// instantiate context
var ctx = c.getContext("2d");



// clear button
clear_button.addEventListener("click", function(e) {
  ctx.clearRect(0, 0, c.width, c.height)
  console.log("cleared");
});



// event listener so it actually draws
c.addEventListener("click", function(e) {
    ctx.fillStyle = "#ff0000";
    ctx.beginPath(); // empties list of paths and creates a new one
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    //ctx.closePath()
    
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.closePath();
    ctx.moveTo(e.offsetX, e.offsetY);
    //ctx.fill();
});
