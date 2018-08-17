const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});

module.exports = {
    entry: "./index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin,
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // }),
    ],
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true,
        // hot: true,
        // inline: true,
        // progress: true,
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/',
                    }
                }]
            },
            {
                test: /\.scss$/,
                // AND WE USE IT HERE
                use: extractPlugin.extract({
                 use: ["css-loader", "sass-loader", "postcss-loader"],
                 fallback: 'style-loader'
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ["transform-object-rest-spread","transform-class-properties"]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    }
}