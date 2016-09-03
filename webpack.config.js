var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: [
    "./app.js",
    "./index.html",
  ],

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/, },
      { test: /\.html$/, loader: "file?name=[name].[ext]", },
      { test: /\.sass$/, loaders: ["style", "css", "sass?indentedSyntax"] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/, },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: '../CNAME' },
      { from: 'index.html', to: 'software.html' },
    ]),

    new webpack.DefinePlugin({
      '__DEV__': (process.env.NODE_ENV !== 'production')
    })
  ],
}