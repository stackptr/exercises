/* CodeEval challenge 40
 * Self describing numbers
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Each line of input is one test case, a positive integer
 *  - For each test case, determine if the number is self-describing. That is,
 *    the digit in each position is equal to the number of times that that digit
 *    appears in the number.
 * 
 */

var fs  = require("fs");
var inputFile = process.argv[2]

fs.readFileSync(inputFile) 	// Returns contents of input file
  .toString()				// Converts contents to String type
  .split('\n')				// Data is now an array of rounds
  .forEach(function(v){
  	if (v == "") return;

  	// Find the frequency of each digit
  	var freq = {};

  	// Initialize map
  	for (var i = 0; i < 10; i++){
  		freq[i.toString()] = 0;
  	}

  	// Scan array once to find frequency of digits
  	for (var i = 0; i < v.length; i++){
  		var digit = v.charAt(i);
  		freq[digit]++;
  	}


  	// For each pos, check if v[pos] == occurences of pos
  	// e.g., for [2020], there are two 2s and two 0s. At pos 0, there is a 2, and
  	//   at pos 2, there is a 2.
  	for (var i = 0; i < v.length; i++){
  		if (parseInt(v[i], 10) != freq[i.toString()]){
  			console.log(0);
  			return;
  		}
  	}
  	console.log(1);
  });