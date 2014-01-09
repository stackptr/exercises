/* CodeEval challenge 27
 * Decimal to binary
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Each line of input contains a positive whole decimal number
 *  - Output the binary representation, one per line.
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(d){
    	if (d == "") return;
    	console.log(parseInt(d, 10).toString(2));
    });