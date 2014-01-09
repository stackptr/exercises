/* CodeEval challenge 4
 * Sum of primes
 *
 * Requirements:
 *  - Print sum of the first 1000 prime numbers
 */

function is_prime(n){
    for (var i = 0; i < primes.length; i++){
        if (n % primes[i] == 0){
            return false
        }
    }
    return true;
}

// Generate primes
var max_primes = 1000;
var primes = [2, 3, 5]; // Trivial primes
var number = 6;
while (primes.length < max_primes){
    if (is_prime(number)){
        primes.push(number);
    }
    number++;
}

// Sum the primes
var sum = 0;
for (var i = 0; i < primes.length; i++){
    sum += primes[i];
}

console.log(sum);