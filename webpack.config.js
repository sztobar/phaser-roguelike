var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './main',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, 'src')
  },
  devtool: 'source-map'
};
