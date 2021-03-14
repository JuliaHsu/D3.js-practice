// This line uses D3 to set the text of the message div.
d3.select('#message').text('Data Binding in D3');
// add some data
var scores = [
  {
    name: 'Andy',
    score: 25,
  },
  {
    name: 'Beth',
    score: 39,
  },
  {
    name: 'Craig',
    score: 42,
  },
  {
    name: 'Diane',
    score: 35,
  },
  {
    name: 'Evelyn',
    score: 48,
  },
];
// data binding
d3.selectAll('circle').data(scores); // joins data
d3.selectAll('circle').attr('r', function (d) {
  return d.score;
});
d3.selectAll('circle').style('fill', function (d) {
  if (d.score % 2 == 0) {
    return 'green';
  } else {
    return 'red';
  }
});
var new_svg = d3
  .select('body')
  .append('svg')
  .attr('width', '760')
  .attr('height', '140');
// Join scores to text elements and modify content and position
new_svg.selectAll('g')
	.append("text")
  .attr('y', function(d, i) {
    return i * 20 + 19;
  })
  .attr('x',1)
  .text(function(d) {
    return d.name;
  });

new_svg.selectAll("g")
	.append("text")
	.attr("y", function(d, i) {
  	return i*20 + 19;
  })
	.attr("x", function (d) {
	return d.score * 10 + 30;
	})
	.text(function (d) {
		return d.score;
	});
new_svg.selectAll("rect")
  .data(scores)
	.enter()
	.append("g")
	.append("rect")
  .attr('height', 19)
	.attr('x', '55')
  .attr('width', function(d) {
    var scaleFactor = 10;
    return d.score * scaleFactor;
  })
  .attr('y', function(d, i) {
    return i * 20;
  })
	.style('fill', 'red')
	.style('opacity', '0.5');







