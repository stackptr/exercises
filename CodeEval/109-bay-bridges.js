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
	return !(((crossA < 0) == (crossB < 0)) && ((crossC < 0) == (crossD < 0)));
}

function removeBridge(num){
	for (var i = 0; i < Bridges.length; i++){
		if (Bridges[i] != undefined && Bridges[i].num == num)
			Bridges[i] = undefined;
	}
}

// Parse input into bridge objects
var Bridges = fs.readFileSync(process.argv[2])
	.toString()
	.split('\n')
	.map(function(data){
		if (data == "") return;

		// Extract using regex
		data = data.split(/:\ \(\[|\],\ \[|,/).map(function(v,i){
			v = v.trim(); // Depending on output, some whitespace will remain
			if (i == 4)
				v = v.slice(0, v.length-2) // Trim "])" for last entry
			return parseFloat(v, 10);
		});

		// Push a bridge object to an array of Bridges
		return {
			num: data[0],
			x1: data[1],
			y1: data[2],
			x2: data[3],
			y2: data[4]
		};
	})
	.filter(function(v){
		return v != undefined; // Get rid of undefined elements
	});


do {
	// Create an intersection graph consisting of pairs of
	// intersecting bridges
	var graph = [];
	for (var i = 0; i < Bridges.length; i++){
		for (var j = i+1; j < Bridges.length; j++){
			if (Bridges[i] === undefined || Bridges[j] === undefined)
				break;
			if (checkIntersect(Bridges[i], Bridges[j]))
				// Push both bridge numbers -- they intersect with each other:
				graph.push(Bridges[i].num, Bridges[j].num);
		}
	}

	if (graph.length == 0) break;

	// Figure out the bridge number with the highest occurence
	var modeMap = [],
		maxEl = graph[0],
		maxCnt = 1;

	graph.forEach(function (v, i){
		var el = graph[i];

		if (modeMap[el] == null)
			modeMap[el] =1;
		else
			modeMap[el]++;

		if (modeMap[el] > maxCnt){
			maxEl = el;
			maxCnt = modeMap[el];
		}
	});

	// Remove bridge:
	removeBridge(maxEl);

	// Repeat until there are no more intersections
} while (graph.length != 0);

// Print the resulting bridges:
Bridges.forEach(function(Bridge){
	if (Bridge != undefined)
		console.log(Bridge.num);
})