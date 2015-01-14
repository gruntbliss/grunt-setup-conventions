var x = function(commands) {

	var fs = require('fs');
	var S = require('string');
	var sys = require('sys');
	var exec = require('child_process').exec;

	var pluginDir = __dirname + "/../../";
	var testDir = __dirname + "/../project/";

	var i = 0;
	var commands;
	var assertion;

	var verifyFileContains = function verifyFileContains(assertion){
		fs.readFile(assertion.file, 'utf8', function (err, data) {
		  if (err) throw err;
		  if (!S(data).contains(assertion.searchString)) throw err;
		  console.log(' - ' + assertion.message);
		  tearDown();
		});
	}

	// Remove the npm links created for the tests
	var tearDown = function tearDown() {
		exec("git checkout . && npm unlink grunt-devbliss", function callback() {
			process.chdir(pluginDir);
			exec("npm unlink");	
		});
	}

	var executeCommand = function executeCommand(index) {
		console.log(" - " + commands[index] + " - ");
		exec(commands[index], puts);
	}

	var setUp = function setUp(cmds){
		commands = cmds;

		exec("npm link", function callback() {
			process.chdir(testDir);
			exec("npm link grunt-devbliss", function callback() {
				executeCommand(i);
			});
	});	
	}

	var puts = function puts(error, stdout, stderr) { 
		sys.puts(stdout);
		
		if (++i == commands.length) {
			return verifyFileContains(assertion);
		}
		executeCommand(i);
	};

	var assertFileContains = function assertFileContains(file, searchString, message){
		assertion = {
			file: file, 
			searchString: searchString,
			message: message
		};
	}

	return {
		setUp: setUp,
		assertFileContains: assertFileContains
	}
}();

module.exports = x;