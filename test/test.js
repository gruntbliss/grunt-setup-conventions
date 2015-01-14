var test = require('./util/helpers.js');

test.setUp(
	[
		"npm install ",
  		"bower install",
  		"grunt devbliss-wiredep"
  	]
);

test.assertFileContains(
	'app/index.html',
	'<script src="../bower_components/jquery/dist/jquery.js"></script>',
	'bower component has been added to the index.html'
);