const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry file
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean 'dist' folder before each build
  },
  mode: 'none', // Change to 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/, // Process all .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for the HTML file
    }),
  ],
  devServer: {
    static: './dist', // Serve files from 'dist' directory
    hot: true, // Enable hot module replacement
  },
};
