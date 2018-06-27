const webpack = require('webpack');
const path = require('path');
const AutoDllPlugin = require('autodll-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './public/libs');
const APP_DIR = path.resolve(__dirname, './frontend');

const config = {
  entry: {
    administrator : APP_DIR + '/administrator/index.jsx',
    user : APP_DIR + '/user/index.jsx',
    guest : APP_DIR + '/guest/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].lib.js'
  },
  cache: true,
  module : {
    rules : [
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