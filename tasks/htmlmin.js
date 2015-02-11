'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-htmlmin/tasks/htmlmin.js')(grunt);

    function loadConfig() {
        // MINIFI TEMP HTML AND MOVE IT TO DIST FOLDER
        return {
            htmlmin: {
                dist: {
                    options: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true,
                        removeCommentsFromCDATA: true,
                        removeOptionalTags: true
                    },
                    files: [
                        {
                            expand: true,
                            cwd: 'dist',
                            src: ['**/*.html'],
                            dest: 'dist'
                        }
                    ]
                }
            }
        };

    }

    grunt.registerTask('devbliss-htmlmin', function () {
            grunt.config.merge(loadConfig());
            grunt.task.run(['htmlmin']);
        }
    );
};
