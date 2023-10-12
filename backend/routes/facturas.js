const express = require('express');
const Factura = require('../models/factura');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.json(facturas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  // Ruta para crear una nueva factura
  // (Implementa las rutas para actualizar y eliminar facturas)
});

module.exports = router;
