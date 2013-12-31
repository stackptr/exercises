/* CodeEval challenge 32
 * Bay Bridges
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input describes a bridge in the following format:
 *    [B]: ([x1, y1], [x2, y2])
 *    Where B is the bridge number, [x1, y1] is the starting 
 * 
 */

var fs  = require("fs");
var inputFile = process.argv[2]

var Bridges = [];

// Read input file, passing each line to function processInput
fs.readFileSync(inputFile).toString().split('\n').forEach(processInput);

// Takes input string and parses it into a Bridge object
function processInput(data){
	if (data == "") return;

	data = data.split(' '); // Split by whitespace

	var bridgeNum = data[0].substr(1, ...);
}