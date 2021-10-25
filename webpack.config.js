const path = require('path');

const ENTRY = path.join(__dirname, 'src', 'index.js');
const OUTPUT = path.join(__dirname, 'dist');

module.exports = {
 entry: ENTRY,
 mode: "development",
 output: {
  path: OUTPUT,
  filename: 'bundle.js'
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};