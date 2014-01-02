/* CodeEval challenge 30
 * Set intersection
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains two list of sorted, comma delimted integers,
 *    with each list separated by a semicolon.
 *  - For each line, print the intersection or an empty line if no intersection exists.
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

    	var lists = v.split(";");
    	var a = lists[0].split(","),
    	    b = lists[1].split(","),
    	    i = 0,
    	    j = 0,
    	    intersection = [];

    	while (i < a.length && j < b.length){
    		if (a[i] == b[j]){
    			intersection.push(a[i])
    			i++;
    			j++;
    		}
    		else {
    			if (a[i] < b[j])
    				i++;
    			else
    				j++;
    		}
    	}

    	console.log(intersection.join(","));
    });