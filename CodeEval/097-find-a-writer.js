/* CodeEval challenge 97
 * Find a writer
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file which contains lines
 *    of input strings.
 *  - The input is an encoded string and key, divided by '|'
 *  - Use the key to decode the string: the key consists of space-delimited numbers
 *    which specify the position of the char within the encoded string.
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(input){
    	if (input == "") return;

    	input = input.split("|");

    	var encodedStr = input[0];
    	input[1].trim().split(" ").map(function(v){
    		return parseInt(v, 10);
    	}).forEach(function(v){
    		process.stdout.write(encodedStr.charAt(v-1))
    	});
    	process.stdout.write("\n");
    });