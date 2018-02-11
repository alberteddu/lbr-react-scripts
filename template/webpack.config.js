const path = require('path');

// This file is needed to make webpack alias resolve work in PHPStorm, node, and eslint.

module.exports = {
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src'),
        },
    },
};
