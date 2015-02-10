'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-clean/tasks/clean.js')(grunt);
    var helpers = require('./util/helpers.js');

    function loadConfig() {
        return {
            // CLEAN GENERATED FILES
            clean: {
                dist: {
                    files: [
                        {
                            dot: true,
                            src: [
                                '.tmp',
                                'app/styles/css/base.min.css',
                                'dist/*',
                                '!dist/.git*'
                            ]
                        }
                    ]
                },
                e2eDist: {
                    files: [
                        {
                            dot: true,
                            src: [
                                'dist/app_dev_components',
                                'dist/bower_components',
                                'dist/index_e2e.html'
                            ]
                        }
                    ]
                },
                release: {
                    files: [
                        {
                            dot: true,
                            src: [
                                'release/*'
                            ]
                        }
                    ]
                }
            }
        };
    }

    grunt.registerTask('devbliss-clean', function (config) {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['clean' + helpers.gruntTarget(config)]);
        }
    );
};
