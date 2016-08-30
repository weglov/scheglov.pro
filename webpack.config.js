var path = require('path');
var webpack = require('webpack');
var paths = require('./paths');
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
        path: path.resolve(__dirname, 'dev'),
        filename: 'app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader',
        }, {
            test: /\.(jpg|png)$/,
            include: paths.dev,
            loader: 'file-loader',
            query: {
                name: 'media/[name].[ext]'
            }
        }]
    },
    postcss: function() {
        return [autoprefixer, precss];
    }
};
