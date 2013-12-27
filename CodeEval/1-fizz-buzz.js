/* CodeEval challenge 1
 * Fizz buzz
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Input file contains space delimited numbers A, B, and N, with multiple such lines.
 *  - Program counts up from 1 to N:
 *    - Output F when number is divisible by A
 *    - Output B when number is divisible by B
 *    - Output FB when number is divisible by both A and B
 *    - Output the number otherwise
 *  - Output is on the same line for each input line
 */

var fs  = require("fs");
var inputFile = process.argv[2]

fs.readFileSync(inputFile) 	// Returns contents of input file
  .toString()				// Converts contents to String type
  .split('\n')				// Data is now an array of rounds
  .forEach(fizzBuzz);

function fizzBuzz(input){
	if (input == "") return;
	
	input = input.split(' ');
	var A = input[0];
	var B = input[1];
	var N = input[2];

	var output = '';
	for (var i = 1; i <= N; i++){
		var printNum = true;

		if (i % A == 0) {
			output += 'F';
			printNum = false;
		}
		if (i % B == 0) {
			output += 'B';
			printNum = false;
		}
		if (printNum) {
			output += i.toString(10);
		}
		output += ' ';
	}
	console.log(output);
}