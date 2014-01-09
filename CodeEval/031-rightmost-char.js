/* CodeEval challenge 31
 * Rightmore char
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - The input contains a string and a character, comma delimted
 *  - Print the zero-based position of the rightmost occurrence of the
 *    character in the string (case-sensitive)
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

        v = v.split(",");

        console.log(v[0].lastIndexOf(v[1]))
    });