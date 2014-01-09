/* CodeEval challenge 3
 * Prime palindrome
 *
 * Requirements:
 *  - Print largest prime palindrome under 1000 to stdout
 *  - A palindrome number is the same backward and forwards (e.g., 929)
 */

// Returns true if input is palindrome
function is_palindrome(input){
	var a = input.toString();
	for (var i = 0, j = a.length-1;
		 i < Math.ceil(a.length/2), j > Math.floor(a.length/2)-1; i++, j--){
		if (a.charAt(i) != a.charAt(j)){
			return false;
		}
	}
	return true;
}

var max = 1000;

// Initialize sieve
var sieve = [];
for (var i = 0; i < max; i++){
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

// Find palindromes from primes
var palindromes = []
for (var i = 1; i < max; i++){
    if (sieve[i] && is_palindrome(i)){
        palindromes.push(i);
    }
}

console.log(palindromes[palindromes.length-1]);