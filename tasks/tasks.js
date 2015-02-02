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

    grunt.registerTask('devbliss-serve', function (config) {
        grunt.task.run([
            //'clean:dist',
            'devbliss-wiredep',
            'devbliss-configureProxies',
            'devbliss-configureRewriteRules',
            //'devbliss-connect' + config,
            //'devbliss-watch' + config
        ]);
        if (config === 'dist') {
            grunt.task.run(['devbliss-build']);
        }
        config = (config != null) ? ':'+config : '';
        grunt.task.run([
            'devbliss-connect' + config,
            'devbliss-watch' + config
        ]);
    });
};