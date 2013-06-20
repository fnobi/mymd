(function () {
    var optimist = require('optimist'),

        Mymd = require('./Engine');

    var argv = optimist
            .boolean('h')
            .alias('h', 'help')
            .default('h', false)
            .describe('h', 'show this help.')

            .boolean('c')
            .alias('c', 'config')
            .default('c', {})
            .describe('c', 'config file path.')

            .argv;

    if (argv.h) {
        optimist.showHelp();
        return;
    }

})();