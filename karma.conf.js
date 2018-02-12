// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'lib/*.js',
      'src/**/*.js',
      'test/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    preprocessors: {
    },

    // test results reporter to use
    reporters: ['progress', 'coverage', 'html'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['PhantomJS'],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-htmlfile-reporter',
      'karma-phantomjs-launcher'
    ],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      subdir: 'report'
    },

    htmlReporter: {
      outputFile: 'coverage/report/units.html'
    },

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  })
}