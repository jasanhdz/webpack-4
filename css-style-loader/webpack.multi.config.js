const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    home: path.resolve(__dirname, "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // luego quiero que los inyectes a mi html
          "css-loader" // quiero que primero interpretes que pasa con los imports
        ]
      }
    ]
  }
};
