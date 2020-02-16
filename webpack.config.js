const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode: 'none',
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [{ loader: 'url-loader', options: { limit: 5000 } }]
          }
        ]
      },
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].lazy-chunk.js'
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
