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

// Given an array v, return the string of cycled elements
function detectCycle(v){
    for (var i = 1; i < v.length; i++){ // Iterate through the elements in the array
        for (var j = i-1; j >= 0; j--){ // Check the elements before the current one
            if (v[i] == v[j]){
                var a = v.slice(j, i);
                var b = v.slice(i, i+i-j);
                if (a.join() == b.join())
                    return a.join(" ");
            }
        }
    }
    return "";
}

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

    	v = v.split(" ").map(function(v){
            return parseInt(v, 10); // Make sure array contents are numbers
        });

        console.log(detectCycle(v));
    });
