/* CodeEval challenge 98
 * Point in circle
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file containing one input
 *    string per line.
 *  - Each input describes the coordinates of the center of a circle, the
 *    corresponding radius, and a point.
 *  - Print "true" if the point is inside the circle, "false" otherwise.
 */

var fs  = require("fs");

function Point(x, y){
    this.x = x;
    this.y = y;
}

function Circle(center, radius){
    this.center = center;
    this.radius = radius;
}

Circle.prototype.contains = function(pt){
    return Math.pow((pt.x - this.center.x),2) +
        Math.pow((pt.y - this.center.y),2) <= Math.pow(this.radius,2);
}

// Given a string of format "Center: (0.00, -0.00); Radius: 0.00; Point: (0.0, -0.0)"
// parse the string and return the center point, the radius, and the point
function parseInput(input){
    input = input.split(";");

    // This really needs some regex
    var center = input[0].split(" ")
        .splice(1, 2)
        .join(" ")
        .replace(/[()]/g,'')
        .split(",")
        .map(function(v){
            return parseFloat(v);
        });

    var radius = input[1].trim().split(" ")
        .splice(1,1);

    radius = parseFloat(radius[0]);

    var point = input[2].trim().split(" ")
        .splice(1, 2)
        .join(" ")
        .replace(/[()]/g,'')
        .split(",")
        .map(function(v){
            return parseFloat(v);
        });

    return {
        center: new Point(center[0], center[1]),
        radius: radius,
        point: new Point(point[0], point[1])
    };
}

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(input){
        if (input == "") return;

        input = parseInput(input);

        var circle = new Circle(input.center, input.radius);

        console.log(circle.contains(input.point) ? "true" : "false");
    });