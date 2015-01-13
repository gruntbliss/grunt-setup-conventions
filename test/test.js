var sys = require('sys')
var exec = require('child_process').exec;

var testDir = __dirname + "/project/";
var pluginDir = __dirname + "/../"

var commands = [
  "npm install ",
  "bower install",
  "grunt xyz",
  "git diff app/index.html",
  "git checkout ."
];


var executeCommand = function executeCommand(index) {
	console.log(" - " + commands[index] + " - ");
	exec(commands[index], puts);
}

// Remove the npm links created for the tests
var tearDown = function tearDown() {
	exec("npm unlink grunt-devbliss", function callback() {
		process.chdir(pluginDir);
		exec("npm unlink");	
	});
}

var setUp = function setUp(){
	exec("npm link", function callback() {
		process.chdir(testDir);
		exec("npm link grunt-devbliss", function callback() {
			executeCommand(i);
		});
});	
}

var puts = function puts(error, stdout, stderr) { 
	sys.puts(stdout);
	
	if (++i == commands.length) {return tearDown();}
	executeCommand(i);
};

var i = 0;
setUp();




