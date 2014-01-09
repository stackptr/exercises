/* CodeEval challenge 62
 * N mod M
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains two comma delimited integers, N and M
 *  - Output the value of N mod M
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

    	v = v.split(",");

        var N = v[0],
            M = v[1];

        while ( N-M > 0){
            N = N - M;
        }
        console.log(N);
    });