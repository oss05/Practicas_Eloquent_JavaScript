//SVG 

let svgWidth = 750, svgHeight = 600;

let svg = d3.select("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight)
	.attr("class", "svg-container");

let line = svg.append("line")
	.attr("x1", 100)
	.attr("x2", 500)
	.attr("y1", 50)
	.attr("y2", 50)
	.attr("stroke", "red")
	.attr("stroke-width", 5);

let rect = svg.append("rect")
	.attr("x", 100)
	.attr("y", 100)
	.attr("width", 200)
	.attr("height", 100)
	.attr("fill", "#BAD455");

let circle = svg.append("circle")
	.attr("cx", 160)
	.attr("cy", 300)
	.attr("r", 60)
	.attr("fill", "#000")
