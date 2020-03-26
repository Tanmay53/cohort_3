// Entry Point
// root
//  Output
// yout final bundle file
// loaders
// webpack understands, js, json;
//  css, non-js, jsx -need loaders for that.

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
      },
      module: {
          rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
          ]
      },
      watch: true
}