const express = require("express");
const app = express();
const controlador = require('./public/src/controllers/mainController.js');

app.set('view engine', 'ejs');

//correcion ruta para css
app.use(express.static('public'));

// //rutas vistas
// app.get('/', (req,res)=>{
//   res.render('index');
// });

// app.get('/', (req,res)=>{
//   res.render('login');
// });

// app.get('/', (req,res)=>{
//   res.render('register');
// });

// app.get('/', (req,res)=>{
//   res.render('productsAlfajores');
// });

// app.get('/', (req,res)=>{
//   res.render('productsEmpanadas');
// });

// app.get('/', (req,res)=>{
//   res.render('productsMates');
// });

//inicio de server
app.listen(process.env.PORT || 3000, function(){
  console.log("servidor corriendo en el puerto 3000")
});




