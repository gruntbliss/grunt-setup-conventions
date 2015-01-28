'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-usemin/tasks/usemin.js')(grunt);

    function loadConfig(grunt) {

        return {
            // Performs rewrites based on rev and the useminPrepare configuration
            usemin: {
                html: ['dist/index.html'],
                options: {
                    assetsDirs: ['dist']
                }
            }
        }

    }

    grunt.registerTask('devbliss-usemin', function () {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['usemin']);
        }
    );
};
