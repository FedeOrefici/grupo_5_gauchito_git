const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);

router.get("/views/index.ejs", mainController.index);

router.get("/views/login.ejs", mainController.login);

router.get("/views/register.ejs", mainController.register);

router.get("/views/productsAlfajores.ejs", mainController.productsAlfajores);

router.get("/views/productsEmpanadas.ejs", mainController.productsEmpanadas);

router.get("/views/productsMates.ejs", mainController.productsMates);

router.get("/panelAdministrator.ejs", mainController.panelAdministrator);

module.exports = router;
