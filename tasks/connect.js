'use strict';

module.exports = function (grunt) {

    function loadConfig(grunt) {

        // External Dependencies import
        require('grunt-connect-rewrite/tasks/connect_rewrite.js')(grunt);
        require('grunt-contrib-connect/tasks/connect.js')(grunt);

        var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;
        var devblissOptions = grunt.config('devbliss');

        return {
            connect: {
                options: {
                    port: devblissOptions.port,
                    // Change this to '0.0.0.0' to access the server from outside.
                    hostname: '0.0.0.0',
                    middleware: function(connect, options) {
                        var middlewares = [];
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // RewriteRules support
                        middlewares.push(rewriteRulesSnippet);

                        // Setup the proxy
                        middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
                        // Serve static files
                        options.base.forEach(function(base) {
                            middlewares.push(connect.static(base));
                        });
                        return middlewares;
                    }
                },

                app: {
                    options: {
                        open: true,
                        livereload: devblissOptions.livereload,
                        base: ['.tmp', 'app']
                    }
                },

                dist: {
                    options: {
                        open: true,
                        base: 'dist'
                    }
                },

                distDocker: {
                    options: {
                        port: devblissOptions.port,
                        open: true,
                        base: 'app'
                    }
                },

                testApp: {
                    options: {
                        port: devblissOptions.testport,
                        base: ['.tmp', 'test', 'app']
                    }
                },

                testDist: {
                    options: {
                        port: devblissOptions.testport,
                        base: ['.tmp', 'test', 'dist']
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-connect', function (config) {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['connect:'+config]);
        }
    );
}
