'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-rev/tasks/rev.js')(grunt);

    function loadConfig () {
        return {
            // RENAME FILES FOR BROWSER CACHING PURPOSES
            rev: {
                options: {
                    encoding: 'utf8',
                    algorithm: 'md5',
                    length: 4
                },
                dist: {
                    files: {
                        src: [
                            'dist/scripts/**/*.js',
                            'dist/styles/**/*.css'
                        ]
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-rev', function () {
            grunt.config.merge(loadConfig());
            grunt.task.run(['rev']);
        }
    );
};
