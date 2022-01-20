const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClenWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    assetModuleFilename: 'img/[name].[contenthash5].[ext]',
    filename: 'script/[name].[contenthash8].bundle.js',
    publicPath: '/assets'
  },
  optimization: {
    // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer定义的插件压缩 bundle。
    minimize: true,
    runtimeChunk: {
      name: 'runtime',
    }
    // splitChunks
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WYY-MUSIC',
      filename: 'index.html',
      template: resolve(__dirname, '../public/index-dev.html'),
      minify: true
    }),
    new ClenWebpackPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
  ]
};
