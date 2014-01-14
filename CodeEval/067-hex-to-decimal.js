/* CodeEval challenge 67
 * Hex to decimal
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input contains a hex number with no leading "0x" and all alpha
 *    characters in lowercase
 *  - Print the equivalent decimal number
 */

var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(v){
        if (v == "") return;

        // For the sake of challenge, let's not use parseInt(v, 16)...

        var result = 0;
        for (var i = 0; i < v.length; i++){
            var c = v.charCodeAt(i);
            if ( c > 47 && c < 58 )
                result += (c - 48) * Math.pow(16, v.length - i - 1);
            else if ( c > 96 && c < 103)
                result += (c - 87) * Math.pow(16, v.length - i - 1);
        }

        console.log(result);
    });