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

//table.innerHTML += "<tr>" + headers.reduce(function (s,n) {return s + "<th>" + n + "</th>";}, "") + "</tr>";

var selected = document.getElementById("s");
var measure = document.getElementById("m");
var year = document.getElementById("y");

selected.innerHTML += headers.reduce(function (a,b) {return a + "<option value='" + b + "'>" + b + "</option>";}, "");

var s_val = selected.value;
var m_val = measure.value;
var y_val = year.value;

selected.addEventListener('change', function(){
  s_val = this.value;
  console.log(s_val);
  update_table(m_val, y_val, s_val);
});


measure.addEventListener('change', function(){
  m_val = this.value;
  console.log(m_val);
  update_table(m_val, y_val, s_val);
});

year.addEventListener('change', function(){
  y_val = this.value;
  console.log(y_val);
  update_table(m_val, y_val, s_val);
});


var res = document.getElementById("results");

function update_table (m_val, y_val, s_val) {
  var intable;
  table.innerHTML = ""
  res.innerHTML = ""
  table.innerHTML += "<tr><th>DBN</th><th>Name</th><th>schoolyear</th><th>" + s_val + "</th></tr>";
  if (y_val == "n/a") {

    in_table = data.filter(function(n) {return n[s_val] > 0;});

    if (m_val == "avg") {
      res.innerHTML = "average " + s_val + ": " + in_table.reduce(function(a,b) {return a + b[s_val]}, 0) / in_table.reduce(function(a,b) {return a + 1}, 0);
    }

    if (m_val == "num") {
      res.innerHTML = "number of schools with " + s_val + ": " + in_table.reduce(function(a,b) {return a + 1}, 0);
    }

    if (m_val == "median") {
      all_nums = in_table.map(function(b) {return b[s_val]}, 0)
      nums_len = all_nums.length;
      if (nums_len % 2 == 0) {
        med = (all_nums[nums_len / 2 - 1] + numbers[nums_len / 2]) / 2
        res.innerHTML = "median " + s_val + ": " + med;
        console.log(med)
      }
      else {
        med = all_nums[(nums_len - 1) / 2];
        res.innerHTML = "median " + s_val + ": " + med;
        console.log(med)
      }
    }

    table.innerHTML += in_table.reduce(function (s,n) {return s + "<tr>" + "<td>" + n["DBN"] + "</td><td>" + n["Name"] + "</td><td>" + n["schoolyear"] + "</td><td>" + n[s_val] + "</td>"+ "<tr>";},"");
  }

  else {

    in_table = data.filter(function(n) {return n[s_val] > 0 && n["schoolyear"] == y_val;});

    if (m_val == "avg") {
      res.innerHTML = "average " + s_val + ": " + in_table.reduce(function(a,b) {return a + b[s_val]}, 0) / in_table.reduce(function(a,b) {return a + 1}, 0);
    }

    if (m_val == "num") {
      res.innerHTML = "number of schools with " + s_val + " in " + y_val + ": " + in_table.reduce(function(a,b) {return a + 1}, 0);
    }

    if (m_val == "median") {
      all_nums = in_table.map(function(b) {return b[s_val]}, 0)
      nums_len = all_nums.length;
      if (nums_len % 2 == 0) {
        med = (all_nums[nums_len / 2 - 1] + numbers[nums_len / 2]) / 2
        res.innerHTML = "median " + s_val + ": " + med;
        console.log(med)
      }
      else {
        med = all_nums[(nums_len - 1) / 2];
        res.innerHTML = "median " + s_val + ": " + med;
        console.log(med)
      }
    }


    table.innerHTML += in_table.reduce(function (s,n) {return s + "<tr>" + "<td>" + n["DBN"] + "</td><td>" + n["Name"] + "</td><td>" + n["schoolyear"] + "</td><td>" + n[s_val] + "</td>"+ "<tr>";},"");
  }
}

//console.log(Object.keys(data[3]).filter(function(j) {return data[3][j]}))

//console.log(data.filter(function(n) {if (sel_val in Object.keys(n)) {return n;}}))



//table.innerHTML += data.reduce(function (s,n) {return s + "<tr>" + "<td>" + n["DBN"] + "</td><td>" + n["Name"] + "</td><td>" + n["schoolyear"] + "</td>"+ "<tr>";},"");

// table.innerHTML += data.reduce(function (s,n) {return s + "<tr>" + headers.reduce(function(i,k) {return i + "<td>" + n[k] + "</td>"}, "")+ "<tr>";},""); // adds all data


//table.innerHTML += data.filter
