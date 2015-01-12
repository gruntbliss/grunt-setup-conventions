/*
 * grunt-devbliss
 * https://github.com/devbliss/ecosystem-grunt-plugin
 *
 * Copyright (c) 2014 Devbliss
 * Licensed under the Apache, License, 2.0 licenses.
 */

'use strict';

module.exports = function (grunt) {

    var wireDep = require('grunt-wiredep/tasks/wiredep.js')(grunt);

    grunt.registerTask('devbliss-bower-install', function () {
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
