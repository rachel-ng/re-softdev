// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //e.stopPropagation();
  //A: the subsequent alerts that would normally show up no longer do  
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
    trs[x].addEventListener('click', clicky,true);
}

table.addEventListener('click', clicky, true);
// true -- useCapture
// fxn that clicking on table executes will be executed before those of its children

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// table > tds > trs 
