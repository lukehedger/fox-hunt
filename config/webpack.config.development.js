const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
}

const PATHS = {
  src: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../public'),
  img: path.join(__dirname, '../static/img'),
  static: path.join(__dirname, '../static'),
}

module.exports = {
  devServer: {
    contentBase: PATHS.dist,
    port: 3000,
    stats: 'errors-only',
    historyApiFallback: true,
  },

  devtool: 'eval',

  entry: PATHS.src,

  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new CleanPlugin(['./**/*'], PATHS.dist),
    new CopyPlugin([{ from: PATHS.img, to: 'img' }]),
    new HtmlWebpackPlugin({
      favicon: path.resolve(PATHS.static, 'favicon.ico'),
      template: path.resolve(PATHS.static, 'index.html'),
    }),
  ],

  resolve: {
    modules: [PATHS.src, 'node_modules'],
    alias: {
      core: 'core',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}
