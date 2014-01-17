/* CodeEval challenge 57
 * Spiral printing
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file.
 *  - Each line of input files is one test case, containing three items (semicolon
 *    delimited). The items are n (rows), m (columns) and then a space-delimited
 *    list of contents in row major order.
 */

var fs  = require("fs");

// Element of a grid: holds data and keeps track of having been visited
function Element(data){
    this.data = data;
    this.visited = false;
};

// Get element and mark as visited
Element.prototype.get = function(){
    this.visited = true;
    return this.data;
}

// Grid class: Creates an NxM grid populated with contents of elements array
function Grid(N, M, elements){
    this.arr = [];
    this.rows = N;
    this.cols = M;

    // Initialize array with elements in list
    for (var i = 0; i < N; i++){
        var row = [];
        for (var j = 0; j < M; j++)
            row.push(new Element(elements[(i*M)+j]));
        this.arr.push(row);
    }
}

// Given a row and column number (0-indexed), return true if the element exists
// and has not been visited, false otherwise.
Grid.prototype.unvisited = function(row, col){
    if (this.arr[row] != undefined && this.arr[row][col] != undefined &&
        !this.arr[row][col].visited)
        return true;
    else
        return false;
}

// Given a row and column, get the underlying element data
Grid.prototype.getElement = function(row, col){
    if (this.unvisited(row, col))
        return this.arr[row][col].get();
    else
        return;
}

// Printer to traverse the grid
function Printer(grid){
    this.row = 0;
    this.col = 0;
    this.direction = "right";
    this.grid = grid;
}

// Return current element
Printer.prototype.get = function(){
    return this.grid.getElement(this.row, this.col);
}

// Attempts to traverse in the next direction, or changes direction clockwise.
// Returns true if traversal was successful, false if not
Printer.prototype.traverse = function(){
    var dirs = ["right", "down", "left", "up"];

    // Rotate so that the first direction is current direction;
    while (dirs[0] != this.direction){
        dirs.push( dirs.shift());
    }

    // Try to traverse in each direction
    while (dirs.length != 0){
        this.direction = dirs.shift();
        switch (this.direction){
            case "right":
                if (this.grid.unvisited(this.row, this.col+1)){
                    this.col++;
                    return true;
                }
                break;
            case "down":
                if (this.grid.unvisited(this.row+1, this.col)){
                    this.row++;
                    return true;
                }
                break;
            case "left":
                if (this.grid.unvisited(this.row, this.col-1)){
                    this.col--;
                    return true;
                }
                break;
            case "up":
                if (this.grid.unvisited(this.row-1, this.col)){
                    this.row--;
                    return true;
                }
                break;
            }
    }
    return false;
}

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(input){
        if (input == "") return;

        var items = input.split(";");

        // Instantiate the Grid and Printer
        var grid = new Grid(items[0], items[1], items[2].split(" "));
        var printer = new Printer(grid);

        // Print the first element
        process.stdout.write(printer.get());

        // Begin traversal
        while (printer.traverse())
            process.stdout.write(" " + printer.get());
        process.stdout.write("\n");

    });