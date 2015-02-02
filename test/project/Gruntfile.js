'use strict';


module.exports = function (grunt) {

	grunt.config.init({
		devbliss: {
			port: 7777,
			livereload: 7778,
			testPort: 7779
		}
	});
	grunt.loadNpmTasks('grunt-devbliss');
};