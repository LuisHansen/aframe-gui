var webpack = require('webpack');

module.exports = {
    entry: {
        js: './src/index.js',
    },
    output: {
        path: __dirname,
        filename: './examples/public/js/aframe-gui.js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=.babel_cache',
                },
            },
        ],
    },
    plugins: [],
};

