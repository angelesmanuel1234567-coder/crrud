const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/productos', controller.vista);
router.post('/productos', controller.guardar);
router.get('/productos/delete/:id', controller.eliminar);
router.post('/productos/edit/:id', controller.editar);
router.get('/productos/edit/:id', controller.formEditar);

module.exports = router;