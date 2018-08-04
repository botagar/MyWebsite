const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const DIST = path.resolve(__dirname, 'dist')
const ENV = process.env.NODE_ENV || 'development'

// TODO: Refactor out module section to be reused between client and server configs

var reactConfig = {
  mode: ENV,
  devtool: 'source-map',
  
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    './src/client/main.js'
  ],

  output: {
    path: DIST,
    publicPath: '/',
    filename: 'app.bundle.js',
    sourceMapFilename: '[file].map'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],    
  },

  devServer: {
    inline: true, // Hot reloading
    port: 8081, // Port which the Dev Server will listen on
    contentBase: './src/client', // Where the entry to your app is
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
  externals: [nodeExternals()],
  mode: 'development',

  node: {
    __dirname: false
  },

  entry: [
    'babel-polyfill',
    './src/server/server.js'
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
              name: '[name].[ext]',
              outputPath: 'media/images',
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
