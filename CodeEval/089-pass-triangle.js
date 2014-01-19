/* CodeEval challenge 89
 * Pass triangle
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Each line of input represents a series of numbers which is arranged in
 *    the form of a triangle.
 *  - Starting at the top of the triangle, move to adjacent numbers on the row
 *    below such that the sum of all the numbers in the path is the maximum possible.
 */

var fs = require('fs');

// Each node of the triangle has a value and a total value of the sum of the highest parents before it
function Node(value, total){
	this.value = value;
	this.total = total;
}

Node.prototype.sum = function(){
	return this.value + this.total;
};

function Triangle(){
	this.rows = [];
}


Triangle.prototype.push = function(line, num){
	if (line == "") return;

	if (num == 0){ // Trivial case, only one node to consider
		this.rows.push([
			new Node(parseInt(line, 10), 0)
		]);
		return;
	}

	// Explode the elements
	var arr = line.trim().split(" ").map(function(v){
		return parseInt(v, 10);
	});

	// Get the last row
	var lastRow = this.rows[num-1];

	// Build current row
	var row = [];
	// Iterate through each element. Choose as its total the highest total of either possible parent
	arr.forEach(function(v, i) {
		if (i == 0)
			row.push(new Node(v, lastRow[i].sum()));
		else if (i == arr.length-1)
			row.push(new Node(v, lastRow[i-1].sum()));
		else
			row.push(new Node(v, Math.max(lastRow[i].sum(), lastRow[i-1].sum())));
	});
	this.rows.push(row);
}

var triangle = new Triangle();

fs.readFileSync(process.argv[2])
	.toString()
	.split('\n')
	.forEach(triangle.push, triangle);

// Scan the last row
var lastRow = triangle.rows[triangle.rows.length-1];

// Print the greatest sum
var greatest = 0;
lastRow.forEach(function(v){
	if (v.sum() > greatest)
		greatest = v.sum();
});

console.log(greatest);