/* eslint "import/no-extraneous-dependencies": 0 */
const baseConfig = require('./webpack.config');

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[local]', 'postcss', 'sass']
      },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  postcss: baseConfig.postCss
};
