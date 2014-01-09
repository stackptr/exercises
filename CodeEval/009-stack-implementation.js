/* CodeEval challenge 9
 * Stack implementation
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - The input contains a list of space delimited integers
 *  - Each integer is pushed in and subsequently popped out, with each
 *    alternate integer printed.
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

    	// Push each integer on to the stack
    	var stack = [];

    	v.split(" ").forEach(function(v){
    		stack.push(parseInt(v, 10));
    	})

    	var length = stack.length,
    		results = [];
    	for (var i = 0; i < length; i++){
    		var popped = stack.pop();
    		if (i % 2 == 0)
    			results.push(popped);
    	}

    	console.log(results.join(" "));
    });