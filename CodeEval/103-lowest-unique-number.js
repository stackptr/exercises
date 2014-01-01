/* CodeEval challenge 103
 * Lowest unique number
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - A round is defined as one line of input
 *  - Each round consists of a set of space delimted numbers
 *  - Input is one or more rounds, each round 10-20 numbers
 *  - Output is the position (index 1) of the lowest unique number or 0 if
 *    no unique number exists.
 * 
 */

var fs  = require("fs");
var inputFile = process.argv[2]

fs.readFileSync(inputFile) 	// Returns contents of input file
  .toString()				// Converts contents to String type
  .split('\n')				// Data is now an array of rounds
  .forEach(processRound);

// Takes string of space delimited numbers, outputs lowest unique number
function processRound(round){
	if (round == "") return;
	
	// Convert string into an array of numbers
	var numbers = round.split(' ').map(Number);
	var original = numbers.slice();

	var numbers = numbers.sort(function(a,b){
		return a-b;
	}).filter( function(v, i, self){
		return self.indexOf(v) == self.lastIndexOf(v);
	});

	console.log(original.indexOf(numbers[0])+1);
}