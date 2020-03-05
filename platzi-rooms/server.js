const express = require("express");
const port = 9000;
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, (req, res) => {
  res.sendFile(__dirname, +"dist/index.html");
});

app.listen(port, () => {
  console.log("Puerto corriendo en http://localhost:9000");
});
