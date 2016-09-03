module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
    cname: "../CNAME",
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /CNAME$/,
        loader: "file?name=CNAME",
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass?indentedSyntax"]
      },
      { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?limit=8192' },
    ],    
  }
}