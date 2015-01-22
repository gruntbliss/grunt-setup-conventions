'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-recess/tasks/recess.js')(grunt);

    // Watches files for changes and runs tasks based on the changed files
    function loadConfig(grunt) {
        return {
            // CONVERT LESS TO CSS IN TEMPFOLDER
            recess: {
                options: {
                    compile: true
                },
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: 'app/styles/less',
                            src: 'Base.less',
                            dest: 'app/styles/.tmp/',
                            ext: '.css'
                        }
                    ]
                }
            },
        };
    }

    grunt.registerTask('devbliss-recess', function () {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['recess']);
        }
    );
};
