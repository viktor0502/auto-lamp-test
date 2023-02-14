'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
