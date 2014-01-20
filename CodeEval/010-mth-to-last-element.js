/* CodeEval challenge 10
 * Mth to last element
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file containing a
 *    a series of space delimited character followed by an integer M,
 *    representing an index into the list (1-based), one per line.
 *  - Print the Mth to last element of the list. If the index is larger than
 *    the list size, ignore that input.
 */

var fs  = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(input){
        if (input == "") return;

        input = input.split(" ");

        var list = input.slice(0, input.length-1),
            m    = parseInt(input[input.length-1], 10);

        if (m <= list.length)
            console.log(list[list.length - m]);
    });
