import React, { useState } from 'react';
import axios from 'axios';

function FacturaForm() {
  const [factura, setFactura] = useState({ fecha: '', descripcion: '', monto: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/facturas', factura);
      // Actualizar la lista de facturas después de guardar
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Cargar Nueva Factura</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario para la factura */}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default FacturaForm;
