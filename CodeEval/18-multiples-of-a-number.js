/* CodeEval challenge 18
 * Multiples of a number
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line contains two comma separated numbers, x and n
 *  - Print the smallest multiple of n which greater than or equal
 *    to x, without using division or modulo operator.
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v) {
    	if (v == "") return;

    	v = v.split(",");

    	var x = parseInt(v[0], 10),
    	    n = parseInt(v[1], 10);

    	var factor = 2;
    	var originalN = Number(n); // Preserve N

    	while (n < x){
    		n = originalN * factor++;
    	}

    	console.log(n);
    });