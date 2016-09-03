var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/, },
      { test: /\.html$/, loader: "file?name=[name].[ext]", },
      { test: /\.sass$/, loaders: ["style", "css", "sass?indentedSyntax"] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/, },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: '../CNAME' },
      { from: 'index.html', to: 'software.html' },
    ])
  ],
}