var fs = require('fs');

module.exports = function(config) {


  // Browsers to run on TestingBot
  var customLaunchers = {
    'TB_Chrome': {
      base: 'TestingBot',
      browserName: 'chrome'
    },
    'TB_Firefox': {
      base: 'TestingBot',
      browserName: 'firefox'
    }
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'test/*.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'testingbot'],


    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    testingBot: {
      name: 'Karma and TestingBot demo'
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,

    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
