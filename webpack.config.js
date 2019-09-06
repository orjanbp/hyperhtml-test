module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  devServer: {
      contentBase: './dist'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  }
}
