const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: './src/index.js',
 mode: "development",
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
 },
 resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
 devServer: { static: path.join(__dirname, "src") },
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
    },
    {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
    },
    {
        test: /\.(jpg|jpeg|png|svg|pdf)$/,
        use: ['file-loader']
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "dist", "index.html"),
    }),
  ]
};