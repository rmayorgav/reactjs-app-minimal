const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: ['./src/index.tsx', './src/pwa.js'],
    output: {
        filename: "[name]-[hash].js",
        // publicPath: 
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ["html-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png)$/,
                use: ['file-loader']
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "public/index.html"
            }
        ),
        new CopyPlugin(
            {
                patterns:[
                    {from:"public"}
                ]
            }
        ),
        new WorkboxPlugin.GenerateSW({})
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
}