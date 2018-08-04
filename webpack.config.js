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
    app: './client/javascripts/app.jsx'
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
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
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
