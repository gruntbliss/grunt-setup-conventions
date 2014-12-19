/*
 * grunt-devbliss
 * https://github.com/devbliss/ecosystem-grunt-plugin
 *
 * Copyright (c) 2014 Devbliss
 * Licensed under the Apache, License, 2.0 licenses.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  //require('load-grunt-tasks')(grunt,{pattern: ['!grunt-devbliss']});
  //grunt.loadNpmTasks('grunt-bower-install');
  //var bowerConfig = require('bower-config');
  var helper = require('grunt-lib-contrib').init(grunt);
 //var bowerInstall = require('grunt-bower-install').init(grunt);
  grunt.initConfig({
    bowerInstall: {
      app: {
        src: ['app/index.html']
      }
    }
  });
  grunt.registerTask('devbliss-bower-install', function() {
    //grunt.loadNpmTasks('grunt-bower-install');
    //grunt.task.run(['bowerInstall']);
        grunt.log.warn('devbliss bower install implementation');
  }
  );

  grunt.registerMultiTask('devbliss', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
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
