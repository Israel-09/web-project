const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",   // "production" | "development" | "none"
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dest"),
        filename: "[name].js",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dest"),
            watch: true,
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "News App",
            filename: "index.html",
            template: "src/template.html",
            inject: "body",
        }),
    ]
};