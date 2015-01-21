'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-wiredep/tasks/wiredep.js')(grunt);

    function loadConfig(grunt) {
        return {
            wiredep: {
                task: {
                    // Point to the files that should be updated when
                    // you run `grunt wiredep`
                    src: [
                        'app/index.html'
                    ]
                }
            }
        };
    }

    grunt.registerTask('devbliss-wiredep', function () {
            grunt.config.merge(loadConfig(grunt));
            grunt.task.run(['wiredep']);
        }
    );
}
