const path = require('path');
const webpack = require('webpack');

module.exports = {
  // tells webpack where to begin
  entry: {
    app1: path.join(__dirname, 'src/app1.js'),
    app2: path.join(__dirname, 'src/app2.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    // extract the node_modules to a bundle named vendor
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => (
        module.resource && module.resource.indexOf('node_modules') >= 0
      )
    })
  ]
}
