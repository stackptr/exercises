/* CodeEval challenge 26
 * File size
 *
 * Requirements:
 *  - Print odd numbers from 1 to 99
 */

var fs  = require("fs");

fs.stat(process.argv[2], function(err, stats){
	console.log(stats.size);
});