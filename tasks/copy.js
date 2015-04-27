'use strict';

var extendGruntPlugin = require('extend-grunt-plugin');

module.exports = function (grunt) {

    var helpers = require('./util/helpers.js');

    var taskConfig = {
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
                        'bower_components/ecosystem-main-frontend/release/styles/bootstrap/fonts/**/*'
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
                        'bower_components/ecosystem-main-frontend/release/images/**/*',
                        'images/placeholder/*',
                        'styles/img/**/*'
                    ],
                    dest: 'dist'
                }
            ]
        }
    };


    grunt.registerTask('devbliss-copy', function(config) {

        extendGruntPlugin(grunt, require('grunt-contrib-copy/tasks/copy'), {
            'copy.components': taskConfig.components,
            'copy.js': taskConfig.js,
            'copy.font': taskConfig.font,
            'copy.img': taskConfig.img
        });

        grunt.task.run(['copy' + helpers.gruntTarget(config)]);
    });
};

