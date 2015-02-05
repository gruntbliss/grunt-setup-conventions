'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-protractor-runner/tasks/protractor_runner.js')(grunt);


    function loadConfig(grunt) {
        var devblissOptions = grunt.config('devbliss');
        return {
            // PROTRACTOR: LIBRARY FOR END TO END TESTS
            protractor: {
                options: {
                    configFile: 'node_modules/protractor/referenceConf.js',
                    keepAlive: false, // If false, the grunt process stops when the test fails.
                    noColor: false, // If true, protractor will not use colors in its output.
                    args: {}
                },
                all: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                    options: {
                        configFile: 'test/protractor.conf.js', // Target-specific config file
                        args: {
                            seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
                            chromeDriver: 'node_modules/protractor/selenium/chromedriver'
                        } // Target-specific arguments
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-protractor', function (config) {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['protractor:' + config]);
        }
    );
};
