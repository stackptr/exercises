/* CodeEval challenge 32
 * Trailing string
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input file contains two strings, comma delimited
 *	- Print 1 if the second string occurs at the end of the first string
 *	- Print 0  otherwise
 * 
 */

var fs  = require("fs");
var inputFile = process.argv[2]

fs.readFileSync(inputFile) 	// Returns contents of input file
  .toString()				// Converts contents to String type
  .split('\n')				// Data is now an array of rounds
  .forEach(processInput);

// Takes string of space delimited numbers, outputs lowest unique number
function processInput(line, i){
	if (line == "") return;

	var input = line.split(',');
	if (input[0].indexOf([input[1]]) != -1 &&
		input[0].indexOf(input[1]) + input[1].length == input[0].length)
		console.log("1");
	else
		console.log("0");
}