/* CodeEval challenge 61
 * Decryption
 *
 * Requirements:
 *  - Given an encrypted message and a key, determine the encryption and
 *	  encoding technique and then print out the corresponding plaintext
 *    message in CAPS.
 *  - The message is comprised of only the characters A-Z and spaces, no
 *    digits or punctuation.
 * 
 */

var message = "012222 1114142503 0313012513 03141418192102 0113 2419182119021713 06131715070119";
var key = "BHISOECRTMGWYVALUZDNFJKPQX";

// Key is 26 characters long and each character only appears once. Therefore,
// a cipher is assumed, where the position of each letter correspond to
// the numerical value of that letter.

// Let's assume the encrypted message is a series of words, space delimited
// For each word, we'll use the same decryption technique and print out the
// result.

var words = message.split(" ");

// A message that only contains digit can only have 10 possible letters used,
// but this isn't very likely. Each encrypted word is of even length, so it
// makes sense that every 2 digits encode one word (this is supported by the
// relative frequency of 0 and 1).

// We can then get an array of letters that appear in the message:
var letters = [];
for (var i = 0; i < words.length; i++){
	for (var j = 0; j < words[i].length; j += 2){
		var str = words[i].charAt(j) + words[i].charAt(j+1);
		letters.push(str);
	}
}

// Now perform frequency analysis:
var frequencies = [];
letters.forEach(function(v){
	var pos = parseInt(v, 10);
	if (frequencies[pos] === undefined){
		frequencies[pos] = 1;
	} else {
		frequencies[pos]++;
	}
});

frequencies.forEach(function(v, i){
	console.log(i + ": " + v);
});