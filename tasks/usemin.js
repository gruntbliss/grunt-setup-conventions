'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-usemin/tasks/usemin.js')(grunt);

    function loadUseMinConfig() {

        return {
            // Performs rewrites based on rev and the useminPrepare configuration
            usemin: {
                html: ['dist/index.html'],
                options: {
                    assetsDirs: ['dist']
                }
            }
        };

    }

    grunt.registerTask('devbliss-usemin', function () {
            grunt.config.merge(loadUseMinConfig(grunt));
            grunt.task.run(['usemin']);
        }
    );

    function loadUseMinPrepareConfig() {

        return {
            // Reads HTML for usemin blocks to enable smart builds that automatically
            // concat, minify and revision files. Creates configurations in memory so
            // additional tasks can operate on them
            useminPrepare: {
                html: 'app/index.html',
                options: {
                    dest: 'dist'
                }
            }
        };

    }

    grunt.registerTask('devbliss-useminPrepare', function () {
            grunt.config.merge(loadUseMinPrepareConfig(grunt));
            grunt.task.run(['useminPrepare']);
        }
    );
};
