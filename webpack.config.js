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
    extensions: ['', '.js'],
    modulesDirectories: [
       __dirname + '/app',
       __dirname + '/node_modules',
    ]
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel', 'haml-jsx'], exclude: /node_modules/, },
      { test: /\.html$/, loader: "file?name=[name].[ext]", },
      { test: /\.sass$/, loaders: ["style", "css", "sass?indentedSyntax"] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/, },

      // FontAwesome
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: '../other', to: '' },
      { from: 'index.html', to: 'software.html' },
      { from: 'index.html', to: 'music.html' },
      { from: 'index.html', to: 'writing.html' },
    ]),

    new webpack.DefinePlugin({
      '__DEV__': (process.env.NODE_ENV !== 'production')
    }),

    // For turning off react dev
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ],
}