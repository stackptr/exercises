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

// Rotate an array
function rotate(Arr, n){
	if (Arr.length > 0){
		for (var i = 0; i < n; i++){
			Arr.unshift(Arr.pop());
		}
	}
}

// Decrypt substitution cipher
//   msg is an array of decrypted letters
//   key is an array that maps char[i] => code
function decrypt(msg, key){
	var result = [];
	msg.forEach(function(v, i){
		result[i] = key[parseInt(v, 10)];
	});
	return result;
}

// Print function
function printMsg(msg){
	for (var i = 0; i < msg.length; i++){
		process.stdout.write(msg[i]);
		if (i == 2 || i == 7 || i == 12 || i == 19 || i == 21 || i == 29 ){
			process.stdout.write(' ');
		}
	}
	process.stdout.write('\n');
}

var message = "012222 1114142503 0313012513 03141418192102 0113 2419182119021713 06131715070119";
var key = "BHISOECRTMGWYVALUZDNFJKPQX".split('');

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

for (var i = 0; i < 26; i++){
	if (frequencies[i] === undefined){
		frequencies[i] = 0;
	}
}

// frequencies.forEach(function(v, i){
// 	console.log(String.fromCharCode(65+i) + ": " + v);
// });

for (var i = 0; i < 26; i++){
	console.log("Rotation: " + i);
	rotate(key,1);
	printMsg(decrypt(letters,key));
}