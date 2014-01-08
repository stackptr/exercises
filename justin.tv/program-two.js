/* Justin.tv Challenges
 * Program 2
 *
 * Requirements:
 *  - Read numbers for stdin, printing "yes" or "no" based on a prime test
 *  - Print input errors to stderr
 *  - Only needs to handle 16-bit integers
 */

// Since max number to calculate is 2^16 - 1 = 65535 (unsigned 16-bit), generate
// a lookup table of primes through the Sieve of Eratosthenes. Handling input will
// be really speedy at the expense of a slightly longer startup.

var max = 65535;

// Initialize sieve
var sieve = [false, false]; // 0 and 1 are not prime
for (var i = 2; i < max; i++){
    sieve[i] = true;
}

// Generate primes using Sieve of Eratosthenes
for (var i = 2; i < Math.sqrt(max); i++){
    if (sieve[i]){
        for (var j = i*i; j < max; j += i){
            sieve[j] = false;
        }
    }
}

// Now start listening to stdin
var data = "";
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){
	data += chunk;
});

process.stdin.on('end', function(){
	data.trim()					// Trim whitespace
		.split(/\s+/)			// Split on whitespace
		.forEach(function(v){
			// Handle non-numbers
			for (var i = 0; i < v.length - 1; i++){
				var char = v.charCodeAt(i);
				if (char < 48 || char > 57){
					process.stderr.write("Not a valid number.\n");
					return;
				}
			}

			if (sieve[parseInt(v, 10)])
				console.log("yes");
			else
				console.log("no");
		});
})