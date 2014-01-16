/* CodeEval challenge 14
 * String permutations
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file containing one input
 *    string per line.
 *  - For each line, print the permutations of the string, comma separated, in
 *    alphabetical order.
 */

var fs  = require("fs");

// Given array, swap elements a and b
function swap(str, a, b){
    var temp = str[a];
    str[a] = str[b];
    str[b] = temp;
}

// Note that str is actually an array of chars
function permute(str, callback){
    function p(str, i, callback) {
        if (i == str.length - 1){
            callback(str);
        } else {
            p(str, i+1, callback);
            for (var j = i+1; j < str.length; j++){
                swap(str, i, j);
                p(str, i+1, callback);
                swap(str, i, j);
            }
        }
    }
    return p(str, 0, callback);
}

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(str){
        if (str == "") return;

        str = str.split("").sort(); // Split the string, sort lexicographically

        permutations = [];
        permute(str, function(a){
            permutations.push(a.join("").slice(0));
        });
        console.log(permutations.sort().join(","))
    });