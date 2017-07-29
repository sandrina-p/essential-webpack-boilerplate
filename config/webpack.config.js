/* global process, __dirname, module */
const postcssConfig = './config/postcss/postcss.config.js';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const projectDir = path.resolve(`${__dirname}/..`);

const isDev = process.env.NODE_ENV !== 'production';

console.log('NODE_ENV:', process.env.NODE_ENV);

const config = {
    context: projectDir + '/src',
    entry: './index.js',
    output: {
        filename: isDev ? 'client.js' : 'client.[chunkhash].js',
        path: path.resolve(projectDir, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                'exclude': /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: isDev,
                                localIdentName: isDev ? '[name]__[local]___[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: { path: postcssConfig }
                            }
                        },
                    ],
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000
    },
    plugins: [

        new ExtractTextPlugin('client.[contenthash:base64:5].css'),
        new CleanWebpackPlugin(['build/*.css'], {
            root: projectDir
        }), // avoid Duplicated CSS files with different hash
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new LodashModuleReplacementPlugin,
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: isDev,
                drop_console: !isDev,
                drop_debugger: !isDev,
                screw_ie8: true,
            },
        }),
    ]
};

module.exports = config;
