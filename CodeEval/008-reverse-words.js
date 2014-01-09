/* CodeEval challenge 8
 * Reverse words
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Input file contains multiple sentences, one per line
 *  - Output file should reverse the word order of each sentence
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(line, num){
    	if (line == "") return;
    	line = line.split(' ').reverse().join(' ');
    	console.log(line);
    });