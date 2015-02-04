'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-cssmin/tasks/cssmin.js')(grunt);

    grunt.registerTask('devbliss-cssmin', function () {
            grunt.task.run(['cssmin']);
        }
    );
};
