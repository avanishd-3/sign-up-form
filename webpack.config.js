const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./build/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Process .css files
                use: ["style-loader", "css-loader"], // Loaders for handling CSS
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/intl-tel-input/build/js/utils.js',
                    to: "utils.js"
                }
            ]
        })
    ],
    resolve: {
        alias: {
            // Ensures intl-tel-input resolves correctly
            'intl-tel-input': path.resolve(__dirname, 'node_modules/intl-tel-input')
        }
    },
};


/* import { resolve as _resolve } from 'path';

const CopyWebpackPlugin = require('copy-webpack-plugin');

export const entry = './build/script.js';
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/intl-tel-input/build/js/utils.js',
                    to: "utils.js"
                }
            ]
        })
    ]
};
export const module = {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
};
export const resolve = {
    alias: {
        // Ensures intl-tel-input resolves correctly
        'intl-tel-input': _resolve(__dirname, 'node_modules/intl-tel-input')
    }
};
 */