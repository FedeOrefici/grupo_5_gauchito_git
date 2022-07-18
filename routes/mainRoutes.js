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

router.get("/views/panelAdministrator.ejs", mainController.panelAdministrator);

router.get("/views/loginAdmin.ejs", mainController.loginAdmin);

router.get("/views/panelAdminEmp.ejs", mainController.panelAdminEmp);

router.get("/views/panelAdminAlf.ejs", mainController.panelAdminAlf);

router.get("/views/panelAdminMat.ejs", mainController.panelAdminMat);

router.get("/views/panelAdminModif.ejs", mainController.panelAdminModif);

module.exports = router;
