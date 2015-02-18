'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-eslint/tasks/eslint.js')(grunt);

    function loadConfig() {
        return {
        // VALIDATE JS IN CASE OF CODE QUALITY
            eslint: {
                target: [
                    'Gruntfile.js',
                    'app/scripts/**/*.js',
                    'app/app_components/**/*.js',
                    'app/app_dev_components/**/*.js'
                ],
                test: {
                    src: ['test/**/*.js']
                },
                options: {
                    configFile: './tasks/util/eslint.json'
                }
            }
        };
    }

    grunt.registerTask('devbliss-eslint', function () {
            grunt.config.merge(loadConfig());
            grunt.task.run(['eslint']);
        }
    );
};
