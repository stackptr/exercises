/* CodeEval challenge 19
 * Bit positions
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Each line of input contains a number N, and two integers p1, p2,
 *    comma delimited.
 *  - p1 and p2 are 1 based.
 *  - If the bits in position p1 and p2 of N are the same, print "true",
 *    otherwise print "false"
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(line, num){
    	if (line == "") return;
    	line = line.split(',');
    	var N = line[0],
    		p1 = line[1],
    		p2 = line[2];

    	// p1 and p2 are one indexed, shift operation is 0 indexed
    	var bit1 = N & (1 << p1-1),
    		bit2 = N & (1 << p2-1);

    	// bit1 and bit2 will either be some positive value or 0
    	if ((bit1 == 0) == (bit2 == 0))
    		console.log("true");
    	else
    		console.log("false");
    });