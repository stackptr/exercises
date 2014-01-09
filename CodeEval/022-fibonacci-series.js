/* CodeEval challenge 22
 * Fibonacci series
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains a positive integer N
 *  - Print the Nth fibonacci number
 */

var fs  = require("fs");

// Function to find the nth fibonacci number
function fib(n){
	if (n < 0) return undefined;

	return fastFib(n)[0];
}

// Fast doubling method (matrix exponentiation reduction) method
// http://nayuki.eigenstate.org/page/fast-fibonacci-algorithms
function fastFib(n){
	if (n == 0) return [0, 1];

	var calc = fastFib(parseInt(n/2, 10));

	var a = calc[0],
		b = calc[1],
		c = a * (2 * b - a),
		d = b * b + a * a;

	if (n % 2 == 0)
		return [c, d];
	else
		return [d, c+d];
}

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(n){
    	if (n == "") return;

    	n = parseInt(n, 10);

    	console.log(fib(n));
    });