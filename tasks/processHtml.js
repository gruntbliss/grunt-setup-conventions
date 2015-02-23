'use strict';

module.exports = function (grunt) {

    var helpers = require('./util/helpers.js');

    // External Dependencies import
    require('grunt-processhtml/tasks/processhtml.js')(grunt);

    function loadConfig() {
        return {
            // PROCESSHTML: Build new index html for e2e run
            processhtml: {
                e2eApp: {
                    files: {
                        'app/index_e2e.html': ['app/index.html']
                    }
                },
                e2eDist: {
                    files: {
                        'dist/index_e2e.html': ['dist/index.html']
                    }
                }
            }
        };
    }

    grunt.registerTask('devbliss-processhtml', function (config) {
            grunt.config.merge(loadConfig());
            grunt.task.run(['processhtml' + helpers.gruntTarget(config)]);
        }
    );
};
