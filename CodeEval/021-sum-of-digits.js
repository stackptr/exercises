/* CodeEval challenge 21
 * Sum of digits
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains a positive integer
 *  - Print the sum of the digits that make up the integer
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(number){
    	if (number == "") return;

    	var digits = number.split('').map(function(v){
    		return parseInt(v, 10);
    	});

    	var result = 0;

    	digits.forEach(function(v){
    		result += v;
    	});

    	console.log(result);
    });