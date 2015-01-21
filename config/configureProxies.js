function loadTask(grunt) {

    // External Dependencies import
    require('grunt-connect-proxy/tasks/connect_proxy.js')(grunt);

    function loadConfig(grunt) {
        configureProxiesConfig = {
            connect: {
                // configuration for task configureProxies from plugin grunt-connect-proxy
                proxies: [
                    { // used for requests to the zuul service in local developement
                        context: '/api',
                        host: '172.17.42.1', // ip address of the host
                        port: 8070,
                        changeOrigin: true,
                        xforward: false
                    },
                    { // used for content player in local developement
                        context: '/qtiplayer',
                        host: 'localhost',
                        port: 13771,
                        changeOrigin: true,
                        xforward: false,
                        rewrite: {
                            '^/qtiplayer': ''
                        }
                    }
                ]
            }
        };
    }

    grunt.registerTask('devbliss-configureProxies', function(config) {
        loadConfig(grunt);
        grunt.config.merge(configureProxiesConfig);
        grunt.task.run(['configureProxies:'+config]);
    });
}

module.exports.loadTask = loadTask;
