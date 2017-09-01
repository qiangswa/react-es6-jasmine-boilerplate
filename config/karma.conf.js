/**
 * @Author: Q.S. Wang <qiangswa>
 * @Date:   1970-01-01T10:00:00+10:00
 * @Email:  wangqs_eclipse@yahoo.com
 * @Filename: karma.conf.js
 * @Last modified by:   qiangswa
 * @Last modified time: 2017-08-31T23:03:27+10:00
 * @Copyright: Q.S. Wang(wangqs_eclipse@yahoo.com)
 */

var webpackConfig = require('./webpack.config.dev');
webpackConfig.devtool = 'inline-source-map';

var path = require('path');
// var testHelperPath = path.resolve('tests/testHelper.js')

var testPath = 'tests/**/*Spec.js';


module.exports = function(config) {
    config.set({
        basePath: '../',
        browsers: ['PhantomJS'],
        // karma only needs to know about the test bundle
        frameworks: ['jasmine', 'fixture'],

        // files that Karma will server to the browser
        files: [
            // entry file for Webpack
            //this entry file solutions has the issue
            //https://github.com/webpack-contrib/karma-webpack/issues/66
            //The workarouds there are not working also under this env.
            //testHelperPath,
            testPath,
            {
                pattern: 'tests/fixtures/**/*',
            }
        ],
        preprocessors: {
            // add webpack as preprocessor
            // Seems the order does matter. Run babel before webpack
            [testPath]: ['babel', 'webpack', 'sourcemap'],
            '**/*.json': ['json_fixtures'],
        },
        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },

        reporters: ['dots'],
        singleRun: true,
        // webpack config object
        webpack: webpackConfig,
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        }
    });
};
