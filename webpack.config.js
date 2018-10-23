const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, 'src', 'App.jsx'),
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
    }),
    new CopyWebpackPlugin([{
      from: 'public/',
      to: path.resolve(__dirname, 'build')
    }], {
      ignore: [ 'index.html' ]
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        },
        {
            test: /\.(eot|svg|ttf|woff2?|otf)$/,
            use: 'file-loader'
        }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx']
  }
}
