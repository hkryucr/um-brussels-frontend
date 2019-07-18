const HTMLWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]    
      // }
    ]
  },
  resolve:{
    // configuration options
    alias: {
      j: path.resolve(__dirname, "src/js"),
      c: path.resolve(__dirname, "src/c")
      // Templates: path.resolve(__dirname, "src/templates/")
    }    
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};