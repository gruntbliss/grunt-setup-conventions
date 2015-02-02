'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-clean/tasks/clean.js')(grunt);

    grunt.registerTask('devbliss-cssmin', function () {
            grunt.task.run(['clean']);
        }
    );
};
