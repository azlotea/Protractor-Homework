exports.config = {
    directConnect: true,
    framework: 'jasmine',
    allScriptsTimeout: 15000,
    capabilities: {'browserName': 'chrome'},
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(120000); //implicit wait
    },
    specs: ['spec.js'],
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000
    }
};
