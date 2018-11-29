const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../app/index.js'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: false }
              }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                "sass-loader"
            ]
          }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../app/index.html') ,
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
  };