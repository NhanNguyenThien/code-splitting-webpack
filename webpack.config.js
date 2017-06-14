const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
      name: 'vendor1',
      chunks: ['app1'],
      minChunks: (module, count) => (
        module.resource && module.resource.indexOf('node_modules') >= 0
      )
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor2',
      chunks: ['app2'],
      minChunks: (module, count) => (
        module.resource && module.resource.indexOf('node_modules') >= 0
      )
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['vendor1', 'vendor2'],
      minChunks: (module, count) => {
        console.log('count ', (module.resource && (module.resource.indexOf('node_modules') >= 0) && (count >= 2)))
        return module.resource && (module.resource.indexOf('node_modules') >= 0) && (count >= 2)
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
}
