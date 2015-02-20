'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-recess/tasks/recess.js')(grunt);

    function loadConfig () {
        return {
            // CONVERT LESS TO CSS IN TEMP FOLDER
            recess: {
                options: {
                    compile: true
                },
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: 'app/styles/less',
                            src: 'base.less',
                            dest: 'app/styles/.tmp/',
                            ext: '.css'
                        }
                    ]
                }
            }
        };
    }

    grunt.registerTask('devbliss-recess', function () {
            grunt.config.merge(loadConfig());
            grunt.task.run(['recess']);
        }
    );
};
