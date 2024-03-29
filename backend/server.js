const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;



const facturasRoutes = require('./routes/facturas');
app.use('/api/facturas', facturasRoutes);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

