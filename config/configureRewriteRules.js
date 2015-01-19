function loadConfig() {
    configureRewriteRulesConfig = {
        connect: {
            // configuration for the task configureRewriteRules from plugin grunt-connect-rewrite
            rules: [{
                from: '^/lat/$',
                to: 'http://0.0.0.0:8096/',
                redirect: 'permanent'
            }, {
                from: '^/edi/$',
                to: 'http://0.0.0.0:8084/',
                redirect: 'permanent'
            }, {
                from: '^/prep/$',
                to: 'http://0.0.0.0:8087/',
                redirect: 'permanent'
            }, {
                from: '^/monitoring/(.*)$',
                to: 'http://0.0.0.0:8082',
                redirect: 'permanent'
            }]
        }
    };
}

module.exports.loadConfig = loadConfig;
