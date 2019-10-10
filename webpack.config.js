const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode : "production",
  entry: './src/index.jsx',
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
    historyApiFallback : true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true, //broswer opens
    //use proxy to get rid of cors
    proxy : {
      "/api" : {
        target : 'https://localhost:3000'
      }
      
    }
  }, 
  //adding babel to compile our js to be more compatible with browsers that support older js versions
  module: {
    rules: [
      {
        enforce : "pre",
        test: /\.js|jsx$/, //tells webpack compiler that when it comes by js files it will use babel loader to transform it first
        exclude: /node_modules/,//exclude node_modules from transforming
        loader : 'eslint-loader',
        options: {
          //if necessary
        },


      },
      {
        test: /\.js|jsx$/,
        exclude : /node_modules/,
        loader : 'babel-loader',
        options: {
          //if necessary
        },
      },
      {
        test: /\.css$/i,
        use : ['style-loader','css-loader'],//css loader loads css file and the style loader puts it in the head element
      },
    ],
  },


    
};