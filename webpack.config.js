const webpack = require('webpack');
const { resolve } = require('path');

module.exports = env => {
  return {
    context: resolve(__dirname, 'src'),
    entry: './app.js',
    devtool: env == 'dev' ? 'eval' : 'sourcemap',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            plugins: ['react-html-attrs']
          }
        }
      ]
    },
    plugins: env != 'dev' ? [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin()
    ] : [],
    output: {
      path: resolve(__dirname, 'dist'),
      filename: './js/app.bundle.js'
    }
  };
};
