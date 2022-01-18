const { join, resolve } = require('path');
const argv = require('yargs-parser')(process.argv.slice(2)).mode;
const { merge } = require('webpack-merge');
const mergeConfig = require(`./config/webpack.${argv}.config.js`);

const defaultConfig = {
  entry: resolve('src/index.tsx'),
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|ts|tsx)$/,
        include:[resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|eot|woff|woff2|ttf|webp)$/,
        type: 'asset'
      },
    ],
  },
};

module.exports = merge(mergeConfig, defaultConfig);
