const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
  fecha: Date,
  descripcion: String,
  monto: Number,
});

module.exports = mongoose.model('Factura', facturaSchema);
