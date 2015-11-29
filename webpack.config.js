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
  }
}
