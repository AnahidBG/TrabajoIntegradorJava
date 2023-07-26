const express = require('express');
const router = express.Router();

router.get('/crear', controller.crear);
router.get('/listar', controller.listar);
router.get('/detalle', controller.detalle);

module.exports = routes;