// Node.js stdin/stdout example

// stdin is paused by default, so resume the stream
process.stdin.resume();

// Set encoding if necessary
process.stdin.setEncoding('utf8');

// Initialize data variable
var data = '';

// On data, append to variable
process.stdin.on('data', function(chunk){
	data += chunk;
})

// Print data when stream ends (^D)
process.stdin.on('end', function(){
	// console.log is functionally similar, though extra formatting is performed
	process.stdout.write(data);
})
