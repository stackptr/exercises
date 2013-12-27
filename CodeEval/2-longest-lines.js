/* CodeEval challenge 2
 * Longest lines
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Input file contains a number N followed by multiple lines
 *  - Output prints the N longest lines in descending order of length
 */

var fs  = require("fs");
var inputFile = process.argv[2]

var input = fs.readFileSync(inputFile)		// Returns contents of input file
  .toString()								// Converts contents to String type
  .split('\n');								// Data is now an array of rounds

var lineStorage = {
	N: 0,						// Max number of lines stored
	lines: [],					// Array of stored lines
	lowestLength: undefined,	// Length of shortest line
	lowestPos: undefined		// Position of shortest line
};

input.forEach(function(line, num){
	if (line == "") return;

    if (num == 0){
    	lineStorage.N = line;
    	return;
    }

    // Check length of current line against lowest length stored line
    if (lineStorage.lowestLength == undefined){ // Initialize storage object
    	lineStorage.lowestLength = line.length
    	lineStorage.lowestPos = 0;
    	lineStorage.lines.push(line);
    } else if (line.length > lineStorage.lowestLength) {
    	// Line is longer than shortest line stored, so either:
    	if (lineStorage.lines.length < lineStorage.N){
    		// Storage is not full, so simply push to the end
    		lineStorage.lines.push(line);
    	} else {
    		// Storage is full, so replace with shortest line
    		lineStorage.lines[lowestPos] = line;

    		// Make sure we keep track of shortest length / pos
    		console.log(lineStorage.lines);
    		lineStorage.lines.forEach(function(v, i){
    			if (v.length < lineStorage.lowestLength){
    				lineStorage.lowestLength = v.length;
    				lineStorage.lowestPos = i;
    			}
    		})
    	}
    }
});

// Sort lines and print
lineStorage.lines.sort(function(a, b){
	return b.length - a.length; // Sort in descending order by length
}).forEach(function(v){
	console.log(v);
})