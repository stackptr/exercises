/* CodeEval challenge 45
 * Reverse and add
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Each line in the input file is a test case containing an integer n < 10000
 *  - For each test case, add n to the reverse of its digits, repeating until the
 *    result is a palindrome.
 *  - Output the number of iterations and the resulting palindrome, separated by a
 *    space.
 */

var fs  = require("fs");

// Returns true if input is palindrome (Reused from Challenge 3)
function is_palindrome(input){
	var a = input.toString();
	for (var i = 0, j = a.length-1;
		 i < Math.ceil(a.length/2), j > Math.floor(a.length/2)-1; i++, j--){
		if (a.charAt(i) != a.charAt(j)){
			return false;
		}
	}
	return true;
}

// Given a number, returns the reverse of that number (as an integer)
function reverse(n){
	n = n.toString(10);
	var result = "";
	for (var i = n.length; i > 0; i--){
		result += n.charAt(i-1);
	}

	return parseInt(result, 10);
}


fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(n){
    	if (n == "") return;

    	n = parseInt(n, 10);

    	var i = 0;
    	while (!is_palindrome(n)){
    		// Perform iteration and increase count
    		n = n + reverse(n);
    		i++;
    	}
    	console.log(i + " " + n);
   	});