import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa estilos CSS si los tienes
import App from './App'; // Importa el componente principal de la aplicación

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renderiza la aplicación en el elemento con el ID 'root' en tu HTML
);
/* import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("/api/invoices").then((response) => {
      setInvoices(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Datos de factura</h1>
      <table>
        <thead>
          <tr>
            <th>Timbrado</th>
            <th>Número de factura</th>
            <th>Contado o crédito</th>
            <th>RUC</th>
            <th>Nombre y apellido</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.timbrado}</td>
              <td>{invoice.numero_de_factura}</td>
              <td>{invoice.contado_o_credito}</td>
              <td>{invoice.ruc}</td>
              <td>{invoice.nombre_y_apellido}</td>
              <td>{invoice.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;*/