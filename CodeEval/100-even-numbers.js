/* CodeEval challenge 100
 * Even numbers
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file.
 *  - For each line of input, print 1 if the number is even, 0 if odd.
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(n){
    	if (n == "") return;

    	console.log((n & 1) ? "0" : "1");
    });