const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY = path.join(__dirname, 'src', 'index.js');
const OUTPUT = path.join(__dirname, 'dist');

module.exports = {
 entry: ENTRY,
 mode: "development",
 output: {
  path: OUTPUT,
  filename: 'bundle.js',
 },
 module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};