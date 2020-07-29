const path = require('path');

module.exports = {
   mode: 'development',
  entry: './src/index.js',
  watch: true,
  watchOptions:{
            poll: true,
            ignored: "/node_modules/"
        },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    open:true,
  }

};
