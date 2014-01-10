/* CodeEval challenge 39
 * Happy numbers
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input file contains an integer
 *  - For each integer, replace it with the sum of the squares of its digits
 *  - If this process terminates in 1, the number is happy (print 1)
 *  - If it loops endlessly, print 0
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

    	// Keep track of history
    	var history = [];
    	history.push(v);

    	while (true){
    		var lastNumber = history[history.length-1];

    		var result = 0;
    		for (var i = 0; i < lastNumber.length; i++){
    			result += Math.pow(parseInt(lastNumber.charAt(i), 10), 2);
    		}

            result = result.toString(10);

    		if (result == "1"){
    			console.log(1);
    			return;
    		} else if (history.some(function(v){ return v == result; })){
    			console.log(0);
    			return;
    		}

            history.push(result);
    	}
    });