'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-contrib-concat/tasks/concat.js')(grunt);

    function loadConfig() {
        return {
            concat: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['app/**/*.js'],
                    dest: 'dist/built.js'
                }
            }
        };
    }

    grunt.registerTask('devbliss-concat', function () {
        grunt.config.merge(loadConfig());
        grunt.task.run(['concat']);
    });
};
