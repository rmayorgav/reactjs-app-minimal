const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
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
        new HtmlWebpackPlugin(
            {
                template: "src/index.html"
            }
        )
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
}