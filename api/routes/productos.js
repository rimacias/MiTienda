var express = require('express');
var router = express.Router();
const Producto = require('../models/producto');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async (req, res) => {
    try {
      const productos = await Producto.findAll(); // Consulta todos los productos
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al consultar productos.' });
    }
});

module.exports = router;
