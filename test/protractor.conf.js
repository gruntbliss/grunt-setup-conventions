exports.config = {
    specs: [
        'e2e/global.e2e.js',
        'e2e/login-workflow.e2e.js',
        'e2e/dashbord.e2e.js',
        'e2e/navigation-workflow.e2e.js'
    ],
    multiCapabilities: [
        // {
        //   browserName: 'chrome'
        // }
        // ,
        // {
        //   browserName: 'firefox'
        // }
        // ,
        // {
        //   browserName: 'safari'
        // }
        // ,
        {
            browserName: 'phantomjs'
        }
    ]
};
