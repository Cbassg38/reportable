import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FacturaList() {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/facturas');
        setFacturas(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Facturas</h2>
      <ul>
        {facturas.map((factura) => (
          <li key={factura._id}>
            Fecha: {factura.fecha}, Descripción: {factura.descripcion}, Monto: {factura.monto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacturaList;
