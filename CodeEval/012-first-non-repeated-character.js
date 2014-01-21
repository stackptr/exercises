/* CodeEval challenge 12
 * First non-repeated character
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file containing strings.
 *  - For each input string, print  the first non repeating character, one per line.
 */

var fs = require('fs');

function isLetter(c){
    var code = c.charCodeAt(0);

    return (code > 64 && code < 91) || (code > 96 && code < 123);
}

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(str){
    	if (str == "") return;

        // Iterate through the string. If the lastIndex does not match index of
        // a character, that character does not repeate
        for (var i = 0; i < str.length; i++){
            var c = str.charAt(i);
            
            // First make sure the character is indeed a letter
            if (!isLetter(c)) continue;

            if (str.indexOf(c) == str.lastIndexOf(c)){
                console.log(c);
                return;
            }
        }

    });