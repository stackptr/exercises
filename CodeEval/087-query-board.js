/* CodeEval challenge 87
 * Query board
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file.
 *  - Each line of input files is one test case, one of four command to operate on a
 *    256 by 256 board:
 *    - SetRow i x: Changes all values in the cells on row i to x
 *    - SetCol j x: Changes all values in the cells on column j to x
 *    - QueryRow i: Output the sum of values on row i
 *    - QueryCol j: Output the sum of values on column j
 */

var fs  = require("fs");

function Board(n){
    // Initalize empty board of size n by n (set all cells to 0)
    this.arr = [];
    this.size = n;
    for (var i = 0; i < n; i++){
        var row = [];
        for (var j = 0; j < n; j++)
            row.push(0);
        this.arr.push(row);
    }
};

Board.prototype.setRow = function(row, x){
    for (var col = 0; col < this.size; col++)
        this.arr[row][col] = x;
};

Board.prototype.setCol = function(col, x){
    for (var row = 0; row < this.size; row++)
        this.arr[row][col] = x;
};

Board.prototype.queryRow = function(row){
    var result = 0;
    for (var col = 0; col < this.size; col++)
        result += parseInt(this.arr[row][col], 10);
    return result;
};

Board.prototype.queryCol = function(col){
    var result = 0;
    for (var row = 0; row < this.size; row++)
        result += parseInt(this.arr[row][col], 10);
    return result;

};

var board = new Board(256);

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(input){
        if (input == "") return;
        input = input.split(" ");

        switch(input[0]){
            case "SetCol":
                board.setCol(input[1], input[2]);
                break;
            case "SetRow":
                board.setRow(input[1], input[2]);
                break;
            case "QueryRow":
                console.log(board.queryRow(input[1]));
                break;
            case "QueryCol":
                console.log(board.queryCol(input[1]));
                break;
            default:
                console.log("Invalid command");
        }
    });