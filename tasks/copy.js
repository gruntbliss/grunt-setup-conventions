'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-copy/tasks/copy.js')(grunt);

    function loadConfig(grunt) {
        return {
            // COPYS FILES FROM APP TO DIST
            copy: {
                components: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: 'app',
                            dest: 'dist',
                            src: [
                                '.htaccess',
                                'bower_components/**/*.html',
                                'app_components/**/*.html',
                                'views/**/*.html',
                                'index.html'
                            ]
                        }
                    ]
                },
                js: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: '.tmp/concat/scripts/',
                            dest: 'dist/scripts/',
                            src: ['*.js']
                        }
                    ]
                },
                font: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: 'app/bower_components/ecosystem-main-frontend/release/styles/bootstrap/fonts',
                            dest: '<%= lat.dist %>/styles/fonts',
                            src: ['*']
                        }
                    ]
                },
                img: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: 'app',
                            dest: 'dist',
                            src: ['bower_components/ecosystem-main-frontend/release/images/**/*','images/placeholder/*']
                        }
                    ]
                }
            }
        };
    }

    grunt.registerTask('devbliss-copy', function () {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['copy']);
        }
    );
};
