const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './src/main.js',
        './src/styles.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), filename: 'main.min.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from Js strings
                    MiniCssExtractPlugin.loader,
// Translates CSS into CommonJs
                    "css-loader",
// Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new MiniCssExtractPlugin({filename:"styles.min.css"}),

    ]
}