'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

let theme = JSON.stringify({
  "gray": "#46a775"
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join('./src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"]
        }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    root: [path.join(__dirname, './src')]
  },
  postcss: [
    autoprefixer({ browsers: ['last 3 versions'] })
  ]
};
