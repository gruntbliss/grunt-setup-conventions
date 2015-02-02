'use strict';

module.exports = function (grunt) {

    grunt.registerTask('build', function () {
            grunt.task.run(['devbliss-wiredep',
                            'devbliss-clean',
                            'clean:dist',
                            'clean:e2eDist',
                            'devbliss-recess',
                            'devbliss-jshint',
                            'devbliss-useminPrepare',
                            'devbliss-copy:components',
                            'devbliss-copy:font',
                            'devbliss-copy:img',
                            'devbliss-concat',
            //              'uglify',
                            'devbliss-cssmin',
                            'devbliss-copy:js',
                            'devbliss-rev:dist',
                            'devbliss-usemin',
            //               'karma:dist',
            //               'e2e-test-dist',
                            'devbliss-htmlmin']);
        }
    );
};
