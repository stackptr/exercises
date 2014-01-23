/* CodeEval challenge 111
 * Longest word
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file, containing multiple
 *    strings, one per line.
 *  - For each string, output the longest word. If there is not one longest word,
 *    output the first word of the longest length.
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(line){
    	if (line == "") return;

    	var longestWord = "";
    	
    	line.split(" ").forEach(function(word){
    		if (word.length > longestWord.length)
    			longestWord = word;
    	})
    	console.log(longestWord);
    });
