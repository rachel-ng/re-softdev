var data = [
  [0.055,0.00000201],
  [0.086,0.00000403],
  [0.156,0.00000806],
  [0.282,0.0000161],
  [0.448,0.0000201]
];

var marginx = 40;
var marginy = 20;
var width = 1000 - (marginx * 2);
var height = 500 - (marginy * 2);

var x = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) {return d[1];})])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) {return d[0];})])
    .range([height, 0]);

var chart = d3.select('body')
    .append('svg')
    .attr("width", width + marginx * 2)
    .attr("height", height + marginy * 2)
    .attr("class", "chart");

var main = chart.append('graph')
    .attr('transform', 'translate(' + marginx + ',' + marginy + ')')
    .attr('class', 'main');

main.append('text')
  .attr("x", 450 )
  .attr("y",  0 )
  .style("text-anchor", "middle")
  .text('Absorbance vs. Concentration of Red Dye at 507nm');

var xaxis = d3.axisBottom(x);

main.append('graph')
  .attr('transform', 'translate(0,' + height + ')')
  .attr('class', 'axis')
  .call(xaxis);

main.append("text")
  .attr("x", 450 )
  .attr("y",  500 )
  .style("text-anchor", "middle")
  .text("Concentration (M) of Red 40");

var yaxis = d3.axisLeft(y);

main.append('graph')
  .attr('class', 'axis')
  .call(yaxis);

var graph = main.append("graph");
graph.selectAll("dots")
  .data(data)
  .enter().append("circle")
  .attr("cx", function (d) {
    return x(d[1]);
  })
  .attr("cy", function (d) {
    return y(d[0]);
  })
  .attr("r", 10)
  .attr("fill", "#8a99aa");

function type(d) {
  d.value = +d.value;
  return d;
}
