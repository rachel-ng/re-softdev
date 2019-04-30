// var x_reduce = x.reduce(function a, b {return (a + b);})

// var x_map = x.map(function(n) {return n * 2;});

// var x_filter = x.filter(function(n) {return (n % 2 == 0);});

var request = new XMLHttpRequest();
request.open("GET", "data.json", false);
request.send(null);
var data_raw = JSON.parse(request.responseText);
var data = data_raw.map(function(n) {return n});

console.log(data);
console.log(data[0]);

var headers = ['DBN', 'Name', 'schoolyear', 'fl_percent', 'frl_percent', 'total_enrollment', 'prek', 'k', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8', 'grade9', 'grade10', 'grade11', 'grade12', 'ell_num', 'ell_percent', 'sped_num', 'sped_percent', 'ctt_num', 'selfcontained_num', 'asian_num', 'asian_per', 'black_num', 'black_per', 'hispanic_num', 'hispanic_per', 'white_num', 'white_per', 'male_num', 'male_per', 'female_num', 'female_per'];
console.log(headers);

var table = document.getElementById("t");
var sel = document.getElementById("s");
var sel_val;
sel.addEventListener('change', function(){
  sel_val = this.value;
  console.log(sel_val);
});

sel.innerHTML += headers.reduce(function (a,b) {return a + "<option value='" + b + "'>" + b + "</option>";}, "");

console.log(sel.value)

console.log(Object.keys(data[3]).filter(function(j) {return data[3][j]}))

//console.log(data.filter(function(n) {if (sel_val in Object.keys(n)) {return n;}}))

table.innerHTML += "<tr>" + headers.reduce(function (s,n) {return s + "<th>" + n + "</th>";}, "") + "</tr>";


//table.innerHTML += data.reduce(function (s,n) {return s + "<tr>" + "<td>" + n["DBN"] + "</td><td>" + n["Name"] + "</td><td>" + n["schoolyear"] + "</td>"+ "<tr>";},"");

table.innerHTML += data.reduce(function (s,n) {return s + "<tr>" + headers.reduce(function(i,k) {return i + "<td>" + n[k] + "</td>"}, "")+ "<tr>";},"");


//table.innerHTML += data.filter
