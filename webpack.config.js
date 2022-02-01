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
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@page': resolve(__dirname, 'src/page'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@api': resolve(__dirname, 'src/api'),
      '@mock': resolve(__dirname, 'src/mock'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|webp)$/,
        type: 'asset'
      },
      {
        test: /\.svg$/,
        exclude: /node_module/,
        loader: 'svg-sprite-loader'
      }
    ],
  },
};

module.exports = merge(defaultConfig, mergeConfig);
