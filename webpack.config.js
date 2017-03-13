const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== "production";

const config = {
    context: __dirname + "/src",
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                'exclude': /node_modules/,
                options: {
                    'plugins': ['lodash'],
                    'presets': [
                        ['es2015', { 'modules': false }] //tree-shaking
                    ]
                }

            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'postcss-loader',
                    ]
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000
    },
    plugins: debug ? [
            new ExtractTextPlugin("[name].css"),
            new HtmlWebpackPlugin({template: './index.html'}),
            new LodashModuleReplacementPlugin,
    ]
    : [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({template: './index.html'}),
        new LodashModuleReplacementPlugin,
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
    ]
};

module.exports = config;
