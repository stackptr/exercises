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

var triangle = {
	rows: [] // Hold triangle data
}

triangle.readLine = function(line){
	if (line == "") return;

	// Add to next row:
	this.rows.push(
		line.split(" ").map(function(v){
			return parseInt(v, 10);
		})
	);
}

// Naive traversal
triangle.traverse = function(){
	var pos = 0,
		row = 0,
		result = 0;

	// For each position i, we can choose nextrow[i] or nextrow[i+1]
	while (row != this.rows.length){
		var nextRow = this.rows[row];
		if (nextRow[pos+1] > nextRow[pos])
			pos++ // Only need to change if moving left

		result += nextRow[pos];
		row++;
	}

	return result;
}

fs.readFileSync(process.argv[2])
	.toString()
	.split('\n')
	.forEach(function(v){
		return triangle.readLine(v); // Why can't this be passed directly to forEach?
	});

console.log(triangle.traverse());