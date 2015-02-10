'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-jshint/tasks/jshint.js')(grunt);

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
                }
            }
        };
    }

    grunt.registerTask('devbliss-jshint', function () {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['jshint']);
        }
    );
};
