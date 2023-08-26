var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async (req, res) => {
    try {
      const productos = await db.Producto.findAll();
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al consultar productos.' });
    }
});

router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const producto = await db.Producto.findByPk(productId);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar el producto.' });
  }
});

router.post('/new', async (req, res) => {
  const { nombre, precio, descripcion } = req.body;

  try {
    const nuevoProducto = await db.Producto.create({
      nombre,
      precio,
      descripcion,
    });

    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto.' });
  }
});

router.put('/update/:id', async (req, res) => {
  const productId = req.params.id;
  const { nombre, precio, descripcion } = req.body;

  try {
    const producto = await db.Producto.findByPk(productId);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    await producto.update({
      nombre,
      precio,
      descripcion,
    });

    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto.' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const producto = await db.Producto.findByPk(productId);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }

    await producto.destroy();

    res.json({ message: 'Producto eliminado exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
});


module.exports = router;