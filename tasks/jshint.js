'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-jshint/tasks/jshint.js')(grunt);

    function loadConfig(grunt) {
        return {
            // VALIDATE JS IN CASE OF CODE QUALITY
            jshint: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                files: [
                    'Gruntfile.js',
                    'app/scripts/**/*.js',
                    'app/app_components/**/*.js',
                    'app/app_dev_components/**/*.js'
                ],
                test: {
                    //options: {
                    //    jshintrc: 'test/.jshintrc'
                    //},
                    src: [
                        'test/**/*.js'
                    ]
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
