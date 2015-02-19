'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-protractor-runner/tasks/protractor_runner.js')(grunt);


    function loadConfig () {
        return {
            // PROTRACTOR: LIBRARY FOR END TO END TESTS
            protractor: {
                options: {
                    configFile: 'node_modules/protractor/referenceConf.js',
                    // If false, the grunt process stops when the test fails.
                    keepAlive: false,
                    // If true, protractor will not use colors in its output.
                    noColor: false,
                    args: {}
                },
                all: {
                    // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                    options: {
                        // Target-specific config file
                        configFile: 'test/protractor.conf.js',
                        args: {
                            // Target-specific arguments
                            seleniumServerJar: 'node_modules/grunt-devbliss/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
                            chromeDriver: 'node_modules/grunt-devbliss/node_modules/protractor/selenium/chromedriver'
                        }
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-protractor', function (config) {
            grunt.config.merge(loadConfig());
            grunt.task.run(['protractor:' + config]);
        }
    );
};
