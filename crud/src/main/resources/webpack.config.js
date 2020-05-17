const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const miniCss = require('mini-css-extract-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './static/src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'static', 'out')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.s[c|a]ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
        'vuetify-loader'
      ],
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }]
  },
  plugins: [
    new VuetifyLoaderPlugin(),
    new VueLoaderPlugin(),
    new miniCss({
      filename: 'style.css'
    })
  ],
  resolve: {
    alias: {
      Root: path.resolve(__dirname, 'node_modules')
    }
  }
};
