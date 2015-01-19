function loadConfig() {
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

module.exports.loadConfig = loadConfig;
