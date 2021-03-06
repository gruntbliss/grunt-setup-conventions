'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-watch/tasks/watch.js')(grunt);

    // Watches files for changes and runs tasks based on the changed files
    function loadConfig() {
        var devblissOptions = grunt.config('devbliss');
        return {
            // Watches files for changes and runs tasks based on the changed files
            watch: {

                // application files

                html: {
                    files: ['app/**/*.html'],
                    options: {
                        livereload: devblissOptions.livereload
                    }
                },

                js: {
                    files: ['app/**/*.js'],
                    tasks: ['devbliss-eslint'],
                    options: {
                        livereload: devblissOptions.livereload
                    }
                },

                less: {
                    files: ['app/styles/less/**/*.less'],
                    tasks: ['devbliss-clean', 'devbliss-recess'],
                    options: {
                        livereload: devblissOptions.livereload
                    }
                },

                css: {
                    files: ['app/**/*.css'],
                    options: {
                        livereload: devblissOptions.livereload
                    }
                },

                // tests

                jsTest: {
                    files: ['test/**/*.js'],
                    tasks: ['eslint:test']
                },

                // setup

                bower: {
                    files: ['bower.json'],

                    tasks: ['devbliss-wiredep']
                },

                gruntfile: {
                    files: ['Gruntfile.js'],
                    tasks: ['devbliss-eslint'],
                    options: {
                        livereload: devblissOptions.livereload
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-watch', function () {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['watch']);
        }
    );
};
