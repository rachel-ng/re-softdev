var c = document.getElementById("slate");

var ctx = c.getContext("2d");

var clear_canv = () => {
    ctx.fillRect(0, 0, c.width, c.height) // top left corner
}

var clear_button = document.getElementById("clear");
clear_button.addEventListener("click", clear_canv);

function draw() {
    var canvas = document.getElementById('slate');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}

draw()
