'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-karma/tasks/grunt-karma.js')(grunt);
    var helpers = require('./util/helpers.js');

    // Watches files for changes and runs tasks based on the changed files
    function loadConfig(grunt) {
        var devblissOptions = grunt.config('devbliss');
        return {
            karma: {
                options: {
                    configFile: 'test/karma.conf.js',
                    singleRun: 'false',
                    files: [
                        'app/bower_components/angular/angular.js',
                        'app/bower_components/angular-mocks/angular-mocks.js',
                        'app/bower_components/angular-cookies/angular-cookies.js',
                        'app/bower_components/angular-resource/angular-resource.js',
                        'app/bower_components/angular-sanitize/angular-sanitize.js',
                        'app/bower_components/angular-route/angular-route.js',
                        'app/bower_components/angular-local-storage/angular-local-storage.js',
                        'app/bower_components/angular-translate/angular-translate.js',
                        'app/bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
                        'app/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
                        'app/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
                        'app/scripts/app.js',
                        'app/scripts/**/*.js',
                        'app/app_components/**/*module.js',
                        'app/app_components/**/**/*.js',
                        'test/spec/**/*.spec.js'
                    ]
                },
                app: {
                    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome', 'PhantomJS']
                },
                dist: {
                    browsers: ['PhantomJS']
                }
            }
        };
    }

    grunt.registerTask('devbliss-karma', function (config) {
            grunt.config.init(helpers.mergeJSON(grunt.config.data, loadConfig(grunt), "karma"));
            grunt.task.run(['karma:'+config]);
        }
    );
};
