const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: "development",
  output: {
    assetModuleFilename: 'img/[name][ext]',
    filename: 'script/[name].bundle.js'
  },
  devServer: {
    client: {
      overlay: true,
      progress: true
    },
    historyApiFallback: true,
    hot: true,
    // open: true,
    port: 8081,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WYY-MUSIC',
      filename: 'index.html',
      template: resolve(__dirname, '../public/index-dev.html')
    })
  ]
};
