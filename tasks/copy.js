'use strict';

module.exports = function (grunt) {

    var helpers = require('./util/helpers.js');

    // External Dependencies import
    require('grunt-contrib-copy/tasks/copy.js')(grunt);

    function loadConfig() {
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
                            cwd: 'app',
                            src: [
                                'styles/css/bootstrap/fonts/**/*',
                                'styles/fonts/**/*',
                                'bower_components/ecosystem-main-fe/release/styles/bootstrap/fonts/**/*'
                            ],
                            dest: 'dist'
                        }
                    ]
                },
                img: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: 'app',
                            src: [
                                'bower_components/ecosystem-main-fe/release/images/**/*',
                                'images/placeholder/*',
                                'styles/img/**/*'
                            ],
                            dest: 'dist'
                        }
                    ]
                },
                release: {
                    files: [
                        {
                            expand: true,
                            dot: true,
                            cwd: 'app/app_components/pageModule/',
                            dest: 'release/',
                            src: [
                                '**/*'
                            ]
                        }
                    ]
                }
            }
        };
    }

    grunt.registerTask('devbliss-copy', function (config) {
            grunt.config.merge(loadConfig());
            grunt.task.run(['copy' + helpers.gruntTarget(config)]);
        }
    );
};
