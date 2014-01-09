/* CodeEval challenge 23
 * Multiplication tables
 *
 * Requirements:
 *  - Print a multiplication table up to 12&12 with each number formatted to a
 *    width of 4, right-aligned numbers.
 */

 for (var i = 1; i < 13; i++){
 	for (var j = 1; j < 13; j++){
 		var n = i*j;

 		var print = "";

 		if (n < 10)
 			print += "   ";
 		else if (n < 100)
 			print += "  ";
 		else
 			print += " ";

 		print += n;

 		if (j == 1)
 			print = print.trim();

 		process.stdout.write(print);
 	}
 	process.stdout.write("\n");
 }