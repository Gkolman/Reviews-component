var path = require('path')
module.exports = {
  resolve: {
    fallback: {
      "zlib": false,
      "querystring": false,
      "buffer": false
    },
  },
  entry:  path.resolve(__dirname,'client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname,'client' , 'dist', ),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname,'client'),
        exclude: /node_modules/ && /dist/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/ && /dist/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};