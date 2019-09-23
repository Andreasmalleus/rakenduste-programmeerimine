const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode : "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([
      {from: 'public'}
    ]),
    new CleanWebpackPlugin(),
  ],
  //devserver library that opens immediately
  devServer : {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true //broswer opens
  }, 
  //adding babel to compile our js to be more compatible with browsers that support older js versions
  module: {
    rules: [
      {
        test: /\.js$/, //tells webpack compiler that when it comes by js files it will use babel loader to transform it first
        exclude: /node_modules/,//exclude node_modules from transforming
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },


    
};