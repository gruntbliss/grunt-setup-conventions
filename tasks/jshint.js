'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-jshint/tasks/jshint.js')(grunt);
    var options = require('./util/jsHintGlobalOptions');

    function loadConfig() {
        return {
        // VALIDATE JS IN CASE OF CODE QUALITY
            jshint: {
                files: [
                    'Gruntfile.js',
                    'app/scripts/**/*.js',
                    'app/app_components/**/*.js',
                    'app/app_dev_components/**/*.js'
                ],
                test: {
                    src: ['test/**/*.js']
                },
                options: options.globalOptions
            }
        };
    }

    grunt.registerTask('devbliss-jshint', function () {
            grunt.config.merge(loadConfig());
            grunt.task.run(['jshint']);
        }
    );
};
