const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const port = process.env.PORT || 3000;

const env = process.env.NODE_ENV || 'development';

const cssModulesLoader = 'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

module.exports = {
  devtool: env === 'production' ? null : 'eval-source-maps',
  entry: {
    main: env === 'production' ? ['./src/index'] : [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src')]
    }, {
      test: /\.scss$/,
      loaders: ['style', cssModulesLoader, 'postcss?sourceMap', 'sass?sourceMap']
    },
    { test: /\.json$/, loader: 'json' }]
  },
  postcss: () => [autoprefixer],
  sassLoader: {
  },
  plugins: env === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
};
