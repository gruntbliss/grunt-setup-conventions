'use strict';

module.exports = function (grunt) {

    grunt.registerTask('build', function () {
            grunt.task.run(['devbliss-wiredep',
                            'devbliss-clean',
                            'devbliss-recess',
                            'devbliss-eslint',
                            'devbliss-useminPrepare',
                            'devbliss-copy:components',
                            'devbliss-copy:font',
                            'devbliss-copy:img',
                            'devbliss-concat',
            //              'devbliss-uglify',
                            'devbliss-cssmin',
                            'devbliss-copy:js',
                            'devbliss-rev:dist',
                            'devbliss-usemin',
            //               'unit-test-dist',
            //               'e2e-test-dist',
                            'devbliss-htmlmin']);
        }
    );
};
