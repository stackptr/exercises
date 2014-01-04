/* CodeEval challenge 109
 * Bay Bridges
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a filename
 *	- Each line of input describes a bridge in the following format:
 *    [B]: ([x1, y1], [x2, y2])
 *    Where B is the bridge number, [x1, y1] is the starting coordinates,
 *    and [x2, y2] are the ending coordinates.
 *  - Given the input, output the bridge numbers that remain after removing
 *    intersecting bridges.
 * 
 * Sources:
 *  - Method of checking segment intersection through cross products
 *    http://stackoverflow.com/a/7069702/2433249
 */

var fs  = require("fs");

// Coordinate class
function Coordinate(x, y){
	this.x = x;
	this.y = y;
}

// Given two bridges, check if there is an intersection
function checkIntersect(Bridge1, Bridge2){
	// For ease of use, organize segments into points [AB] and [CD]
	var A = new Coordinate(Bridge1.x1, Bridge1.y1);
	var B = new Coordinate(Bridge1.x2, Bridge1.y2);
	var C = new Coordinate(Bridge2.x1, Bridge2.y1);
	var D = new Coordinate(Bridge2.x2, Bridge2.y2);

	// The two line segments intersect iff the two ends of one segment
	// are on different sides of the other segment and vice versa.

	// Check whether A and B are on different sides of [CD] by computing
	// the cross product of each:
	var crossA = ((D.x - C.x)*(A.y - D.y)) - ((D.y - C.y)*(A.x - D.x));
	var crossB = ((D.x - C.x)*(B.y - D.y)) - ((D.y - C.y)*(B.x - D.x));

	// Similarly for C and D w.r.t [AB]
	var crossC = ((B.x - A.x)*(C.y - B.y)) - ((B.y - A.y)*(C.x - B.x));
	var crossD = ((B.x - A.x)*(D.y - B.y)) - ((B.y - A.y)*(D.x - B.x));

	// If each pair of cross products have the same sign,
	// no intersection occurs, return false:
	return ((crossA * crossB < 0) && (crossC * crossD < 0));
}

// Parse input into bridge objects
var Bridges = {};

fs.readFileSync(process.argv[2])
	.toString()
	.split('\n')
	.forEach(function(data){
		if (data == "") return;

		// Extract using regex
		data = data.split(/:\ \(\[|\],\ \[|,/).map(function(v,i){
			v = v.trim(); // Depending on output, some whitespace will remain
			if (i == 4)
				v = v.slice(0, v.length-2) // Trim "])" for last entry
			return parseFloat(v, 10);
		});

		Bridges[data[0]] = {
			x1: data[1],
			y1: data[2],
			x2: data[3],
			y2: data[4],
			intersections: []
		};
	});

// Check each pair of bridges to populate the intersection list
var bridgeNums = Object.keys(Bridges).map(function(v){
	return parseInt(v, 10);
});

for (var i = 0; i < bridgeNums.length; i++){
	for (var j = i+1; j < bridgeNums.length; j++){
		if (checkIntersect(Bridges[bridgeNums[i]], Bridges[bridgeNums[j]])){
			Bridges[bridgeNums[i]].intersections.push(bridgeNums[j]);
			Bridges[bridgeNums[j]].intersections.push(bridgeNums[i]);
		}
	}
}

var builtBridges = [];

// First build all the bridges with no intersections
for (var bridgeNum in Bridges){
	if (Bridges[bridgeNum].intersections.length == 0){
		builtBridges.push(bridgeNum);
		delete Bridges[bridgeNum];
	}
}

// Then build the bridge with the fewest intersections, provided it does not
// intersect with already built bridges.
while (Object.keys(Bridges).length > 0){
	// First find the fewest intersections
	var currentMinInter = undefined,
	    bridgeToBuild = 0;
	for (var bridgeNum in Bridges){
		var numIntersections = Bridges[bridgeNum].intersections.length;
		if (currentMinInter == undefined || numIntersections < currentMinInter){
			currentMinInter = numIntersections
			bridgeToBuild = bridgeNum;
		}
	}

	// Add bridge to built bridges list
	builtBridges.push(bridgeToBuild);
	delete Bridges[bridgeToBuild];

	// Remove all unbuilt bridges that intersect with it
	for (var bridgeNum in Bridges){
		for (var i = 0; i < Bridges[bridgeNum].intersections.length; i++){
			if (Bridges[bridgeNum].intersections[i] == bridgeToBuild){
				delete Bridges[bridgeNum];
				break;
			}
		}
	}
}

builtBridges.sort(function(a, b){
	return a - b;
}).forEach(function(v){
	console.log(v);
})