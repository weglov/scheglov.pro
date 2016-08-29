// 'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
// var postcss = require('postcss');


module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'dev/script/main.js'),
    output: {
        path: path.resolve(__dirname, 'build/dev'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }]
    },
    postcss: function() {
        return [autoprefixer, precss];
    }
};
