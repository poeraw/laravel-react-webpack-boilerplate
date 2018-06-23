var webpack = require('webpack');
var path = require('path');
const AutoDllPlugin = require('autodll-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './public/libs');
var APP_DIR = path.resolve(__dirname, './frontend');

var config = {
  entry: {
    administrator : APP_DIR + '/administrator/index.jsx',
    user : APP_DIR + '/user/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].lib.js'
  },
  cache: true,
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./public",
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new AutoDllPlugin({
      inject: false, // will inject the DLL bundles to index.html
      filename: '[name].lib.js',
      entry: {
        vendor: [
          'react',
          'react-dom'
        ]
      }
    })
  ]
};

module.exports = config;