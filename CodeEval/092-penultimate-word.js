/* CodeEval challenge 92
 * Penultimate word
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - The input contains lines with multiple words
 *  - Print the next-to-last word of each line
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(line){
    	if (line == "") return;
        line = line.split(" ")

        console.log(line[line.length-2] || '');
    });