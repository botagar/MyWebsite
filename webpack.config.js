const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')
const ENV = process.env.NODE_ENV || 'development'

// TODO: Refactor out module section to be reused between client and server configs

var reactConfig = {
  mode: ENV,
  devtool: 'source-map',
  target: 'web',

  entry: {
    hotloader: 'react-hot-loader/patch',
    main: './src/client/main.js'
  },

  output: {
    path: DIST,
    publicPath: '/',
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].bundle.[contenthash:8].js',
    sourceMapFilename: '[file].map'
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
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
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(?:jpg|gif|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'media/images'
          }
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(), // Will clean the output dist dir
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ]
}

// var bffConfig = {
//   target: 'node',
//   externals: [nodeExternals()],
//   mode: 'development',

//   node: {
//     __dirname: false
//   },

//   entry: [
//     './src/server/server.js'
//   ],

//   output: {
//     path: DIST,
//     filename: 'server.bundle.js'
//   },

//   module: {
//     rules: [{
//         test: /\.html$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]'
//           }
//         }]
//       },
//       {
//         test: /\.css$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]'
//           }
//         }]
//       },
//       {
//         test: /\.(?:jpg|gif|png)$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'media/images',
//             emitFile: false
//           }
//         }]
//       },
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: [{
//           loader: 'babel-loader'
//         }]
//       }
//     ]
//   }
// }

// module.exports = [reactConfig, bffConfig]
module.exports = [reactConfig]