'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-connect-rewrite/tasks/connect_rewrite.js')(grunt);

    function loadConfig(grunt) {
        // configuration for the task configureRewriteRules from plugin grunt-connect-rewrite
        var rules = [{
            from: '^/lat/$',
            to: 'http://0.0.0.0:8096/',
            redirect: 'permanent'
        }, {
            from: '^/edi/$',
            to: 'http://0.0.0.0:8084/',
            redirect: 'permanent'
        }, {
            from: '^/prep/$',
            to: 'http://0.0.0.0:8087/',
            redirect: 'permanent'
        }, {
            from: '^/monitoring/(.*)$',
            to: 'http://0.0.0.0:8082',
            redirect: 'permanent'
        }];
        // get existing options to overwrite the task rules with the project rules
        var projectRules = grunt.config('connect.rules');

        if (Array.isArray(projectRules)) {
            rules = projectRules;
        }

        return {
            connect: {
                rules: rules
            }
        };
    }

    grunt.registerTask('devbliss-configureRewriteRules', function() {
        grunt.config.merge(loadConfig(grunt));
        grunt.task.run(['configureRewriteRules']);
    });
};
