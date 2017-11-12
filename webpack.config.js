const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

var VENDOR_LIBS = ['jquery'];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
           
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] })
            }
            // ,
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]'
            //             }
            //         }
            //     ],
            //     exclude: path.resolve(__dirname, 'src/index.html')
            // }
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract('css!sass')
            // }
           
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:'work.html',
            template: './src/work.html'
        }),
        new HtmlWebpackPlugin({
            filename:'about.html',
            template: './src/about.html'
        }),
        new HtmlWebpackPlugin({
            filename:'service.html',
            template: './src/service.html'
        }),
        new HtmlWebpackPlugin({
            filename:'contact.html',
            template: './src/contact.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/assets/images', to: './dewey-designs-vanillajs/assets/images' }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'bundle']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env)
          })
    ]
}