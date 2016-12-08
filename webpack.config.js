'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join('./main')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
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
      }, 
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader!postcss-loader")
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.less'],
    root: [path.join(__dirname, './app')]
  },
  postcss: [ 
    autoprefixer({ browsers: ['last 3 versions'] })
  ]
};
