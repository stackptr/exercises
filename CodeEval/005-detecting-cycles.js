/* CodeEval challenge 62
 * Detecting cycles
 *
 * Requirements:
 *  - Program accepts as its first argument a file containing a sequence of numbers,
 *    space delimited, on each line.
 *  - For each line, print the first cycle found in the sequence
 *  - Constraints: elements are in the range [0, 99], length in the rnage [0, 50]
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(str){
    	if (v == "") return;

    	v = v.split(" ").map(function(v){
            return parseInt(v, 10); // Make sure array contents are numbers
        }).unshift(0); // Put 0 at beginning to make array 1-indexed

        // Tortoise and hare algorithm 
        // To be implemented
    });
