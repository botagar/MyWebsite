var webpack = require('webpack')
var path = require('path')

var DIST = path.resolve(__dirname, 'dist')

// TODO: Refactor out module section to be reused between client and server configs

var reactConfig = {
  mode: 'development',

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
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(?:jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'media/images'
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

var bffConfig = {
  target: 'node',
  mode: 'development',

  node: {
    __dirname: false
  },

  entry: [
    './src/server.js'
  ],

  output: {
    path: DIST,
    filename: 'server.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(?:jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}

module.exports = [reactConfig, bffConfig]
