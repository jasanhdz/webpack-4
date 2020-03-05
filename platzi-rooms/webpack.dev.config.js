const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  // mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/main.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css|postcss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader", // quiero que primero interpretes que pasa con los imports
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Dotenv({
      path: "./.env", // Path to .env file (this is the default)
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".js", ".vue"],
    modules: [path.resolve(__dirname, "http://localhost:9000/"), "node_modules"]
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  node: {
    fs: "empty",
    child_process: "empty"
  }
};
