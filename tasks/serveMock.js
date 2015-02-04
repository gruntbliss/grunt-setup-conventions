'use strict';

module.exports = function (grunt) {

    grunt.registerTask('serve-mock', [
        'devbliss-processhtml:e2eApp',
        'devbliss-connect:e2eApp',
        'devbliss-watch'
    ]);
};
