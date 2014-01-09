/* CodeEval challenge 61
 * Decryption
 *
 * Requirements:
 *  - Given an encrypted message and a key, determine the encryption and
 *	  encoding technique and then print out the corresponding plaintext
 *    message in CAPS.
 *  - The message is comprised of only the characters A-Z and spaces, no
 *    digits or punctuation.
 */

var message = "012222 1114142503 0313012513 03141418192102 0113" +
			  " 2419182119021713 06131715070119";
var key = "BHISOECRTMGWYVALUZDNFJKPQX";

// Create a map of the key:
var map = {};

key.split('').forEach(function(v, i){
	map[v] = i;
})

var i = 0;
while (i < message.length){
	// Ignore spaces
	if (message[i] == ' '){
		process.stdout.write(' ');
		i++;
		continue;
	}

	// Since each word of the message is even-numbered and given the relative
	// frequency of 0 1 and 2, assume that every two digits represent a word 
	var code = message.charAt(i) + message.charAt(i+1);

	// The encrypted letter gives the key for the map
	var key = String.fromCharCode(parseInt(code, 10)+65);

	// The key's value gives the position of the decrypted letter
	var value = map[key];

	process.stdout.write(String.fromCharCode(65+value));

	i += 2;
}
process.stdout.write("\n");