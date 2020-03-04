const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    home: path.resolve(__dirname, "src/index.js"),
    precio: path.resolve(__dirname, "src/precios.js"),
    contacto: path.resolve(__dirname, "src/contacto.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  }
};
