const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
   
            loader: 'style-loader'
          },
          {
        
            loader: 'css-loader'
          },
          {
      
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
          
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico|webp|eot|ttf|woff|woff2|pdf|mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}