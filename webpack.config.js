const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const App = {
  env: process.env.NODE_ENV || 'development',
  path: path.resolve(__dirname, 'public', 'assets')
}

module.exports = {
  mode: App.env,

  entry: {
    app: './client/javascripts/app.js'
  },

  output: {
    path: App.path,
    publicPath: '/assets/',
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(App.path),
    new WebpackAssetsManifest({
      publicPath: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[chunkhash].css'
    })
  ]
}
