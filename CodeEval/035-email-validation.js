/* CodeEval challenge 35
 * Email validation
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file containing one
 *    string per line.
 *  - Determine if the string is a valid email. Print "true" or "false".
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
    	if (v == "") return;

        // Simplified regex... i.e., let's not implement
        // http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html

        // Match: {alphanum/_/./-}@{alphanum/-}.{co/com/mobi -- 2-4 letter tlds}
        var expr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (expr.test(v))
            console.log("true");
        else
            console.log("false");
    });