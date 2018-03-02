var webpack = require('webpack')
var path = require('path')

var SRC = path.resolve(__dirname, 'src')
var DIST = path.resolve(__dirname, 'dist')

var reactConfig = {
  entry: [
    'react-hot-loader/patch',
    './src/main.js'
  ],

  output: {
    path: DIST,
    filename: 'app.bundle.js',
    sourceMapFilename: '[file].map'
  },

  devServer: {
    inline: true, // Hot reloading
    port: 8081, // Port which the Dev Server will listen on
    contentBase: './', // Where the entry to your app is
    open: true, // Open site in new browser tab upon command execution
    compress: true,
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

var bffConfig = {
  target: 'node',

  node: {
    __dirname: false,
  },

  entry: [
    './src/server.js'
  ],

  output: {
    path: DIST,
    filename: 'server.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = [reactConfig, bffConfig]