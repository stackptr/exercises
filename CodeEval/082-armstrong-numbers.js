/* CodeEval challenge 82
 * Armstrong numbers
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains a positive integer
 *  - Print True if the number is an Armstrong number (it is equal to the sum
 *    of the nth power of its digits) or False otherwise.
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(n){
        if (n == "") return;

        var sum = 0;
        for (var i = 0; i < n.length; i++)
            sum += Math.pow(parseInt(n[i], 10), n.length);

        if (parseInt(n) == sum)
            console.log("True");
        else
            console.log("False");
    });
    