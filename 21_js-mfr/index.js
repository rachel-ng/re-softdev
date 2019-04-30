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

var headers = Object.keys(data[0]);
console.log(headers);

var table = document.getElementById("t")


console.log(Object.keys(data[3]).filter(function(j) {
  console.log(j);
  console.log(headers);
  console.log(String(j) in headers)
  if (j in headers){
    console.log(data[3][j]);
  }
}))

table.innerHTML += "<tr>" + headers.reduce(
  function (s,n) {return s + "<th>" + n + "</th>";}, ""
) + "</tr>";

table.innerHTML += data.reduce(
  function (s,n) {return s + "<tr>"+
                  Object.keys(n).filter(function(j) {if (j in headers){ return (j);}}).reduce(function (k,i) {return k + "<td>" + i + "</td>";},"") + "</tr>"},"");
