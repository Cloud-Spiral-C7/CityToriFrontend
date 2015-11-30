var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './public/js',
    publicPath: '/public'
  },
  module: {
    loaders: [
      { test: /\.html/, loader: 'html?minimize' }
    ],
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")],
    alias: {
      'jquery.cookie': path.join(__dirname, "bower_components/jquery.cookie/jquery.cookie.js")
    }
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery"
    })
  ]
}
