'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-uglify/tasks/uglify.js')(grunt);

    grunt.registerTask('devbliss-uglify', function () {
            grunt.task.run(['uglify']);
        }
    );
};
