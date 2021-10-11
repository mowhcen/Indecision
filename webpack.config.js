const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/,
            },
        ],
    },
    devtool: "eval-cheap-module-source-map",

    devServer: {
        contentBase: path.join(__dirname, "public"),
    },
};
