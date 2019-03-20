// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td');
// gets all <td>'s


var clicky = function(e) { // clicking on thing
    alert( this.innerHTML );
    // creates an alert with whatever's inside the node
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}
// all <td>'s create an alert with whatever's inside it 
