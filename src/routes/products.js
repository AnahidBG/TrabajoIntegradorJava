const express = require('express');
const router = express.Router();

router.get('/crear', controllers.crear);
router.get('/listar', controllers.listar);
router.get('/detalle', controllers.detalle);

module.exports = routes;