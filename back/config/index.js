const fs = require('fs');
const path = require('path');
const merge = require('merge');
const os = require('os');

let global = {},
    config = null;

function loadFile(filename) {
    const file = path.join(__dirname, filename) + '.json';

    if (!fs.existsSync(file)) {
        throw new Error(`${file} does not exists`);
    }
    return require(file);
};

/**
 * app.get('env') === NODE_ENV
 */
exports.load = () => {
    if (config === null) {
        env = process.env.HOME;

        if(env.indexOf("C:") == -1) {
            env = 'production';
        } else {
            env = 'development';
        }

        global = loadFile('global');
        config = loadFile(env);
        config = merge.recursive(false, global, config);
    }
    return config;
};