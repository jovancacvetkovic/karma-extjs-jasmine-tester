let gulp = require('gulp');
let karma = require('karma-extjs-jasmine-tester');

let karmaConf = require('./karma.conf');

//noinspection JSUnresolvedFunction
gulp.task('coverage', function(config){
    let options = karmaConf.getOptions(config);
    let isDebug = process.env.DEBUG || false;
    options.browsers = [isDebug ? 'Chrome' : 'ChromeHeadless'];
    
    return karma.run({
        staticPort: 9877,
        coverage: true,
        beforeSource: [
            'ext/build/ext-modern-all-debug.js',
            'unit-tests/collector.js'
        ],
        afterSource: [
            'unit-tests/app.js'
        ],
        tests: [],
        
        karma: options
    });
});
