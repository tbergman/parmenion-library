'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var autoprefixer = require('autoprefixer');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'parmenion-library.min.js',
    libraryTarget: 'umd',
    library: 'Parmenion',
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-0", "react"]
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader!postcss-loader")
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
