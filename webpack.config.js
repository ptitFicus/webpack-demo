var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    })
  ],
  watch: true
};

module.exports = config;
