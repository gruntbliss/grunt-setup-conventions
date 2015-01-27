'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-concat/tasks/concat.js')(grunt);

    grunt.registerTask('devbliss-concat', function () {
            grunt.task.run(['concat']);
        }
    );
};
