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
for (var i = 0; i < bridgeNums.length; i++){
	for (var j = i+1; j < bridgeNums.length; j++){
		if (checkIntersect(Bridges[bridgeNums[i]], Bridges[bridgeNums[j]]))
			graph.push([bridgeNums[i], bridgeNums[j]]);
	}
}

// From intersection graph, determine frequency of each bridge
var bridgeFreq = {};
graph.forEach(function(v){
	if (bridgeFreq[v[0]] == null)
		bridgeFreq[v[0]] = 1;
	else
		bridgeFreq[v[0]]++;
	if (bridgeFreq[v[1]] == null)
		bridgeFreq[v[1]] = 1;
	else
		bridgeFreq[v[1]]++;
});

while (Object.keys(bridgeFreq).length > 0){
	// Take the bridge number that is most frequent
	var removeNum = 0,
	    freq = 0;

	for (var bridge in bridgeFreq){
		if (bridgeFreq[bridge] > freq){
			removeNum = bridge;
			freq = bridgeFreq[bridge];
		}
	}

	// Remove bridge from Bridges
	delete Bridges[removeNum];

	// Remove bridge from frequency based on intersection graph
	graph.forEach(function(v){
		if (v[0] == removeNum || v[1] == removeNum){
			// If either bridge in an element of the graph contains the bridge
			// that is being removed, decrement both elements in bridgeFreq
			bridgeFreq[v[0]]--;
			bridgeFreq[v[1]]--;
			if (bridgeFreq[v[0]] == 0)
				delete bridgeFreq[v[0]];
			if (bridgeFreq[v[1]] == 0)
				delete bridgeFreq[v[1]];
		}
	})


	graph = graph.filter(function(v){
		return v[0] != removeNum && v[1] != removeNum;
	});
}

// Print the resulting bridges:
for (var bridge in Bridges){
	console.log(bridge);
}