const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/index.js'),
    vendor: 'react'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}
