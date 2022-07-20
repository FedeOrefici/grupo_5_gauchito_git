const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");

//correcion ruta para css
app.use(express.static("public"));

//inicio de server
app.listen(process.env.PORT || 3050, function () {
  console.log("servidor corriendo en el puerto 3050");
});

app.use("/", mainRoutes);
