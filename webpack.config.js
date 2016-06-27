var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

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
      test: /\.css/,
      loader: 'style-loader!css-loader?modules!postcss-loader'
    }]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer],
      cleaner: [ autoprefixer({ browsers: ['last 3 browsers'] }) ]
    }
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
}
