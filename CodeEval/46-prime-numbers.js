/* CodeEval challenge 46
 * Prime numbers
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Each line of input contains a number N < 4,294,967,295
 *  - Output all primes less than N, comma delimited with no white space.
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(n){
    	if (n == "") return;
    	var max = parseInt(n, 10);

		// Initialize sieve
		var sieve = [];
		for (var i = 0; i < max; i++){
		    sieve[i] = true;
		}

		// Generate primes using Sieve of Eratosthenes
		for (var i = 2; i < Math.sqrt(max); i++){
		    if (sieve[i]){
		        for (var j = i*i; j < max; j += i){
		            sieve[j] = false;
		        }
		    }
		}

		var first = true;
		for (var i = 2; i < max; i++){
			if (sieve[i]){
				if (first){
					process.stdout.write(i.toString(10));
					first = false;
				}
				else
					process.stdout.write("," + i.toString(10));
			}
		}
		process.stdout.write('\n');

    });