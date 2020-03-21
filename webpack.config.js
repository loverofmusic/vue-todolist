const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const config = {
  target: "web", //???????????
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 2,
              name: "[name]-icon.[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.html",
      inject: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }) //??????????????
  ]
};

if (isDev) {
  (config.devtool = "#cheap-module-eval-source-map"),
    (config.devServer = {
      host: "0.0.0.0",
      port: 8000,
      overlay: {
        errors: true //webpack 编译过程中，一出现错误 就会显示到网页上
      },
      hot: true
    });
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin() //???????????????????
  );
}
module.exports = config;
