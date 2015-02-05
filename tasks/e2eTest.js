'use strict';

module.exports = function (grunt) {

    grunt.registerTask('e2e-test-app', [
        'devbliss-processhtml:e2eApp',
        'devbliss-connect:testApp',
        'devbliss-protractor:all'
    ]);

    grunt.registerTask('e2e-test-dist', [
        'devbliss-processhtml:e2eDist',
        'devbliss-connect:testDist',
        'devbliss-protractor:all',
        'devbliss-clean:e2eDist'
    ]);
};
