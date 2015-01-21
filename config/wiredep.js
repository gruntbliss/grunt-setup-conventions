function loadTask(grunt) {

    // External Dependencies import
    require('grunt-wiredep/tasks/wiredep.js')(grunt);

    function loadConfig(grunt) {
        wiredepConfig = {
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
            loadConfig(grunt);
            grunt.config.merge(wiredepConfig);
            grunt.task.run(['wiredep']);
        }
    );
}

module.exports.loadTask = loadTask;
