var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './public/js/',
    filename: 'bundle.js',
    publicPath: "./public/"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
