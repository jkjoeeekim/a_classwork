const path = require('path');

module.exports = {
  entry: './components/react_minesweeper.jsx', // specify entry to widgets.jsx
  output: {
    path: path.resolve(__dirname), // resolves path into an absolute
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
  },
  devtool: 'source-map', // creates a bundle.js.map - without this chrome would only tell you where your errors are in the bundle file
  resolve: {
    extensions: [".js", ".jsx", "*"] // import a file - import something from 'something'
  }
}
