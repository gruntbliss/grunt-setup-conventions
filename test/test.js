var sys = require('sys');
var S = require('string');
var fs = require('fs');
var exec = require('child_process').exec;

var testDir = __dirname + "/project/";
var pluginDir = __dirname + "/../"

var commands = [
  "npm install ",
  "bower install",
  "grunt devbliss-wiredep"
];

var verifyWiredep = function verifyWiredep(){
	fs.readFile('app/index.html', 'utf8', function (err, data) {
	  if (err) throw err;
	  if (!S(data).contains('<script src="../bower_components/jquery/dist/jquery.js"></script>')) throw err;
	  console.log(' - bower component has been added to the index.html');
	  tearDown();
	});
}

var executeCommand = function executeCommand(index) {
	console.log(" - " + commands[index] + " - ");
	exec(commands[index], puts);
}

// Remove the npm links created for the tests
var tearDown = function tearDown() {
	exec("git checkout . && npm unlink grunt-devbliss", function callback() {
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
	
	if (++i == commands.length) {return verifyWiredep();}
	executeCommand(i);
};

var i = 0;
setUp();




