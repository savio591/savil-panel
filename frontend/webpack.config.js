const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.js'
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'docs'),
      port: 9000
    },

    entry: ['@babel/polyfill', './src/index.tsx'],
    
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ]
        },
        {
          test: /.*\.(gif|png|jpe?g)$/i,
          use: {
            loader: 'file-loader',
          }
        }
      ]
    },
  };
