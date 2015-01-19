/*
 * grunt-devbliss
 * https://github.com/devbliss/ecosystem-grunt-plugin
 *
 * Copyright (c) 2014 Devbliss
 * Licensed under the Apache, License, 2.0 licenses.
 */

'use strict';

module.exports = function (grunt) {

    require('grunt-wiredep/tasks/wiredep.js')(grunt);
    require('grunt-connect-rewrite/tasks/connect_rewrite.js')(grunt);
    require('grunt-connect-proxy/tasks/connect_proxy.js')(grunt);
    require('grunt-contrib-connect/tasks/connect.js')(grunt);

    require('../config/configureProxies.js').loadConfig();
    require('../config/connect.js');
    require('../config/wiredep.js');

    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

    grunt.registerTask('devbliss-configureProxies', function(config) {

        grunt.log.writeln('config:"' + configureProxiesConfig);
        grunt.config.merge(configureProxiesConfig);
        grunt.task.run(['configureProxies:'+config]);
    });

    grunt.registerTask('devbliss-configureRewriteRules', function(config) {
        grunt.config.merge({
            connect: {
                // configuration for the task configureRewriteRules from plugin grunt-connect-rewrite
                rules: [{
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
                }]
            }
        });
        grunt.task.run(['configureRewriteRules']);
    });

    grunt.registerTask('devbliss-connect', function (config) {

            var devblissOptions = grunt.config('devbliss');

            grunt.config.merge({
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
            });
            grunt.task.run(['connect:'+config]);
        }
    );

    grunt.registerTask('devbliss-wiredep', function () {
            grunt.config.merge({
                wiredep: {
                    task: {
                        // Point to the files that should be updated when
                        // you run `grunt wiredep`
                        src: [
                            'app/index.html'
                        ]
                    }
                }
            });
            grunt.task.run(['wiredep']);
        }
    );

    grunt.registerMultiTask('devbliss', 'The best Grunt plugin ever.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator: ', '
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var src = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                // Read file source.
                return grunt.file.read(filepath);
            }).join(grunt.util.normalizelf(options.separator));

            // Handle options.
            src += options.punctuation;

            // Write the destination file.
            grunt.file.write(f.dest, src);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
