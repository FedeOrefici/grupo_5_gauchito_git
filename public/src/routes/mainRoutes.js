const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/', mainController.login);

router.get('/', mainController.register);

router.get('/', mainController.productsAlfajores);

router.get('/', mainController.productsEmpanadas);

router.get('/', mainController.productsMates);

module.exports = mainController;