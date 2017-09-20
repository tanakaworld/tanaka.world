const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const project = require('./project.config');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(project.outDir),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.png$/, loader: "file-loader?name=dist/[path][name].[ext]"},
            {test: /\.(sass|css)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(project.env)}
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
};
