const {join, resolve} = require('path')
const argv = require('yargs-parser')(process.argv.slice(2))
const { merge } = require('webpack-merge');

const defaultConfig = {
  entry: resolve('src/index.tsx'),
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist')
  },

}


module.exports = defaultConfig
