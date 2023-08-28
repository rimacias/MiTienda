var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const clientes = await db.Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar clientes.' });
  }
});

module.exports = router;
