'use strict';

module.exports = function (grunt) {

    grunt.registerTask('unit-test-app', [
        'devbliss-karma:app'
    ]);

    grunt.registerTask('unit-test-dist', [
        'devbliss-karma:dist'
    ]);
};
