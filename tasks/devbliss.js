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

    grunt.registerTask('devbliss-configureProxies', function(config) {
        require('../config/configureProxies.js').loadConfig();
        grunt.config.merge(configureProxiesConfig);
        grunt.task.run(['configureProxies:'+config]);
    });

    grunt.registerTask('devbliss-configureRewriteRules', function(config) {
        require('../config/configureRewriteRules.js').loadConfig();
        grunt.config.merge(configureRewriteRulesConfig);
        grunt.task.run(['configureRewriteRules']);
    });

    grunt.registerTask('devbliss-connect', function (config) {
            var devblissOptions = grunt.config('devbliss');
            require('../config/connect.js').loadConfig(devblissOptions);
            grunt.config.merge(connectConfig);
            grunt.task.run(['connect:'+config]);
        }
    );

    grunt.registerTask('devbliss-wiredep', function () {
            require('../config/wiredep.js').loadConfig();
            grunt.config.merge(wiredepConfig);
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
