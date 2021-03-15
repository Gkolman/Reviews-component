module.exports = {
  entry: __dirname + '/client/index.jsx',
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
};