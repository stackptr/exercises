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
    .forEach(function(v){
    	if (v == "") return;

    	v = v.split(" ").map(function(v){
            return parseInt(v, 10); // Make sure array contents are numbers
        });

        // Tortoise and hare algorithm
        var tortoise = 1,
            hare = 2;
        while (v[tortoise] != v[hare]){
            tortoise++;
            hare += 2;
        }

        var mu = 0;
        tortoise = 0;

        while (v[tortoise] != v[hare]){
            tortoise++;
            hare++;
            mu++;
        }

        var lam = 1;
        hare = v[tortoise];

        while (v[tortoise] != v[hare]){
            hare++;
            lam++;
        }

        if (mu >= v.length)
            console.log('');
        else 
            console.log(v.slice(mu, mu+lam).join(" "));
    });
