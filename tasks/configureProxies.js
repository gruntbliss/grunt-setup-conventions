'use strict';

module.exports = function (grunt) {

    // External Dependencies import


    function loadConfig() {

        // get existing options to overwrite the task rules with the project rules
        var projectProxies = grunt.config('connect.proxies'),
        // configuration for task configureProxies from plugin grunt-connect-proxy
            proxies = [
                // used for requests to the zuul service in local development
                {
                    context: '/api',
                    host: '172.17.42.1',
                    port: 8070,
                    changeOrigin: true,
                    xforward: false
                },
                // used for content player in local development
                {
                    context: '/qtiplayer',
                    host: 'localhost',
                    port: 13771,
                    changeOrigin: true,
                    xforward: false,
                    rewrite: {
                        '^/qtiplayer': ''
                    }
                }
            ];

        if (Array.isArray(projectProxies)) {
            proxies = projectProxies;
        }

        return {
            connect: {
                proxies: proxies
            }
        };
    }

    grunt.registerTask('devbliss-configureProxies', function (config) {
        grunt.config.merge(loadConfig(grunt));
        require('grunt-connect-proxy/tasks/connect_proxy.js')(grunt);
        grunt.task.run(['configureProxies:' + config]);
    });
};
