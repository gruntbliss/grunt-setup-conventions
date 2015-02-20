'use strict';

module.exports = function (grunt) {

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build',
                                   'devbliss-configureProxies:server',
                                   'devbliss-configureRewriteRules',
                                   'devbliss-connect:dist:keepalive']);
        }

        grunt.task.run([
            'devbliss-clean:dist',
            'devbliss-wiredep',
            'devbliss-recess',
            'devbliss-configureProxies:server', // added just before connect
            'devbliss-configureRewriteRules',
            'devbliss-connect:app',
            'devbliss-watch'
        ]);

    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('ec2-serve', [
        'build',
        'devbliss-connect:distDocker:keepalive'
    ]);
};
