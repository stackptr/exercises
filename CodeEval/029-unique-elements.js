/* CodeEval challenge 29
 * Unique elements
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains a list of sorted integers, comma delimited
 *  - Print out the sorted list with duplicates removed
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(list){
    	if (list == "") return;

    	var map = {};

    	list.split(',').forEach(function(n){
    		if (map[n] == undefined)
    			map[n] = true;
    	});

    	console.log(Object.keys(map).join(","));
    });