const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './static/src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'static','out')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new miniCss({filename:'style.css'})
  ],
  resolve: {
    alias: {
      Root: path.resolve(__dirname, 'node_modules')
    }
  }
};
