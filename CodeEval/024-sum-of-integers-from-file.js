/* CodeEval challenge 24
 * Sum of integers from file
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- The input file contains positive integers, one per line
 *  - Output the sum of all integers in the file
 */

var fs  = require("fs");

var sum = 0;

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(n){
    	if (n == "") return;

    	sum += parseInt(n, 10);
    });

console.log(sum);