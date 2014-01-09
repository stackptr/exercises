/* CodeEval challenge 20
 * Lowercase
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Print the lowercase version of all text in input file
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v) {
    	if (v == "") return;

    	var result = "";

        for (var i = 0; i < v.length; i++){
            var code = v.charCodeAt(i);
            if (code > 64 && code < 91 ){
                code += 32;
            }
            result += String.fromCharCode(code);
        }

    	console.log(result);
    });