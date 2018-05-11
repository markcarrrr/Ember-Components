'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    const app = new EmberApp(defaults, {
        sourcemaps: {
            enabled: EmberApp.env() !== 'production',
            extensions: ['js']
        }
    });

    return app.toTree();
};
