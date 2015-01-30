'use strict';

module.exports = function (grunt) {

    grunt.registerTask('devbliss-build', function() {
       grunt.task.run([
           'devbliss-wiredep',
           //'clean',
           'devbliss-recess',
           'devbliss-jshint',
           //'useminPrepare',
           'devbliss-copy:components',
           'devbliss-copy:font',
           'devbliss-copy:img',
           'devbliss-concat',
//        'uglify',
           //'cssmin',
           'devbliss-copy:js',
           //'rev:dist',
           //'usemin',
//        'karma:dist',
//        'e2e-test-dist',
           //'htmlmin'
       ]);
    });

    grunt.registerTask('devbliss-serve-app', function () {
        grunt.task.run([
            //'clean:dist',
            'devbliss-wiredep',
            'devbliss-configureProxies:server',
            'devbliss-configureRewriteRules',
            'devbliss-connect:app',
            'devbliss-watch'
        ]);
    });

    grunt.registerTask('devbliss-serve-dist', function () {
        grunt.task.run([
            //'clean:dist',
            'devbliss-wiredep',
            'devbliss-configureProxies:server',
            'devbliss-configureRewriteRules',
            'devbliss-connect:dist',
            'devbliss-watch:dist'
        ]);
    });
};