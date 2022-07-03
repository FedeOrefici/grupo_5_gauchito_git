const express = require("express");
const app = express();

const path = require("path");

app.listen(process.env.PORT || 3000, function () {
  console.log("server working in port 3000");
});

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/homeTest.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve("views/register.html"));
});
