var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var PROD = JSON.parse(process.env.PROD_DEV || "0");

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/only-dev-server',
        './dev/script/index'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/scripts/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader',
            include: path.resolve(__dirname, 'dev/css')
        }]
    },
    postcss: function() {
        return [autoprefixer, precss];
    }
};
