const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// console.log('path = ', path.resolve(__dirname, 'dist'));
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: __dirname + '\\dist'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
};