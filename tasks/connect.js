'use strict';

module.exports = function (grunt) {

    function loadConfig() {

        var devblissOptions = grunt.config('devbliss'),
            rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

        // External Dependencies import
        require('grunt-connect-rewrite/tasks/connect_rewrite.js')(grunt);
        require('grunt-contrib-connect/tasks/connect.js')(grunt);

        return {
            connect: {
                options: {
                    port: devblissOptions.port,
                    // Change this to '0.0.0.0' to access the server from outside.
                    hostname: '0.0.0.0',
                    middleware: function (connect, options) {
                        var middlewares = [];
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy Backend
                        var proxyOptions1 = require('url').parse('http://172.17.42.1:8070/api');
                        proxyOptions1.route = '/api';
                        middlewares.push(require('proxy-middleware')(proxyOptions1));

                        // Setup the proxy qti player
                        var proxyOptions2 = require('url').parse('http://localhost:13771/');
                        proxyOptions2.route = '/qtiplayer';
                        middlewares.push(require('proxy-middleware')(proxyOptions2));


                        // RewriteRules support
                        middlewares.push(rewriteRulesSnippet);

                        // Serve static files
                        options.base.forEach(function (base) {
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
                },

                e2eApp: {
                    options: {
                        port: devblissOptions.testport,
                        base: ['.tmp', 'test', 'app']
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-connect', function (config) {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['connect:' + config]);
        }
    );
};
