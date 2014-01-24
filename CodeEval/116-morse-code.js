/* CodeEval challenge 116
 * Morse code
 *
 * Requirements:
 *  - Program accepts as its first argument a path to a file containing one input
 *    string per line.
 *  - Each input is encoded in standard Morse code, where each letter is separated
 *    by one space, each word separated by two spaces.
 *  - Print the decoded message.
 */

var fs  = require("fs");

var MorseCode = {
    ".-":       "A",
    "-...":     "B",
    "-.-.":     "C",
    "-..":      "D",
    ".":        "E",
    "..-.":     "F",
    "--.":      "G",
    "....":     "H",
    "..":       "I",
    ".---":     "J",
    "-.-":      "K",
    ".-..":     "L",
    "--":       "M",
    "-.":       "N",
    "---":      "O",
    ".--.":     "P",
    "--.-":     "Q",
    ".-.":      "R",
    "...":      "S",
    "-":        "T",
    "..-":      "U",
    "...-":     "V",
    ".--":      "W",
    "-..-":     "X",
    "-.--":     "Y",
    "--..":     "Z",
    "-----":    "0",
    ".----":    "1",
    "..---":    "2",
    "...--":    "3",
    "....-":    "4",
    ".....":    "5",
    "-....":    "6",
    "--...":    "7",
    "---..":    "8",
    "----.":    "9"
};

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function(input){
        if (input == "") return;

        input.split("  ").forEach(function(word, n){
            if (n > 0)
                process.stdout.write(" ");
            word.split(" ").forEach(function(letter){
                process.stdout.write(MorseCode[letter]);
            });
        });
        process.stdout.write("\n");
    });
