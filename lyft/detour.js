/* Lyft challenge
 * Shortest detour
 *
 * Calculate the detour distance between two different rides. Given
 * four latitude / longitude pairs, where driver one is traveling from
 * point A to point B and driver two is traveling from point C to point
 * D, write a function (in your language of choice) to calculate the
 * shorter of the detour distances the drivers would need to take to pick-up
 * and drop-off the other driver.
 */

var rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

function Point(x, y){
	this.x = x;
	this.y = y;
}

// Returns distances between two points
function distance(p1, p2){
	return Math.sqrt(Math.pow(p2.x-p1.x, 2) + Math.pow(p2.y-p1.y, 2));
}

// Given a path consisting of an array points, return total distance
function distPath(path){
	var result = 0, i = 0;
	for (var i = 0; i != path.length-1; )
		result += distance(path[i], path[++i]);
	return result;
}

// Parse some coordinate "[-]xx,[-]yy" into a Point
function parsePoint(str){
	str = str.trim().split(",");
	var x = parseFloat(str[0]),
		y = parseFloat(str[1]);
	return new Point(x, y);
};

// Synchronous prompting
var A, B, C, D, actions = [function(next) {
	console.log("Driver 1");
	rl.question("Point A (x,y): ", function(res){
		A = parsePoint(res);
		next();
	});
}, function(next) {
	rl.question("Point B (x,y): ", function(res){
		B = parsePoint(res);
		next();
	});
}, function(next) {
	console.log("Driver 2");
	rl.question("Point C (x,y): ", function(res){
		C = parsePoint(res);
		next();
	});
}, function(next) {
	rl.question("Point D (x,y): ", function(res){
		D = parsePoint(res);
		next();
	});	
}, function() {
	// Find shortest detour

	// Detour is either from A->C->D->B (driver 1 picks up driver 2)
	//   or C->A->B->D (drive 2 picks up driver 1)

	var detourOne = distPath([A, C, D, B]),
		detourTwo = distPath([C, A, B, D]);

	if (detourOne < detourTwo){
		console.log("Shortest detour is for driver 1");
		console.log(detourOne.toFixed() + " units")
	} else {
		console.log("Shortest detour is for driver 2");
		console.log(detourTwo.toFixed() + " units")
	}

	rl.close();
}];

var i = 0; 
function nextAction() {
	if(actions[i]) actions[i++](nextAction);
}
nextAction();