/* CodeEval challenge 2
 * Longest lines
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *  - Input file contains a number N followed by multiple lines
 *  - Output prints the N longest lines in descending order of length
 */

var fs  = require("fs");

// Assuming array is sorted, find insertion point given comparator
function findInsertionPoint(arr, v, comp){
    var low = 0,
        high = arr.length;
    while (low < high) {
        mid = parseInt((low+high)/2);
        c = comp(arr[mid], v);
        if (c < 0)
            low = mid + 1;
        else if (c > 0)
            high = mid;
        else
            return mid;
    }
    return low;
}

var lines = []; // Store lines

lines.add = function(v){
    this.splice ( findInsertionPoint(this, v, function (a, b){
        return b.length - a.length;
    }), 0, v);
};

var N = undefined;

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(line, num){
        if (line == "") return;

        if (num == 0){
            N = parseInt(line, 10);
            return;
        }

        lines.add(line);
    });

for(var i = 0; i < N; i++){
    console.log(lines[i]);
}