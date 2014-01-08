/* Justin.tv Challenges
 * Program 1
 *
 * Requirements:
 *  - Prompts user for a number
 *  - Prints "yes" or "no" after testing if it's prime and then exits
 *  - Should handle errors gracefully
 */

// Return random integer between min and max
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randInt(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Perform the operation base^(exp) % mod in a way to avoid overflows. Not very efficient.
function modPow(base, exp, mod){
	var i, result = 1;
	for (var i = 0; i < exp; i++){
		result *= base;
		result %= mod;
	}
	return result;
}

// Miller-Rabin primality test
// Deterministic if we believe the Riemann hypothesis.
// Source: http://en.wikipedia.org/wiki/Miller-Rabin
function primeTest(n){
	if (n < 2) return false;
	if (n == 2 || n == 3) return true;

	// Factor n - 1 as 2^(exp) * remainder, with remainder odd (factor powers of 2)
	var r = n - 1,
		exp = 0;
	while (r % 2 == 0){
		r = r/2;
		exp++;
	}

	// Generate a possible Fermat witnesses
	for (var i = 0; i < 100; i++){
		var possibleWitness = randInt(2, n-2);

		if (isWitness(possibleWitness, n, exp, r))
			return false;
	}

	// If no Fermat witness found, number is highly probable to be prime
	return true;
}

// Check that a number is a Fermat witness for a given number n, factored as 2^(exp)*r
function isWitness(possibleWitness, n, exp, r){
	possibleWitness = modPow(possibleWitness, r, n)

	if (possibleWitness == 1 || possibleWitness == (n - 1)) return false;

	for (var i = 0; i < exp; i++){
		possibleWitness = modPow(possibleWitness, 2, n);

		if (possibleWitness == (n - 1)) return false;
	}
	return true;
}

function promptInput(){
	response = "";	// Clear whatever current input exists
	process.stdout.write("Enter a number: ");
}

// Handle some chunk of user input
function processInput(chunk){
	if (chunk.indexOf("\n") != -1){
		// Add to response
		response += chunk.slice(0, chunk.indexOf("\n")+1);

		// Check input
		for (var i = 0; i < response.length - 1; i++){
			var char = response.charCodeAt(i);
			if (char < 48 || char > 57){
				console.log("Not a valid number.")
				promptInput();
				return;
			}
		}

		// Input is good
		if (primeTest(parseInt(response, 10)))
			console.log("Yes");
		else
			console.log("No");

		process.exit(0);
	}

	// Otherwise add the data
	response += chunk;
}

var response = "";					// Holds user response data
promptInput();
process.stdin.resume();				// Open stdin stream
process.stdin.setEncoding('utf8');	// Encode input as utf8
process.stdin.on('data', processInput);	// Listen on new data at stdin