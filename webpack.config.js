var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname, "public"),
        filename : "appbundle.js",
        publicPath: '/public/'
    },
    module : {
        rules:[
            {
                loader : "babel-loader",
                test : /\.js$/,
                exclude : /node_modules/
            },{
                test : /\.s?css$/,
                use : ["css-loader", "sass-loader"]
            }
        ]
    },
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : "./public/index.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    performance: {
        hints: false
    }
}