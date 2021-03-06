const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const cssnano = require('cssnano')
const BASE_CSS_LOADER = 'css?sourceMap&-minimize'
const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = IS_DEV ? 8080 : process.env.PORT;
const HOST = ip.address()

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/index'
    ],
    vendor: [
      'react'
    ]
  },

  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.json']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name].[hash].js`,
    publicPath: `http://${HOST}:${PORT}/dist/`
  },

  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': IS_DEV,
      '__API_ROOT__': JSON.stringify(process.env.API_ROOT || '')
    }),
    new HtmlWebpackPlugin({
      template: `!!handlebars!${path.join(__dirname, 'src/index.hbs')}`,
      hash     : false,
      filename : 'index.html',
      inject   : 'body',
      minify   : {
        collapseWhitespace : true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  sassLoader: {
    includePaths : path.join(__dirname, 'src/styles')
  },

  postcss: [
    cssnano({
      autoprefixer : {
        add      : true,
        remove   : true,
        browsers : ['last 2 versions']
      },
      discardComments : {
        removeAll : true
      },
      discardUnused : false,
      mergeIdents   : false,
      reduceIdents  : false,
      safe          : true,
      sourcemap     : true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test    : /\.scss$/,
        exclude : null,
        loaders : [
          'style',
          BASE_CSS_LOADER,
          'postcss',
          'sass?sourceMap'
        ]
      },
      {
        test    : /\.css$/,
        exclude : null,
        loaders : [
          'style',
          BASE_CSS_LOADER,
          'postcss'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.handlebars$/, loader: "handlebars-loader"
      }
    ]
  }
}
