"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 5000,
    capabilities: { 'browserName': 'chrome' },
    onPrepare: () => {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().setScriptTimeout(150000); //implicit wait
    },
    baseUrl: "http://bhdtest.endava.com/petclinic/",
    specs: ['specs/spec1.js'],
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000 //spec timeout
    }
};
