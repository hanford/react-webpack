const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nested = require('postcss-nested')
const cssVariables = require('postcss-css-variables')

module.exports = {
  entry: './src/main.js',
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 9966
  },
  module: {
    loaders : [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules!postcss-loader'
    }, {
      test: /\.(jpg|svg|woff)$/,
      loader: 'file-loader'
    }, {
      test: /\.(html)$/,
      loader: 'html?attrs=false'
    }, {
      test: /\.(json)$/,
      loader: 'json-loader'
    }]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer, nested, cssVariables],
      cleaner: [ autoprefixer({ browsers: ['last 3 browsers'] }) ]
    }
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
}
