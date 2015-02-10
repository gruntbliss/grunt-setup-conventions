'use strict';

module.exports = function (grunt) {

    // External Dependencies import
    require('grunt-connect-proxy/tasks/connect_proxy.js')(grunt);

    function loadConfig(grunt) {
        // configuration for task configureProxies from plugin grunt-connect-proxy
        var proxies = [
            { // used for requests to the zuul service in local development
                context: '/api',
                host: '172.17.42.1', // ip address of the host
                port: 8070,
                changeOrigin: true,
                xforward: false
            },
            { // used for content player in local development
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
        // get existing options to overwrite the task rules with the project rules
        var projectProxies = grunt.config('connect.proxies');

        if (Array.isArray(projectProxies)) {
            proxies = projectProxies;
        }

        return {
            connect: {
                proxies: proxies
            }
        };
    }

    grunt.registerTask('devbliss-configureProxies', function(config) {
        grunt.config.merge(loadConfig(grunt));
        grunt.task.run(['configureProxies:'+config]);
    });
};
