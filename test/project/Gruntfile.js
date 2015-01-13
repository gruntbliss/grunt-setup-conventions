'use strict';

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-devbliss');
	grunt.registerTask('xyz',['devbliss-wiredep']);
};